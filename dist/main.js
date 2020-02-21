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
        dessert_h2.style.display = "block";
    }
    else{
        veg_h2.style.display = "none";
        nonveg_h2.style.display = "none";
        
        vegRow.style.display = "none";
        nonvegRow.style.display = "none";
        
        dessert_h2.style.display = "none";
        dessertRow.style.display = "none";

        formContainer.style.display = "none";
    }
});

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
veg_h2.innerHTML = "&#127823; vegetarian menu &#127823;";
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
nonveg_h2.innerHTML = " &#127831; non vegetarian menu &#127831;";
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

/******************************DESSERT SECTION*************************/
const dessertContainer = document.createElement("div");
dessertContainer.classList.add("container");
dessertContainer.classList.add("dessert-menu");

const dessert_h2 = document.createElement("h2");
dessert_h2.style.border = "2px solid lightblue"
dessert_h2.innerHTML = " &#127854; dessert menu &#127854;";
dessert_h2.style.display = "none";
dessertContainer.appendChild(dessert_h2);

const dessertRow = document.createElement("div");
dessertRow.classList.add("row");
dessertContainer.appendChild(dessertRow);
dessertRow.style.display = "none";


dessert_h2.addEventListener("click", () =>{
    if(dessertRow.style.display === "none"){
        dessertRow.style.display = "flex";
    }
    else{
        dessertRow.style.display = "none";
    }
});

/**************section 1**************/
const dessertSection1 = document.createElement("section");
dessertSection1.classList.add("items");
dessertSection1.classList.add("col-md-4");

const dessertsection1Div = document.createElement("div");
dessertsection1Div.classList.add("img-wrapper");
const dessertimgWrapperImg1 = document.createElement("img");
dessertimgWrapperImg1.setAttribute("src", "assets/gulab-jamun.jpg");

dessertsection1Div.appendChild(dessertimgWrapperImg1);
dessertSection1.appendChild(dessertsection1Div);

const dessertsection1H5 = document.createElement("h5");
dessertsection1H5.innerHTML = "gulab jamun";
dessertSection1.appendChild(dessertsection1H5);

const dessertsection1P = document.createElement("p");
dessertsection1P.classList.add("description");
dessertsection1P.innerHTML = "Gulab jamun is a milk-solid-based sweet from the Indian subcontinent, popular in India, Nepal, Pakistan, the Maldives, and Bangladesh, as well as Myanmar.";
dessertSection1.appendChild(dessertsection1P);

const dessertsection1Btn = document.createElement("button");
dessertsection1Btn.setAttribute("type", "button");
dessertsection1Btn.classList.add("btn");
dessertsection1Btn.classList.add("btn-primary");
dessertsection1Btn.innerHTML = "place order";

const dessertsection1BtnSpan = document.createElement("span");
dessertsection1BtnSpan.classList.add("price");
dessertsection1BtnSpan.innerHTML = "&#8377; 120";

dessertsection1Btn.appendChild(dessertsection1BtnSpan);
dessertSection1.appendChild(dessertsection1Btn);

dessertRow.appendChild(dessertSection1);

/**************section 2**************/
const dessertSection2 = document.createElement("section");
dessertSection2.classList.add("items");
dessertSection2.classList.add("col-md-4");

const dessertsection2Div = document.createElement("div");
dessertsection2Div.classList.add("img-wrapper");
const dessertimgWrapperImg2 = document.createElement("img");
dessertimgWrapperImg2.setAttribute("src", "assets/kheer.jpg");

dessertsection2Div.appendChild(dessertimgWrapperImg2);
dessertSection2.appendChild(dessertsection2Div);

const dessertsection2H5 = document.createElement("h5");
dessertsection2H5.innerHTML = "kheer";
dessertSection2.appendChild(dessertsection2H5);

const dessertsection2P = document.createElement("p");
dessertsection2P.classList.add("description");
dessertsection2P.innerHTML = "Kheer or firni is a pudding, originating from the Indian subcontinent, made by boiling milk and sugar with one of the following: rice, broken wheat, tapioca, vermicelli, or sweet corn. It is flavoured with cardamom, raisins, saffron, cashews, pistachios, almonds or other dry fruits and nuts. ";
dessertSection2.appendChild(dessertsection2P);

const dessertsection2Btn = document.createElement("button");
dessertsection2Btn.setAttribute("type", "button");
dessertsection2Btn.classList.add("btn");
dessertsection2Btn.classList.add("btn-primary");
dessertsection2Btn.innerHTML = "place order";

const dessertsection2BtnSpan = document.createElement("span");
dessertsection2BtnSpan.classList.add("price");
dessertsection2BtnSpan.innerHTML = "&#8377; 250";

dessertsection2Btn.appendChild(dessertsection2BtnSpan);
dessertSection2.appendChild(dessertsection2Btn);

