
//----------------FUNCION PARA TENER SLIDES DENTRO DE LOS CARDS DE LAS PROPIEDADES ----------------//

var slideIndex = [1,1];
var slideId = ["mySlides", "mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}




// -------------FUNCION PARA EL RANGO DE PRECIOS DE FILTROS ---------------//

var slider = document.getElementById("rango-precio");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//----------------FUNCION PARA SELECCION # DE DORM, BANOS Y NIVELES ------//

function inc(element) {
  let el = document.querySelector(`[name="${element}"]`);
  el.value = parseInt(el.value) + 1;
}

function dec(element) {
  let el = document.querySelector(`[name="${element}"]`);
	if (parseInt(el.value) > 0) {
	  el.value = parseInt(el.value) - 1;
  }
}

//--------------FUNCION PARA DESPLEGAR LOS FILTROS ESPECIFICOS----//
function filtrosEspecificos() {
  var x = document.getElementById("filtros-especificos");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}