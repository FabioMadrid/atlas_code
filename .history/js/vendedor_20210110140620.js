          
//-----------Funcion para los accordions de la vista inmueble ---//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

 // Get the element with id="open" and click on it
 document.getElementById("citas_pendientes2").click();


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