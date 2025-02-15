"use strict";

renderButton();

function handleHoverIn(ev) {
  ev.currentTarget.innerHTML = "1 botóN";
}
function handleHoverOut(ev) {
  ev.currentTarget.innerHTML = "1 botón";
}

function renderButton() {
  const body = document.querySelector(".js-body");
  body.innerHTML = `<button class="js-oneButton">1 botón</button>`;
  const button = document.querySelector(".js-oneButton");
  button.addEventListener("mouseover", handleHoverIn);
  button.addEventListener("mouseout", handleHoverOut);
}
