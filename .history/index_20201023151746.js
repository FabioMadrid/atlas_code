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

var modalregistro = document.getElementById("modal-registro");
var btnregistro = document.getElementById("boton-registro");

btnregistro.onclick = function() {
modalregistro.style.display = "block";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
modalregistro.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
window.onclick = function(event) {
  if (event.target == modalregistro) {
  modalregistro.style.display = "none";
  }
  }

// ------------A DEPURAR Y UNIFICAR CODIGO PARA TENER UNA SOLA FUNCION ----------------//

