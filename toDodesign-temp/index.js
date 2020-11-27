//DOM
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "line-through";

// Today's date
const today = new Date();
const options = { weekday: "long", month: "short", day: "numeric" };
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do
function addToDo(toDo) {
  const item = `<li class="item">
  <i class="far fa-circle" job="complete" id="0"></i>
                <span class="text">${toDo}</span>
                <i class="far fa-trash-alt" job="delete" id="0"></i>
                </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

// control after input

document.addEventListener("keyup", function (event) {
  if (event.KeyboardEvent) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo);
    }
    input.value = "";
  }
});
