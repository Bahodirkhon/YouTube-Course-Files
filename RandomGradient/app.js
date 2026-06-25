const body = document.querySelector("body");
const btn = document.querySelector("button");

const values = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function getGradinent() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

getGradinent();

function setGradient() {
  const color1 = getGradinent();
  const color2 = getGradinent();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
  ${randomDeg}deg,
  ${color1}
  ${color2}
  )`;
  body.style.background = bgColor;
}
setGradient();
