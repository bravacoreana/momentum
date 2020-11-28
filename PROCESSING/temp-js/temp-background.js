const toDoBG = document.querySelector(".header");
const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/${imgNumber + 1}.jpg`;
  toDoBG.appendChild(image);
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
