import React, { useState, useRef, useEffect } from 'react';

function About({ personal }) {
  const BASE = process.env.PUBLIC_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const audioRef = useRef(null);

  const parseTime = (str) => {
    const parts = str.split(':');
    const mins = parseFloat(parts[0]);
    const secs = parseFloat(parts[1]);
    return mins * 60 + secs;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const cues = personal?.presentationSubtitles || [];
    if (!audio || cues.length === 0) return;

    const handleTimeUpdate = () => {
      const t = audio.currentTime;
      let active = '';
      for (const cue of cues) {
        if (t >= parseTime(cue.start) && t < parseTime(cue.end)) {
          active = cue.text;
          break;
        }
      }
      setCurrentSubtitle(active);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, [personal]);
  if (!personal) {
    return (
      <section id="about" className="section desert-loader">
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textAlign: 'center' }}>
          &gt; Cargando entorno personal...
        </p>
      </section>
    );
  }

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

        <div className="about-photo fade-in fade-in--delay-1" onClick={openImage} style={{ cursor: 'pointer' }}>
          <img
            src={`${BASE}/assets/images/Perfil.jpg`}
            alt={`Fotografía de perfil de ${personal.name}`}
            className="profile-photo"
            loading="eager"
          />
          <span className="photo-zoom-hint">
            <span className="hint-prefix">$</span> clic para expandir
          </span>
        </div>

      </div>

      {/* ── Bloque multimedia ─────────────────────────────── */}
      <div className="about-media fade-in fade-in--delay-2">

        <div className="media-block">
          <h3 className="media-label">
            <span className="media-label-prefix"> {"<"} </span>
            Autopresentación
            <span className="media-label-prefix"> {"/>"} </span>
          </h3>
          <div className="audio-subtitles" aria-live="polite">
            {currentSubtitle || <span className="subtitle-placeholder">&#8203;</span>}
          </div>
          <audio
            ref={audioRef}
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

        <div className="media-block">
          <h3 className="media-label">
            <span className="media-label-prefix"> {"<"} </span>
            Video de introducción
            <span className="media-label-prefix"> {"/>"} </span>
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
        >
          <div className="lightbox-content">
            <button 
              className="lightbox-close"
              onClick={closeImage}
            >
              Esc // Cerrar
            </button>
            <img 
              className="lightbox-image"
              src={`${BASE}/assets/images/Perfil.jpg`} 
              alt="Foto de perfil expandida" 
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default About;