import getWeather from "./get-weather";

function displayController() {
  const content = document.querySelector("#content");
  const contentArea = document.createElement("div");
  const cardLoc = document.createElement("div");
  const locData = document.createElement("div");
  const cardTemp = document.createElement("div");
  const tempData = document.createElement("div");
  const feelsData = document.createElement("div");
  const feelslike = document.createElement("div");

  contentArea.classList.add("content-area");
  cardLoc.classList.add("card-loc");
  locData.classList.add("loc-data");
  cardTemp.classList.add("card-temp");
  tempData.classList.add("temp-data");
  feelsData.classList.add("feels-data");
  feelslike.classList.add("feels-like");

  content.appendChild(contentArea);
  contentArea.appendChild(cardLoc);
  cardLoc.appendChild(locData);
  contentArea.appendChild(cardTemp);
  cardTemp.appendChild(tempData);
  cardTemp.appendChild(feelsData);
  cardTemp.appendChild(feelslike);
}

export default displayController;
