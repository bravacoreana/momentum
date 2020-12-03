const checkboxDM = document.querySelector("#checkbox");
function darkmode() {
  document.querySelector(".container").classList.toggle("darkmode");
}

function init() {
  checkboxDM.addEventListener("change", darkmode);
}
init();
