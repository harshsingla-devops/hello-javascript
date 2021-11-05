"use strict";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexCode = "#";
  hexCode += generateHexColor();
  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});

function generateHexColor() {
  let generateCode = "";
  for (let i = 0; i < 6; i++) {
    generateCode += hex[Math.floor(Math.random() * hex.length)];
  }
  return generateCode;
}
