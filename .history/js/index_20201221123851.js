
// ----------------------------------------------------------FUNCION PARA GEOLOCALIZACION-----------------------------------------//
//-- Solo funciona una ves que tiene el HTTPS--///
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
// Esta funcion toca enviarla a la base de datos o en submit, no debe mostrarle la coord al cliente//
function showPosition(position) {
  //x.innerHTML = //
  "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


//Modal CITA//
var modalcita = document.getElementById("modal-cita");
function modalCITA() 
{
modalcita.style.display = "block";
}

//Modal busqueda de propiedades//
var modal = document.getElementById("myModal");
function modalPROPIEDADES() 
{
modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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
