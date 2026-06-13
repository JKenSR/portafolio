import React, { useEffect, useRef } from 'react';

/**
 * Skills.jsx
 *
 * Renderiza la lista de habilidades recibida como prop (array de strings)
 * usando obligatoriamente el método .map().
 *
 * La animación de entrada es escalonada (staggered): cada chip aparece
 * con un retraso incremental de 70ms activado por IntersectionObserver
 * cuando la sección entra en el viewport. 
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
            // Aplicar animación escalonada a cada chip
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

      {/* .map() obligatorio con key única por elemento */}
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