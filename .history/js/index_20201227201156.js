
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


  //----------------------------------------------------------------- FUNCION PARA STEP FORM DE VENTA -------------------------------------------------------//
  
  var currentTab1 = 0; // Current tab is set to be the first tab (0)
  showTab1(currentTab1); // Display the current tab
  
  function showTab1(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab1");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn1").style.display = "none";
    } else {
      document.getElementById("prevBtn1").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn1").innerHTML = "Enviar";
    } else {
      document.getElementById("nextBtn1").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator1(n)
  }
  
  function nextPrev1(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab1");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab1].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab1 = currentTab1 + n;
    // if you have reached the end of the form...
    if (currentTab1 >= x.length) {
      // ... the form gets submitted:
      document.getElementById("regForm1").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab1(currentTab1);
  }
  

  function validateForm1() {

    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab1");
    y = x[currentTab1].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step1")[currentTab1].className += " finish";
    }
    return valid; // return the valid status
  }
  

  function fixStepIndicator1(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step1");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }
  