dessertRow.appendChild(dessertSection2);

/**************section 3**************/
const dessertSection3 = document.createElement("section");
dessertSection3.classList.add("items");
dessertSection3.classList.add("col-md-4");

const dessertsection3Div = document.createElement("div");
dessertsection3Div.classList.add("img-wrapper");
const dessertimgWrapperImg3 = document.createElement("img");
dessertimgWrapperImg3.setAttribute("src", "assets/halwa.jpg");

dessertsection3Div.appendChild(dessertimgWrapperImg3);
dessertSection3.appendChild(dessertsection3Div);

const dessertsection3H5 = document.createElement("h5");
dessertsection3H5.innerHTML = "gajar ka halwa";
dessertSection3.appendChild(dessertsection3H5);

const dessertsection3P = document.createElement("p");
dessertsection3P.classList.add("description");
dessertsection3P.innerHTML = "Gajar ka halwa, also known as gajorer halua, Gajrela, Gajar Pak, and Carrot halwa is a carrot-based sweet dessert pudding from the Indian subcontinent. It is made by placing grated carrots in a pot containing a specific amount of water, milk and sugar and then cooking while stirring regularly";
dessertSection3.appendChild(dessertsection3P);

const dessertsection3Btn = document.createElement("button");
dessertsection3Btn.setAttribute("type", "button");
dessertsection3Btn.classList.add("btn");
dessertsection3Btn.classList.add("btn-primary");
dessertsection3Btn.innerHTML = "place order";

const dessertsection3BtnSpan = document.createElement("span");
dessertsection3BtnSpan.classList.add("price");
dessertsection3BtnSpan.innerHTML = "&#8377; 175";

dessertsection3Btn.appendChild(dessertsection3BtnSpan);
dessertSection3.appendChild(dessertsection3Btn);

dessertRow.appendChild(dessertSection3);
boadyTag.appendChild(dessertContainer);

/**********************************CONTACT FORM**********************************/
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
formContainer.classList.add("container");
formContainer.style.display = "none";

const formRow = document.createElement("div");
formRow.classList.add("row");
formContainer.appendChild(formRow);

const mainForm = document.createElement("form");
mainForm.classList.add("col-md-12");
mainForm.classList.add("main-form");
mainForm.setAttribute("method", "POST");
formRow.appendChild(mainForm);

const closeBtn = document.createElement("h4");
closeBtn.classList.add("close-form");
closeBtn.innerHTML = "X";
mainForm.appendChild(closeBtn);

closeBtn.addEventListener("click", () =>{
    if(formCont.style.display === "block"){
        formCont.style.display = "none";
    }
})

const nameEntry = document.createElement("h5");
nameEntry.innerHTML = "name";
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "enter your name");
mainForm.appendChild(nameEntry);
mainForm.appendChild(nameInput);

const addressEntry = document.createElement("h5");
addressEntry.innerHTML = "address";
const addressInput = document.createElement("input");
addressInput.setAttribute("type", "text");
addressInput.setAttribute("placeholder", "enter your address");
mainForm.appendChild(addressEntry);
mainForm.appendChild(addressInput);

const numberEntry = document.createElement("h5");
numberEntry.innerHTML = "number";
const numberInput = document.createElement("input");
numberInput.setAttribute("type", "number");
numberInput.setAttribute("placeholder", "phone number");
mainForm.appendChild(numberEntry);
mainForm.appendChild(numberInput);

const dishName = document.createElement("h5");
dishName.innerHTML = "dish name";
const dishInput = document.createElement("input");
dishInput.style.textTransform = "capitalize";
mainForm.appendChild(dishName);
mainForm.appendChild(dishInput);

const quantity = document.createElement("h5");
quantity.innerHTML = "quantity";
const quantityInput = document.createElement("input");
quantityInput.setAttribute("type", "number");
quantityInput.setAttribute("min", "1");
quantityInput.setAttribute("max", "8")
quantityInput.value = 1;
mainForm.appendChild(quantity);
mainForm.appendChild(quantityInput);

const btnDiv = document.createElement("div");
btnDiv.classList.add("confirmButtons");

const btnH5 = document.createElement("h5");
btnH5.classList.add("confirm");
btnH5.innerHTML = "confirm order";
btnDiv.appendChild(btnH5);

const yesBtn = document.createElement("button");
yesBtn.setAttribute("type", "button");
yesBtn.innerHTML = "yes";
btnDiv.appendChild(yesBtn);

const noBtn = document.createElement("button");
noBtn.setAttribute("type", "button");
noBtn.innerHTML = "no";
btnDiv.appendChild(noBtn);

mainForm.appendChild(btnDiv);

boadyTag.appendChild(formContainer);


/***********functionality for opening order form on clicking place order*************/
const formCont = document.querySelector(".form-container");

