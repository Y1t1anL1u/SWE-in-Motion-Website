(function () {
  const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/+esm';
  const GLTF_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js/+esm';
  const Q = Math.PI / 2;

  class Dice3D extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.addEventListener('pointerenter', () => (this.hover = true));
      this.addEventListener('pointerleave', () => (this.hover = false));
      this._start().catch((e) => console.error('dice-3d', e));
    }
    async _start() {
      const [THREE, { GLTFLoader }] = await Promise.all([import(THREE_URL), import(GLTF_URL)]);
      this.THREE = THREE;
      const w = this.clientWidth || 180, h = this.clientHeight || 200;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;';
      this.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(30, w / h, 0.1, 100);
      cam.position.set(0, 2.6, 4.8);
      cam.lookAt(0, 1.15, 0);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x7f8fb3, 1.2));
      const sun = new THREE.DirectionalLight(0xfff3d0, 2.4);
      sun.position.set(2, 4.5, 3);
      sun.castShadow = true;
      sun.shadow.mapSize.set(1024, 1024);
      sun.shadow.camera.left = sun.shadow.camera.bottom = -2;
      sun.shadow.camera.right = sun.shadow.camera.top = 2;
      scene.add(sun);
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 0.3 }));
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.add(ground);
      const pivot = new THREE.Group();
      scene.add(pivot);
      const gltf = await new GLTFLoader().loadAsync(this.getAttribute('src'));
      const obj = gltf.scene;
      obj.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      obj.scale.setScalar(1 / Math.max(size.x, size.y, size.z));
      box.setFromObject(obj);
      obj.position.sub(box.getCenter(new THREE.Vector3()));
      pivot.add(obj);
      Object.assign(this, { renderer, scene, cam, pivot, half: 0.5, hoverScale: 1, restQ: this._randomFace() });
      this._begin('land', 1300);
      const loop = (t) => { this._tick(t); renderer.render(scene, cam); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
      new ResizeObserver(() => {
        const w = this.clientWidth, h = this.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix();
      }).observe(this);
      this.dispatchEvent(new CustomEvent('ready'));
    }
    _randomFace() {
      const T = this.THREE, r = () => Q * Math.floor(Math.random() * 4);
      return new T.Quaternion().setFromEuler(new T.Euler(r(), r(), r()));
    }
    _begin(kind, dur) {
      const T = this.THREE;
      const axis = new T.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      return new Promise((resolve) => {
        this.anim = { kind, t0: performance.now(), dur, axis, theta: 3 * Math.PI + Math.random() * 3 * Math.PI, target: this._randomFace(), resolve };
      });
    }
    _height(kind, t) {
      if (kind === 'land') {
        if (t < 0.5) { const u = t / 0.5; return 1.5 * (1 - u * u); }
        if (t < 0.8) return 0.4 * Math.sin(Math.PI * (t - 0.5) / 0.3);
        return 0.12 * Math.sin(Math.PI * (t - 0.8) / 0.2);
      }
      if (t < 0.7) return 0.95 * Math.sin(Math.PI * t / 0.7);
      return 0.18 * Math.sin(Math.PI * (t - 0.7) / 0.3);
    }
    _tick(now) {
      if (!this.pivot) return;
      const T = this.THREE, a = this.anim;
      let y = this.half, q = this.restQ;
      if (a) {
        const t = Math.min(1, (now - a.t0) / a.dur);
        const e = 1 - Math.pow(1 - t, 3);
        q = a.target.clone().multiply(new T.Quaternion().setFromAxisAngle(a.axis, a.theta * (1 - e)));
        y = this.half + this._height(a.kind, t);
        if (t >= 1) { this.anim = null; this.restQ = a.target; a.resolve(); if (a.kind === 'roll') this.dispatchEvent(new CustomEvent('rolled')); }
      }
      this.pivot.quaternion.copy(q);
      this.pivot.position.y = y;
      this.hoverScale += ((this.hover && !a ? 1.08 : 1) - this.hoverScale) * 0.15;
      this.pivot.scale.setScalar(this.hoverScale);
    }
    roll() {
      if (!this.pivot) return Promise.resolve();
      if (this.anim) return new Promise((r) => { const prev = this.anim.resolve; this.anim.resolve = () => { prev(); r(); }; });
      return this._begin('roll', 1500);
    }
  }
  if (!customElements.get('dice-3d')) customElements.define('dice-3d', Dice3D);
})();
