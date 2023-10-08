const formInput = document.querySelector("#validation-input");
const dataLength = Number(formInput.getAttribute("data-length"));

formInput.addEventListener("blur", addClass);
function addClass(event) {
  if (event.currentTarget.value.length === dataLength) {
    formInput.classList.add("valid");
    formInput.classList.remove("invalid");
  } else {
    formInput.classList.add("invalid");
    formInput.classList.add("valid");
  }
}
