const checkboxDM = document.querySelector("#checkbox");
const bgImage = document.querySelectorAll(".bgImage");
const todoLists = document.querySelectorAll(".todolistDM");
const todoListItems = document.querySelectorAll("li.item");

function darkmode() {
  document.querySelector(".container").classList.toggle("darkmode");
  document.querySelector(".frameDM").classList.toggle("darkmode");
  document.querySelector(".calendarDM").classList.toggle("darkmode");
  todoLists.forEach((todoList) => todoList.classList.toggle("darkmode"));
  bgImage.forEach((bgImg) => bgImg.classList.toggle("darkmode"));
  document.querySelector(".add-to-do input").classList.toggle("darkmode");
  todoListItems.forEach((item) => item.classList.toggle("darkmode"));
}

function init() {
  checkboxDM.addEventListener("change", darkmode);
}
init();
