export const siteConfig = {
  brand: 'Yitian',
  home: 'Home.dc.html',
  nav: [
    { label: 'About', href: 'Home.dc.html' },
    { label: 'Projects', href: 'Projects.dc.html', active: true },
    { label: 'Resume', href: 'Resume.dc.html' },
    { label: 'Advisor', href: 'Advisor.dc.html' },
  ],
  back: { label: 'Back to all projects', href: 'Projects.dc.html' },
};

const img = (src, alt, caption, pos = 'center') => ({ type: 'img', src, alt, caption, pos });
const p = (text) => ({ type: 'p', text });
const h3 = (text) => ({ type: 'h3', text });

export const projects = {
  transportation: {
    category: 'Projects / Transportation',
    title: 'Pittsburgh Moves Forward',
    summary: '',
    hero: { src: 'uploads/project-transportation.png', alt: 'Pixel illustration of Pittsburgh bridges and traffic', pos: 'center' },
    actions: [],
    // Sub-project list: title + GitHub link + one paragraph. Fill in `github` later.
    subprojects: [
      { tags: ['Data infrastructure', 'Autonomous driving'], title: 'Autonomous Vehicle Data Engine', github: 'https://github.com/AlexxxLiu/AV-Data-Engine',
        text: 'A data engine for autonomous driving logs: ingests raw sensor recordings, indexes scenes, and surfaces the rare cases worth labeling and training on.' },
      { tags: ['Visualization', 'Urban data'], title: 'Atlas City Map Visualizer', github: 'https://github.com/AlexxxLiu/Atlas-map-visualizer',
        text: 'An interactive city map that layers traffic, transit, and land-use data so patterns across a whole city can be read at a glance.' },
      { tags: ['Benchmark', 'Conformal alerts'], title: 'LLM Traffic Management Research', github: '', demo: 'ResearchDemo.dc.html',
        text: 'WZDx Slip Bench: a label-validated benchmark for work-zone end-date slip built from 6.74M North Carolina feed entities, testing whether LLMs beat a nearest-neighbor baseline and shipping a conformal alert gate with a guaranteed false-alarm rate.' },
    ],
    sections: [],
    links: [],
  },
  robotics: {
    category: 'Projects / Robotics',
    title: 'Sense, Plan, Move',
    summary: '',
    hero: { src: 'uploads/project-robotics.png', alt: 'Sense, Plan, Move', pos: 'center' },
    actions: [],
    subprojects: [
      { tags: ['GPU kernels', 'Inference optimization'], title: 'Fused CUDA Kernel Benchmark', github: 'https://github.com/AlexxxLiu/fused-layernorm-gelu',
        text: 'A hand-written fused LayerNorm+GELU CUDA kernel benchmarked against PyTorch eager and torch.compile: halves HBM traffic on bandwidth-bound transformer shapes and reports achieved bandwidth against the memory roofline.' },
      { tags: ['Real-time systems', 'Linux'], title: 'Real-Time Loop Jitter Profiler', github: 'https://github.com/AlexxxLiu/rt-loop-jitter',
        text: 'A Linux tool measuring wake-up jitter and deadline misses in periodic control loops, isolating what SCHED_FIFO, core affinity, and page locking each buy at the tail rather than the median.' },
      { tags: ['Real-time systems', 'IPC'], title: 'IPC Latency Benchmark', github: 'https://github.com/AlexxxLiu/ipc-latency',
        text: 'A round-trip latency comparison of shared memory, Unix sockets, and pipes for cross-process robot control paths — including why busy-spin shared memory collapses to millisecond latency when participants don\'t each own a core.' },
    ],
    sections: [],
    links: [],
  },
  'ai-agents': {
    category: 'Projects / AI & Agents',
    title: 'Agents in Real Workflows',
    summary: '',
    hero: { src: 'uploads/project-ai-agents.png', alt: 'Agents in Real Workflows', pos: 'center' },
    actions: [],
    subprojects: [
      { tags: ['Agent', 'Maps'], title: 'Better-Map-Agent', github: 'https://github.com/AlexxxLiu/Better-Map-Agent',
        text: 'An agent that answers map questions in plain language, planning routes and pulling in live conditions instead of returning a static list of results.' },
      { tags: ['Agent', 'Traffic operations'], title: 'Traffic-Ops-Copilot', github: 'https://github.com/AlexxxLiu/Traffic-Ops-Copilot',
        text: 'A copilot for traffic operations teams that watches incident and signal feeds, drafts responses, and keeps a readable log of every action taken.' },
      { tags: ['Agent', 'Incident triage'], title: 'Auto-Triage-Agent', github: 'https://github.com/AlexxxLiu/Auto-Triage-Agent',
        text: 'An agent that triages incoming traffic incidents and reports, classifies them by severity, and routes each one to the right team automatically.' },
    ],
    sections: [],
    links: [],
  },
  'small-experiments': {
    category: 'Projects / Small Experiments',
    title: 'Small Experiments',
    summary: '',
    hero: { src: 'uploads/project-under-construction.png', alt: 'Small Experiments', pos: 'center 60%' },
    actions: [],
    subprojects: [
      { title: 'Project 1', github: '#', text: 'Short description of Project 1. Replace this with what it does and why it matters.' },
      { title: 'Project 2', github: '#', text: 'Short description of Project 2. Replace this with what it does and why it matters.' },
      { title: 'Project 3', github: '#', text: 'Short description of Project 3. Replace this with what it does and why it matters.' },
    ],
    sections: [],
    links: [],
  },
};
