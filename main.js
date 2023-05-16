let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#4e5861 "> Estudiante de Biotecnología y desarrolladora de sitios web (Front-End) </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
