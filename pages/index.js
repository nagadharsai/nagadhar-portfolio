export default function Home() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "Microservices",
    "REST APIs",
    "PostgreSQL",
    "Oracle",
    "AWS",
    "Azure",
    "CI/CD",
    "JUnit",
    "System Design",
  ];

  const experience = [
    {
      role: "Information Technology Specialist 2 (Programming)",
      company: "Office of the NYS Comptroller",
      period: "Apr 2025 – Present",
      desc: "Building and supporting secure, high-performance applications for government systems with Java, PL/SQL, .NET, REST/SOAP integrations, troubleshooting, release coordination, and technical documentation.",
    },
    {
      role: "Java Software Engineer",
      company: "ShopRunner",
      period: "Jul 2022 – Apr 2025",
      desc: "Developed full-stack features for One Click Checkout using Java, React, JavaScript, PostgreSQL, microservices, and CI/CD practices in a fast-paced product environment.",
    },
    {
      role: "Java Developer",
      company: "Mercedes-Benz USA",
      period: "Jan 2022 – Jul 2022",
      desc: "Built and deployed Spring Boot microservices, modernized backend services, supported AWS and Azure deployments, and implemented secure APIs with test coverage.",
    },
    {
      role: "Associate Software Engineer",
      company: "Sonata",
      period: "Jan 2019 – Dec 2020",
      desc: "Contributed to enterprise software delivery using Java and J2EE, collaborating across teams in Agile environments and building a strong engineering foundation.",
    },
  ];

  const projects = [
    {
      title: "Government Application Modernization",
      text: "Modernizing mission-critical state systems through scalable service integration, secure coding, and performance-focused engineering.",
    },
    {
      title: "One Click Checkout Platform",
      text: "Delivered full-stack enhancements to a high-traffic checkout ecosystem with strong focus on reliability and user experience.",
    },
    {
      title: "Cloud-Native Service Engineering",
      text: "Developed API-driven backend services with modern cloud deployment exposure across AWS and Azure.",
    },
  ];

  return (
    <>
      <div className="page">
        <section className="hero">
          <div className="hero-badge">Software Engineer • Full Stack Developer • Cloud-Focused Builder</div>
          <h1>Nagadhar Sai Kanderi</h1>
          <p className="hero-subtitle">
            Full Stack Java Developer specializing in scalable enterprise applications,
            cloud-ready systems, and modern digital experiences.
          </p>

          <div className="hero-actions">
            <a href="mailto:nagadharsai@gmail.com" className="btn btn-primary">Contact Me</a>
            <a href="https://www.linkedin.com/in/sai-kanderi-6588b72a0" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
            <a href="https://github.com/nagadharsai" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>6+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>3</h3>
              <p>Major Industry Domains</p>
            </div>
            <div className="stat-card">
              <h3>12+</h3>
              <p>Core Technologies</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span>ABOUT</span>
            <h2>Engineering with depth, clarity, and long-term thinking</h2>
          </div>
          <div className="about-card">
            <p>
              I’m Nagadhar Sai Kanderi — a software engineer focused on building systems that are
              not just functional, but scalable, reliable, and meaningful.
            </p>
            <p>
              My background spans government, eCommerce, and enterprise platforms, where
              performance, maintainability, and security are non-negotiable. I work across backend
              engineering and modern frontend delivery, combining strong Java foundations with
              practical product execution.
            </p>
            <p>
              I specialize in Java, Spring Boot, React, APIs, microservices, and cloud-aligned
              architecture. My approach is grounded in clean design, dependable systems, and
              technology that creates measurable business value.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span>EXPERIENCE</span>
            <h2>Professional journey</h2>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-card" key={index}>
                <div className="timeline-top">
                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span>SKILLS</span>
            <h2>Core technology stack</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-pill" key={index}>{skill}</div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span>FOCUS AREAS</span>
            <h2>What I build</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section">
          <div className="section-header">
            <span>CONNECT</span>
            <h2>Let’s build something meaningful</h2>
          </div>
          <div className="contact-card">
            <p>
              I’m open to conversations around full stack engineering, backend development,
              enterprise modernization, and high-impact software opportunities.
            </p>

            <div className="contact-links">
              <a href="mailto:nagadharsai@gmail.com">nagadharsai@gmail.com</a>
              <a href="https://www.linkedin.com/in/sai-kanderi-6588b72a0" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/nagadharsai" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
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
          font-family: Inter, Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(66, 153, 225, 0.16), transparent 30%),
            radial-gradient(circle at top right, rgba(128, 90, 213, 0.16), transparent 25%),
            linear-gradient(180deg, #07111f 0%, #0b1220 45%, #0d1422 100%);
          color: #f8fafc;
        }

        a {
          text-decoration: none;
        }

        .page {
          max-width: 1150px;
          margin: 0 auto;
          padding: 36px 20px 80px;
        }

        .hero {
          padding: 42px 0 24px;
        }

        .hero-badge {
          display: inline-block;
          padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          color: #cbd5e1;
          font-size: 14px;
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          font-size: clamp(42px, 7vw, 74px);
          line-height: 1.02;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 20px;
          line-height: 1.8;
          color: #cbd5e1;
          max-width: 800px;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .btn {
          padding: 14px 22px;
          border-radius: 14px;
          font-weight: 600;
          transition: 0.25s ease;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #38bdf8, #8b5cf6);
          color: white;
          box-shadow: 0 10px 30px rgba(56, 189, 248, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: #e2e8f0;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.08);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 42px;
        }

        .stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
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
          margin-top: 34px;
        }

        .section-header {
          margin-bottom: 20px;
        }

        .section-header span {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.22em;
          color: #7dd3fc;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .section-header h2 {
          font-size: 34px;
          margin: 0;
          line-height: 1.15;
        }

        .about-card,
        .timeline-card,
        .project-card,
        .contact-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 28px;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .about-card p,
        .timeline-card p,
        .project-card p,
        .contact-card p {
          color: #cbd5e1;
          line-height: 1.85;
          font-size: 16px;
        }

        .timeline {
          display: grid;
          gap: 18px;
        }

        .timeline-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .timeline-top h3 {
          margin: 0;
          font-size: 22px;
        }

        .timeline-top h4 {
          margin: 6px 0 0;
          color: #7dd3fc;
          font-size: 16px;
          font-weight: 600;
        }

        .timeline-top span {
          font-size: 14px;
          color: #cbd5e1;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 8px 12px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-pill {
          padding: 12px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: #e2e8f0;
          font-weight: 500;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .project-card h3 {
          margin: 0 0 12px;
          font-size: 20px;
        }

        .contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
        }

        .contact-links a {
          color: white;
          padding: 12px 16px;
          background: rgba(255,255,255,0.06);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .contact-links a:hover {
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 900px) {
          .stats,
          .project-grid {
            grid-template-columns: 1fr;
          }

          .timeline-top {
            flex-direction: column;
          }

          .section-header h2 {
            font-size: 28px;
          }

          .hero-subtitle {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
