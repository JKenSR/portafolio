# AGENTS.md — portafolio

React 18 (CRA) · JS sin TypeScript · CSS nativo · gh-pages

## Stack

- **UI:** React 18.3 via `react-scripts` 5.0.1
- **Estilos:** CSS plano con variables en `:root` (tema terminal-dark); Google Fonts: Space Grotesk, Inter, JetBrains Mono
- **Librerías externas:** ninguna — solo React + CSS
- **Datos:** `public/portfolio.json` → `fetch()` en `useEffect` — no hay hardcode en componentes
- **Rutas:** siempre `process.env.PUBLIC_URL` para compatibilidad local/GitHub Pages
- **Favicon:** `Logo_Ken.ico` (icono) + `LogoKen.png` (retina/apple-touch), referenciados en `public/index.html`

## Comandos

| Acción | Comando |
|--------|---------|
| dev server | `npm start` |
| build prod | `npm run build` |
| deploy Pages | `npm run deploy` (corre `predeploy` → `build` automáticamente) |
| test | `npm test` — test único busca "Cargando portafolio" en el loader |
| lint | incluido en `react-scripts start/build`, mensajes en consola |

## Arquitectura

```
src/
├── App.js                  ← fetch portfolio.json, 3 estados (loading/error/data)
├── components/
│   ├── Header.jsx          ← nav sticky, scroll detection via useState
│   ├── About.jsx           ← hero + lightbox + audio/video + subtítulos sincronizados
│   ├── Skills.jsx          ← grid animado con IntersectionObserver
│   └── Gallery.jsx         ← project cards con stagger animation
└── App.css                 ← ~940 líneas, todo el sistema de diseño
```

`App.js` distribuye: `personal` → About, `skills` → Skills, `projects` → Gallery.

No hay router — SPA con smooth scroll por secciones vía `scrollIntoView()`.

## Convenios de código

- Componentes: `.jsx` en `src/components/`, function components, PascalCase
- Hooks: importar `React, { useState, useEffect, useRef }` según necesidad
- CSS: clases BEM-light (`site-header--scrolled`, `skill-chip--visible`)
- Sin TypeScript, sin librerías UI externas
- Animaciones: IntersectionObserver para triggers de entrada, CSS transitions
- Multimedia: `<audio>`/`<video>` con `preload="metadata"` y `controls`
- Subtítulos de audio: array `personal.presentationSubtitles` en JSON con `{start, end, text}` (formato `mm:ss.ms`); sincronización manual via `timeupdate` listener

## Datos (`portfolio.json`)

Estructura requerida:
```json
{
  "personal": {
    "name": "...",
    "role": "...",
    "bio": "...",
    "presentationSubtitles": [{ "start": "00:00.00", "end": "00:01.00", "text": "..." }]
  },
  "skills": ["HTML5", "..."],
  "projects": [{ "id": 1, "name": "...", "description": "...", "tech": ["..."], "url": "..." }]
}
```

Assets multimedia en `public/assets/{audio,video,images}/`. El build falla si `portfolio.json` tiene formato inválido.

## Despliegue

`npm run deploy` → build + `gh-pages -d build` a la rama `gh-pages`. La URL base la determina `"homepage"` en `package.json` (actual: `https://JKenSR.github.io/portafolio`).

## Archivos adicionales

- `REFERENCIAS.md` — bitácora de aprendizaje: tutoriales, documentación, fuentes multimedia, uso de IA. Requisito académico del curso IF7102.
