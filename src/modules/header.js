import searchWeather from "./search-weather";

const content = document.querySelector("#content");

function header() {
  const topBar = document.createElement("div");
  const LogoDiv = document.createElement("div");
  const Logo = document.createElement("img");
  const searchForm = document.createElement("form");
  const searchBar = document.createElement("input");
  const searchBtn = document.createElement("button");

  topBar.classList.add("top-bar");
  LogoDiv.classList.add("logo-div");
  Logo.classList.add("logo");
  searchForm.classList.add("search-form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("placeholder", "Search for a city");
  searchBtn.classList.add("search-btn");
  searchBtn.setAttribute("type", "submit");
  searchBtn.setAttribute("name", "submit");

  Logo.src =
    "https://breakingweather.net/wp-content/themes/mobileweb/assets/logo1.png";
  searchBtn.innerHTML = "Search";

  content.appendChild(topBar);
  topBar.appendChild(LogoDiv);
  LogoDiv.appendChild(Logo);
  topBar.appendChild(searchForm);
  searchForm.appendChild(searchBar);
  searchForm.appendChild(searchBtn);

  searchForm.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      searchWeather();
      searchBar.value = "";
    },
    false
  );
}

export default header;
