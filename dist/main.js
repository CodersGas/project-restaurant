/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

const boadyTag = document.querySelector("body");

/***********CREATING NAVIGATION BAR******************/

const logo = document.createElement("li");
const img = document.createElement("img");
img.setAttribute("src", "assets/food.jpg");
logo.appendChild(img);

const about = document.createElement("li");
about.innerHTML = "about";

const menu = document.createElement("li");
menu.innerHTML = "menu";

menu.addEventListener("click", () =>{
    if(veg_h2.style.display === "none"){
        veg_h2.style.display = "block";
        nonveg_h2.style.display = "block";
    }
    else{
        veg_h2.style.display = "none";
        nonveg_h2.style.display = "none";
        vegRow.style.display = "none";
        nonvegRow.style.display = "none";
    }
})

const contact = document.createElement("li");
contact.innerHTML = "contact";

const ul = document.createElement("ul");
ul.classList.add("d-flex");
ul.classList.add("justify-content-around");
ul.classList.add("align-items-center");
ul.appendChild(logo);
ul.appendChild(about);
ul.appendChild(menu);
ul.appendChild(contact);

const nav = document.createElement("nav");
nav.appendChild(ul);

boadyTag.appendChild(nav);

/*******************CREATING FOOD MENU*******************/

/***********************************************Veg menu********************************************/
const foodMenuContainer = document.createElement("div");
foodMenuContainer.classList.add("container");
foodMenuContainer.classList.add("food-menu");

const veg_h2 = document.createElement("h2");
veg_h2.style.border = "2px solid lightblue"
veg_h2.innerHTML = "vegetarian menu";
veg_h2.style.display = "none";
foodMenuContainer.appendChild(veg_h2);

const vegRow = document.createElement("div");
vegRow.classList.add("row");
foodMenuContainer.appendChild(vegRow);
vegRow.style.display = "none";


veg_h2.addEventListener("click", () =>{
    if(vegRow.style.display === "none"){
        vegRow.style.display = "flex";
    }
    else{
        vegRow.style.display = "none";
    }
});

/**************section 1**************/
const vegSection1 = document.createElement("section");
vegSection1.classList.add("items");
vegSection1.classList.add("col-md-4");

const section1Div = document.createElement("div");
section1Div.classList.add("img-wrapper");
const imgWrapperImg1 = document.createElement("img");
imgWrapperImg1.setAttribute("src", "assets/rajma-chawal.jpg");

section1Div.appendChild(imgWrapperImg1);
vegSection1.appendChild(section1Div);

const section1H5 = document.createElement("h5");
section1H5.innerHTML = "rajma chawal";
vegSection1.appendChild(section1H5);

const section1P = document.createElement("p");
section1P.classList.add("description");
section1P.innerHTML = "Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.";
vegSection1.appendChild(section1P);

const section1Btn = document.createElement("button");
section1Btn.setAttribute("type", "button");
section1Btn.classList.add("btn");
section1Btn.classList.add("btn-primary");
section1Btn.innerHTML = "place order";

const section1BtnSpan = document.createElement("span");
section1BtnSpan.classList.add("price");
section1BtnSpan.innerHTML = "&#8377; 250";

section1Btn.appendChild(section1BtnSpan);
vegSection1.appendChild(section1Btn);

vegRow.appendChild(vegSection1);

/**********************section 2********************/
const vegSection2 = document.createElement("section");
vegSection2.classList.add("items");
vegSection2.classList.add("col-md-4");

const section2Div = document.createElement("div");
section2Div.classList.add("img-wrapper");
const imgWrapperImg2 = document.createElement("img");
imgWrapperImg2.setAttribute("src", "assets/shahi-paneer.jpg");

section2Div.appendChild(imgWrapperImg2);
vegSection2.appendChild(section2Div);

const section2H5 = document.createElement("h5");
section2H5.innerHTML = "shahi paneer";
vegSection2.appendChild(section2H5);

