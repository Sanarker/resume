import { useState } from 'react';

const email = 'sanu2097@outlook.com';
const linkedinUrl = 'https://www.linkedin.com/in/sanarker/';

const skillsCategories = {
  "Languages": [
    "Java (primarily JDK 17)",
    "TypeScript",
    "JavaScript",
    "SQL"
  ],
  "Frontend": [
    "React 19",
    "Redux",
    "Context API",
    "MUI",
    "Material React Table v3",
    "Handsontable",
    "Vite"
  ],
  "Backend": [
    "Node.js",
    "Express",
    "Spring Boot",
    "REST",
    "Hibernate/JPA",
    "Prisma",
    "Swagger/OpenAPI",
    "Postman collections"
  ],
  "CloudData": [
    "Azure App Service",
    "Azure Functions",
    "Azure APIM",
    "Azure Blob Storage",
    "Azure SQL",
    "Application Insights",
    "Azure Monitor",
    "AWS EC2",
    "AWS ECS",
    "AWS Lambda",
    "AWS RDS",
    "AWS S3",
    "AWS SQS/SNS",
    "MySQL",
    "Redis"
  ],
  "DevOps": [
    "GitHub Actions",
    "Azure DevOps",
    "Docker",
    "Kubernetes deployments",
    "SonarQube",
    "Yarn",
    "Maven",
    "Prettier",
    "Husky"
  ],
  "Testing": [
    "Jest",
    "React Testing Library",
    "JUnit",
    "Playwright",
    "Postman",
    "JMeter",
    "Lighthouse",
    "Azure Load Testing"
  ],
  "Security": [
    "OAuth 2.0",
    "OIDC",
    "JWT",
    "MSAL",
    "Microsoft Entra ID",
    "SAML",
    "OneLogin",
    "Retries",
    "Idempotency",
    "Rate limiting",
    "Caching",
    "Resilience patterns"
  ]
};

const experiences = [
  {
    "period": "June 2025 - Present",
    "role": "Technical Architect / IT Analyst",
    "company": "Tata Consultancy Services (TCS)",
    "location": "Tokyo, Japan",
    "bullets": [
      "Lead two cargo/shipping delivery teams (9 direct reports) while remaining hands-on with API design, code review, story breakdown, estimation, release planning, mentoring and production support; work directly with client PO/PM, infrastructure/technical teams and business users.",
      "Joined a legacy ColdFusion/Java on-prem modernization midway and stabilized a severely troubled React/Node.js/SVF Java implementation on Azure by introducing code-review discipline, stronger testing, SonarQube quality gates, CI/CD, observability, release planning, clearer ownership and targeted architecture refactoring. Reduced defects from ~40+ per week to ~2-3, improved UI/API responsiveness and release success, and maintained zero production incidents to date after stabilization.",
      "Built a heavily customized Handsontable operational grid with inline editing, validation, dependent cells/tables, formulas, API-driven behavior, copy/paste and custom rendering; also implemented MSAL/Entra ID SSO, SVF-based PDF generation/download, and complex API aggregation/sorting across multiple upstream services.",
      "Owned greenfield engineering setup from September 2025, defining repository structure, frontend/backend architecture, coding standards, authentication, Azure setup, API contracts, testing strategy, CI/CD, release process, team workflow and estimation practices. Delivered on time with 0 UAT defects and 0 production defects, low rework and smooth rollout; received Best Project and Best Performer recognition.",
      "Implemented a high-density Material React Table v3 view supporting up to 1,000 rows and ~55 columns, standard/full-screen modes, column resizing, pagination and CSV export; improved frontend responsiveness using memoization, virtualization, lazy rendering and selective re-rendering.",
      "Led integration across ~35 APIs and enterprise cargo systems including NACCS (Japan Customs) and SIM Gate; the two applications support ~6,000 users with capacity up to ~10,000. Produced HLD/LLD, API specifications, architecture diagrams and release notes for delivery and support.",
      "Led 50+ releases and established automated quality controls using Prettier, Husky, build/type checks, Jest/RTL/JUnit, SonarQube and functional-test evidence in Jira; review and approve ~17 pull requests per week across both projects."
    ],
    "tech": [
      "React",
      "TypeScript",
      "Node.js",
      "Azure",
      "Handsontable",
      "Material React Table v3",
      "MSAL / Entra ID",
      "SVF Java"
    ]
  },
  {
    "period": "September 2022 - May 2025",
    "role": "Full Stack Lead",
    "company": "Tata Consultancy Services (TCS)",
    "location": "Tokyo, Japan",
    "bullets": [
      "Led hands-on delivery across airline e-commerce applications for LCC booking/post-booking, group booking and international corporate booking, growing from a 6-person module team to 8- and 10-person cross-functional teams (frontend/backend).",
      "Developed and reviewed Angular + Spring Boot/Java features spanning booking search, sorting/filtering, fare/calendar handling, payment-flow integration, post-booking upgrades and black-box logging; drove performance improvements in the international corporate booking application.",
      "Implemented OneLogin SSO using SAML, API Gateway integration and CI/CD for all three applications, including artifact cleanup; supported backend services on AWS ECS and JAR workloads on Red Hat/EC2, with releases coordinating 10+ APIs/services at a time.",
      "Owned story breakdown, estimation, task assignment, release coordination, mentoring and production support while contributing to design/architecture; previously supported after-hours/on-call incidents involving coordinated microservice, frontend/backend and third-party/AEM deployments."
    ],
    "tech": [
      "Angular",
      "Spring Boot",
      "Java",
      "OneLogin",
      "SAML",
      "AWS ECS",
      "Red Hat / EC2",
      "AEM"
    ]
  },
  {
    "period": "July 2019 - September 2022",
    "role": "Full Stack Engineer / Module Lead",
    "note": "Progressed from Graduate Trainee / Developer to module ownership",
    "company": "Tata Consultancy Services (TCS)",
    "location": "Chennai, India",
    "bullets": [
      "Built airline booking and post-booking modules using Angular and Spring Boot/Java, including round-trip, one-way and multi-city search flows, complex date-picker behavior and AEM-managed content integration.",
      "Implemented calendar and sorting APIs that coordinated upstream services and frontend components, plus travel-page, upgrade and fare-handling flows; used AWS-based logging and Redis caching for AEM content in backend APIs.",
      "Took ownership of small cross-functional modules from 2020 onward, combining hands-on full-stack development with coordination across frontend/backend work, production support and delivery."
    ],
    "tech": [
      "Angular",
      "Spring Boot",
      "Java",
      "AEM",
      "AWS",
      "Redis"
    ]
  }
];