document.querySelectorAll("button").forEach(button =>{
    if(button.innerHTML.includes("place order")){
        button.addEventListener("click", () => {
            if(formCont.style.display === "none"){
                formCont.style.display = "block";
                dishInput.innerHTML = button.parentElement.querySelector("h5").innerHTML;
                button.parentElement.appendChild(formCont);
            }
            else{
                formCont.style.display = "none";
            }
        });
    }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGJvYWR5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8qKioqKioqKioqKkNSRUFUSU5HIE5BVklHQVRJT04gQkFSKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvZm9vZC5qcGdcIik7XG5sb2dvLmFwcGVuZENoaWxkKGltZyk7XG5cbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuYWJvdXQuaW5uZXJIVE1MID0gXCJhYm91dFwiO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xubWVudS5pbm5lckhUTUwgPSBcIm1lbnVcIjtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgaWYodmVnX2gyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKXtcbiAgICAgICAgdmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG5vbnZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkZXNzZXJ0X2gyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5vbnZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIFxuICAgICAgICB2ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub252ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgZGVzc2VydF9oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRlc3NlcnRSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuY29udGFjdC5pbm5lckhUTUwgPSBcImNvbnRhY3RcIjtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG51bC5jbGFzc0xpc3QuYWRkKFwiZC1mbGV4XCIpO1xudWwuY2xhc3NMaXN0LmFkZChcImp1c3RpZnktY29udGVudC1hcm91bmRcIik7XG51bC5jbGFzc0xpc3QuYWRkKFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xudWwuYXBwZW5kQ2hpbGQobG9nbyk7XG51bC5hcHBlbmRDaGlsZChhYm91dCk7XG51bC5hcHBlbmRDaGlsZChtZW51KTtcbnVsLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2LmFwcGVuZENoaWxkKHVsKTtcblxuYm9hZHlUYWcuYXBwZW5kQ2hpbGQobmF2KTtcblxuLyoqKioqKioqKioqKioqKioqKipDUkVBVElORyBGT09EIE1FTlUqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipWZWcgbWVudSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgZm9vZE1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vZE1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmZvb2RNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kLW1lbnVcIik7XG5cbmNvbnN0IHZlZ19oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnZlZ19oMi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCBsaWdodGJsdWVcIlxudmVnX2gyLmlubmVySFRNTCA9IFwiJiMxMjc4MjM7IHZlZ2V0YXJpYW4gbWVudSAmIzEyNzgyMztcIjtcbnZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5mb29kTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZWdfaDIpO1xuXG5jb25zdCB2ZWdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudmVnUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5mb29kTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZWdSb3cpO1xudmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG52ZWdfaDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKHZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgIHZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKnNlY3Rpb24gMSoqKioqKioqKioqKioqL1xuY29uc3QgdmVnU2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnZlZ1NlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbnZlZ1NlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgc2VjdGlvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VjdGlvbjFEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3QgaW1nV3JhcHBlckltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nV3JhcHBlckltZzEuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL3Jham1hLWNoYXdhbC5qcGdcIik7XG5cbnNlY3Rpb24xRGl2LmFwcGVuZENoaWxkKGltZ1dyYXBwZXJJbWcxKTtcbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKHNlY3Rpb24xRGl2KTtcblxuY29uc3Qgc2VjdGlvbjFINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbnNlY3Rpb24xSDUuaW5uZXJIVE1MID0gXCJyYWptYSBjaGF3YWxcIjtcbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKHNlY3Rpb24xSDUpO1xuXG5jb25zdCBzZWN0aW9uMVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnNlY3Rpb24xUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5zZWN0aW9uMVAuaW5uZXJIVE1MID0gXCJSxIFqbcSBIG9yIFLEgXptxIEgaXMgYSBwb3B1bGFyIHZlZ2V0YXJpYW4gZGlzaCwgb3JpZ2luYXRpbmcgZnJvbSB0aGUgSW5kaWFuIHN1YmNvbnRpbmVudCwgY29uc2lzdGluZyBvZiByZWQga2lkbmV5IGJlYW5zIGluIGEgdGhpY2sgZ3Jhdnkgd2l0aCBtYW55IEluZGlhbiB3aG9sZSBzcGljZXMsIGFuZCBpcyB1c3VhbGx5IHNlcnZlZCB3aXRoIHJpY2UuXCI7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMVApO1xuXG5jb25zdCBzZWN0aW9uMUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zZWN0aW9uMUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuc2VjdGlvbjFCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbnNlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tcHJpbWFyeVwiKTtcbnNlY3Rpb24xQnRuLmlubmVySFRNTCA9IFwicGxhY2Ugb3JkZXJcIjtcblxuY29uc3Qgc2VjdGlvbjFCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5zZWN0aW9uMUJ0blNwYW4uY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuc2VjdGlvbjFCdG5TcGFuLmlubmVySFRNTCA9IFwiJiM4Mzc3OyAyNTBcIjtcblxuc2VjdGlvbjFCdG4uYXBwZW5kQ2hpbGQoc2VjdGlvbjFCdG5TcGFuKTtcbnZlZ1NlY3Rpb24xLmFwcGVuZENoaWxkKHNlY3Rpb24xQnRuKTtcblxudmVnUm93LmFwcGVuZENoaWxkKHZlZ1NlY3Rpb24xKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKipzZWN0aW9uIDIqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IHZlZ1NlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG52ZWdTZWN0aW9uMi5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG52ZWdTZWN0aW9uMi5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLTRcIik7XG5cbmNvbnN0IHNlY3Rpb24yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlY3Rpb24yRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcHBlclwiKTtcbmNvbnN0IGltZ1dyYXBwZXJJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZ1dyYXBwZXJJbWcyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9zaGFoaS1wYW5lZXIuanBnXCIpO1xuXG5zZWN0aW9uMkRpdi5hcHBlbmRDaGlsZChpbWdXcmFwcGVySW1nMik7XG52ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChzZWN0aW9uMkRpdik7XG5cbmNvbnN0IHNlY3Rpb24ySDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5zZWN0aW9uMkg1LmlubmVySFRNTCA9IFwic2hhaGkgcGFuZWVyXCI7XG52ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChzZWN0aW9uMkg1KTtcblxuY29uc3Qgc2VjdGlvbjJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uMlAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuc2VjdGlvbjJQLmlubmVySFRNTCA9IFwiUsSBam3EgSBvciBSxIF6bcSBIGlzIGEgcG9wdWxhciB2ZWdldGFyaWFuIGRpc2gsIG9yaWdpbmF0aW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIGNvbnNpc3Rpbmcgb2YgcmVkIGtpZG5leSBiZWFucyBpbiBhIHRoaWNrIGdyYXZ5IHdpdGggbWFueSBJbmRpYW4gd2hvbGUgc3BpY2VzLCBhbmQgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCByaWNlLlwiO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJQKTtcblxuY29uc3Qgc2VjdGlvbjJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2VjdGlvbjJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnNlY3Rpb24yQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5zZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5zZWN0aW9uMkJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IHNlY3Rpb24yQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc2VjdGlvbjJCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbnNlY3Rpb24yQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgNTAwXCI7XG5cbnNlY3Rpb24yQnRuLmFwcGVuZENoaWxkKHNlY3Rpb24yQnRuU3Bhbik7XG52ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChzZWN0aW9uMkJ0bik7XG5cbnZlZ1Jvdy5hcHBlbmRDaGlsZCh2ZWdTZWN0aW9uMik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKnNlY3Rpb24gMyoqKioqKioqKioqKioqKioqKiovXG5jb25zdCB2ZWdTZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xudmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xudmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBzZWN0aW9uM0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zZWN0aW9uM0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBpbWdXcmFwcGVySW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWdXcmFwcGVySW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvY2hob2xlLWJoYXR1cmUuanBnXCIpO1xuXG5zZWN0aW9uM0Rpdi5hcHBlbmRDaGlsZChpbWdXcmFwcGVySW1nMyk7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM0Rpdik7XG5cbmNvbnN0IHNlY3Rpb24zSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5zZWN0aW9uM0g1LmlubmVySFRNTCA9IFwiY2hob2xlIGJoYXR1cmVcIjtcbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKHNlY3Rpb24zSDUpO1xuXG5jb25zdCBzZWN0aW9uM1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnNlY3Rpb24zUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5zZWN0aW9uM1AuaW5uZXJIVE1MID0gXCJSxIFqbcSBIG9yIFLEgXptxIEgaXMgYSBwb3B1bGFyIHZlZ2V0YXJpYW4gZGlzaCwgb3JpZ2luYXRpbmcgZnJvbSB0aGUgSW5kaWFuIHN1YmNvbnRpbmVudCwgY29uc2lzdGluZyBvZiByZWQga2lkbmV5IGJlYW5zIGluIGEgdGhpY2sgZ3Jhdnkgd2l0aCBtYW55IEluZGlhbiB3aG9sZSBzcGljZXMsIGFuZCBpcyB1c3VhbGx5IHNlcnZlZCB3aXRoIHJpY2UuXCI7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM1ApO1xuXG5jb25zdCBzZWN0aW9uM0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zZWN0aW9uM0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuc2VjdGlvbjNCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbnNlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tcHJpbWFyeVwiKTtcbnNlY3Rpb24zQnRuLmlubmVySFRNTCA9IFwicGxhY2Ugb3JkZXJcIjtcblxuY29uc3Qgc2VjdGlvbjNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5zZWN0aW9uM0J0blNwYW4uY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuc2VjdGlvbjNCdG5TcGFuLmlubmVySFRNTCA9IFwiJiM4Mzc3OyAxMjBcIjtcblxuc2VjdGlvbjNCdG4uYXBwZW5kQ2hpbGQoc2VjdGlvbjNCdG5TcGFuKTtcbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKHNlY3Rpb24zQnRuKTtcblxudmVnUm93LmFwcGVuZENoaWxkKHZlZ1NlY3Rpb24zKTtcblxuYm9hZHlUYWcuYXBwZW5kQ2hpbGQoZm9vZE1lbnVDb250YWluZXIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk5PTiBWRUdFVEFSSUFOIE1FTlUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IG5vblZlZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub25WZWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbm5vblZlZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9uLXZlZy1tZW51XCIpO1xuXG5jb25zdCBub252ZWdfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5ub252ZWdfaDIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgbGlnaHRibHVlXCJcbm5vbnZlZ19oMi5pbm5lckhUTUwgPSBcIiAmIzEyNzgzMTsgbm9uIHZlZ2V0YXJpYW4gbWVudSAmIzEyNzgzMTtcIjtcbm5vbnZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5ub25WZWdDb250YWluZXIuYXBwZW5kQ2hpbGQobm9udmVnX2gyKTtcblxuY29uc3Qgbm9udmVnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5vbnZlZ1Jvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xubm9uVmVnQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vbnZlZ1Jvdyk7XG5ub252ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cbm5vbnZlZ19oMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgaWYobm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKXtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcblxuLyoqKioqKioqKioqKioqc2VjdGlvbiAxKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uMURpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvbXV0dG9uLWtvcm1hLmpwZ1wiKTtcblxubm9udmVnc2VjdGlvbjFEaXYuYXBwZW5kQ2hpbGQobm9udmVnaW1nV3JhcHBlckltZzEpO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFEaXYpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMUg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubm9udmVnc2VjdGlvbjFINS5pbm5lckhUTUwgPSBcIm11dHRvbiBrb3JtYVwiO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFINSk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24xUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubm9udmVnc2VjdGlvbjFQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbm5vbnZlZ3NlY3Rpb24xUC5pbm5lckhUTUwgPSBcIkEgZmxhdm91cmZ1bGwgbXV0dG9uIGN1cnJ5LCB3aGVyZSB0aGUgbWVhdCBpcyBzdGlycmVkIHdpdGggY3VyZCwgZ2FybGljLWdpbmdlciBwYXN0ZSwgY2xvdmVzLCBjYXJkYW1vbSBhbmQgY2lubmFtb24gc3RpY2tzLlwiO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjFCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uMUJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24xQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjFCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMzAwXCI7XG5cbm5vbnZlZ3NlY3Rpb24xQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24xQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMUJ0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqc2VjdGlvbiAyKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uMkRpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvYmlyeWFuaS5qcGdcIik7XG5cbm5vbnZlZ3NlY3Rpb24yRGl2LmFwcGVuZENoaWxkKG5vbnZlZ2ltZ1dyYXBwZXJJbWcyKTtcbm5vbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24yRGl2KTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjJINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbm5vbnZlZ3NlY3Rpb24ySDUuaW5uZXJIVE1MID0gXCJtYWxhYmFyIGZpc2ggYmlyeWFuaVwiO1xubm9udmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjJINSk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubm9udmVnc2VjdGlvbjJQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbm5vbnZlZ3NlY3Rpb24yUC5pbm5lckhUTUwgPSBcIlRoaXMgY2xhc3NpYyBNYWxhYmFyIEZpc2ggQmlyeWFuaSBjYW4gYmUgZGV2b3VyZWQgYXQgYWxsIHRpbWVzLiBFbmpveSB0aGUgZGVsaWNpb3VzIHRhc3RlIG9mIHRoaXMgZXZlci1jaGFybWluZyBkaXNoLlwiO1xubm9udmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjJQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uMkJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24yQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjJCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMzUwXCI7XG5cbm5vbnZlZ3NlY3Rpb24yQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24yQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMkJ0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKnNlY3Rpb24gMyoqKioqKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uM0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvY2hpY2tlbjY1LmpwZ1wiKTtcblxubm9udmVnc2VjdGlvbjNEaXYuYXBwZW5kQ2hpbGQobm9udmVnaW1nV3JhcHBlckltZzMpO1xubm9udmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjNEaXYpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubm9udmVnc2VjdGlvbjNINS5pbm5lckhUTUwgPSBcImNoaWNrZW4gNjVcIjtcbm5vbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zSDUpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm5vbnZlZ3NlY3Rpb24zUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5ub252ZWdzZWN0aW9uM1AuaW5uZXJIVE1MID0gXCJDaGlja2VuIDY1IGlzIHNhaWQgdG8gaGF2ZSBvcmlnaW5hdGVkIGluIE1hZHJhcyAoQ2hlbm5haSkuIFRoaXMgZGVsaWNpb3VzLCBkZWVwLWZyaWVkIHJlY2lwZSBvZiBDaGlja2VuIDY1IGlzIGZyb20gdGhlIGhvdXNlIG9mIFRhbWlsIE5hZHUuIEEgcG9wdWxhciBhbmQgZWFzeS10by1tYWtlIHNuYWNrIHJlY2lwZSwgZnJpZWQsIGZ1bGwgb2Ygc3BpY2Ugd2l0aCB0aGUgZmxhdm91cnMgb2YgZ2luZ2VyLCBnYXJsaWMgYW5kIGNoaWxsaWVzLlwiO1xubm9udmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjNQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uM0J0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24zQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjNCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgNDkwXCI7XG5cbm5vbnZlZ3NlY3Rpb24zQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uM0J0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMyk7XG5cbmJvYWR5VGFnLmFwcGVuZENoaWxkKG5vblZlZ0NvbnRhaW5lcik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKipERVNTRVJUIFNFQ1RJT04qKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgZGVzc2VydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXNzZXJ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5kZXNzZXJ0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LW1lbnVcIik7XG5cbmNvbnN0IGRlc3NlcnRfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5kZXNzZXJ0X2gyLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGxpZ2h0Ymx1ZVwiXG5kZXNzZXJ0X2gyLmlubmVySFRNTCA9IFwiICYjMTI3ODU0OyBkZXNzZXJ0IG1lbnUgJiMxMjc4NTQ7XCI7XG5kZXNzZXJ0X2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbmRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydF9oMik7XG5cbmNvbnN0IGRlc3NlcnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVzc2VydFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0Um93KTtcbmRlc3NlcnRSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cbmRlc3NlcnRfaDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKGRlc3NlcnRSb3cuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICBkZXNzZXJ0Um93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZGVzc2VydFJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5cbi8qKioqKioqKioqKioqKnNlY3Rpb24gMSoqKioqKioqKioqKioqL1xuY29uc3QgZGVzc2VydFNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kZXNzZXJ0U2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xuZGVzc2VydFNlY3Rpb24xLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24xRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlc3NlcnRzZWN0aW9uMURpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBkZXNzZXJ0aW1nV3JhcHBlckltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGVzc2VydGltZ1dyYXBwZXJJbWcxLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9ndWxhYi1qYW11bi5qcGdcIik7XG5cbmRlc3NlcnRzZWN0aW9uMURpdi5hcHBlbmRDaGlsZChkZXNzZXJ0aW1nV3JhcHBlckltZzEpO1xuZGVzc2VydFNlY3Rpb24xLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMURpdik7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMUg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuZGVzc2VydHNlY3Rpb24xSDUuaW5uZXJIVE1MID0gXCJndWxhYiBqYW11blwiO1xuZGVzc2VydFNlY3Rpb24xLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMUg1KTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24xUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZGVzc2VydHNlY3Rpb24xUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5kZXNzZXJ0c2VjdGlvbjFQLmlubmVySFRNTCA9IFwiR3VsYWIgamFtdW4gaXMgYSBtaWxrLXNvbGlkLWJhc2VkIHN3ZWV0IGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIHBvcHVsYXIgaW4gSW5kaWEsIE5lcGFsLCBQYWtpc3RhbiwgdGhlIE1hbGRpdmVzLCBhbmQgQmFuZ2xhZGVzaCwgYXMgd2VsbCBhcyBNeWFubWFyLlwiO1xuZGVzc2VydFNlY3Rpb24xLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMVApO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGVzc2VydHNlY3Rpb24xQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kZXNzZXJ0c2VjdGlvbjFCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbmRlc3NlcnRzZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5kZXNzZXJ0c2VjdGlvbjFCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjFCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5kZXNzZXJ0c2VjdGlvbjFCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbmRlc3NlcnRzZWN0aW9uMUJ0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDEyMFwiO1xuXG5kZXNzZXJ0c2VjdGlvbjFCdG4uYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24xQnRuU3Bhbik7XG5kZXNzZXJ0U2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24xQnRuKTtcblxuZGVzc2VydFJvdy5hcHBlbmRDaGlsZChkZXNzZXJ0U2VjdGlvbjEpO1xuXG4vKioqKioqKioqKioqKipzZWN0aW9uIDIqKioqKioqKioqKioqKi9cbmNvbnN0IGRlc3NlcnRTZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuZGVzc2VydFNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbmRlc3NlcnRTZWN0aW9uMi5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLTRcIik7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXNzZXJ0c2VjdGlvbjJEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3QgZGVzc2VydGltZ1dyYXBwZXJJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmRlc3NlcnRpbWdXcmFwcGVySW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMva2hlZXIuanBnXCIpO1xuXG5kZXNzZXJ0c2VjdGlvbjJEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydGltZ1dyYXBwZXJJbWcyKTtcbmRlc3NlcnRTZWN0aW9uMi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjJEaXYpO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjJINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbmRlc3NlcnRzZWN0aW9uMkg1LmlubmVySFRNTCA9IFwia2hlZXJcIjtcbmRlc3NlcnRTZWN0aW9uMi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjJINSk7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMlAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmRlc3NlcnRzZWN0aW9uMlAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuZGVzc2VydHNlY3Rpb24yUC5pbm5lckhUTUwgPSBcIktoZWVyIG9yIGZpcm5pIGlzIGEgcHVkZGluZywgb3JpZ2luYXRpbmcgZnJvbSB0aGUgSW5kaWFuIHN1YmNvbnRpbmVudCwgbWFkZSBieSBib2lsaW5nIG1pbGsgYW5kIHN1Z2FyIHdpdGggb25lIG9mIHRoZSBmb2xsb3dpbmc6IHJpY2UsIGJyb2tlbiB3aGVhdCwgdGFwaW9jYSwgdmVybWljZWxsaSwgb3Igc3dlZXQgY29ybi4gSXQgaXMgZmxhdm91cmVkIHdpdGggY2FyZGFtb20sIHJhaXNpbnMsIHNhZmZyb24sIGNhc2hld3MsIHBpc3RhY2hpb3MsIGFsbW9uZHMgb3Igb3RoZXIgZHJ5IGZydWl0cyBhbmQgbnV0cy4gXCI7XG5kZXNzZXJ0U2VjdGlvbjIuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24yUCk7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kZXNzZXJ0c2VjdGlvbjJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRlc3NlcnRzZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuZGVzc2VydHNlY3Rpb24yQnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tcHJpbWFyeVwiKTtcbmRlc3NlcnRzZWN0aW9uMkJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMkJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbmRlc3NlcnRzZWN0aW9uMkJ0blNwYW4uY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuZGVzc2VydHNlY3Rpb24yQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMjUwXCI7XG5cbmRlc3NlcnRzZWN0aW9uMkJ0bi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjJCdG5TcGFuKTtcbmRlc3NlcnRTZWN0aW9uMi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjJCdG4pO1xuXG5kZXNzZXJ0Um93LmFwcGVuZENoaWxkKGRlc3NlcnRTZWN0aW9uMik7XG5cbi8qKioqKioqKioqKioqKnNlY3Rpb24gMyoqKioqKioqKioqKioqL1xuY29uc3QgZGVzc2VydFNlY3Rpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kZXNzZXJ0U2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xuZGVzc2VydFNlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlc3NlcnRzZWN0aW9uM0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBkZXNzZXJ0aW1nV3JhcHBlckltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGVzc2VydGltZ1dyYXBwZXJJbWczLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9oYWx3YS5qcGdcIik7XG5cbmRlc3NlcnRzZWN0aW9uM0Rpdi5hcHBlbmRDaGlsZChkZXNzZXJ0aW1nV3JhcHBlckltZzMpO1xuZGVzc2VydFNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uM0Rpdik7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uM0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuZGVzc2VydHNlY3Rpb24zSDUuaW5uZXJIVE1MID0gXCJnYWphciBrYSBoYWx3YVwiO1xuZGVzc2VydFNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uM0g1KTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24zUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZGVzc2VydHNlY3Rpb24zUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5kZXNzZXJ0c2VjdGlvbjNQLmlubmVySFRNTCA9IFwiR2FqYXIga2EgaGFsd2EsIGFsc28ga25vd24gYXMgZ2Fqb3JlciBoYWx1YSwgR2FqcmVsYSwgR2FqYXIgUGFrLCBhbmQgQ2Fycm90IGhhbHdhIGlzIGEgY2Fycm90LWJhc2VkIHN3ZWV0IGRlc3NlcnQgcHVkZGluZyBmcm9tIHRoZSBJbmRpYW4gc3ViY29udGluZW50LiBJdCBpcyBtYWRlIGJ5IHBsYWNpbmcgZ3JhdGVkIGNhcnJvdHMgaW4gYSBwb3QgY29udGFpbmluZyBhIHNwZWNpZmljIGFtb3VudCBvZiB3YXRlciwgbWlsayBhbmQgc3VnYXIgYW5kIHRoZW4gY29va2luZyB3aGlsZSBzdGlycmluZyByZWd1bGFybHlcIjtcbmRlc3NlcnRTZWN0aW9uMy5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjNQKTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRlc3NlcnRzZWN0aW9uM0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGVzc2VydHNlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5kZXNzZXJ0c2VjdGlvbjNCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xuZGVzc2VydHNlY3Rpb24zQnRuLmlubmVySFRNTCA9IFwicGxhY2Ugb3JkZXJcIjtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24zQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuZGVzc2VydHNlY3Rpb24zQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5kZXNzZXJ0c2VjdGlvbjNCdG5TcGFuLmlubmVySFRNTCA9IFwiJiM4Mzc3OyAxNzVcIjtcblxuZGVzc2VydHNlY3Rpb24zQnRuLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uM0J0blNwYW4pO1xuZGVzc2VydFNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uM0J0bik7XG5cbmRlc3NlcnRSb3cuYXBwZW5kQ2hpbGQoZGVzc2VydFNlY3Rpb24zKTtcbmJvYWR5VGFnLmFwcGVuZENoaWxkKGRlc3NlcnRDb250YWluZXIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkNPTlRBQ1QgRk9STSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbmNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUm93KTtcblxuY29uc3QgbWFpbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbm1haW5Gb3JtLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtMTJcIik7XG5tYWluRm9ybS5jbGFzc0xpc3QuYWRkKFwibWFpbi1mb3JtXCIpO1xubWFpbkZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiUE9TVFwiKTtcbmZvcm1Sb3cuYXBwZW5kQ2hpbGQobWFpbkZvcm0pO1xuXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbmNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtXCIpO1xuY2xvc2VCdG4uaW5uZXJIVE1MID0gXCJYXCI7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZihmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpe1xuICAgICAgICBmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuY29uc3QgbmFtZUVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubmFtZUVudHJ5LmlubmVySFRNTCA9IFwibmFtZVwiO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xubmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiZW50ZXIgeW91ciBuYW1lXCIpO1xubWFpbkZvcm0uYXBwZW5kQ2hpbGQobmFtZUVudHJ5KTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbmNvbnN0IGFkZHJlc3NFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbmFkZHJlc3NFbnRyeS5pbm5lckhUTUwgPSBcImFkZHJlc3NcIjtcbmNvbnN0IGFkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbmFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImVudGVyIHlvdXIgYWRkcmVzc1wiKTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGFkZHJlc3NFbnRyeSk7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChhZGRyZXNzSW5wdXQpO1xuXG5jb25zdCBudW1iZXJFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbm51bWJlckVudHJ5LmlubmVySFRNTCA9IFwibnVtYmVyXCI7XG5jb25zdCBudW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG5udW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcInBob25lIG51bWJlclwiKTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKG51bWJlckVudHJ5KTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKG51bWJlcklucHV0KTtcblxuY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5kaXNoTmFtZS5pbm5lckhUTUwgPSBcImRpc2ggbmFtZVwiO1xuY29uc3QgZGlzaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZGlzaElucHV0LnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBcImNhcGl0YWxpemVcIjtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGRpc2hJbnB1dCk7XG5cbmNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xucXVhbnRpdHkuaW5uZXJIVE1MID0gXCJxdWFudGl0eVwiO1xuY29uc3QgcXVhbnRpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiOFwiKVxucXVhbnRpdHlJbnB1dC52YWx1ZSA9IDE7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChxdWFudGl0eSk7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChxdWFudGl0eUlucHV0KTtcblxuY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiY29uZmlybUJ1dHRvbnNcIik7XG5cbmNvbnN0IGJ0bkg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuYnRuSDUuY2xhc3NMaXN0LmFkZChcImNvbmZpcm1cIik7XG5idG5INS5pbm5lckhUTUwgPSBcImNvbmZpcm0gb3JkZXJcIjtcbmJ0bkRpdi5hcHBlbmRDaGlsZChidG5INSk7XG5cbmNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG55ZXNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnllc0J0bi5pbm5lckhUTUwgPSBcInllc1wiO1xuYnRuRGl2LmFwcGVuZENoaWxkKHllc0J0bik7XG5cbmNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub0J0bi5pbm5lckhUTUwgPSBcIm5vXCI7XG5idG5EaXYuYXBwZW5kQ2hpbGQobm9CdG4pO1xuXG5tYWluRm9ybS5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG5ib2FkeVRhZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4vKioqKioqKioqKipmdW5jdGlvbmFsaXR5IGZvciBvcGVuaW5nIG9yZGVyIGZvcm0gb24gY2xpY2tpbmcgcGxhY2Ugb3JkZXIqKioqKioqKioqKioqL1xuY29uc3QgZm9ybUNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpLmZvckVhY2goYnV0dG9uID0+e1xuICAgIGlmKGJ1dHRvbi5pbm5lckhUTUwuaW5jbHVkZXMoXCJwbGFjZSBvcmRlclwiKSl7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYoZm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICAgICAgICAgIGZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgZGlzaElucHV0LmlubmVySFRNTCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoNVwiKS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=