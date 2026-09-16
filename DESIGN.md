# Yitian Portfolio — Design & Structure Notes

## Pages
| File | Route / purpose | Data source |
|---|---|---|
| Home.dc.html | Landing. Season/night background (auto by local time, manual toggle top-right), dice → random "moment" card, social icons (LinkedIn, GitHub, Email). | momentsData.js, dice3d.js |
| Projects.dc.html | 4 project category cards (Transportation, Robotics, AI Agent, Coming soon). | inline list in the file |
| ProjectDetail.dc.html?project=KEY | Category page: banner + stacked sub-project cards (number, title, GitHub, optional Demo, text, tags). KEY = transportation \| robotics \| ai-agents \| small-experiments | projectData.js |
| ResearchDemo.dc.html | Long-form write-up for the WZDx Slip Bench research (5 figures, Reproduce block). | inline content |
| Resume.dc.html | Left title column / right content; Download PDF button. | resumeData.js, uploads/Yitian_Liu_Resume.pdf |
| Advisor.dc.html | Photo gallery with year filter, like hearts, Load more. | advisorData.js |

Shared: SiteHeader.dc.html (logo + About/Projects/Resume/Advisor + season button), ProjectCard.dc.html (Projects page cards).

## Page skeleton (all inner pages)
1. SiteHeader (2px navy bottom rule)
2. Banner: breadcrumb (clickable ancestors) → Pixelify H1 → optional right-side pixel image with left fade
3. Main content
4. Footer back-link

Horizontal padding everywhere: `clamp(24px, 4vw, 64px)`.

## Type
- Display / page H1 only: **Pixelify Sans 700**, `clamp(34px,3.6vw,60px)`
- Everything else: **Inter** — nav/labels/buttons 700, section & card titles 700 (19–24px), body 400 (16–17px, line-height 1.6–1.7)
- Breadcrumb: Inter 700, 10–13px, uppercase, letter-spacing 0.08em

## Color
- Ink / borders: `#061541`
- Body text: `#34466E`; muted captions: `#6B7A9C`; hairline / disabled: `#A8B3CB`
- Page background: `#FAF8F0`; card surface: `#FFFFFF`
- Link blue: `#004CE5`
- Accent yellow (buttons, active nav underline): `#FFDC45` (bevel: `#FFF0A3` / `#E0B81F`)
- Tag chip: bg `#EEF2FA`, text `#3B63B3`
- Night scene: text inverts to white (Home only)

## Components
- Pixel-corner card: navy wrapper `padding:2px` + white inner, both with the 8px/4px stair `clip-path`
- Yellow button: `#FFDC45`, Inter 700 13px, 4px/2px stair clip-path, inset bevel shadow
- Links: underline 1px, offset 4px; disabled = `#A8B3CB` + `pointer-events:none`
- Rules: 2px `#061541` for major section dividers; 1px `#A8B3CB` for banner/footer hairlines

## How to add content (no template edits needed)
- New sub-project → push into `projects.KEY.subprojects` in projectData.js: `{ title, github, demo?, text, tags: [] }`. Empty `github: ''` renders grey/disabled.
- New project category → add a key to `projects` in projectData.js and a card entry in Projects.dc.html.
- Resume → edit `sections` in resumeData.js (`kind: 'entries' | 'skills'`).
- Dice moments → momentsData.js. Advisor photos → advisorData.js.
- Replace the PDF at uploads/Yitian_Liu_Resume.pdf.
