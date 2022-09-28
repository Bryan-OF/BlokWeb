// JavaScript Document
console.log("hi");

/***********************/
/* nav menu open/dicht */
/***********************/







/***************************/
/* EERSTE STREEPJES BUTTON */
/***************************/

/* hamburger menu met bewegend strepen link:https://codepen.io/shooft/pen/dymRMBZ */
var eersteStreepjesButton = document.querySelector("header button");
eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);
function eersteStreepjesButtonKlik() {
  eersteStreepjesButton.classList.toggle("menuOpen");
}