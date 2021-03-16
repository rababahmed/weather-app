/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/temp-units-conv/conversions.js":
/*!*****************************************************!*\
  !*** ./node_modules/temp-units-conv/conversions.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* -*- coding: UTF-8, tab-width: 2 -*- */\n/*jslint indent: 2, maxlen: 80, continue: true, node: true */\n/*globals define:true */\n\n\nvar EX = { /* exports namespace */ },\n  CF,  /* constructor function for this file's pseudo-class */\n  PT,  /* prototype alias */\n  getContext = function () { return this; },\n  gen; /* temporary multi-purpose function factory slot */\n\n\nEX.tempRgx = /(\\-?[0-9]*(?:\\.[0-9]*|)[0-9])\\s*(?:°|deg|degrees?|)\\s*(C|F|K)/i;\n\nCF = EX.Temperature = function Temperature(temp, unit) {\n  var self = this;\n  if (('string' === typeof temp) && (!unit)) {\n    unit = EX.tempRgx.exec(temp);\n    if (unit && (unit[0] === temp)) {\n      temp = unit[1];\n      unit = unit[2];\n    } else {\n      throw new Error('unable to understand temperature string: ' + temp);\n    }\n  }\n  self.temp = Number(temp);\n  self.unit = EX.getUnitDescr(unit);\n  return self;\n};\nPT = CF.prototype;\n\nPT.toString = function () {\n  return Number(this.temp).toFixed(2) + ' ' + this.unit.nameShort;\n};\n\nPT.toUnit = function (destUnitName) {\n  var self = this, OrigUnit = self.unit,\n    DestUnit = EX.getUnitDescr(destUnitName), conv;\n  if (DestUnit === OrigUnit) { return self; }\n  conv = EX[String(OrigUnit.id + '2' + destUnitName).toLowerCase()];\n  if ('function' !== typeof conv) {\n    throw new Error('no idea how to convert ' + OrigUnit.nameShort +\n      ' into ' + DestUnit.nameShort);\n  }\n  return new DestUnit(conv(self.temp));\n};\n\nEX.getUnitDescr = function (allegedUnitDescr) { return allegedUnitDescr; };\n/* ^-- for the time until the unitDescrs are established,\n       just pass anything through without checks. */\n\ngen = function (receipe) {\n  var UnitCF, UnitPT;\n  PT['to' + receipe.id] = getContext;\n  gen.toThisUnit(receipe.id);\n  EX[receipe.id] = UnitCF = receipe.Ctor;\n  UnitCF.id = receipe.id;\n  UnitCF.nameShort = receipe.nameShort;\n  UnitCF.nameLong = receipe.nameLong;\n  UnitPT = UnitCF.prototype = new EX.Temperature(0, UnitCF);\n  UnitPT.unit = UnitCF;\n  return UnitCF;\n};\ngen.toThisUnit = function (destUnit) {\n  PT['to' + destUnit] = function () { return this.toUnit(destUnit); };\n};\n\ngen({ id: 'C', nameShort: '°C', nameLong: 'degrees Celsius',\n  Ctor: function Celsius(c) { return CF.call(this, c, 'C'); } }\n  ).offsetK = 273.15;\ngen({ id: 'F', nameShort: '°F', nameLong: 'degrees Fahrenheit',\n  Ctor: function Fahrenheit(f) { return CF.call(this, f, 'F'); } });\ngen({ id: 'K', nameShort: 'K', nameLong: 'Kelvin',\n  Ctor: function Kelvin(k) { return CF.call(this, k, 'K'); } });\n\nEX.getUnitDescr = function (id) {\n  var descr = EX[id];\n  if ('function' === typeof descr) {\n    if (descr.prototype.constructor === CF) {\n      return descr;\n    }\n  }\n  throw new Error('unsupported unit of temperature: ' + String(id));\n};\n\ngen = function (orig, dest, formula) {\n  EX[orig.toLowerCase() + 'To' + dest] = formula;\n  orig = orig.substr(0, 1);\n  dest = dest.substr(0, 1);\n  EX[(orig + '2' + dest).toLowerCase()] = formula;\n};\ngen('Celsius',    'Fahrenheit', function (c) { return ((c * 9) / 5) + 32; });\ngen('Celsius',    'Kelvin',     function (c) { return c + EX.C.offsetK; });\ngen('Fahrenheit', 'Celsius',    function (f) { return ((f - 32) * 5) / 9; });\ngen('Fahrenheit', 'Kelvin',     function (f) { return EX.c2k(EX.f2c(f)); });\ngen('Kelvin',     'Celsius',    function (k) { return k - EX.C.offsetK; });\ngen('Kelvin',     'Fahrenheit', function (k) { return EX.c2f(EX.k2c(k)); });\n\ngen = undefined;  /* save memory */\n\n/* <doug65536> if you want to go crazy with it:\n      http://en.wikipedia.org/wiki/Conversion_of_units_of_temperature */\n\n\nif (true) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (EX),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }\nif (( true) && module) { module.exports = EX; }\n\n\n//# sourceURL=webpack://weather-app/./node_modules/temp-units-conv/conversions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_site_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/site-controller */ \"./src/modules/site-controller.js\");\n/* harmony import */ var _modules_get_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-weather */ \"./src/modules/get-weather.js\");\n\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_site_controller__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_get_weather__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/get-weather.js":
