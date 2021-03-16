async function searchWeather() {
  try {
    const searchForm = document.querySelector(".search-form");
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-btn");
    const locData = document.querySelector(".loc-data");
    const tempData = document.querySelector(".temp-data");
    const feelsData = document.querySelector(".feels-data");
    let tuc = require("temp-units-conv");
    const location = searchBar.value;
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&appid=603c5722db9c3f97f363233e77ed0f1e",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    locData.innerHTML = weatherData.name + ", " + weatherData.sys.country;
    tempData.innerHTML = Math.round(tuc.k2c(weatherData.main.temp)) + "°";
    feelsData.innerHTML =
      "Feels like: " + Math.round(tuc.k2c(weatherData.main.feels_like)) + "°";
  } catch (error) {
    console.error(err);
  }
}

export default searchWeather;
