import React, { useState } from 'react';

/**
 * About.jsx
 * Sección de presentación personal con:
 * - Renderizado de datos biográficos
 * - Modal dinámico para expandir la imagen de perfil al hacer clic
 * - Reproductores multimedia nativos
 */
function About({ personal }) {
  const BASE = process.env.PUBLIC_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!personal) {
    return (
      <section id="about" className="section desert-loader">
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textAlign: 'center' }}>
          &gt; Cargando entorno personal...
        </p>
      </section>
    );
  }

  // Funciones para abrir y cerrar el visor de la foto
  const openImage = () => setIsModalOpen(true);
  const closeImage = () => setIsModalOpen(false);

  return (
    <section id="about" className="section about-section">

      {/* ── Hero: texto + foto ─────────────────────────────── */}
      <div className="about-hero">

        <div className="about-text fade-in">
          <p className="about-eyebrow">Hola, soy</p>
          <h1 className="about-name">{personal.name}</h1>
          <h2 className="about-role">
            <span className="role-prompt">&gt;</span>
            <span className="role-text">{personal.role}</span>
            <span className="role-cursor" aria-hidden="true" />
          </h2>
          <p className="about-bio">{personal.bio}</p>
        </div>

        {/* Contenedor de la foto con acción de clic */}
        <div className="about-photo fade-in fade-in--delay-1" onClick={openImage} style={{ cursor: 'pointer' }}>
          <img
            src={`${BASE}/assets/images/Perfil.jpg`}
            alt={`Fotografía de perfil de ${personal.name}`}
            className="profile-photo"
            loading="eager"
          />
          <span className="photo-zoom-hint" style={{
            display: 'block',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: '0.5rem',
            fontFamily: 'var(--font-mono)'
          }}>
            [Clic para expandir]
          </span>
        </div>

      </div>

      {/* ── Bloque multimedia ─────────────────────────────── */}
      <div className="about-media fade-in fade-in--delay-2">

        {/* Audio de autopresentación */}
        <div className="media-block">
          <h3 className="media-label">
            <span className="media-label-prefix">// </span>
            Autopresentación
          </h3>
          <audio
            controls
            className="audio-player"
            aria-label="Audio de autopresentación"
            preload="metadata"
          >
            <source
              src={`${BASE}/assets/audio/presentacion.mp3`}
              type="audio/mpeg"
            />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>

        {/* Video de introducción */}
        <div className="media-block">
          <h3 className="media-label">
            <span className="media-label-prefix">// </span>
            Video de introducción
          </h3>
          <video
            controls
            className="intro-video"
            preload="metadata"
            aria-label="Video de introducción personal"
          >
            <source
              src={`${BASE}/assets/video/introduccion.mp4`}
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

      </div>

      {/* ── Modal / Lightbox interactivo ───────────────────── */}
      {isModalOpen && (
        <div 
          className="image-lightbox-overlay" 
          onClick={closeImage}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(10, 14, 22, 0.95)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.2s ease-in-out'
          }}
        >
          <div className="lightbox-content" style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            {/* Botón de cerrar */}
            <button 
              onClick={closeImage}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'var(--accent-color, #64ffda)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              esc // cerrar
            </button>
            <img 
              src={`${BASE}/assets/images/Perfil.jpg`} 
              alt="Foto de perfil expandida" 
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default About;