const section2P = document.createElement("p");
section2P.classList.add("description");
section2P.innerHTML = "Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.";
vegSection2.appendChild(section2P);

const section2Btn = document.createElement("button");
section2Btn.setAttribute("type", "button");
section2Btn.classList.add("btn");
section2Btn.classList.add("btn-primary");
section2Btn.innerHTML = "place order";

const section2BtnSpan = document.createElement("span");
section2BtnSpan.classList.add("price");
section2BtnSpan.innerHTML = "&#8377; 500";

section2Btn.appendChild(section2BtnSpan);
vegSection2.appendChild(section2Btn);

vegRow.appendChild(vegSection2);

/***********************section 3*******************/
const vegSection3 = document.createElement("section");
vegSection3.classList.add("items");
vegSection3.classList.add("col-md-4");

const section3Div = document.createElement("div");
section3Div.classList.add("img-wrapper");
const imgWrapperImg3 = document.createElement("img");
imgWrapperImg3.setAttribute("src", "assets/chhole-bhature.jpg");

section3Div.appendChild(imgWrapperImg3);
vegSection3.appendChild(section3Div);

const section3H5 = document.createElement("h5");
section3H5.innerHTML = "chhole bhature";
vegSection3.appendChild(section3H5);

const section3P = document.createElement("p");
section3P.classList.add("description");
section3P.innerHTML = "Rājmā or Rāzmā is a popular vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice.";
vegSection3.appendChild(section3P);

const section3Btn = document.createElement("button");
section3Btn.setAttribute("type", "button");
section3Btn.classList.add("btn");
section3Btn.classList.add("btn-primary");
section3Btn.innerHTML = "place order";

const section3BtnSpan = document.createElement("span");
section3BtnSpan.classList.add("price");
section3BtnSpan.innerHTML = "&#8377; 120";

section3Btn.appendChild(section3BtnSpan);
vegSection3.appendChild(section3Btn);

vegRow.appendChild(vegSection3);

boadyTag.appendChild(foodMenuContainer);

/*************************************************NON VEGETARIAN MENU**************************************************/
const nonVegContainer = document.createElement("div");
nonVegContainer.classList.add("container");
nonVegContainer.classList.add("non-veg-menu");

const nonveg_h2 = document.createElement("h2");
nonveg_h2.style.border = "2px solid lightblue"
nonveg_h2.innerHTML = "non vegetarian menu";
nonveg_h2.style.display = "none";
nonVegContainer.appendChild(nonveg_h2);

const nonvegRow = document.createElement("div");
nonvegRow.classList.add("row");
nonVegContainer.appendChild(nonvegRow);
nonvegRow.style.display = "none";


nonveg_h2.addEventListener("click", () =>{
    if(nonvegRow.style.display === "none"){
        nonvegRow.style.display = "flex";
    }
    else{
        nonvegRow.style.display = "none";
    }
});

/**************section 1**************/
const nonvegSection1 = document.createElement("section");
nonvegSection1.classList.add("items");
nonvegSection1.classList.add("col-md-4");

const nonvegsection1Div = document.createElement("div");
nonvegsection1Div.classList.add("img-wrapper");
const nonvegimgWrapperImg1 = document.createElement("img");
nonvegimgWrapperImg1.setAttribute("src", "assets/mutton-korma.jpg");

nonvegsection1Div.appendChild(nonvegimgWrapperImg1);
nonvegSection1.appendChild(nonvegsection1Div);

const nonvegsection1H5 = document.createElement("h5");
nonvegsection1H5.innerHTML = "mutton korma";
nonvegSection1.appendChild(nonvegsection1H5);

const nonvegsection1P = document.createElement("p");
nonvegsection1P.classList.add("description");
nonvegsection1P.innerHTML = "A flavourfull mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.";
nonvegSection1.appendChild(nonvegsection1P);

