/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // iniciar variables de contenido a mostrar
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let seeds = ["♦", "♥", "♠", "♣"];

  //funcion mostrar palo aleatorio
  let cardSeed = () => {
    let randomSeed = Math.floor(Math.random() * seeds.length);
    document.querySelectorAll(".cardSeed").forEach(element => {
      element.innerHTML = seeds[randomSeed];
    });
  };
  cardSeed();
  //funcion mostrar el numero aleatorio
  let cardNumber = () => {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    document.querySelector(".cardNumber").innerHTML = numbers[randomNumber];
  };
  cardNumber();

  //generar boton
  let button = document.createElement("button");
  button.innerHTML = "Generate";
  document.querySelector(".card").after(button);

  //generar inputs para medidas
  let xCard = document.createElement("input");
  xCard.id = "width";
  xCard.type = "text";
  xCard.classList.add("form-control");
  xCard.classList.add("w-25");
  xCard.placeholder = "input card width in pixels";
  document.querySelector(".container").appendChild(xCard);

  let yCard = document.createElement("input");
  yCard.id = "height";
  yCard.type = "text";
  yCard.classList.add("form-control");
  yCard.classList.add("w-25");
  yCard.placeholder = "input card heigh in pixels";
  document.querySelector(".container").appendChild(yCard);

  //clic al botón
  button.addEventListener("click", e => {
    cardNumber();
    cardSeed();
  });

  //timer de 10 segundos
  setInterval(cardSeed, 10000);
  setInterval(cardNumber, 10000);

  //modificar medidas
  document.querySelector("#width").addEventListener("change", e => {
    document.querySelector(".card").style.width = e.target.value + "px";
  });
  document.querySelector("#height").addEventListener("change", e => {
    document.querySelector(".card").style.width = e.target.value + "px";
  });
};
/*/clic al botón -> NO FUNCIONA -> null
document.querySelector("button").addEventListener("click", e => {
  alert(e.value);
  cardNumber();
  cardSeed();
});*/
