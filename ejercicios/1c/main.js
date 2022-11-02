"use strict";

const body = document.querySelector(".js-body");
let html = "";

function renderButton() {
  for (let i = 1; i <= 10; i++) {
    html += `<button>${i} botón</button>`;
    body.innerHTML = `${html}`;
  }
}

renderButton();