const projects = [
  {
    "title": "Cargo Platform Modernization",
    "role": "Technical Architect / IT Analyst",
    "desc": "Stabilized an Azure-hosted React, Node.js and SVF Java modernization of legacy ColdFusion/Java systems. Introduced engineering quality gates, CI/CD and observability, reducing defects from ~40+ per week to ~2-3 and maintaining zero production incidents to date after stabilization. Delivered a customized Handsontable grid, enterprise SSO and PDF generation.",
    "tech": [
      "React",
      "Node.js",
      "Azure",
      "Handsontable",
      "MSAL / Entra ID",
      "SVF Java"
    ]
  },
  {
    "title": "Greenfield Cargo Platform",
    "role": "Technical Architect / IT Analyst",
    "desc": "Established engineering foundations from September 2025, covering application architecture, authentication, Azure infrastructure, API contracts, testing and release processes. Delivered on time with 0 UAT defects and 0 production defects, earning Best Project and Best Performer recognition. Implemented a Material React Table v3 view for up to 1,000 rows and ~55 columns.",
    "tech": [
      "React 19",
      "TypeScript",
      "Material React Table v3",
      "Node.js",
      "Azure",
      "GitHub Actions"
    ]
  }
];

const languages = [
  {
    "name": "English",
    "level": "Professional working proficiency"
  },
  {
    "name": "Japanese",
    "level": "Basic"
  }
];

const skillLabels = {
  "Languages": "Languages",
  "Frontend": "Frontend",
  "Backend": "Backend & APIs",
  "CloudData": "Cloud & Data",
  "DevOps": "DevOps & Quality",
  "Testing": "Testing & Performance",
  "Security": "Security & Design"
};

