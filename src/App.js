import React from 'react';

function App() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7f6',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#0070f3' }}>¡Prueba de Despliegue Exitosa!</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        El portafolio de <strong>Kener Sosa</strong> se está renderizando correctamente desde GitHub Pages.
      </p>
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '1px dashed #0070f3', 
        display: 'inline-block',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }}>
        <p>Estudiante de Informática Empresarial • UCR</p>
        <small>Semana 14: Pipeline de Automatización Listo</small>
      </div>
    </div>
  );
}

export default App;
