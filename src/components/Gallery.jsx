import React, { useEffect, useRef } from 'react';

/**
 * Renderiza tarjetas de proyectos con animación escalonada.
 * Cada tarjeta se revela al entrar al viewport mediante IntersectionObserver.
 *
 * @param {Array} projects - Array de objetos project.
 *   Cada project: { id, name, description, tech: string[], url? }
 */
function Gallery({ projects }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('project-card--visible');
              }, index * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section gallery-section" ref={sectionRef}>

      <div className="section-header">
        <h2 className="section-title">
          <span className="title-accent">02</span> Proyectos
        </h2>
        <p className="section-subtitle">
          Aplicaciones desarrolladas en entornos comerciales reales.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-inner">

              <div className="card-header">
                <span className="card-icon" aria-hidden="true">⬡</span>
                <h3 className="card-title">{project.name}</h3>
              </div>

              <p className="card-description">{project.description}</p>

              {project.tech && project.tech.length > 0 && (
                <ul className="card-tech" aria-label="Tecnologías usadas">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  aria-label={`Ver repositorio de ${project.name}`}
                >
                  Ver proyecto →
                </a>
              )}

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Gallery;