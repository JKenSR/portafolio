# Referencias de Investigación y Aprendizaje

Este documento detalla los recursos, tutoriales, documentación oficial y herramientas de asistencia técnica consultados de forma autónoma para el aprendizaje del framework React y el desarrollo del Portafolio Multimedia Personal.

## 1. Documentación Oficial Consultada
* **React Docs:** Revisión de la documentación oficial para comprender el ciclo de vida, la renderización de listas mediante métodos inmutables y la gestión del estado reactivo.
* **MDN Web Docs:** Consulta de la API `fetch()` nativa de JavaScript para la carga dinámica de datos estructurados desde archivos locales.

## 2. Tutoriales y Cursos en Video
* **Título:** REACT: Crea tu primera web DESDE CERO [para principiantes]
  * **Autor:** MoureDev by Brais Moure
  * **Enlace:** https://www.youtube.com/watch?v=pFyAu4R684s
  * **Descripción:** Guía fundamental para comprender la sintaxis JSX, el flujo de trabajo con componentes reutilizables y la inicialización de entornos basados en React.

## 3. Uso de Herramientas de Inteligencia Artificial (IA)
De acuerdo con los lineamientos del curso establecidos por la cátedra, se utilizó la asistencia técnica avanzada de IA (Gemini) como herramienta de co-pilotaje arquitectónico. Las interacciones se enfocaron en la toma de decisiones tecnológicas orientadas a la escalabilidad corporativa, la resolución de restricciones de empaquetamiento con Node Package Manager (npm), y el diseño de pipelines de automatización para despliegue continuo (CD).

### Interacciones y Prompts Clave Utilizados:

> **Prompt de Análisis Arquitectónico y Viabilidad Tecnológica:**
> *"Actúa como un Arquitecto de Software y Consultor de Escalabilidad Empresarial. Analiza los requerimientos de la guía del Proyecto Personal de Multimedios para la Opción 1 (Portfolio Multimedia Personal). Recomienda un stack > tecnológico basado en un framework o librería SPA moderno que garantice eficiencia en el renderizado, mantenibilidad mediante desacoplamiento de componentes, y que posea una alta demanda en el mercado laboral corporativo. Diseña la hoja de ruta inicial para segmentar la interfaz en módulos independientes."*
> **Solución brindada:** Evaluación técnica comparativa entre los ecosistemas de Angular y React. Planificación estructural basada en la separación de responsabilidades, descomponiendo la aplicación en cuatro componentes mínimos reutilizables  (`Header`, `About`, `Skills`, `Gallery`), y conceptualización de una arquitectura desacoplada donde la capa de presentación se alimenta dinámicamente mediante un almacén de datos estructurado en formato JSON.

>  **Prompt de Ingeniería de Entorno y Configuración de Pipeline de Despliegue (React + gh-pages):**
  >  *"Deseo inicializar de manera limpia un entorno SPA utilizando la librería React. Provee la secuencia de comandos bajo Bash para estructurar el espacio de trabajo, inicializar el control de versiones con Git, e instalar las dependencias core del proyecto. Adicionalmente, detalla el procedimiento técnico para mitigar las restricciones de nombrado de paquetes según las especificaciones de la API de npm. Configura un pipeline automatizado de compilación y despliegue sobre la infraestructura de GitHub Pages empleando la suite 'gh-pages', integrando los scripts de automatización 'predeploy' y 'deploy' en el manifiesto de configuración del proyecto."*
  >  **Solución brindada:** Guía de inicialización a través del cli de `create-react-app`, resolución de excepciones asociadas a restricciones de nomenclatura URL-friendly en la metadata del `package.json`, modelado del árbol físico de directorios para la inyección de componentes, inyección de la variable de entorno `homepage` para el mapeo de recursos estáticos en el servidor de producción, y reestructuración del ciclo de scripts de npm para enlazar el compilador estático (`build`) con el deployer automatizado de la rama de producción (`gh-pages`).