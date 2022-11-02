"use strict";

const body = document.querySelector(".js-body");
let html = "";
function handleHoverIn(ev) {
  ev.currentTarget.innerHTML = `buttoN`;
}
function handleHoverOut(ev) {
  ev.currentTarget.innerHTML = `button`;
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

/*falta descubrir cómo insertar el número, ya que es el índice del bucle pero, si meto la descripción
de la función dentro, el evento siempre sucederá en 1000, así que todos los botones serán 1000 botón o
1000 botóN*/
