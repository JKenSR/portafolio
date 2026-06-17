import React, { useEffect, useRef } from 'react';

/**
 * Renderiza lista de habilidades con animación escalonada.
 * Cada chip aparece con retraso incremental de 70ms activado por
 * IntersectionObserver al entrar la sección en el viewport.
 *
 * @param {Array} skills - Array de strings con nombres de tecnologías
 */
function Skills({ skills }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chips = entry.target.querySelectorAll('.skill-chip');
            chips.forEach((chip, index) => {
              setTimeout(() => {
                chip.classList.add('skill-chip--visible');
              }, index * 70);
            });
            // Dejar de observar una vez animado
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>

      <div className="section-header">
        <h2 className="section-title">
          <span className="title-accent">01</span> Habilidades
        </h2>
        <p className="section-subtitle">
          Tecnologías que aplico en proyectos reales.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            <span className="chip-prefix">$</span> {skill}
          </span>
        ))}
      </div>

    </section>
  );
}

export default Skills;