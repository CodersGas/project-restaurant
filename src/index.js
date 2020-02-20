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
imgWrapperImg1.setAttribute("src", "assets/rajma-chawal.svg");

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
imgWrapperImg2.setAttribute("src", "assets/shahi-paneer.svg");

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
imgWrapperImg3.setAttribute("src", "assets/chhole-bhature.svg");

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
nonvegimgWrapperImg1.setAttribute("src", "assets/mutton-korma.svg");

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
nonvegimgWrapperImg2.setAttribute("src", "assets/biryani.svg");

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
nonvegimgWrapperImg3.setAttribute("src", "assets/chicken65.svg");

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

