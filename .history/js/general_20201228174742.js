//----------- -------------------------------------------------funcion para responsive design del hamburger menu ---------------------------------------//

function HamburgerFuction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    }
    
// -------------------------------------------------------------- funciones para los modals de todo atlas ---------------------------------------------------------//

//Modal Registro//
var modalregistro = document.getElementById("modal-registro");
function modalR() 
{
modalregistro.style.display = "block";
}
//Modal Ingreso//
var modalingreso = document.getElementById("modal-ingreso");
function modalI() 
{
modalingreso.style.display = "block";
}
//Modal Contacto//
var modalcontacto = document.getElementById("modal-contacto");
function modalC() 
{
modalcontacto.style.display = "block";
}
//Modal del credito//
var modalcredito = document.getElementById("modal-credito");
function modalCR() 
{
modalcredito.style.display = "block";
}
//Modal de Solicitud de Venta//
var modalventa = document.getElementById("modal-venta");
function modalV() 
{
modalventa.style.display = "block";
}
//Modal filtros en busqueda vivienda//
var modalfiltros = document.getElementById("modal-filtros");
function modalF() 
{
modalfiltros.style.display = "block";
}
//Modal para agendar cita//
var modalcita = document.getElementById("modal-cita");
function modalCITA() 
{
modalcita.style.display = "block";
}



// ------------------ FUNCIONES PARA LOS TABS DE INGRESO, REGISTRO, CITAS, VENTA, CREDITO Y TABCONTENTS ---------------------------- ----------------//

function openRegistro(evt, tipoRegistro) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tipoRegistro).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  
  //----------------------------------------------------------------- FUNCION PARA STEP FORM DE CREDITO -------------------------------------------------------//
  
  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab
  
  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Enviar";
    } else {
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
  }
  
  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      document.getElementByID("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }
  
  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
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
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }
  

  
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
