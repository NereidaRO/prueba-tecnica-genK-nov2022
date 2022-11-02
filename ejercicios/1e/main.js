"use strict";

const body = document.querySelector(".js-body");
let html = "";
function handleHoverIn(ev) {
  ev.currentTarget.innerHTML = `${html}N`;
}
function handleHoverOut(ev) {
  ev.currentTarget.innerHTML = `${html}n`;
}

renderButton();

function renderButton() {
  for (let i = 1; i <= 1000; i++) {
    html += `<button class="js-button">${i} botón</button>`;

    body.innerHTML = `${html}`;
    const buttonArray = document.querySelectorAll(".js-button");
    for (let button of buttonArray) {
      button.addEventListener("mouseover", handleHoverIn);
      button.addEventListener("mouseout", handleHoverOut);
    }
  }
}

//para que ponga el evento en todos los botones, hay que arrayficarlos
