export const resume = {
  breadcrumb: 'Home / Resume',
  pdf: { label: 'Download PDF', href: 'uploads/Yitian_Liu_Resume.pdf', filename: 'Yitian_Liu_Resume.pdf' },
  sections: [
    { title: 'Education', kind: 'entries', items: [
      { title: 'Georgia Institute of Technology', sub: 'M.S. in Computer Science', dates: '01/2025 – Present' },
      { title: 'Carnegie Mellon University', sub: 'M.S. in Information Systems', dates: '01/2021 – 12/2022' },
      { title: 'University of Colorado', sub: 'B.S. in Economics and Minor in Mathematics', dates: '09/2016 – 05/2020' },
    ]},
    { title: 'Experience', kind: 'entries', items: [
      { title: 'Research Assistant', sub: 'Georgia Institute of Technology', dates: '05/2026 – Present', bullets: [
        'Profiled PyTorch/GPU pipelines and wrote fused CUDA kernels for a Transformer-based vision-language-action (VLA) policy, cutting onboard inference latency 1.5× on edge hardware',
        'Built a real-time C++ safety layer on Linux bounding model actions by workspace and velocity limits, with shared-memory IPC and a deterministic fail-safe stop path',
        'Built a Python simulation harness to test fault cases like sensor dropout and stale messages, tracking success and safety-violation rates as weekly regression metrics',
      ]},
      { title: 'Software Engineer', sub: 'Pennsylvania Turnpike Commission', dates: '06/2023 – 12/2024', bullets: [
        'Engineered real-time C++/Linux roadside systems across 500+ highway miles, fusing heterogeneous sensor inputs and processing 500K+ daily transactions',
        'Built Python/SQL analysis and dashboards tracking failure and exception rates fleet-wide across 2M+ monthly transactions, isolating root causes behind 13% revenue leakage',
        'Designed an automated escalation path routing low-confidence perception outputs to human operator review queues via Azure Service Bus, improving approval rate by 12%',
        'Shipped an end-to-end license plate recognition pipeline on Linux edge nodes, with a Python/FastAPI service ingesting 67K+/day camera images in Dockerized microservices',
        'Profiled and optimized the DMV lookup pipeline from 400ms to ~50ms via Elasticsearch fuzzy matching and Redis caching, improving plate accuracy by 3%',
      ]},
      { title: 'Software Engineer Intern', sub: 'SAP', dates: '07/2020 – 12/2020', bullets: [
        'Expanded automated test coverage with JUnit and Mockito unit and integration suites, raising line coverage from 50% to 80% across 22 Onboarding components',
        'Validated migrated OData endpoints in Java against legacy API behavior, verifying response schema and data parity across job requisition flows before cutover',
      ]},
    ]},
    { title: 'Skills', kind: 'skills', items: [
      { label: 'Languages', value: 'Java, Python, Go, C++, JavaScript, TypeScript, HTML, CSS' },
      { label: 'Databases', value: 'PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Redis, Elasticsearch' },
      { label: 'Cloud & DevOps', value: 'Azure, AWS (ECS, RDS, S3), Docker, Kubernetes, Terraform' },
      { label: 'AI/ML', value: 'LLM API Integration, ML Infrastructure, Computer Vision, LangChain, MCP' },
    ]},
    { title: 'Open Source Contributions', kind: 'entries', items: [
      { title: '52°North', text: 'Contributed to open source geospatial software and spatial data infrastructure projects.', link: { label: 'View on GitHub', href: 'https://github.com/52north' } },
    ]},
  ],
};
