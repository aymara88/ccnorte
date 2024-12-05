# Prueba técnica CCNorte

1. Prueba de diseño

    Rediseñar la aplicación web para proporcionar una UI con un aspecto moderno. Puedes utilizar cualquier herramienta(TailwinCSS, Sass, Less...) que consideres oportuna. Puedes también añadir alguna sección nueva en la parte main. Solo ten en cuenta que debes mantener la estructura general de la web.

2. Prueba de código

    Crear un multi-step form con las siguientes características:

    - El formulario deberá incluirse en la sección Main de la web.
    - El usuario podrá volver al paso anterior, pero no ir hacia delante sin antes haber completado los inputs del paso actual.
    - Los datos introducidos por el usuario deberán mantenerse aunque se recargue la página.
    - En el último paso al pulsar el botón enviar el formulario se reiniciará.
    - Pasos e inputs:
        1. Nombre, email y fecha de nacimiento.
        2. Satisfacción con la organización del evento(1 a 10), satisfacción con el personal del evento(1 a 10).
        3. ¿Volverías a participar en el evento?(Si/No), ¿Cómo podriamos mejorar?(textarea, max 200 caracteres).


## Comandos para iniciar la app

```bash
   npm install
```

```bash
   npm run dev
```