export default function Resume() {
  const [copyStatus, setCopyStatus] = useState('');
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Unable to copy the email address. Please use the email link or select the address above.');
    }
  };
  return (
    <main tabIndex={-1} id="main-content" className="resume-document">
      <header id="top" className="resume-header">
        <p className="eyebrow">Tokyo, Japan · Professional Profile</p>
        <h1>Sanarker S</h1>
        <p className="resume-role">Senior Software Engineer <span aria-hidden="true">/</span> Technical Architect</p>
        <p className="resume-intro">Enterprise web platforms, cloud-native delivery, and technical leadership across cargo, shipping, and airline e-commerce.</p>
        <ul className="contact-details" aria-label="Contact details">
          <li><a href={'mailto:' + email}>{email}</a></li>
          <li><a href="tel:+818040980886">(080) 4098-0886</a></li>
          <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn Profile<span className="print-link">: linkedin.com/in/sanarker</span></a></li>
        </ul>
        <p className="work-authorization">Japan work authorization: Engineer status valid through October 2028. Open to relocation within Japan.</p>
        <div className="resume-actions no-print">
          <button className="action-primary" onClick={() => window.print()}>Print / Save Resume</button>
          <a className="action-secondary" href={'mailto:' + email}>Contact by Email</a>
        </div>
      </header>
      <section id="about" className="resume-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional Summary</h2>
        <p>Senior Software Engineer and Technical Architect with 7+ years of experience delivering enterprise web platforms across cargo/shipping and airline e-commerce domains in Japan and India. Hands-on with React, TypeScript/JavaScript, Node.js/Express, Java/Spring Boot, Azure/AWS, API design and cloud-native delivery.</p>
        <p>Currently leads two teams (9 direct reports across engineering and QA) while continuing to implement complex frontend, integration, authentication and document-generation stories. Experienced in stabilizing troubled programs, establishing greenfield engineering foundations, and leading client-facing technical discussions in English.</p>
      </section>
      <section id="experience" className="resume-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional Experience</h2>
        {experiences.map(exp => (
          <article className="experience-entry" key={exp.period}>
            <div className="entry-heading">
              <div><h3>{exp.role}</h3><p className="organization">{exp.company} <span>&middot; {exp.location}</span></p></div>
              <p className="entry-date">{exp.period}</p>
            </div>
            {'note' in exp && <p className="career-progression">{exp.note}</p>}
            <ul className="achievement-list">{exp.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            <p className="technology-line"><strong>Technologies:</strong> {exp.tech.join(', ')}</p>
          </article>
        ))}
      </section>
      <section id="projects" className="resume-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected Projects</h2>
        {projects.map(project => (
          <article className="project-entry" key={project.title}>
            <h3>{project.title}</h3><p className="project-role">{project.role}</p>
            <p>{project.desc}</p>
            <p className="technology-line"><strong>Technologies:</strong> {project.tech.join(', ')}</p>
          </article>
        ))}
      </section>
      <section id="skills" className="resume-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical Expertise</h2>
        <dl className="skills-list">{(Object.keys(skillsCategories) as (keyof typeof skillsCategories)[]).map(category => (
          <div key={category}><dt>{skillLabels[category]}</dt><dd>{skillsCategories[category].join(' \u00b7 ')}</dd></div>
        ))}</dl>
      </section>
      <section id="recognition" className="resume-section" aria-labelledby="recognition-heading">
        <h2 id="recognition-heading">Recognition</h2>
        <p>Best Project (client and TCS), Best Performer, Ownership, Mentor, Delivery, and multiple On-the-Spot / Special Initiative awards.</p>
      </section>
      <section id="education" className="resume-section education-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education & Languages</h2>
        <div className="education-grid">
          <div><h3>B.E./B.Tech - Computer Science and Engineering</h3>
            <p className="organization">SRM Institute of Science and Technology, India</p>
            <p>Graduated 2019</p>
          </div>
          <div><h3>Languages</h3><ul className="language-list">{languages.map(language => <li key={language.name}><strong>{language.name}</strong> · {language.level}</li>)}</ul></div>
        </div>
      </section>
      <section id="contact" className="resume-section contact-section no-print" aria-labelledby="contact-heading">
        <div><h2 id="contact-heading">Contact</h2><p>Based in Tokyo, Japan. Open to relocation within Japan.</p><a href={'mailto:' + email}>{email}</a></div>
        <div><button className="action-secondary" onClick={copyEmail}>Copy Email Address</button><p className="copy-status" role="status">{copyStatus}</p></div>
      </section>
      <footer className="resume-footer no-print">Sanarker S · Senior Software Engineer & Technical Architect · Tokyo, Japan</footer>
    </main>
  );
}
