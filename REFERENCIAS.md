# REFERENCIAS.md — IF7102 Multimedios · I Ciclo 2026

Documentación del proceso de aprendizaje autónomo para el Proyecto Personal.
**Framework elegido: React.js (v18)**
**Opción: 1 — Portfolio Multimedia Personal**

---

## 1. Tutoriales y cursos consultados

| # | Título | URL | Uso |
|---|--------|-----|-----|
| 1 | React Official Tutorial: Tic-Tac-Toe | https://react.dev/learn/tutorial-tic-tac-toe | Primer contacto con componentes, estado y props |
| 2 | React Docs — Describing the UI | https://react.dev/learn/describing-the-ui | Entender JSX y cómo React renderiza el árbol |
| 3 | React Docs — Adding Interactivity | https://react.dev/learn/adding-interactivity | useState y manejo de eventos |
| 4 | React Docs — Managing State | https://react.dev/learn/managing-state | Patrones de estado entre componentes |
| 5 | React Docs — Escape Hatches (useRef, useEffect) | https://react.dev/learn/escape-hatches | useRef para DOM y useEffect para efectos secundarios |
| 6 | React Docs — Conditional Rendering | https://react.dev/learn/conditional-rendering | Estados loading/error en App.js |
| 7 | React Testing Library — Basic Usage | https://testing-library.com/docs/react-testing-library/example-intro | Escribir test para el loader del portafolio |

---

## 2. Documentación oficial consultada

| Recurso | URL | Para qué se consultó |
|---------|-----|----------------------|
| React Docs (react.dev) | https://react.dev | Referencia principal del framework |
| MDN — Fetch API | https://developer.mozilla.org/es/docs/Web/API/Fetch_API | Sintaxis de fetch() y manejo de promesas |
| MDN — IntersectionObserver API | https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API | Animaciones activadas al hacer scroll |
| MDN — HTMLMediaElement (audio/video) | https://developer.mozilla.org/es/docs/Web/HTML/Element/audio | Atributos controls, preload, source |
| MDN — CSS Custom Properties | https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties | Variables CSS para el sistema de diseño |
| MDN — Element.scrollIntoView | https://developer.mozilla.org/es/docs/Web/API/Element/scrollIntoView | Navegación smooth scroll entre secciones |
| Create React App Docs | https://create-react-app.dev/docs/getting-started | Configuración del proyecto y scripts |
| Create React App — Deployment (GitHub Pages) | https://create-react-app.dev/docs/deployment/#github-pages | Configuración de gh-pages y PUBLIC_URL |
| Create React App — Adding a Favicon | https://create-react-app.dev/docs/adding-a-favicon/ | Cambiar el favicon por defecto de React |
| Google Fonts — Space Grotesk | https://fonts.google.com/specimen/Space+Grotesk | Tipografía display del proyecto |
| Google Fonts — Inter | https://fonts.google.com/specimen/Inter | Tipografía para cuerpo de texto |
| Google Fonts — JetBrains Mono | https://fonts.google.com/specimen/JetBrains+Mono | Tipografía monoespaciada para chips y rol |

---

## 3. Recursos multimedia

| Recurso | Tipo | Origen | Licencia |
|---------|------|--------|----------|
| `Perfil.jpg` | Fotografía de perfil | Producción propia | Propia — todos los derechos reservados |
| `presentacion.mp3` | Audio de autopresentación | Grabación propia | Propia — todos los derechos reservados |
| `introduccion.mp4` | Video de introducción | Producción propia | Propia — todos los derechos reservados |
| `Logo_Ken.ico` | Icono de pestaña (favicon) | Producción propia | Propia — todos los derechos reservados |
| `LogoKen.png` | Icono retina/apple-touch | Producción propia | Propia — todos los derechos reservados |
| `image.png` | Captura de pantalla (Estructura) | Captura propia | Propia — todos los derechos reservados |
| `image-1.png` | Captura de pantalla (Diseño) | Captura propia | Propia — todos los derechos reservados |
| `image-2.png` | Captura de pantalla (Responsiva móvil) | Captura propia | Propia — todos los derechos reservados |
| `image-3.png` | Captura de pantalla (Modal foto) | Captura propia | Propia — todos los derechos reservados |

> **Nota:** Todos los recursos multimedia son de producción propia del estudiante o capturas de pantalla del proyecto, por lo que no requieren licencia externa.

---

## 4. Paquetes npm utilizados

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `react` | ^18.3.1 | Librería principal de UI |
| `react-dom` | ^18.3.1 | Renderizado en el DOM |
| `react-scripts` | 5.0.1 | Entorno de desarrollo y build (CRA) |
| `gh-pages` | ^6.x | Despliegue automatizado a GitHub Pages |
| `@testing-library/react` | ^16.3.2 | Pruebas unitarias del componente App |
| `@testing-library/jest-dom` | ^6.9.1 | Matchers adicionales para pruebas DOM |
| `@testing-library/user-event` | ^13.5.0 | Simulación de eventos de usuario en tests |
| `@testing-library/dom` | ^10.4.1 | Utilidades base de testing-library |
| `web-vitals` | ^2.1.4 | Medición de métricas de rendimiento web |

> No se usaron librerías externas de UI (Bootstrap, Tailwind, MUI). Todos los estilos son CSS propio con variables en `:root`.

---

## 5. Uso de Inteligencia Artificial

Durante la investigación autónoma y codificación del proyecto se consultaron herramientas de IA generativa (Claude de Anthropic y Gemini de Google) de acuerdo con los lineamientos del curso:

**Para qué se utilizó:**
- Explorar la sintaxis de hooks de React (`useState`, `useEffect`, `useRef`) y entender su ciclo de vida
- Interpretar errores del compilador y del navegador
- Comprender cómo funciona `IntersectionObserver` para las animaciones de scroll
- Entender por qué `process.env.PUBLIC_URL` es necesario para assets en GitHub Pages
- Generar una base de código comentada que luego fue leída, comprendida y adaptada
- Revisar el cumplimiento de requisitos del proyecto contra el enunciado oficial
- Actualizar tests para reflejar el contenido real de la aplicación
- Configurar el favicon personalizado y su sintaxis en `public/index.html`

---

## 6. Proyecto en cifras

| Métrica | Valor |
|---------|-------|
| Componentes React | 4 (Header, About, Skills, Gallery) |
| Hooks utilizados | useState, useEffect, useRef |
| Líneas de CSS | ~780 |
| Commits en repositorio | 10 |
| Archivos multimedia propios | 3 (foto, audio, video) + 2 logos |
| Capturas de pantalla | 4 |
| Subtítulos sincronizados | 22 líneas en portfolio.json |

---

*Kener Josué Sosa Rodríguez · IF7102 Multimedios · UCR Sede Guanacaste · I Ciclo 2026*
