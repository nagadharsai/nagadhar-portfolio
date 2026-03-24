export default function Home() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const experience = [
    {
      role: "Information Technology Specialist 2 (Programming)",
      company: "Office of the NYS Comptroller",
      period: "Apr 2025 – Present",
      points: [
        "Develop and support secure, high-performance applications for New York State agencies in a highly regulated enterprise environment.",
        "Build and modernize business modules using Java, PL/SQL, .NET, REST, and SOAP integrations to improve mission-critical government workflows.",
        "Lead production issue analysis, code reviews, release coordination, technical documentation, and SDLC execution with emphasis on reliability and secure delivery.",
      ],
    },
    {
      role: "Java Software Engineer",
      company: "ShopRunner",
      period: "Jul 2022 – Apr 2025",
      points: [
        "Built full-stack features for the One Click Checkout platform in a microservices ecosystem supporting high-traffic commerce flows.",
        "Developed Java backend services, React and JavaScript frontend components, and PostgreSQL queries optimized for real-time transactional use cases.",
        "Contributed to Agile product delivery, Kafka-based asynchronous workflows, and CI/CD automation for scalable engineering execution.",
      ],
    },
    {
      role: "Java Developer",
      company: "Mercedes-Benz USA",
      period: "Jan 2022 – Jul 2022",
      points: [
        "Designed and deployed Spring Boot microservices for vehicle service platforms with modern API-first architecture.",
        "Worked across AWS and Azure deployments while modernizing legacy backend modules into secure RESTful service layers.",
        "Implemented Spring Security, JWT/RBAC patterns, and test coverage using JUnit and Mockito for enterprise-grade quality.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Sonata",
      period: "Jan 2019 – Dec 2020",
      points: [
        "Developed and maintained enterprise application features using Java and J2EE in collaborative Agile environments.",
        "Participated in client demos, sprint workflows, and delivery cycles that built a strong foundation in full stack engineering and software quality.",
      ],
    },
  ];

  const projects = [
    {
      title: "Government Application Modernization",
      stack: "Java • PL/SQL • Oracle • REST/SOAP • .NET",
      text: "Modernizing mission-critical public sector systems by redesigning business workflows, integrating enterprise services, and improving maintainability, reliability, and audit readiness.",
    },
    {
      title: "One Click Checkout Platform",
      stack: "Java • React • PostgreSQL • Microservices • Kafka",
      text: "Delivered full-stack enhancements for a high-traffic checkout platform, improving transaction flow, engineering efficiency, and overall customer-facing reliability in eCommerce.",
    },
    {
      title: "Cloud-Native Service Engineering",
      stack: "Spring Boot • AWS • Azure • Security • CI/CD",
      text: "Built API-driven services and secure deployment patterns for cloud-aligned systems, with emphasis on scalable backend design and production-ready engineering practices.",
    },
  ];

  const skillGroups = [
    {
      title: "Backend Engineering",
      items: ["Java", "Spring Boot", "Microservices", "REST APIs", "SOAP Web Services", "System Design"],
    },
    {
      title: "Frontend Development",
      items: ["React", "Angular", "JavaScript", "Responsive UI"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Azure", "CI/CD", "Jenkins", "GitOps"],
    },
    {
      title: "Data & Enterprise",
      items: ["Oracle", "PL/SQL", "PostgreSQL", ".NET", "SDLC", "Production Support"],
    },
  ];

  return (
    <>
      <div className="page-shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-dot" />
            <span>Nagadhar Sai Kanderi</span>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="mailto:nagadharsai@gmail.com" className="topbar-btn">
            Let&apos;s Talk
          </a>
        </header>

        <main>
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">SOFTWARE ENGINEER • FULL STACK JAVA DEVELOPER • GOVTECH & ENTERPRISE SYSTEMS</div>
              <h1>
                I build secure, scalable software that modernizes enterprise and government platforms.
              </h1>
              <p className="hero-text">
                I’m Nagadhar Sai Kanderi — a full stack software engineer with strong experience across
                Java, Spring Boot, React, PL/SQL, cloud-aligned systems, and enterprise integrations.
                My work sits where performance, maintainability, security, and long-term delivery matter most.
              </p>

              <div className="hero-actions">
                <a href="mailto:nagadharsai@gmail.com" className="btn btn-primary">
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-kanderi-6588b72a0"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nagadharsai"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
                <a href="#" className="btn btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <span className="panel-label">Current Focus</span>
                <h3>Enterprise modernization, API-driven systems, and full stack engineering.</h3>
                <p>
                  Building dependable software across public sector and commerce environments with
                  a practical, production-first engineering mindset.
                </p>
              </div>
            </div>
          </section>

          <section className="stats">
            <div className="stat-card">
              <h3>6+</h3>
              <p>Years of Engineering Experience</p>
            </div>
            <div className="stat-card">
              <h3>3</h3>
              <p>Core Industry Domains</p>
            </div>
            <div className="stat-card">
              <h3>12+</h3>
              <p>Core Technologies & Platforms</p>
            </div>
          </section>

          <section id="about" className="section">
            <div className="section-title">
              <span>ABOUT</span>
              <h2>Engineering with clarity, ownership, and long-term thinking</h2>
            </div>

            <div className="card about-card">
              <p>
                My background spans government, eCommerce, and enterprise application delivery,
                where secure systems, clean architecture, and dependable execution are non-negotiable.
              </p>
              <p>
                I work across backend engineering and modern frontend delivery, combining strong Java
                foundations with practical business problem solving. Whether the challenge is legacy
                modernization, API integration, production troubleshooting, or cloud-aligned deployment,
                I focus on building systems that hold up under real-world pressure.
              </p>
              <p>
                I care about thoughtful engineering — not just writing code, but designing systems that
                scale, stay maintainable, and create measurable value over time.
              </p>
            </div>
          </section>

          <section id="experience" className="section">
            <div className="section-title">
              <span>EXPERIENCE</span>
              <h2>Professional journey</h2>
            </div>

            <div className="experience-list">
              {experience.map((job, index) => (
                <div className="card experience-card" key={index}>
                  <div className="experience-top">
                    <div>
                      <h3>{job.role}</h3>
                      <h4>{job.company}</h4>
                    </div>
                    <span>{job.period}</span>
                  </div>

                  <ul className="impact-list">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-title">
              <span>SELECTED WORK</span>
              <h2>What I build</h2>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <div className="card project-card" key={index}>
                  <h3>{project.title}</h3>
                  <p className="project-stack">{project.stack}</p>
                  <p>{project.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-title">
              <span>TECH STACK</span>
              <h2>Core capabilities</h2>
            </div>

            <div className="skills-layout">
              {skillGroups.map((group, index) => (
                <div className="card skill-group" key={index}>
                  <h3>{group.title}</h3>
                  <div className="pill-wrap">
                    {group.items.map((item, i) => (
                      <span className="pill" key={i}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-title">
              <span>CONTACT</span>
              <h2>Let’s build something meaningful</h2>
            </div>

            <div className="card contact-card">
              <p>
                I’m open to conversations around full stack engineering, backend systems, enterprise
                modernization, cloud-ready architectures, and high-impact software opportunities.
              </p>

              <div className="contact-actions">
                <a href="mailto:nagadharsai@gmail.com">nagadharsai@gmail.com</a>
                <a
                  href="https://www.linkedin.com/in/sai-kanderi-6588b72a0"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com/nagadharsai" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div>
            <strong>Nagadhar Sai Kanderi</strong>
            <p>Software Engineer • Full Stack Java Developer • Enterprise Systems</p>
          </div>
          <div className="footer-links">
            <a href="mailto:nagadharsai@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/sai-kanderi-6588b72a0" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/nagadharsai" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: #eef2ff;
          font-family: Inter, Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 28%),
            radial-gradient(circle at top right, rgba(139, 92, 246, 0.12), transparent 24%),
            linear-gradient(180deg, #050b16 0%, #0a1220 46%, #0c1422 100%);
        }

        a {
          text-decoration: none;
        }

        .page-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 20px 80px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 18px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          background: rgba(10, 18, 32, 0.72);
          backdrop-filter: blur(14px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: #f8fafc;
          white-space: nowrap;
        }

        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.45);
        }

        .nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav a {
          color: #cbd5e1;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .nav a:hover {
          color: #ffffff;
        }

        .topbar-btn {
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 24px;
          align-items: stretch;
          padding: 40px 0 18px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.16em;
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.02;
          letter-spacing: -0.04em;
          max-width: 900px;
        }

        .hero-text {
          margin: 20px 0 0;
          max-width: 780px;
          color: #cbd5e1;
          line-height: 1.9;
          font-size: 18px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .btn {
          display: inline-block;
          padding: 14px 20px;
          border-radius: 14px;
          font-weight: 600;
          transition: 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          color: #fff;
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          box-shadow: 0 10px 28px rgba(56, 189, 248, 0.2);
        }

        .btn-secondary {
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-panel {
          display: flex;
          align-items: stretch;
        }

        .panel-card {
          width: 100%;
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(14px);
        }

        .panel-label {
          display: inline-block;
          margin-bottom: 14px;
          font-size: 12px;
          letter-spacing: 0.18em;
          color: #7dd3fc;
          font-weight: 700;
        }

        .panel-card h3 {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 1.2;
        }

        .panel-card p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.8;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 18px;
        }

        .stat-card,
        .card {
          padding: 28px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(14px);
        }

        .stat-card h3 {
          margin: 0 0 8px;
          font-size: 34px;
        }

        .stat-card p {
          margin: 0;
          color: #cbd5e1;
        }

        .section {
          margin-top: 38px;
        }

        .section-title {
          margin-bottom: 18px;
        }

        .section-title span {
          display: inline-block;
          margin-bottom: 10px;
          font-size: 12px;
          letter-spacing: 0.2em;
          color: #7dd3fc;
          font-weight: 700;
        }

        .section-title h2 {
          margin: 0;
          font-size: 34px;
          line-height: 1.15;
        }

        .about-card p,
        .contact-card p,
        .project-card p {
          margin: 0 0 14px;
          color: #cbd5e1;
          line-height: 1.9;
        }

        .about-card p:last-child,
        .contact-card p:last-child,
        .project-card p:last-child {
          margin-bottom: 0;
        }

        .experience-list {
          display: grid;
          gap: 18px;
        }

        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 14px;
        }

        .experience-top h3 {
          margin: 0;
          font-size: 22px;
        }

        .experience-top h4 {
          margin: 6px 0 0;
          font-size: 16px;
          color: #7dd3fc;
          font-weight: 600;
        }

        .experience-top span {
          white-space: nowrap;
          color: #cbd5e1;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .impact-list {
          margin: 0;
          padding-left: 18px;
          color: #cbd5e1;
          line-height: 1.8;
        }

        .impact-list li {
          margin-bottom: 10px;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .project-card h3 {
          margin: 0 0 8px;
          font-size: 21px;
        }

        .project-stack {
          margin: 0 0 14px;
          color: #7dd3fc !important;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.02em;
        }

        .skills-layout {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .skill-group h3 {
          margin: 0 0 16px;
          font-size: 20px;
        }

        .pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 500;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
        }

        .contact-actions a,
        .footer-links a {
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-actions a:hover,
        .footer-links a:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 46px;
          padding: 24px 4px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer p {
          margin: 6px 0 0;
          color: #94a3b8;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .hero,
          .skills-layout,
          .project-grid,
          .stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .topbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav {
            justify-content: flex-start;
          }

          .experience-top,
          .footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .section-title h2 {
            font-size: 28px;
          }

          .hero-text {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  );
}
