const inputMove = document.querySelector("#font-size-control");
const textSizeChange = document.querySelector("#text");

inputMove.addEventListener("input", () => {
  textSizeChange.style.fontSize = `${Number(inputMove.value)}px`;
});
