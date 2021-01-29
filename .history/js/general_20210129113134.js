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

//Modal mostrar informacion de cita//
var infocita = document.getElementById("modal_info_cita");
function modalINFOCITA() 
{
infocita.style.display = "block";
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
    //fixStepIndicator(n)
  }
  
  function nextPrev(n) {
    // This function will figure out which tab to display
    /* Juank Code include*/
    //posibles elecciones del cliente
    let empleado = document.getElementById("empleado").checked;
    let independiente = document.getElementById("independiente").checked;
    let socio = document.getElementById("socio").checked;
    let jubilado = document.getElementById("jubilado").checked;
    let otro = document.getElementById("otro").checked;
    let ingresoSi = document.getElementById("ingresoSi").checked;
    let ingresoNo = document.getElementById("ingresoNo").checked;
    let creditoIndividual = document.getElementById("credito_individual").checked;
    let creditoMancomunado = document.getElementById("credito_mancomunado").checked;
    var tabsCredito = document.getElementsByClassName("tab");

    /*
      Analisis de acctividad laboral para determinar que tab mostrar
     */
    if(empleado == true){
      // Hide the current tab:
      //mostrar pantalla de empledos
      tabsCredito[currentTab].style.display = "none";
      showTab(3);
      currentTab=3;
      empleado=false;
      document.getElementById("empleado").checked=false;
    }else if(independiente==true){
      //mostrar pantalla de independientes
      tabsCredito[currentTab].style.display = "none";
      currentTab=4;
      showTab(currentTab);
      document.getElementById("independiente").checked=false;
    }else if(socio==true){
      //mostrar pantalla de Socios
      tabsCredito[currentTab].style.display = "none";
      currentTab=5;
      showTab(currentTab);
      document.getElementById("socio").checked=false;
    }else if(jubilado==true){
      //mostrar pantalla de Jubilados
      tabsCredito[currentTab].style.display = "none";
      currentTab=6;
      showTab(currentTab);
      document.getElementById("jubilado").checked =false;
    }else if(otro==true){
      //mostrar pantalla de Otro
      tabsCredito[currentTab].style.display = "none";
      currentTab=7;
      showTab(currentTab);
      document.getElementById("otro").checked =false;
    }else if(currentTab > 2){
      //mostramos ingresos extra
      tabsCredito[currentTab].style.display = "none";
      currentTab=8;
      showTab(currentTab);
    }else if(currentTab == 0 || currentTab == 1){
      // Este nos sirve para seguir aumentando 1 valor a nuestros tabs cuando no cumple
      //nuestras tabs se encuentran en la primera y la segunda tab
      tabsCredito[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      showTab(currentTab);
    }
    if(ingresoSi == true){
      tabsCredito[currentTab].style.display = "none";
      currentTab=9;
      showTab(currentTab);
      document.getElementById("ingresoSi").checked=false;
    }
    if(ingresoNo==true){
      tabsCredito[currentTab].style.display = "none";
      currentTab=10;
      showTab(currentTab);
      document.getElementById("ingresoNo").checked=false;
    }
    if(currentTab==9){
      tabsCredito[currentTab].style.display = "none";
      currentTab=10;
      showTab(currentTab);
      document.getElementById("ingresoNo").checked=false;
    }
    if(creditoIndividual == true){
      if(tabsCredito[10].style.display == "block"){
        tabsCredito[currentTab].style.display = "none";
        currentTab=12;
        showTab(currentTab);
        document.getElementById("credito_individual").checked=false;
      }
    }
    if(creditoMancomunado == true){
      tabsCredito[currentTab].style.display = "none";
      currentTab=11;
      showTab(currentTab);
      document.getElementById("credito_mancomunado").checked=false;
    }

    // Exit the function if any field in the current tab is invalid:
    //if (n == 1 && !validateForm()) return false;
    /* for (let i; i < tabsCredito.length; i++){
    } */
    // if you have reached the end of the form...
    if (currentTab >= tabsCredito.length) {
      // ... the form gets submitted:
      document.getElementByID("regForm").submit();
      return false;
    }
    }
  
  function validateForm() {
    // This function deals with validation of the form fields
    /* var x, y, i, valid = true;
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
    } */
    return true; // return the valid status
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

