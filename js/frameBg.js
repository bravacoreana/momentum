const frameBg = document.querySelector(".js-frameBg");
const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/frameHorizontal/${imgNumber + 1}.jpg`;
  frameBg.appendChild(image);
  image.classList.add("bgImage");
}

function genRandom() {
  const number = Math.floor(Math.random() * 6);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
