const inputLine = document.querySelector("#name-input");
const nameLine = document.querySelector("#name-output");

inputLine.addEventListener("input", (event) => {
  event.currentTarget.value.length === 0
    ? (nameLine.textContent = "Anonymous")
    : (nameLine.textContent = event.currentTarget.value);
});