const nonvegsection1Btn = document.createElement("button");
nonvegsection1Btn.setAttribute("type", "button");
nonvegsection1Btn.classList.add("btn");
nonvegsection1Btn.classList.add("btn-primary");
nonvegsection1Btn.innerHTML = "place order";

const nonvegsection1BtnSpan = document.createElement("span");
nonvegsection1BtnSpan.classList.add("price");
nonvegsection1BtnSpan.innerHTML = "&#8377; 300";

nonvegsection1Btn.appendChild(nonvegsection1BtnSpan);
nonvegSection1.appendChild(nonvegsection1Btn);

nonvegRow.appendChild(nonvegSection1);

/**********************section 2********************/
const nonvegSection2 = document.createElement("section");
nonvegSection2.classList.add("items");
nonvegSection2.classList.add("col-md-4");

const nonvegsection2Div = document.createElement("div");
nonvegsection2Div.classList.add("img-wrapper");
const nonvegimgWrapperImg2 = document.createElement("img");
nonvegimgWrapperImg2.setAttribute("src", "assets/biryani.jpg");

nonvegsection2Div.appendChild(nonvegimgWrapperImg2);
nonvegSection2.appendChild(nonvegsection2Div);

const nonvegsection2H5 = document.createElement("h5");
nonvegsection2H5.innerHTML = "malabar fish biryani";
nonvegSection2.appendChild(nonvegsection2H5);

const nonvegsection2P = document.createElement("p");
nonvegsection2P.classList.add("description");
nonvegsection2P.innerHTML = "This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.";
nonvegSection2.appendChild(nonvegsection2P);

const nonvegsection2Btn = document.createElement("button");
nonvegsection2Btn.setAttribute("type", "button");
nonvegsection2Btn.classList.add("btn");
nonvegsection2Btn.classList.add("btn-primary");
nonvegsection2Btn.innerHTML = "place order";

const nonvegsection2BtnSpan = document.createElement("span");
nonvegsection2BtnSpan.classList.add("price");
nonvegsection2BtnSpan.innerHTML = "&#8377; 350";

nonvegsection2Btn.appendChild(nonvegsection2BtnSpan);
nonvegSection2.appendChild(nonvegsection2Btn);

nonvegRow.appendChild(nonvegSection2);

/***********************section 3*******************/
const nonvegSection3 = document.createElement("section");
nonvegSection3.classList.add("items");
nonvegSection3.classList.add("col-md-4");

const nonvegsection3Div = document.createElement("div");
nonvegsection3Div.classList.add("img-wrapper");
const nonvegimgWrapperImg3 = document.createElement("img");
nonvegimgWrapperImg3.setAttribute("src", "assets/chicken65.jpg");

nonvegsection3Div.appendChild(nonvegimgWrapperImg3);
nonvegSection3.appendChild(nonvegsection3Div);

const nonvegsection3H5 = document.createElement("h5");
nonvegsection3H5.innerHTML = "chicken 65";
nonvegSection3.appendChild(nonvegsection3H5);

const nonvegsection3P = document.createElement("p");
nonvegsection3P.classList.add("description");
nonvegsection3P.innerHTML = "Chicken 65 is said to have originated in Madras (Chennai). This delicious, deep-fried recipe of Chicken 65 is from the house of Tamil Nadu. A popular and easy-to-make snack recipe, fried, full of spice with the flavours of ginger, garlic and chillies.";
nonvegSection3.appendChild(nonvegsection3P);

const nonvegsection3Btn = document.createElement("button");
nonvegsection3Btn.setAttribute("type", "button");
nonvegsection3Btn.classList.add("btn");
nonvegsection3Btn.classList.add("btn-primary");
nonvegsection3Btn.innerHTML = "place order";

const nonvegsection3BtnSpan = document.createElement("span");
nonvegsection3BtnSpan.classList.add("price");
nonvegsection3BtnSpan.innerHTML = "&#8377; 490";

