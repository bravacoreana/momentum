const frameBg = document.querySelector(".js-frameBg");
const frameBgVt = document.querySelector(".js-frameBgVt");
const IMG_NUMBER = 8;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/frameSample/${imgNumber + 1}.jpg`;
  frameBg.appendChild(image);
  image.classList.add("bgImage");
}

function paintImageVt(imgNumber) {
  const imageVt = new Image();
  imageVt.src = `images/frameVertical/${imgNumber + 1}.jpg`;
  frameBgVt.appendChild(imageVt);
  imageVt.classList.add("bgImage");
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  paintImageVt(randomNumber);
}

init();
