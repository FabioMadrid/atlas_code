//----------- funcion para responsive design del hamburger menu --------------//

    function HamburgerFuction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}

// ------------ funcion para el modal de busqueda inmueble-------------//

// Get the modal
var m1 = document.getElementById("modal-registro");
var m2 = document.getElementById("myModal");

var modal = m1 +  m2;

// Get the button that opens the modal

var b1 = document.getElementById("boton-registro");
var b2 = document.getElementById("myBtn");

var btn = b1 + b2;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

