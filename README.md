# Yitian Portfolio — deployable build

Static site. No build step. Upload this folder as-is to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3).

## Run locally
Pages load data files via `import()`, so open them over HTTP, not `file://`:

```
cd dist
python -m http.server 8080
# open http://localhost:8080/
```

## Files
- `index.html` — redirects to `Home.dc.html`
- `*.dc.html` — one file per page (markup + page logic). `SiteHeader.dc.html` and `ProjectCard.dc.html` are shared components imported by the pages.
- `support.js` — page runtime (templating, component mounting, hover styles). Loads React 18 from unpkg at runtime; keep internet access or self-host those two scripts and change the URLs in `support.js` (search `REACT_URL`).
- `projectData.js`, `resumeData.js`, `momentsData.js`, `advisorData.js` — all site content. Edit these to add or change content; no template edits needed.
- `dice3d.js` — Three.js dice on the home page (loads Three.js from CDN).
- `uploads/` — images, dice model, resume PDF.
- `DESIGN.md` — design tokens, page structure, and content-editing guide.

## Routes
| URL | Page |
|---|---|
| `Home.dc.html` | Home |
| `Projects.dc.html` | Project categories |
| `ProjectDetail.dc.html?project=transportation` | Transportation |
| `ProjectDetail.dc.html?project=robotics` | Robotics |
| `ProjectDetail.dc.html?project=ai-agents` | AI Agent |
| `ProjectDetail.dc.html?project=small-experiments` | Coming soon |
| `ResearchDemo.dc.html` | WZDx Slip Bench research |
| `Resume.dc.html` | Resume |
| `Advisor.dc.html` | Advisor gallery |

## Common edits
- Add a sub-project: push into `projects.<key>.subprojects` in `projectData.js` — `{ title, github, demo?, text, tags: [] }`. `github: ''` renders grey/disabled.
- Fill the research GitHub link: set `github` on the "LLM Traffic Management Research" entry, and replace the grey `GitHub ↗ (coming soon)` span in `ResearchDemo.dc.html` with an `<a>`.
- Update resume: edit `resumeData.js`; replace `uploads/Yitian_Liu_Resume.pdf`.
- Season/night schedule: `scene()` in `Home.dc.html` (night 18:00–06:00; months 3–5 spring, 6–8 summer, 9–11 autumn, 12–2 winter).
