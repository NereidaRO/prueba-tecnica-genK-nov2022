"use strict";

const body = document.querySelector(".js-body");
const button = document.querySelector(".js-oneButton");

body.innerHTML = `<button class="js-oneButton">1 botón</button>`;

function handleHover() {
  body.innerHTML = `<button class="js-oneButton">1 botóN</button>`;
}

button.addEventListener("mouseover", handleHover());
