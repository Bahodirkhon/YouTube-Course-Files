const form = document.querySelector("form");
const textInp = document.querySelector("#textInp");
const colInp = document.querySelector("#colInp");
const btn = document.querySelector("button");
const result = document.querySelector("#result");
const resultUl = document.querySelector("#resultUl");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = colInp.value;
  const tag = document.createElement("li");
  tag.textContent = textInp.value;
  tag.style.color = color;
  resultUl.appendChild(tag);
});
