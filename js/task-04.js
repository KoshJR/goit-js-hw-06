const buttonDecrease = document.querySelector("[data-action ='decrement']");
const buttonIncrease = document.querySelector("[data-action ='increment']");
const spanItem = document.querySelector("#value");

buttonDecrease.addEventListener("click", () => {
  spanItem.textContent = Number(spanItem.textContent) - 1;
});
buttonIncrease.addEventListener("click", () => {
  spanItem.textContent = Number(spanItem.textContent) + 1;
});
