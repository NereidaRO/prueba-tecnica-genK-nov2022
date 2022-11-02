"use strict";

const body = document.querySelector(".js-body");
let html = "<button>1 botón</button>";

function renderButton() {
  for (let i = 1; i <= 1000; i++) {
    html += `<button>${i} botón</button>`;
    body.innerHTML = `${html}`;
  }
}

renderButton();
