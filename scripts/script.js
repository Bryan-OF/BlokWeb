// JavaScript Document
console.log("hi");

/***********************/
/* nav menu open/dicht */
/***********************/


var deMenuButton = document.querySelector("header button");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  var hetMenu = document.querySelector("header nav:nth-of-type(2)");
  hetMenu.classList.toggle("open");
}




/***************************/
/* EERSTE STREEPJES BUTTON */
/***************************/

/* hamburger menu met bewegend strepen link:https://codepen.io/shooft/pen/dymRMBZ */
var eersteStreepjesButton = document.querySelector("header button");
eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);
function eersteStreepjesButtonKlik() {
  eersteStreepjesButton.classList.toggle("menuOpen");
}