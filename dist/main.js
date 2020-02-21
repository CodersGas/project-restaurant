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

const bodyTag = document.querySelector("body");

/***********CREATING NAVIGATION BAR******************/

const logo = document.createElement("li");
const img = document.createElement("img");
img.setAttribute("src", "assets/food.jpg");
logo.appendChild(img);

const about = document.createElement("li");
about.innerHTML = "about";

about.addEventListener("click", () =>{
    if(aboutContainer.style.display === "none"){
        aboutContainer.style.display = "block";
        contactContainer.style.display = "none";
        veg_h2.style.display = "none";
        nonveg_h2.style.display = "none";
        dessert_h2.style.display = "none";
        vegRow.style.display = "none";
        nonvegRow.style.display = "none";
        dessertRow.style.display = "none";


    }
    else{
        aboutContainer.style.display = "none";
    }
});

const menu = document.createElement("li");
menu.innerHTML = "menu";

menu.addEventListener("click", () =>{
    if(veg_h2.style.display === "none"){
        veg_h2.style.display = "block";
        nonveg_h2.style.display = "block";
        dessert_h2.style.display = "block";
        aboutContainer.style.display = "none";
        contactContainer.style.display = "none";
    }
    else{
        aboutContainer.style.display = "block";

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

contact.addEventListener("click", () =>{
    if(contactContainer.style.display === "none"){
        contactContainer.style.display = "block";
        aboutContainer.style.display = "none";
        veg_h2.style.display = "none";
        nonveg_h2.style.display = "none";
        dessert_h2.style.display = "none";
        vegRow.style.display = "none";
        nonvegRow.style.display = "none";
        dessertRow.style.display = "none";

    }
    else{
        contactContainer.style.display = "none";
    }
});

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

bodyTag.appendChild(nav);

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

bodyTag.appendChild(foodMenuContainer);

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

bodyTag.appendChild(nonVegContainer);

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
bodyTag.appendChild(dessertContainer);

/**********************************ORDER FORM**********************************/
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
dishInput.classList.add("dishName");
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

bodyTag.appendChild(formContainer);


/***********functionality for opening order form on clicking place order*************/
const formCont = document.querySelector(".form-container");

document.querySelectorAll("button").forEach(button =>{
    if(button.innerHTML.includes("place order")){
        button.addEventListener("click", () => {
            if(formCont.style.display === "none"){
                formCont.style.display = "block";
                dishInput.value = button.parentElement.querySelector("h5").innerHTML;
                document.querySelector(".dishName").readOnly = true;
                button.parentElement.appendChild(formCont);
            }
            else{
                formCont.style.display = "none";
            }
        });
    }
});

/**************************ABOUT SECTION**********************/
const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-section");
aboutContainer.classList.add("container");
aboutContainer.style.display = "block";

const aboutRow = document.createElement("div");
aboutRow.classList.add("row");
aboutContainer.appendChild(aboutRow);

const aboutSection = document.createElement("section");
aboutSection.classList.add("col-md-12");

const aboutH1 = document.createElement("h1");
aboutH1.innerHTML = "welcome to our restaurant";
aboutSection.appendChild(aboutH1);

const aboutP = document.createElement("p");
aboutP.innerHTML = "Taste flavours and varities of food from all over the india here and experience India in a whole new way";

const aboutArrow = document.createElement("span");
aboutArrow.classList.add("arrow");
aboutArrow.innerHTML = "&#8594;";
aboutP.appendChild(aboutArrow);

aboutSection.appendChild(aboutP);

aboutRow.appendChild(aboutSection);
aboutContainer.appendChild(aboutRow);
bodyTag.appendChild(aboutContainer);

/*************************CONTACT FORM***************************/
const contactContainer = document.createElement("div");
contactContainer.classList.add("contact-form");
contactContainer.classList.add("container");
contactContainer.style.display = "none";

const contactH3 = document.createElement("h3");
contactH3.innerHTML = "from parties to functions, we arrange for everything. ring a bell, message or visit us and give us a chance to showcase our hospitality."
contactContainer.appendChild(contactH3);

const contactRow = document.createElement("div");
contactRow.classList.add("row");
contactContainer.appendChild(contactRow);

const contactForm = document.createElement("form");
contactForm.classList.add("col-md-6");

const contactEmail = document.createElement("h5");
contactEmail.innerHTML = "email  &#128231;";
contactForm.appendChild(contactEmail);
const emailIpt = document.createElement("input");
emailIpt.setAttribute("type", "text");
emailIpt.setAttribute("value", "restaurant@gmail.com");
emailIpt.classList.add("contact-email");
contactForm.appendChild(emailIpt);

const contactPhone = document.createElement("h5");
contactPhone.innerHTML = "phone number &#x1f514;";
contactForm.appendChild(contactPhone);
const phoneIpt1 = document.createElement("input");
phoneIpt1.classList.add("contact-phone1");
phoneIpt1.setAttribute("type", "tel");
phoneIpt1.setAttribute("value", "+91-123456759");
contactForm.appendChild(phoneIpt1);
const phoneIpt2 = document.createElement("input");
phoneIpt2.classList.add("contact-phone2");
phoneIpt2.setAttribute("type", "tel");
phoneIpt2.setAttribute("value", "+91-148541759");
contactForm.appendChild(phoneIpt2);

const visitAdd = document.createElement("h5");
visitAdd.innerHTML = "visiting address";
contactForm.appendChild(visitAdd);
const addIpt = document.createElement("input");
addIpt.classList.add("contact-address")
addIpt.setAttribute("type", "text");
addIpt.setAttribute("value", "some address");
contactForm.appendChild(addIpt);

contactRow.appendChild(contactForm);
contactContainer.appendChild(contactRow);
bodyTag.appendChild(contactContainer);


document.querySelector(".contact-email").readOnly = true;
document.querySelector(".contact-phone1").readOnly = true;
document.querySelector(".contact-phone2").readOnly = true;
document.querySelector(".contact-address").readOnly = true;

window.onload = function(){
    bodyTag.appendChild(aboutContainer);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsOEJBQThCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QjtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGJvZHlUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLyoqKioqKioqKioqQ1JFQVRJTkcgTkFWSUdBVElPTiBCQVIqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9mb29kLmpwZ1wiKTtcbmxvZ28uYXBwZW5kQ2hpbGQoaW1nKTtcblxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5hYm91dC5pbm5lckhUTUwgPSBcImFib3V0XCI7XG5cbmFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZihhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB2ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub252ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkZXNzZXJ0X2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZGVzc2VydFJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSk7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5tZW51LmlubmVySFRNTCA9IFwibWVudVwiO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZih2ZWdfaDIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICB2ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbm9udmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGRlc3NlcnRfaDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYWJvdXRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICB2ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub252ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBcbiAgICAgICAgdmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgXG4gICAgICAgIGRlc3NlcnRfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkZXNzZXJ0Um93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcblxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbmNvbnRhY3QuaW5uZXJIVE1MID0gXCJjb250YWN0XCI7XG5cbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKGNvbnRhY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbm9udmVnX2gyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZGVzc2VydF9oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5vbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRlc3NlcnRSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnVsLmNsYXNzTGlzdC5hZGQoXCJkLWZsZXhcIik7XG51bC5jbGFzc0xpc3QuYWRkKFwianVzdGlmeS1jb250ZW50LWFyb3VuZFwiKTtcbnVsLmNsYXNzTGlzdC5hZGQoXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG51bC5hcHBlbmRDaGlsZChsb2dvKTtcbnVsLmFwcGVuZENoaWxkKGFib3V0KTtcbnVsLmFwcGVuZENoaWxkKG1lbnUpO1xudWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG5ib2R5VGFnLmFwcGVuZENoaWxkKG5hdik7XG5cbi8qKioqKioqKioqKioqKioqKioqQ1JFQVRJTkcgRk9PRCBNRU5VKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqVmVnIG1lbnUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGZvb2RNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb2RNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5mb29kTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZC1tZW51XCIpO1xuXG5jb25zdCB2ZWdfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG52ZWdfaDIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgbGlnaHRibHVlXCJcbnZlZ19oMi5pbm5lckhUTUwgPSBcIiYjMTI3ODIzOyB2ZWdldGFyaWFuIG1lbnUgJiMxMjc4MjM7XCI7XG52ZWdfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuZm9vZE1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodmVnX2gyKTtcblxuY29uc3QgdmVnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnZlZ1Jvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuZm9vZE1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodmVnUm93KTtcbnZlZ1Jvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxudmVnX2gyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZih2ZWdSb3cuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpe1xuICAgICAgICB2ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB2ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuXG4vKioqKioqKioqKioqKipzZWN0aW9uIDEqKioqKioqKioqKioqKi9cbmNvbnN0IHZlZ1NlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG52ZWdTZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG52ZWdTZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLTRcIik7XG5cbmNvbnN0IHNlY3Rpb24xRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlY3Rpb24xRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcHBlclwiKTtcbmNvbnN0IGltZ1dyYXBwZXJJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZ1dyYXBwZXJJbWcxLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9yYWptYS1jaGF3YWwuanBnXCIpO1xuXG5zZWN0aW9uMURpdi5hcHBlbmRDaGlsZChpbWdXcmFwcGVySW1nMSk7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMURpdik7XG5cbmNvbnN0IHNlY3Rpb24xSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5zZWN0aW9uMUg1LmlubmVySFRNTCA9IFwicmFqbWEgY2hhd2FsXCI7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMUg1KTtcblxuY29uc3Qgc2VjdGlvbjFQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uMVAuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuc2VjdGlvbjFQLmlubmVySFRNTCA9IFwiUsSBam3EgSBvciBSxIF6bcSBIGlzIGEgcG9wdWxhciB2ZWdldGFyaWFuIGRpc2gsIG9yaWdpbmF0aW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIGNvbnNpc3Rpbmcgb2YgcmVkIGtpZG5leSBiZWFucyBpbiBhIHRoaWNrIGdyYXZ5IHdpdGggbWFueSBJbmRpYW4gd2hvbGUgc3BpY2VzLCBhbmQgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCByaWNlLlwiO1xudmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQoc2VjdGlvbjFQKTtcblxuY29uc3Qgc2VjdGlvbjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2VjdGlvbjFCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnNlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5zZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5zZWN0aW9uMUJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IHNlY3Rpb24xQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc2VjdGlvbjFCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbnNlY3Rpb24xQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMjUwXCI7XG5cbnNlY3Rpb24xQnRuLmFwcGVuZENoaWxkKHNlY3Rpb24xQnRuU3Bhbik7XG52ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChzZWN0aW9uMUJ0bik7XG5cbnZlZ1Jvdy5hcHBlbmRDaGlsZCh2ZWdTZWN0aW9uMSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqc2VjdGlvbiAyKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCB2ZWdTZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xudmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xudmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBzZWN0aW9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zZWN0aW9uMkRpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBpbWdXcmFwcGVySW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWdXcmFwcGVySW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvc2hhaGktcGFuZWVyLmpwZ1wiKTtcblxuc2VjdGlvbjJEaXYuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlckltZzIpO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJEaXYpO1xuXG5jb25zdCBzZWN0aW9uMkg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuc2VjdGlvbjJINS5pbm5lckhUTUwgPSBcInNoYWhpIHBhbmVlclwiO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJINSk7XG5cbmNvbnN0IHNlY3Rpb24yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvbjJQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbnNlY3Rpb24yUC5pbm5lckhUTUwgPSBcIlLEgWptxIEgb3IgUsSBem3EgSBpcyBhIHBvcHVsYXIgdmVnZXRhcmlhbiBkaXNoLCBvcmlnaW5hdGluZyBmcm9tIHRoZSBJbmRpYW4gc3ViY29udGluZW50LCBjb25zaXN0aW5nIG9mIHJlZCBraWRuZXkgYmVhbnMgaW4gYSB0aGljayBncmF2eSB3aXRoIG1hbnkgSW5kaWFuIHdob2xlIHNwaWNlcywgYW5kIGlzIHVzdWFsbHkgc2VydmVkIHdpdGggcmljZS5cIjtcbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKHNlY3Rpb24yUCk7XG5cbmNvbnN0IHNlY3Rpb24yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNlY3Rpb24yQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5zZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuc2VjdGlvbjJCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xuc2VjdGlvbjJCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBzZWN0aW9uMkJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnNlY3Rpb24yQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5zZWN0aW9uMkJ0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDUwMFwiO1xuXG5zZWN0aW9uMkJ0bi5hcHBlbmRDaGlsZChzZWN0aW9uMkJ0blNwYW4pO1xudmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQoc2VjdGlvbjJCdG4pO1xuXG52ZWdSb3cuYXBwZW5kQ2hpbGQodmVnU2VjdGlvbjIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKipzZWN0aW9uIDMqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgdmVnU2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJpdGVtc1wiKTtcbnZlZ1NlY3Rpb24zLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3Qgc2VjdGlvbjNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VjdGlvbjNEaXYuY2xhc3NMaXN0LmFkZChcImltZy13cmFwcGVyXCIpO1xuY29uc3QgaW1nV3JhcHBlckltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nV3JhcHBlckltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2NoaG9sZS1iaGF0dXJlLmpwZ1wiKTtcblxuc2VjdGlvbjNEaXYuYXBwZW5kQ2hpbGQoaW1nV3JhcHBlckltZzMpO1xudmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQoc2VjdGlvbjNEaXYpO1xuXG5jb25zdCBzZWN0aW9uM0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuc2VjdGlvbjNINS5pbm5lckhUTUwgPSBcImNoaG9sZSBiaGF0dXJlXCI7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM0g1KTtcblxuY29uc3Qgc2VjdGlvbjNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uM1AuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuc2VjdGlvbjNQLmlubmVySFRNTCA9IFwiUsSBam3EgSBvciBSxIF6bcSBIGlzIGEgcG9wdWxhciB2ZWdldGFyaWFuIGRpc2gsIG9yaWdpbmF0aW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQsIGNvbnNpc3Rpbmcgb2YgcmVkIGtpZG5leSBiZWFucyBpbiBhIHRoaWNrIGdyYXZ5IHdpdGggbWFueSBJbmRpYW4gd2hvbGUgc3BpY2VzLCBhbmQgaXMgdXN1YWxseSBzZXJ2ZWQgd2l0aCByaWNlLlwiO1xudmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQoc2VjdGlvbjNQKTtcblxuY29uc3Qgc2VjdGlvbjNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuc2VjdGlvbjNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnNlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5zZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5zZWN0aW9uM0J0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IHNlY3Rpb24zQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc2VjdGlvbjNCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbnNlY3Rpb24zQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMTIwXCI7XG5cbnNlY3Rpb24zQnRuLmFwcGVuZENoaWxkKHNlY3Rpb24zQnRuU3Bhbik7XG52ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChzZWN0aW9uM0J0bik7XG5cbnZlZ1Jvdy5hcHBlbmRDaGlsZCh2ZWdTZWN0aW9uMyk7XG5cbmJvZHlUYWcuYXBwZW5kQ2hpbGQoZm9vZE1lbnVDb250YWluZXIpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk5PTiBWRUdFVEFSSUFOIE1FTlUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IG5vblZlZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub25WZWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbm5vblZlZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9uLXZlZy1tZW51XCIpO1xuXG5jb25zdCBub252ZWdfaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5ub252ZWdfaDIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgbGlnaHRibHVlXCJcbm5vbnZlZ19oMi5pbm5lckhUTUwgPSBcIiAmIzEyNzgzMTsgbm9uIHZlZ2V0YXJpYW4gbWVudSAmIzEyNzgzMTtcIjtcbm5vbnZlZ19oMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5ub25WZWdDb250YWluZXIuYXBwZW5kQ2hpbGQobm9udmVnX2gyKTtcblxuY29uc3Qgbm9udmVnUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5vbnZlZ1Jvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xubm9uVmVnQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vbnZlZ1Jvdyk7XG5ub252ZWdSb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cbm5vbnZlZ19oMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgaWYobm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKXtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbm9udmVnUm93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcblxuLyoqKioqKioqKioqKioqc2VjdGlvbiAxKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uMURpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvbXV0dG9uLWtvcm1hLmpwZ1wiKTtcblxubm9udmVnc2VjdGlvbjFEaXYuYXBwZW5kQ2hpbGQobm9udmVnaW1nV3JhcHBlckltZzEpO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFEaXYpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMUg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubm9udmVnc2VjdGlvbjFINS5pbm5lckhUTUwgPSBcIm11dHRvbiBrb3JtYVwiO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFINSk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24xUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubm9udmVnc2VjdGlvbjFQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbm5vbnZlZ3NlY3Rpb24xUC5pbm5lckhUTUwgPSBcIkEgZmxhdm91cmZ1bGwgbXV0dG9uIGN1cnJ5LCB3aGVyZSB0aGUgbWVhdCBpcyBzdGlycmVkIHdpdGggY3VyZCwgZ2FybGljLWdpbmdlciBwYXN0ZSwgY2xvdmVzLCBjYXJkYW1vbSBhbmQgY2lubmFtb24gc3RpY2tzLlwiO1xubm9udmVnU2VjdGlvbjEuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjFQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjFCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uMUJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24xQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjFCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24xQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMzAwXCI7XG5cbm5vbnZlZ3NlY3Rpb24xQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24xQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMS5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMUJ0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqc2VjdGlvbiAyKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uMkRpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvYmlyeWFuaS5qcGdcIik7XG5cbm5vbnZlZ3NlY3Rpb24yRGl2LmFwcGVuZENoaWxkKG5vbnZlZ2ltZ1dyYXBwZXJJbWcyKTtcbm5vbnZlZ1NlY3Rpb24yLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24yRGl2KTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjJINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbm5vbnZlZ3NlY3Rpb24ySDUuaW5uZXJIVE1MID0gXCJtYWxhYmFyIGZpc2ggYmlyeWFuaVwiO1xubm9udmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjJINSk7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xubm9udmVnc2VjdGlvbjJQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbm5vbnZlZ3NlY3Rpb24yUC5pbm5lckhUTUwgPSBcIlRoaXMgY2xhc3NpYyBNYWxhYmFyIEZpc2ggQmlyeWFuaSBjYW4gYmUgZGV2b3VyZWQgYXQgYWxsIHRpbWVzLiBFbmpveSB0aGUgZGVsaWNpb3VzIHRhc3RlIG9mIHRoaXMgZXZlci1jaGFybWluZyBkaXNoLlwiO1xubm9udmVnU2VjdGlvbjIuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjJQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjJCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uMkJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uMkJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24yQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjJCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24yQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMzUwXCI7XG5cbm5vbnZlZ3NlY3Rpb24yQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24yQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMi5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uMkJ0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKnNlY3Rpb24gMyoqKioqKioqKioqKioqKioqKiovXG5jb25zdCBub252ZWdTZWN0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubm9udmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xubm9udmVnU2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5ub252ZWdzZWN0aW9uM0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBub252ZWdpbWdXcmFwcGVySW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5ub252ZWdpbWdXcmFwcGVySW1nMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJhc3NldHMvY2hpY2tlbjY1LmpwZ1wiKTtcblxubm9udmVnc2VjdGlvbjNEaXYuYXBwZW5kQ2hpbGQobm9udmVnaW1nV3JhcHBlckltZzMpO1xubm9udmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjNEaXYpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubm9udmVnc2VjdGlvbjNINS5pbm5lckhUTUwgPSBcImNoaWNrZW4gNjVcIjtcbm5vbnZlZ1NlY3Rpb24zLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zSDUpO1xuXG5jb25zdCBub252ZWdzZWN0aW9uM1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbm5vbnZlZ3NlY3Rpb24zUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5ub252ZWdzZWN0aW9uM1AuaW5uZXJIVE1MID0gXCJDaGlja2VuIDY1IGlzIHNhaWQgdG8gaGF2ZSBvcmlnaW5hdGVkIGluIE1hZHJhcyAoQ2hlbm5haSkuIFRoaXMgZGVsaWNpb3VzLCBkZWVwLWZyaWVkIHJlY2lwZSBvZiBDaGlja2VuIDY1IGlzIGZyb20gdGhlIGhvdXNlIG9mIFRhbWlsIE5hZHUuIEEgcG9wdWxhciBhbmQgZWFzeS10by1tYWtlIHNuYWNrIHJlY2lwZSwgZnJpZWQsIGZ1bGwgb2Ygc3BpY2Ugd2l0aCB0aGUgZmxhdm91cnMgb2YgZ2luZ2VyLCBnYXJsaWMgYW5kIGNoaWxsaWVzLlwiO1xubm9udmVnU2VjdGlvbjMuYXBwZW5kQ2hpbGQobm9udmVnc2VjdGlvbjNQKTtcblxuY29uc3Qgbm9udmVnc2VjdGlvbjNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm9udmVnc2VjdGlvbjNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5ub252ZWdzZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5ub252ZWdzZWN0aW9uM0J0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IG5vbnZlZ3NlY3Rpb24zQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xubm9udmVnc2VjdGlvbjNCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbm5vbnZlZ3NlY3Rpb24zQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgNDkwXCI7XG5cbm5vbnZlZ3NlY3Rpb24zQnRuLmFwcGVuZENoaWxkKG5vbnZlZ3NlY3Rpb24zQnRuU3Bhbik7XG5ub252ZWdTZWN0aW9uMy5hcHBlbmRDaGlsZChub252ZWdzZWN0aW9uM0J0bik7XG5cbm5vbnZlZ1Jvdy5hcHBlbmRDaGlsZChub252ZWdTZWN0aW9uMyk7XG5cbmJvZHlUYWcuYXBwZW5kQ2hpbGQobm9uVmVnQ29udGFpbmVyKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkRFU1NFUlQgU0VDVElPTioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBkZXNzZXJ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlc3NlcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbmRlc3NlcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtbWVudVwiKTtcblxuY29uc3QgZGVzc2VydF9oMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmRlc3NlcnRfaDIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgbGlnaHRibHVlXCJcbmRlc3NlcnRfaDIuaW5uZXJIVE1MID0gXCIgJiMxMjc4NTQ7IGRlc3NlcnQgbWVudSAmIzEyNzg1NDtcIjtcbmRlc3NlcnRfaDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0X2gyKTtcblxuY29uc3QgZGVzc2VydFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZXNzZXJ0Um93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5kZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRSb3cpO1xuZGVzc2VydFJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuZGVzc2VydF9oMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgaWYoZGVzc2VydFJvdy5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgIGRlc3NlcnRSb3cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBkZXNzZXJ0Um93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KTtcblxuLyoqKioqKioqKioqKioqc2VjdGlvbiAxKioqKioqKioqKioqKiovXG5jb25zdCBkZXNzZXJ0U2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmRlc3NlcnRTZWN0aW9uMS5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG5kZXNzZXJ0U2VjdGlvbjEuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVzc2VydHNlY3Rpb24xRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcHBlclwiKTtcbmNvbnN0IGRlc3NlcnRpbWdXcmFwcGVySW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kZXNzZXJ0aW1nV3JhcHBlckltZzEuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2d1bGFiLWphbXVuLmpwZ1wiKTtcblxuZGVzc2VydHNlY3Rpb24xRGl2LmFwcGVuZENoaWxkKGRlc3NlcnRpbWdXcmFwcGVySW1nMSk7XG5kZXNzZXJ0U2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24xRGl2KTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24xSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5kZXNzZXJ0c2VjdGlvbjFINS5pbm5lckhUTUwgPSBcImd1bGFiIGphbXVuXCI7XG5kZXNzZXJ0U2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24xSDUpO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjFQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5kZXNzZXJ0c2VjdGlvbjFQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbmRlc3NlcnRzZWN0aW9uMVAuaW5uZXJIVE1MID0gXCJHdWxhYiBqYW11biBpcyBhIG1pbGstc29saWQtYmFzZWQgc3dlZXQgZnJvbSB0aGUgSW5kaWFuIHN1YmNvbnRpbmVudCwgcG9wdWxhciBpbiBJbmRpYSwgTmVwYWwsIFBha2lzdGFuLCB0aGUgTWFsZGl2ZXMsIGFuZCBCYW5nbGFkZXNoLCBhcyB3ZWxsIGFzIE15YW5tYXIuXCI7XG5kZXNzZXJ0U2VjdGlvbjEuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24xUCk7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kZXNzZXJ0c2VjdGlvbjFCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbmRlc3NlcnRzZWN0aW9uMUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuZGVzc2VydHNlY3Rpb24xQnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tcHJpbWFyeVwiKTtcbmRlc3NlcnRzZWN0aW9uMUJ0bi5pbm5lckhUTUwgPSBcInBsYWNlIG9yZGVyXCI7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMUJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbmRlc3NlcnRzZWN0aW9uMUJ0blNwYW4uY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuZGVzc2VydHNlY3Rpb24xQnRuU3Bhbi5pbm5lckhUTUwgPSBcIiYjODM3NzsgMTIwXCI7XG5cbmRlc3NlcnRzZWN0aW9uMUJ0bi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjFCdG5TcGFuKTtcbmRlc3NlcnRTZWN0aW9uMS5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjFCdG4pO1xuXG5kZXNzZXJ0Um93LmFwcGVuZENoaWxkKGRlc3NlcnRTZWN0aW9uMSk7XG5cbi8qKioqKioqKioqKioqKnNlY3Rpb24gMioqKioqKioqKioqKioqL1xuY29uc3QgZGVzc2VydFNlY3Rpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kZXNzZXJ0U2VjdGlvbjIuY2xhc3NMaXN0LmFkZChcIml0ZW1zXCIpO1xuZGVzc2VydFNlY3Rpb24yLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNFwiKTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRlc3NlcnRzZWN0aW9uMkRpdi5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBwZXJcIik7XG5jb25zdCBkZXNzZXJ0aW1nV3JhcHBlckltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGVzc2VydGltZ1dyYXBwZXJJbWcyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImFzc2V0cy9raGVlci5qcGdcIik7XG5cbmRlc3NlcnRzZWN0aW9uMkRpdi5hcHBlbmRDaGlsZChkZXNzZXJ0aW1nV3JhcHBlckltZzIpO1xuZGVzc2VydFNlY3Rpb24yLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMkRpdik7XG5cbmNvbnN0IGRlc3NlcnRzZWN0aW9uMkg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuZGVzc2VydHNlY3Rpb24ySDUuaW5uZXJIVE1MID0gXCJraGVlclwiO1xuZGVzc2VydFNlY3Rpb24yLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMkg1KTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24yUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZGVzc2VydHNlY3Rpb24yUC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG5kZXNzZXJ0c2VjdGlvbjJQLmlubmVySFRNTCA9IFwiS2hlZXIgb3IgZmlybmkgaXMgYSBwdWRkaW5nLCBvcmlnaW5hdGluZyBmcm9tIHRoZSBJbmRpYW4gc3ViY29udGluZW50LCBtYWRlIGJ5IGJvaWxpbmcgbWlsayBhbmQgc3VnYXIgd2l0aCBvbmUgb2YgdGhlIGZvbGxvd2luZzogcmljZSwgYnJva2VuIHdoZWF0LCB0YXBpb2NhLCB2ZXJtaWNlbGxpLCBvciBzd2VldCBjb3JuLiBJdCBpcyBmbGF2b3VyZWQgd2l0aCBjYXJkYW1vbSwgcmFpc2lucywgc2FmZnJvbiwgY2FzaGV3cywgcGlzdGFjaGlvcywgYWxtb25kcyBvciBvdGhlciBkcnkgZnJ1aXRzIGFuZCBudXRzLiBcIjtcbmRlc3NlcnRTZWN0aW9uMi5hcHBlbmRDaGlsZChkZXNzZXJ0c2VjdGlvbjJQKTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24yQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmRlc3NlcnRzZWN0aW9uMkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuZGVzc2VydHNlY3Rpb24yQnRuLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5kZXNzZXJ0c2VjdGlvbjJCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1wcmltYXJ5XCIpO1xuZGVzc2VydHNlY3Rpb24yQnRuLmlubmVySFRNTCA9IFwicGxhY2Ugb3JkZXJcIjtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24yQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuZGVzc2VydHNlY3Rpb24yQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG5kZXNzZXJ0c2VjdGlvbjJCdG5TcGFuLmlubmVySFRNTCA9IFwiJiM4Mzc3OyAyNTBcIjtcblxuZGVzc2VydHNlY3Rpb24yQnRuLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMkJ0blNwYW4pO1xuZGVzc2VydFNlY3Rpb24yLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uMkJ0bik7XG5cbmRlc3NlcnRSb3cuYXBwZW5kQ2hpbGQoZGVzc2VydFNlY3Rpb24yKTtcblxuLyoqKioqKioqKioqKioqc2VjdGlvbiAzKioqKioqKioqKioqKiovXG5jb25zdCBkZXNzZXJ0U2VjdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmRlc3NlcnRTZWN0aW9uMy5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG5kZXNzZXJ0U2VjdGlvbjMuY2xhc3NMaXN0LmFkZChcImNvbC1tZC00XCIpO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGVzc2VydHNlY3Rpb24zRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcHBlclwiKTtcbmNvbnN0IGRlc3NlcnRpbWdXcmFwcGVySW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kZXNzZXJ0aW1nV3JhcHBlckltZzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiYXNzZXRzL2hhbHdhLmpwZ1wiKTtcblxuZGVzc2VydHNlY3Rpb24zRGl2LmFwcGVuZENoaWxkKGRlc3NlcnRpbWdXcmFwcGVySW1nMyk7XG5kZXNzZXJ0U2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24zRGl2KTtcblxuY29uc3QgZGVzc2VydHNlY3Rpb24zSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5kZXNzZXJ0c2VjdGlvbjNINS5pbm5lckhUTUwgPSBcImdhamFyIGthIGhhbHdhXCI7XG5kZXNzZXJ0U2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24zSDUpO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5kZXNzZXJ0c2VjdGlvbjNQLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbmRlc3NlcnRzZWN0aW9uM1AuaW5uZXJIVE1MID0gXCJHYWphciBrYSBoYWx3YSwgYWxzbyBrbm93biBhcyBnYWpvcmVyIGhhbHVhLCBHYWpyZWxhLCBHYWphciBQYWssIGFuZCBDYXJyb3QgaGFsd2EgaXMgYSBjYXJyb3QtYmFzZWQgc3dlZXQgZGVzc2VydCBwdWRkaW5nIGZyb20gdGhlIEluZGlhbiBzdWJjb250aW5lbnQuIEl0IGlzIG1hZGUgYnkgcGxhY2luZyBncmF0ZWQgY2Fycm90cyBpbiBhIHBvdCBjb250YWluaW5nIGEgc3BlY2lmaWMgYW1vdW50IG9mIHdhdGVyLCBtaWxrIGFuZCBzdWdhciBhbmQgdGhlbiBjb29raW5nIHdoaWxlIHN0aXJyaW5nIHJlZ3VsYXJseVwiO1xuZGVzc2VydFNlY3Rpb24zLmFwcGVuZENoaWxkKGRlc3NlcnRzZWN0aW9uM1ApO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuZGVzc2VydHNlY3Rpb24zQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5kZXNzZXJ0c2VjdGlvbjNCdG4uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbmRlc3NlcnRzZWN0aW9uM0J0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXByaW1hcnlcIik7XG5kZXNzZXJ0c2VjdGlvbjNCdG4uaW5uZXJIVE1MID0gXCJwbGFjZSBvcmRlclwiO1xuXG5jb25zdCBkZXNzZXJ0c2VjdGlvbjNCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5kZXNzZXJ0c2VjdGlvbjNCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbmRlc3NlcnRzZWN0aW9uM0J0blNwYW4uaW5uZXJIVE1MID0gXCImIzgzNzc7IDE3NVwiO1xuXG5kZXNzZXJ0c2VjdGlvbjNCdG4uYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24zQnRuU3Bhbik7XG5kZXNzZXJ0U2VjdGlvbjMuYXBwZW5kQ2hpbGQoZGVzc2VydHNlY3Rpb24zQnRuKTtcblxuZGVzc2VydFJvdy5hcHBlbmRDaGlsZChkZXNzZXJ0U2VjdGlvbjMpO1xuYm9keVRhZy5hcHBlbmRDaGlsZChkZXNzZXJ0Q29udGFpbmVyKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipPUkRFUiBGT1JNKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5mb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb3JtUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xuXG5jb25zdCBtYWluRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xubWFpbkZvcm0uY2xhc3NMaXN0LmFkZChcImNvbC1tZC0xMlwiKTtcbm1haW5Gb3JtLmNsYXNzTGlzdC5hZGQoXCJtYWluLWZvcm1cIik7XG5tYWluRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJQT1NUXCIpO1xuZm9ybVJvdy5hcHBlbmRDaGlsZChtYWluRm9ybSk7XG5cbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWZvcm1cIik7XG5jbG9zZUJ0bi5pbm5lckhUTUwgPSBcIlhcIjtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKGZvcm1Db250LnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIil7XG4gICAgICAgIGZvcm1Db250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KVxuXG5jb25zdCBuYW1lRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5uYW1lRW50cnkuaW5uZXJIVE1MID0gXCJuYW1lXCI7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5uYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJlbnRlciB5b3VyIG5hbWVcIik7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChuYW1lRW50cnkpO1xubWFpbkZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuY29uc3QgYWRkcmVzc0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuYWRkcmVzc0VudHJ5LmlubmVySFRNTCA9IFwiYWRkcmVzc1wiO1xuY29uc3QgYWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuYWRkcmVzc0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiZW50ZXIgeW91ciBhZGRyZXNzXCIpO1xubWFpbkZvcm0uYXBwZW5kQ2hpbGQoYWRkcmVzc0VudHJ5KTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGFkZHJlc3NJbnB1dCk7XG5cbmNvbnN0IG51bWJlckVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xubnVtYmVyRW50cnkuaW5uZXJIVE1MID0gXCJudW1iZXJcIjtcbmNvbnN0IG51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubnVtYmVySW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbm51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwicGhvbmUgbnVtYmVyXCIpO1xubWFpbkZvcm0uYXBwZW5kQ2hpbGQobnVtYmVyRW50cnkpO1xubWFpbkZvcm0uYXBwZW5kQ2hpbGQobnVtYmVySW5wdXQpO1xuXG5jb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbmRpc2hOYW1lLmlubmVySFRNTCA9IFwiZGlzaCBuYW1lXCI7XG5jb25zdCBkaXNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kaXNoSW5wdXQuc3R5bGUudGV4dFRyYW5zZm9ybSA9IFwiY2FwaXRhbGl6ZVwiO1xuZGlzaElucHV0LmNsYXNzTGlzdC5hZGQoXCJkaXNoTmFtZVwiKTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcbm1haW5Gb3JtLmFwcGVuZENoaWxkKGRpc2hJbnB1dCk7XG5cbmNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xucXVhbnRpdHkuaW5uZXJIVE1MID0gXCJxdWFudGl0eVwiO1xuY29uc3QgcXVhbnRpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcbnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiOFwiKVxucXVhbnRpdHlJbnB1dC52YWx1ZSA9IDE7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChxdWFudGl0eSk7XG5tYWluRm9ybS5hcHBlbmRDaGlsZChxdWFudGl0eUlucHV0KTtcblxuY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiY29uZmlybUJ1dHRvbnNcIik7XG5cbmNvbnN0IGJ0bkg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuYnRuSDUuY2xhc3NMaXN0LmFkZChcImNvbmZpcm1cIik7XG5idG5INS5pbm5lckhUTUwgPSBcImNvbmZpcm0gb3JkZXJcIjtcbmJ0bkRpdi5hcHBlbmRDaGlsZChidG5INSk7XG5cbmNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG55ZXNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbnllc0J0bi5pbm5lckhUTUwgPSBcInllc1wiO1xuYnRuRGl2LmFwcGVuZENoaWxkKHllc0J0bik7XG5cbmNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5vQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5ub0J0bi5pbm5lckhUTUwgPSBcIm5vXCI7XG5idG5EaXYuYXBwZW5kQ2hpbGQobm9CdG4pO1xuXG5tYWluRm9ybS5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG5ib2R5VGFnLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG5cbi8qKioqKioqKioqKmZ1bmN0aW9uYWxpdHkgZm9yIG9wZW5pbmcgb3JkZXIgZm9ybSBvbiBjbGlja2luZyBwbGFjZSBvcmRlcioqKioqKioqKioqKiovXG5jb25zdCBmb3JtQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChidXR0b24gPT57XG4gICAgaWYoYnV0dG9uLmlubmVySFRNTC5pbmNsdWRlcyhcInBsYWNlIG9yZGVyXCIpKXtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihmb3JtQ29udC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIil7XG4gICAgICAgICAgICAgICAgZm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICBkaXNoSW5wdXQudmFsdWUgPSBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDVcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzaE5hbWVcIikucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGZvcm1Db250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZm9ybUNvbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqQUJPVVQgU0VDVElPTioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc2VjdGlvblwiKTtcbmFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5hYm91dENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5jb25zdCBhYm91dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hYm91dFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRSb3cpO1xuXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29sLW1kLTEyXCIpO1xuXG5jb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuYWJvdXRIMS5pbm5lckhUTUwgPSBcIndlbGNvbWUgdG8gb3VyIHJlc3RhdXJhbnRcIjtcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dEgxKTtcblxuY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5hYm91dFAuaW5uZXJIVE1MID0gXCJUYXN0ZSBmbGF2b3VycyBhbmQgdmFyaXRpZXMgb2YgZm9vZCBmcm9tIGFsbCBvdmVyIHRoZSBpbmRpYSBoZXJlIGFuZCBleHBlcmllbmNlIEluZGlhIGluIGEgd2hvbGUgbmV3IHdheVwiO1xuXG5jb25zdCBhYm91dEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5hYm91dEFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvd1wiKTtcbmFib3V0QXJyb3cuaW5uZXJIVE1MID0gXCImIzg1OTQ7XCI7XG5hYm91dFAuYXBwZW5kQ2hpbGQoYWJvdXRBcnJvdyk7XG5cbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFApO1xuXG5hYm91dFJvdy5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRSb3cpO1xuYm9keVRhZy5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqQ09OVEFDVCBGT1JNKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWZvcm1cIik7XG5jb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5jb250YWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuY29uc3QgY29udGFjdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29udGFjdEgzLmlubmVySFRNTCA9IFwiZnJvbSBwYXJ0aWVzIHRvIGZ1bmN0aW9ucywgd2UgYXJyYW5nZSBmb3IgZXZlcnl0aGluZy4gcmluZyBhIGJlbGwsIG1lc3NhZ2Ugb3IgdmlzaXQgdXMgYW5kIGdpdmUgdXMgYSBjaGFuY2UgdG8gc2hvd2Nhc2Ugb3VyIGhvc3BpdGFsaXR5LlwiXG5jb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIMyk7XG5cbmNvbnN0IGNvbnRhY3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFjdFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Um93KTtcblxuY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJjb2wtbWQtNlwiKTtcblxuY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuY29udGFjdEVtYWlsLmlubmVySFRNTCA9IFwiZW1haWwgICYjMTI4MjMxO1wiO1xuY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcbmNvbnN0IGVtYWlsSXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuZW1haWxJcHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5lbWFpbElwdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInJlc3RhdXJhbnRAZ21haWwuY29tXCIpO1xuZW1haWxJcHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZW1haWxcIik7XG5jb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElwdCk7XG5cbmNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbmNvbnRhY3RQaG9uZS5pbm5lckhUTUwgPSBcInBob25lIG51bWJlciAmI3gxZjUxNDtcIjtcbmNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG5jb25zdCBwaG9uZUlwdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5waG9uZUlwdDEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtcGhvbmUxXCIpO1xucGhvbmVJcHQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XG5waG9uZUlwdDEuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIrOTEtMTIzNDU2NzU5XCIpO1xuY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQocGhvbmVJcHQxKTtcbmNvbnN0IHBob25lSXB0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnBob25lSXB0Mi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1waG9uZTJcIik7XG5waG9uZUlwdDIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcbnBob25lSXB0Mi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIis5MS0xNDg1NDE3NTlcIik7XG5jb250YWN0Rm9ybS5hcHBlbmRDaGlsZChwaG9uZUlwdDIpO1xuXG5jb25zdCB2aXNpdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbnZpc2l0QWRkLmlubmVySFRNTCA9IFwidmlzaXRpbmcgYWRkcmVzc1wiO1xuY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQodmlzaXRBZGQpO1xuY29uc3QgYWRkSXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYWRkSXB0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWFkZHJlc3NcIilcbmFkZElwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbmFkZElwdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInNvbWUgYWRkcmVzc1wiKTtcbmNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGFkZElwdCk7XG5cbmNvbnRhY3RSb3cuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Um93KTtcbmJvZHlUYWcuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWVtYWlsXCIpLnJlYWRPbmx5ID0gdHJ1ZTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1waG9uZTFcIikucmVhZE9ubHkgPSB0cnVlO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LXBob25lMlwiKS5yZWFkT25seSA9IHRydWU7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtYWRkcmVzc1wiKS5yZWFkT25seSA9IHRydWU7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIGJvZHlUYWcuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=