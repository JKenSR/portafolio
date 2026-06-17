import React, { useState, useEffect } from 'react';

function Header({ name }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about',    label: 'Sobre mí'    },
    { href: '#skills',   label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos'   },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="header-inner">

        <a
          href="#about"
          className="header-logo"
          onClick={(e) => handleNavClick(e, '#about')}
          aria-label="Ir al inicio"
        >
          <span className="logo-bracket">&lt;</span>
          {name}
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;