nonvegsection3Btn.appendChild(nonvegsection3BtnSpan);
nonvegSection3.appendChild(nonvegsection3Btn);

nonvegRow.appendChild(nonvegSection3);

boadyTag.appendChild(nonVegContainer);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBib2FkeVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4vKioqKioqKioqKipDUkVBVElORyBOQVZJR0FUSU9OIEJBUioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2Zvb2QuanBnXCIpO1xubG9nby5hcHBlbmRDaGlsZChpbWcpO1xuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmFib3V0LmlubmVySFRNTCA9IFwiYWJvdXRcIjtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbm1lbnUuaW5uZXJIVE1MID0gXCJtZW51XCI7XG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKHZlZ19oMi5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgIHZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBub252ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgdmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm9udmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KVxuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuY29udGFjdC5pbm5lckhUTUwgPSBcImNvbnRhY3RcIjtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG51bC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIpO1xudWwuY2xhc3NMaXN0LmFkZChcImp1c3RpZnktY29udGVudC1hcm91bmRcIik7XG51bC5jbGFzc0xpc3QuYWRkKFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xudWwuYXBwZW5kQ2hpbGQobG9nbyk7XG51bC5hcHBlbmRDaGlsZChhYm91dCk7XG51bC5hcHBlbmRDaGlsZChtZW51KTtcbnVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmFwcGVuZENoaWxkKHVsKTtcblxuYm9hZHlUYWcuYXBwZW5kQ2hpbGQobmF2KTtcblxuLyoqKioqKioqKioqKioqKioqKipDUkVBVElORyBGT09EIE1FTlUqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipWZWcgbWVudSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgZm9vZE1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vZE1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmZvb2RNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kLW1lbnVcIik7XG5cbmNvbnN0IHZlZ19oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnZlZ19oMi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBsaWdodGJsdWVcIlxudmVnX2gyLmlubmVySFRNTCA9IFwidmVnZXRhcmlhbiBtZW51XCI7XG52ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuZm9vZE1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodmVnX2gyKTtcblxuY29uc3QgdmVnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnZlZ1Jvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuZm9vZE1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodmVnUm93KTtcbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxudmVnX2gyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZih2ZWdSb3cuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICB2ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB2ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuXG4vKioqKioqKioqKioqKipzZWN0aW9uIDEqKioqKioqKioqKioqKi9cbmNvbnN0IHZlZ1NlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG52ZWdTZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG52ZWdTZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLTRcIik7XG5cbmNvbnN0IHNlY3Rpb24xRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlY3Rpb24xRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcHBlclwiKTtcbmNvbnN0IGltZ1dyYXBwZXJJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZ1dyYXBwZXJJbWcxLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9yYWptYS1jaGF3YWwuanBnXCIpO1xuXG5zZWN0aW9uMURpdi5hcHBlbmRDaGlsZChpbWdXcmFwcGVySW1nMSk7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMURpdik7XG5cbmNvbnN0IHNlY3Rpb24xSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5zZWN0aW9uMUg1LmlubmVySFRNTCA9IFwicmFqbWEgY2hhd2FsXCI7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMUg1KTtcblxuY29uc3Qgc2VjdGlvbjFQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uMVAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuc2VjdGlvbjFQLmlubmVySFRNTCA9IFwiUsSBam3EgSBvciBSxIF6bcSBIGlzIGEgcG9wdWxhciB2ZWdldGFyaWFuIGRpc2gsIG9yaWdpbmF0aW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIGNvbnNpc3Rpbmcgb2YgcmVkIGtpZG5leSBiZWFucyBpbiBhIHRoaWNrIGdyYXZ5IHdpdGggbWFueSBJbmRpYW4gd2hvbGUgc3BpY2VzLCBhbmQgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCByaWNlLlwiO1xudmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQoc2VjdGlvbjFQKTtcblxuY29uc3Qgc2VjdGlvbjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2VjdGlvbjFCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnNlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5zZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5zZWN0aW9uMUJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IHNlY3Rpb24xQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc2VjdGlvbjFCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbnNlY3Rpb24xQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMjUwXCI7XG5cbnNlY3Rpb24xQnRuLmFwcGVuZENoaWxkKHNlY3Rpb24xQnRuU3Bhbik7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMUJ0bik7XG5cbnZlZ1Jvdy5hcHBlbmRDaGlsZCh2ZWdTZWN0aW9uMSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqc2VjdGlvbiAyKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCB2ZWdTZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xudmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xudmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBzZWN0aW9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zZWN0aW9uMkRpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBpbWdXcmFwcGVySW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWdXcmFwcGVySW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvc2hhaGktcGFuZWVyLmpwZ1wiKTtcblxuc2VjdGlvbjJEaXYuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlckltZzIpO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJEaXYpO1xuXG5jb25zdCBzZWN0aW9uMkg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuc2VjdGlvbjJINS5pbm5lckhUTUwgPSBcInNoYWhpIHBhbmVlclwiO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJINSk7XG5cbmNvbnN0IHNlY3Rpb24yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvbjJQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbnNlY3Rpb24yUC5pbm5lckhUTUwgPSBcIlLEgWptxIEgb3IgUsSBem3EgSBpcyBhIHBvcHVsYXIgdmVnZXRhcmlhbiBkaXNoLCBvcmlnaW5hdGluZyBmcm9tIHRoZSBJbmRpYW4gc3ViY29udGluZW50LCBjb25zaXN0aW5nIG9mIHJlZCBraWRuZXkgYmVhbnMgaW4gYSB0aGljayBncmF2eSB3aXRoIG1hbnkgSW5kaWFuIHdob2xlIHNwaWNlcywgYW5kIGlzIHVzdWFsbHkgc2VydmVkIHdpdGggcmljZS5cIjtcbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKHNlY3Rpb24yUCk7XG5cbmNvbnN0IHNlY3Rpb24yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNlY3Rpb24yQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5zZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuc2VjdGlvbjJCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xuc2VjdGlvbjJCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBzZWN0aW9uMkJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnNlY3Rpb24yQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5zZWN0aW9uMkJ0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDUwMFwiO1xuXG5zZWN0aW9uMkJ0bi5hcHBlbmRDaGlsZChzZWN0aW9uMkJ0blNwYW4pO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJCdG4pO1xuXG52ZWdSb3cuYXBwZW5kQ2hpbGQodmVnU2VjdGlvbjIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKipzZWN0aW9uIDMqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgdmVnU2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgc2VjdGlvbjNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VjdGlvbjNEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3QgaW1nV3JhcHBlckltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nV3JhcHBlckltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2NoaG9sZS1iaGF0dXJlLmpwZ1wiKTtcblxuc2VjdGlvbjNEaXYuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlckltZzMpO1xudmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQoc2VjdGlvbjNEaXYpO1xuXG5jb25zdCBzZWN0aW9uM0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuc2VjdGlvbjNINS5pbm5lckhUTUwgPSBcImNoaG9sZSBiaGF0dXJlXCI7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM0g1KTtcblxuY29uc3Qgc2VjdGlvbjNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uM1AuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuc2VjdGlvbjNQLmlubmVySFRNTCA9IFwiUsSBam3EgSBvciBSxIF6bcSBIGlzIGEgcG9wdWxhciB2ZWdldGFyaWFuIGRpc2gsIG9yaWdpbmF0aW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIGNvbnNpc3Rpbmcgb2YgcmVkIGtpZG5leSBiZWFucyBpbiBhIHRoaWNrIGdyYXZ5IHdpdGggbWFueSBJbmRpYW4gd2hvbGUgc3BpY2VzLCBhbmQgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCByaWNlLlwiO1xudmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQoc2VjdGlvbjNQKTtcblxuY29uc3Qgc2VjdGlvbjNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2VjdGlvbjNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnNlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5zZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5zZWN0aW9uM0J0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IHNlY3Rpb24zQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc2VjdGlvbjNCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbnNlY3Rpb24zQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMTIwXCI7XG5cbnNlY3Rpb24zQnRuLmFwcGVuZENoaWxkKHNlY3Rpb24zQnRuU3Bhbik7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM0J0bik7XG5cbnZlZ1Jvdy5hcHBlbmRDaGlsZCh2ZWdTZWN0aW9uMyk7XG5cbmJvYWR5VGFnLmFwcGVuZENoaWxkKGZvb2RNZW51Q29udGFpbmVyKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipOT04gVkVHRVRBUklBTiBNRU5VKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBub25WZWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm9uVmVnQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5ub25WZWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vbi12ZWctbWVudVwiKTtcblxuY29uc3Qgbm9udmVnX2gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xubm9udmVnX2gyLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGxpZ2h0Ymx1ZVwiXG5ub252ZWdfaDIuaW5uZXJIVE1MID0gXCJub24gdmVnZXRhcmlhbiBtZW51XCI7XG5ub252ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xubm9uVmVnQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vbnZlZ19oMik7XG5cbmNvbnN0IG5vbnZlZ1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbm5vblZlZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChub252ZWdSb3cpO1xubm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG5ub252ZWdfaDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKG5vbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgIG5vbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG5vbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKnNlY3Rpb24gMSoqKioqKioqKioqKioqL1xuY29uc3Qgbm9udmVnU2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm5vbnZlZ1NlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbm5vbnZlZ1NlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm9udmVnc2VjdGlvbjFEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3Qgbm9udmVnaW1nV3JhcHBlckltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubm9udmVnaW1nV3JhcHBlckltZzEuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL211dHRvbi1rb3JtYS5qcGdcIik7XG5cbm5vbnZlZ3NlY3Rpb24xRGl2LmFwcGVuZENoaWxkKG5vbnZlZ2ltZ1dyYXBwZXJJbWcxKTtcbm5vbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24xRGl2KTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjFINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbm5vbnZlZ3NlY3Rpb24xSDUuaW5uZXJIVE1MID0gXCJtdXR0b24ga29ybWFcIjtcbm5vbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24xSDUpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm5vbnZlZ3NlY3Rpb24xUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5ub252ZWdzZWN0aW9uMVAuaW5uZXJIVE1MID0gXCJBIGZsYXZvdXJmdWxsIG11dHRvbiBjdXJyeSwgd2hlcmUgdGhlIG1lYXQgaXMgc3RpcnJlZCB3aXRoIGN1cmQsIGdhcmxpYy1naW5nZXIgcGFzdGUsIGNsb3ZlcywgY2FyZGFtb20gYW5kIGNpbm5hbW9uIHN0aWNrcy5cIjtcbm5vbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24xUCk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24xQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub252ZWdzZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xubm9udmVnc2VjdGlvbjFCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xubm9udmVnc2VjdGlvbjFCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMUJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5ub252ZWdzZWN0aW9uMUJ0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDMwMFwiO1xuXG5ub252ZWdzZWN0aW9uMUJ0bi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMUJ0blNwYW4pO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFCdG4pO1xuXG5ub252ZWdSb3cuYXBwZW5kQ2hpbGQobm9udmVnU2VjdGlvbjEpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKnNlY3Rpb24gMioqKioqKioqKioqKioqKioqKioqL1xuY29uc3Qgbm9udmVnU2VjdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm5vbnZlZ1NlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbm5vbnZlZ1NlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm9udmVnc2VjdGlvbjJEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3Qgbm9udmVnaW1nV3JhcHBlckltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubm9udmVnaW1nV3JhcHBlckltZzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2JpcnlhbmkuanBnXCIpO1xuXG5ub252ZWdzZWN0aW9uMkRpdi5hcHBlbmRDaGlsZChub252ZWdpbWdXcmFwcGVySW1nMik7XG5ub252ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMkRpdik7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24ySDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5ub252ZWdzZWN0aW9uMkg1LmlubmVySFRNTCA9IFwibWFsYWJhciBmaXNoIGJpcnlhbmlcIjtcbm5vbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24ySDUpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMlAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm5vbnZlZ3NlY3Rpb24yUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5ub252ZWdzZWN0aW9uMlAuaW5uZXJIVE1MID0gXCJUaGlzIGNsYXNzaWMgTWFsYWJhciBGaXNoIEJpcnlhbmkgY2FuIGJlIGRldm91cmVkIGF0IGFsbCB0aW1lcy4gRW5qb3kgdGhlIGRlbGljaW91cyB0YXN0ZSBvZiB0aGlzIGV2ZXItY2hhcm1pbmcgZGlzaC5cIjtcbm5vbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24yUCk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub252ZWdzZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xubm9udmVnc2VjdGlvbjJCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xubm9udmVnc2VjdGlvbjJCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMkJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5ub252ZWdzZWN0aW9uMkJ0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDM1MFwiO1xuXG5ub252ZWdzZWN0aW9uMkJ0bi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMkJ0blNwYW4pO1xubm9udmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjJCdG4pO1xuXG5ub252ZWdSb3cuYXBwZW5kQ2hpbGQobm9udmVnU2VjdGlvbjIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKipzZWN0aW9uIDMqKioqKioqKioqKioqKioqKioqL1xuY29uc3Qgbm9udmVnU2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm5vbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbm5vbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubm9udmVnc2VjdGlvbjNEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3Qgbm9udmVnaW1nV3JhcHBlckltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xubm9udmVnaW1nV3JhcHBlckltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2NoaWNrZW42NS5qcGdcIik7XG5cbm5vbnZlZ3NlY3Rpb24zRGl2LmFwcGVuZENoaWxkKG5vbnZlZ2ltZ1dyYXBwZXJJbWczKTtcbm5vbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zRGl2KTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjNINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbm5vbnZlZ3NlY3Rpb24zSDUuaW5uZXJIVE1MID0gXCJjaGlja2VuIDY1XCI7XG5ub252ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uM0g1KTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5ub252ZWdzZWN0aW9uM1AuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xubm9udmVnc2VjdGlvbjNQLmlubmVySFRNTCA9IFwiQ2hpY2tlbiA2NSBpcyBzYWlkIHRvIGhhdmUgb3JpZ2luYXRlZCBpbiBNYWRyYXMgKENoZW5uYWkpLiBUaGlzIGRlbGljaW91cywgZGVlcC1mcmllZCByZWNpcGUgb2YgQ2hpY2tlbiA2NSBpcyBmcm9tIHRoZSBob3VzZSBvZiBUYW1pbCBOYWR1LiBBIHBvcHVsYXIgYW5kIGVhc3ktdG8tbWFrZSBzbmFjayByZWNpcGUsIGZyaWVkLCBmdWxsIG9mIHNwaWNlIHdpdGggdGhlIGZsYXZvdXJzIG9mIGdpbmdlciwgZ2FybGljIGFuZCBjaGlsbGllcy5cIjtcbm5vbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zUCk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub252ZWdzZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xubm9udmVnc2VjdGlvbjNCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xubm9udmVnc2VjdGlvbjNCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM0J0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5ub252ZWdzZWN0aW9uM0J0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDQ5MFwiO1xuXG5ub252ZWdzZWN0aW9uM0J0bi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uM0J0blNwYW4pO1xubm9udmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjNCdG4pO1xuXG5ub252ZWdSb3cuYXBwZW5kQ2hpbGQobm9udmVnU2VjdGlvbjMpO1xuXG5ib2FkeVRhZy5hcHBlbmRDaGlsZChub25WZWdDb250YWluZXIpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9