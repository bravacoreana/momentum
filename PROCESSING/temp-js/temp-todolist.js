//DOM
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("inputToDo");

// classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "line-through";

// Variables
let LIST = [];
let id = 0;

// Get local storage
let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

// Load item
function loadList(array) {
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// Clear item
clear.addEventListener("click", function () {
  if (localStorage.getItem("TODO")) {
    if (confirm("clear all your list?")) {
      localStorage.clear();
      location.reload();
    } else {
    }
  } else {
    alert("Nothing to clear!");
  }
});

// Today's date
// const today = new Date();
// const options = { weekday: "long", month: "short", day: "numeric" };

// dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                  <i class="far ${DONE}" job="complete" id="${id}"></i>
                  <span class="text ${LINE}">${toDo}</span>
                  <i class="far fa-trash-alt" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// control after input

document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);

      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });
      localStorage.setItem("TODO", JSON.stringify(LIST));
      id++;
    }

    input.value = "";
  }
});

// complete to do list
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do LIST
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LIST[element.id].trash = true;
}

// Target the items

list.addEventListener("click", function (event) {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
  // add to local localStorage
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
