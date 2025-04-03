import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["El perro ", "Una pulga ", "El gato ", "El agua ", "El clima ", "El sol ", "Mi padrino "];
  let action = ["rompió ", "quemó ", "robó ", "destruyo ", "vendio ", " bebió ", "extinguió "];
  let what = ["la tarea ", "la casa ", "el bus ", "el almuerzo ", "el móvil ", "la computadora ", "el avión "];
  let when = ["ayer ", "que días ", "mientras dormía ", "mientras me bañaba ", "cuando me descuide ", "en la mañana ", "en la noche "];
  let phrase = [who, action, what, when];
  let excuse ="... ";

  for (let index = 0; index <= 3; index++) {
    let numRandom = Math.floor(Math.random()*7);
    console.log(index, numRandom)
    excuse += phrase [index] [numRandom]
  }  
  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
  
};