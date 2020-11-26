const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clock-now");
const circle = document.querySelector(".js-circle");
const divs = document.querySelectorAll(".js-circle__clock");

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;

	// paintColor;
	for (div of divs) {
		let numberDiv = div.id;
		if (numberDiv <= hours) {
			this.div.style.backgroundColor = "rgba(211, 225, 238, 0.7)";
		}
	}
}
function init() {
	setInterval(getTime, 1000);
}

init();
