import React, { useEffect, useRef } from 'react';

/**
 * Gallery.jsx
 *
 * Renderiza los proyectos recibidos como prop (array de objetos)
 * usando obligatoriamente el método .map() con key única (project.id).
 *
 * Cada tarjeta se revela con animación escalonada al entrar
 * al viewport mediante IntersectionObserver.
 *
 * Estructura esperada de cada objeto project:
 * { id, name, description, tech: string[], url? }
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

      {/* .map() obligatorio con key única (project.id) */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-inner">

              {/* Encabezado de la tarjeta */}
              <div className="card-header">
                <span className="card-icon" aria-hidden="true">⬡</span>
                <h3 className="card-title">{project.name}</h3>
              </div>

              {/* Descripción del proyecto */}
              <p className="card-description">{project.description}</p>

              {/* Stack tecnológico con .map() anidado */}
              {project.tech && project.tech.length > 0 && (
                <ul className="card-tech" aria-label="Tecnologías usadas">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tech-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {/* Enlace al repositorio (opcional) */}
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