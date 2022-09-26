// JavaScript Document
console.log("hi");

/***********************/
/* nav menu open/dicht */
/***********************/

var menuButton = document.querySelector("button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	var menu = document.querySelector("nav");
	menu.classList.toggle("open");
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