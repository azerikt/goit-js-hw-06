function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorName = document.querySelector("span.color");

const changeColor = document.querySelector(".change-color");

const body = document.querySelector("body");

changeColor.addEventListener("click", (el) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
});
