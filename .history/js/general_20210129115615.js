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
  
  function validateForm() {
    // This function deals with validation of the form fields//
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





///////////////////////////////// Inicio de codigo Juank ///////////////////////////////////////
/* ****************************** Inicio de codigo Juank ************************************ */

function prevCredito(next) {
  //obtenemos todas las tabs ordenadas en un arreglo
  var tabsCredito = document.getElementsByClassName("tab");
  //obtenemos los valores seleccionables de actividad laboral
  let empleado = document.getElementById("empleado").checked;
  let independiente = document.getElementById("independiente").checked;
  let socio = document.getElementById("socio").checked;
  let jubilado = document.getElementById("jubilado").checked;
  let otro = document.getElementById("otro").checked;
  //obtenemos respuesta de ingresos extra
  let ingresoSi = document.getElementById("ingresoSi").checked;
  let ingresoNo = document.getElementById("ingresoNo").checked;
  //obtenemos respuesta de mancomunado
  let creditoIndividual = document.getElementById("credito_individual").checked;
  let creditoMancomunado = document.getElementById("credito_mancomunado").checked;
  //obtenemos boton de siguiente
  let botonSiguiente = document.getElementById("nextBtn");
  let botonAnterior = document.getElementById("prevBtn");

  //verificamos si se esta mostrando la tab de bienvenida
  if (tabsCredito[0].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(0);
    //luego mostramos la siguiente tab
    mostrarTab(1);
  }
  //verificamos si se esta mostrando la tab de datos personales
  if (tabsCredito[1].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(1);
    //luego mostramos la siguiente tab
    mostrarTab(0);
    botonAnterior.style.display = 'none';
  }
  //verificamos si se esta mostrando la tab de actividad laboral
  if (tabsCredito[2].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(2);
    //luego mostramos la siguiente tab
    mostrarTab(1);
  }
  //verificamos si se esta mostrando la tab de empleado
  if (tabsCredito[3].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(3);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de independiente
  if (tabsCredito[4].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(4);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de Socio de empreso
  if (tabsCredito[5].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(5);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de Socio de Jubilado
  if (tabsCredito[6].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(6);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
   //verificamos si se esta mostrando la tab de Socio de otro
  if (tabsCredito[7].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(7);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de ingreso extra
  if (tabsCredito[8].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(8);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de ingreso extra
  if (tabsCredito[9].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(9);
    //luego mostramos la siguiente tab
    mostrarTab(8);
  }
  //verificamos si se esta mostrando la tab de mancomunado
  if (tabsCredito[10].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(10);
    //luego mostramos la siguiente tab
    mostrarTab(8);
  }
  //verificamos si se esta mostrando la tab de datos del codeudor
  if (tabsCredito[11].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(11);
    //luego mostramos la siguiente tab
    mostrarTab(10);
  }
  //verificamos si se esta mostrando la tab final
  if (tabsCredito[12].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(12);
    //luego mostramos la siguiente tab
    mostrarTab(10);
    botonSiguiente.firstChild.data = "Siguiente"
  }
  
}

function nextCredito(next) {
  //obtenemos todas las tabs ordenadas en un arreglo
  var tabsCredito = document.getElementsByClassName("tab");
  //obtenemos los valores seleccionables de actividad laboral
  let empleado = document.getElementById("empleado").checked;
  let independiente = document.getElementById("independiente").checked;
  let socio = document.getElementById("socio").checked;
  let jubilado = document.getElementById("jubilado").checked;
  let otro = document.getElementById("otro").checked;
  //obtenemos respuesta de ingresos extra
  let ingresoSi = document.getElementById("ingresoSi").checked;
  let ingresoNo = document.getElementById("ingresoNo").checked;
  //obtenemos respuesta de mancomunado
  let creditoIndividual = document.getElementById("credito_individual").checked;
  let creditoMancomunado = document.getElementById("credito_mancomunado").checked;
  //obtenemos boton de siguiente
  let botonSiguiente = document.getElementById("nextBtn");
  let botonAnterior = document.getElementById("prevBtn");

  //verificamos si estamos en la pantalla final de datos
  if (tabsCredito[12].style.display == "block") {
    //si es correcto cambiamos el boton de siguiente a submit
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
  }
  //verificamos si estamos en la pantalla de datos del codeudor mancomunado
  if (tabsCredito[11].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(11);
    //luego mostramos la tab siguiente y final
    mostrarTab(12);
    botonSiguiente.firstChild.data = "Enviar"
  }
  //verificamos si estamos en la pantalla de mancomunado
  if (tabsCredito[10].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(10);
    //Confirmamos la eleccion del usuario
    if (creditoIndividual==true) {
      mostrarTab(12);
    botonSiguiente.firstChild.data = "Enviar"
    }
    if (creditoMancomunado==true) {
      mostrarTab(11);
    }
  }
  //verificamos si estamos en la pantalla de los ingresos extra
  if (tabsCredito[9].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(9);
    mostrarTab(10);
  }
  //verificamos si esta en la pantalla de ingresos extra
  if (tabsCredito[8].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(8);
    //analisamos la seleccion del cliente
    if (ingresoSi == true) {
      mostrarTab(9);
    }
    if (ingresoNo == true) {
      mostrarTab(10);
    }
  }
  //verificamos si esta en la pantalla de otro
  if (tabsCredito[7].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(7);
    //mostramos la tab de ingresos extra
    mostrarTab(8);
  }
  //verificamos si esta en la pantalla de jubilado
  if (tabsCredito[6].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(6);
    //mostramos la tab de ingresos extra
    mostrarTab(8);
  }
  //verificamos si esta en la pantalla de Socio
  if (tabsCredito[5].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(5);
    //mostramos la tab de ingresos extra
    mostrarTab(8);
  }
  //verificamos si esta en la pantalla de independiente
  if (tabsCredito[4].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(4);
    //mostramos la tab de ingresos extra
    mostrarTab(8);
  }
  //verificamos si esta en la pantalla de empleados
  if (tabsCredito[3].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(3);
    //mostramos la tab de ingresos extra
    mostrarTab(8);
  }
  //verificamos si se esta mostrando la tab de actividad laboral
  if (tabsCredito[2].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(2);
    //luego mostramos la siguiente tab,
    //para lograrlo debemos analizar que ha actividad laboral ha seleccionado el cliente
    if (empleado == true) {
      mostrarTab(3);
    }
    if (independiente == true) {
      mostrarTab(4);
    }
    if (socio == true) {
      mostrarTab(5);
    }
    if (jubilado == true) {
      mostrarTab(6);
    }
    if (otro == true) {
      mostrarTab(7);
    }
  }
  //verificamos si se esta mostrando la tab de datos personales
  if (tabsCredito[1].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(1);
    //luego mostramos la siguiente tab
    mostrarTab(2);
  }
  //verificamos si se esta mostrando la tab de bienvenida
  if (tabsCredito[0].style.display == "block") {
    //si es correcto ocultamos esta tab
    ocultarTab(0);
    //luego mostramos la siguiente tab
    mostrarTab(1);
    botonAnterior.style.display = 'block';
  }
}

//Esta funcion nos ayudara a ocultar las tabs
function ocultarTab(tabNumero) {
  //obtenemos las tabs y sus valores
  var tabsCredito = document.getElementsByClassName("tab");
  //si es correcto ocultamos esta tab
  tabsCredito[tabNumero].style.display = "none";
}

//Esta funcion nos ayudara a mostrar las tabs
function mostrarTab(tabNumero) {
  //obtenemos las tabs y sus valores
  var tabsCredito = document.getElementsByClassName("tab");
  //si es correcto ocultamos esta tab
  tabsCredito[tabNumero].style.display = "block";
}

///////////////////////////////// Fin de codigo Juank ///////////////////////////////////////
/* ****************************** Fin de codigo Juank ************************************ */
