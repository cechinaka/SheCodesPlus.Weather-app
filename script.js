

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b8bt1eedc53a49e91cf7bb6aob435022";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayNew);
}

function displayNew(response) {
  let temperatureElement = document.querySelector("#tempNow");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#cityNow");
  let citySearch = response.data.city;
  cityElement.innerHTML = citySearch;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
  minutes = `0${minutes}`;
  }

  if (hours < 10) {
  hours = `0${hours}`;
  }

  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let dateNow = new Date();

currentDateElement.innerHTML = formatDate(dateNow);