/*!************************************!*\
  !*** ./src/modules/get-weather.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _site_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-controller */ \"./src/modules/site-controller.js\");\n\n\nconst location = document.querySelector(\".search-bar\");\n\nasync function getWeather() {\n  try {\n    const locData = document.querySelector(\".loc-data\");\n    const tempData = document.querySelector(\".temp-data\");\n    const feelsData = document.querySelector(\".feels-data\");\n    let tuc = __webpack_require__(/*! temp-units-conv */ \"./node_modules/temp-units-conv/conversions.js\");\n    const location = \"London\";\n    const response = await fetch(\n      \"https://api.openweathermap.org/data/2.5/weather?q=\" +\n        location +\n        \"&appid=603c5722db9c3f97f363233e77ed0f1e\",\n      { mode: \"cors\" }\n    );\n    const weatherData = await response.json();\n    console.log(weatherData);\n    locData.innerHTML = location + \", \" + weatherData.sys.country;\n    tempData.innerHTML = Math.round(tuc.k2c(weatherData.main.temp)) + \"°\";\n    feelsData.innerHTML =\n      \"Feels like: \" + Math.round(tuc.k2c(weatherData.main.feels_like)) + \"°\";\n  } catch (error) {\n    console.error(err);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/get-weather.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _search_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-weather */ \"./src/modules/search-weather.js\");\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction header() {\n  const topBar = document.createElement(\"div\");\n  const LogoDiv = document.createElement(\"div\");\n  const Logo = document.createElement(\"img\");\n  const searchForm = document.createElement(\"form\");\n  const searchBar = document.createElement(\"input\");\n  const searchBtn = document.createElement(\"button\");\n\n  topBar.classList.add(\"top-bar\");\n  LogoDiv.classList.add(\"logo-div\");\n  Logo.classList.add(\"logo\");\n  searchForm.classList.add(\"search-form\");\n  searchBar.classList.add(\"search-bar\");\n  searchBtn.classList.add(\"search-btn\");\n  searchBtn.setAttribute(\"type\", \"submit\");\n  searchBtn.setAttribute(\"name\", \"submit\");\n\n  Logo.src =\n    \"https://breakingweather.net/wp-content/themes/mobileweb/assets/logo1.png\";\n  searchBtn.innerHTML = \"Search\";\n\n  content.appendChild(topBar);\n  topBar.appendChild(LogoDiv);\n  LogoDiv.appendChild(Logo);\n  topBar.appendChild(searchForm);\n  searchForm.appendChild(searchBar);\n  searchForm.appendChild(searchBtn);\n\n  searchForm.addEventListener(\n    \"submit\",\n    function (event) {\n      event.preventDefault();\n      (0,_search_weather__WEBPACK_IMPORTED_MODULE_0__.default)();\n      searchBar.value = \"\";\n    },\n    false\n  );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/search-weather.js":
/*!***************************************!*\
  !*** ./src/modules/search-weather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function searchWeather() {\n  try {\n    const searchForm = document.querySelector(\".search-form\");\n    const searchBar = document.querySelector(\".search-bar\");\n    const searchBtn = document.querySelector(\".search-btn\");\n    const locData = document.querySelector(\".loc-data\");\n    const tempData = document.querySelector(\".temp-data\");\n    const feelsData = document.querySelector(\".feels-data\");\n    let tuc = __webpack_require__(/*! temp-units-conv */ \"./node_modules/temp-units-conv/conversions.js\");\n    const location = searchBar.value;\n    const response = await fetch(\n      \"https://api.openweathermap.org/data/2.5/weather?q=\" +\n        location +\n        \"&appid=603c5722db9c3f97f363233e77ed0f1e\",\n      { mode: \"cors\" }\n    );\n    const weatherData = await response.json();\n    console.log(weatherData);\n    locData.innerHTML = weatherData.name + \", \" + weatherData.sys.country;\n    tempData.innerHTML = Math.round(tuc.k2c(weatherData.main.temp)) + \"°\";\n    feelsData.innerHTML =\n      \"Feels like: \" + Math.round(tuc.k2c(weatherData.main.feels_like)) + \"°\";\n  } catch (error) {\n    console.error(err);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/search-weather.js?");

/***/ }),

/***/ "./src/modules/site-controller.js":
/*!****************************************!*\
  !*** ./src/modules/site-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather */ \"./src/modules/get-weather.js\");\n\n\nfunction displayController() {\n  const content = document.querySelector(\"#content\");\n  const contentArea = document.createElement(\"div\");\n  const cardLoc = document.createElement(\"div\");\n  const locData = document.createElement(\"div\");\n  const cardTemp = document.createElement(\"div\");\n  const tempData = document.createElement(\"div\");\n  const feelsData = document.createElement(\"div\");\n  const feelslike = document.createElement(\"div\");\n\n  contentArea.classList.add(\"content-area\");\n  cardLoc.classList.add(\"card-loc\");\n  locData.classList.add(\"loc-data\");\n  cardTemp.classList.add(\"card-temp\");\n  tempData.classList.add(\"temp-data\");\n  feelsData.classList.add(\"feels-data\");\n  feelslike.classList.add(\"feels-like\");\n\n  content.appendChild(contentArea);\n  contentArea.appendChild(cardLoc);\n  cardLoc.appendChild(locData);\n  contentArea.appendChild(cardTemp);\n  cardTemp.appendChild(tempData);\n  cardTemp.appendChild(feelsData);\n  cardTemp.appendChild(feelslike);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/site-controller.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;