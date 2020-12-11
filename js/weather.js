const weatherContainer = document.querySelector(".container-weather");
const weather = document.querySelector(".js-weather");
const API_KEY = config.SECRET_API_KEY;
// const API_KEY = "bece0ff257e3fa1c84f731009f9cfab2";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const temperatureFeels = json.main.feels_like;
      weather.innerText = `@${place}\nTemperature:  ${temperature}℃\nFeels like:   ${temperatureFeels}℃`;

      const weatherImage = new Image();
      weatherImage.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
      weatherContainer.insertBefore(weatherImage, weather);
    });
  // fetch : get data
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
//when the names of key and value are exactly same,
//it can be written like this :
//coordsObj = {
//     latitude,
//     longitude
// }

function handleGeoError() {
  alert("weather system would not work.");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
