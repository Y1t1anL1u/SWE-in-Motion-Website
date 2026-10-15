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
      { title: 'Software Engineer II', sub: 'Pennsylvania Department of Transportation (Turnpike)', dates: '01/2025 – Present', bullets: [
        'Traffic Operations Copilot — Built an LLM agent using tool calling on real-time traffic and weather APIs and RAG on historical work orders via pgvector to forecast incident risk and autonomously draft dispatch recommendations',
        'Transaction Auditing & Reconciliation Platform — Engineered Pennsylvania Turnpike\'s core billing infrastructure in Java/Spring Boot across 560+ highway miles, automating vehicle verification, transaction generation, and payment processing',
        'Optimized DMV lookup with Elasticsearch fuzzy matching and Redis caching, reducing latency from 400ms to 50ms and improving plate match accuracy by 3%',
        'Designed a distributed stream processing pipeline with Kafka and Flink, detecting payment mismatches via interval-join for automated financial auditing across $18M+/month in revenue',
      ]},
      { title: 'Software Engineer I', sub: 'Pennsylvania Department of Transportation (Turnpike)', dates: '06/2023 – 12/2024', bullets: [
        'Implemented an end-to-end ML infrastructure pipeline for license plate recognition using computer vision algorithms on Linux, addressing a 13% unpaid toll rate across 2M+/month transactions',
        'Built a Python/FastAPI data pipeline processing 67k+/day camera images, routing below-threshold results via Azure Service Bus to reviewer queues based on experience level',
        'Built a full-stack human-in-the-loop annotation platform in React/TypeScript, dockerized and deployed to Azure via DevOps CI/CD, enabling 25k+ image labels per day',
      ]},
      { title: 'Software Engineer (Intern to Full-time)', sub: 'SAP', dates: '07/2019 – 12/2020', bullets: [
        'Expanded automated test coverage with JUnit and Mockito unit and integration suites, raising line coverage from 50% to 80% across 22 Onboarding components',
        'Refactored state management of SuccessFactors Onboarding module using React and JavaScript with form pre-population and field mapping, eliminating manual data re-entry',
      ]},
    ]},
    { title: 'Skills', kind: 'skills', items: [
      { label: 'Languages', value: 'Java, Python, Go, C++, JavaScript, TypeScript, HTML, CSS' },
      { label: 'Backend', value: 'Spring Boot, Django REST Framework, Node.js, Kafka, Flink, Azure Service Bus, Celery, gRPC' },
      { label: 'Frontend', value: 'Angular, React, Vue, Next.js, Tailwind CSS' },
      { label: 'Databases', value: 'PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Redis, Elasticsearch' },
      { label: 'Cloud & DevOps', value: 'Azure, AWS (ECS, RDS, S3), Docker, Kubernetes, Terraform' },
      { label: 'AI/ML', value: 'LLM API Integration, ML Infrastructure, Computer Vision, LangChain, Prompt Engineering, MCP' },
    ]},
    { title: 'Open Source Contributions', kind: 'entries', items: [
      { title: '52°North', text: 'Contributed to open source geospatial software and spatial data infrastructure projects.', link: { label: 'View on GitHub', href: 'https://github.com/52north' } },
    ]},
  ],
};
