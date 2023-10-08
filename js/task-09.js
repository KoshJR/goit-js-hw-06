function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");
const body = document.querySelector("body");

changeButton.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const value = getRandomHexColor();
  colorName.textContent = value;
  body.style.backgroundColor = value;
}
