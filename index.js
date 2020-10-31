
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
