"use strict";

const body = document.querySelector(".js-body");
let html = "<button>1 botón</button>";

renderButton();

function handleHoverIn(ev) {
  ev.currentTarget.innerHTML = "1 botóN";
}
function handleHoverOut(ev) {
  ev.currentTarget.innerHTML = "1 botón";
}

function renderButton() {
  for (let i = 1; i <= 1000; i++) {
    html += `<button class="js-button">${i} botón</button>`;
    body.innerHTML = `${html}`;
    const button = document.querySelector(".js-button");
    button.addEventListener("mouseover", handleHoverIn);
    button.addEventListener("mouseout", handleHoverOut);
  }
}
