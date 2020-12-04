const checkboxDM = document.querySelector("#checkbox");
const bgImage = document.querySelectorAll(".bgImage");
function darkmode() {
  document.querySelector(".container").classList.toggle("darkmode");
  document.querySelector(".frameDM").classList.toggle("DM");
  bgImage.forEach((bgImg) => bgImg.classList.toggle("imgDM"));
}

function init() {
  checkboxDM.addEventListener("change", darkmode);
}
init();
