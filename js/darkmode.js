const checkboxDM = document.querySelector("#checkbox");
const bgImage = document.querySelectorAll(".bgImage");
function darkmode() {
  document.querySelector(".container").classList.toggle("darkmode");
  bgImage.forEach((bgImg) => bgImg.classList.toggle("imgDM"));
}

function init() {
  checkboxDM.addEventListener("change", darkmode);
}
init();
