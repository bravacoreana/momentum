const modalBg = document.querySelector(".modal-bg");
const modalBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".modal-close");
const modalInput = document.querySelector(".modal-input");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser"; // user local storage
// const SHOWING_CN = "showing"; // showing class name

function paintGreeting(text) {
  greeting.innerText = `Hello, ${text}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function closeModal() {
  // alert("You can change your name on setting");
  modalBg.classList.remove("modal-active");
  paintGreeting("Voldemort");
}

function handleSubmit() {
  const currentValue = modalInput.value;
  if (currentValue === "") {
    closeModal();
  } else {
    modalBg.classList.remove("modal-active");
    paintGreeting(currentValue);
    saveName(currentValue);
  }
}

function askForName() {
  modalBg.classList.add("modal-active");
  modalInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  });
  modalBtn.addEventListener("click", handleSubmit);
  modalClose.addEventListener("click", closeModal);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
