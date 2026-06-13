import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/portfolio.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: No se pudo cargar portfolio.json`);
        }
        return res.json();
      })
      .then((data) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="app-loader">
        <div className="loader-ring" />
        <p className="loader-text">Cargando portafolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <p>⚠ {error}</p>
        <p className="error-hint">Asegúrate de que <code>public/portfolio.json</code> existe y tiene el formato correcto.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header name={portfolioData.personal.name} />
      <main>
        <About personal={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Gallery projects={portfolioData.projects} />
      </main>
      <footer className="app-footer">
        <p>
          © 2026 <span className="footer-name">{portfolioData.personal.name}</span>
          {' '}· IF7102 Multimedios · UCR Sede Guanacaste
        </p>
      </footer>
    </div>
  );
}

export default App;