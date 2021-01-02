// ----------------FUNCION PARA LOS MEDIA TABS DE VISTA INMUEBLE ------------------ //

  function showMedia(media, tipoMedia) {
    var i, mediacontent, medialinks;
    mediacontent = document.getElementsByClassName("mediacontent");
    for (i = 0; i < mediacontent.length; i++) {
        mediacontent[i].style.display = "none";
    }
    medialinks = document.getElementsByClassName("medialink");
    for (i = 0; i < medialinks.length; i++) {
        medialinks[i].className = medialinks[i].className.replace(" active", "");
    }
    document.getElementById(tipoMedia).style.display = "block";
    media.currentTarget.className += " active";
  }
  
  // Get the element with id="open" and click on it
document.getElementById("open").click();

//------------- FUNCION PARA LAS IMAGENES DENTRO DE TABLINK - FOTO-------------//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dotactive";
}

//---------------- GOOGLE MAPS ----------------//


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

//--------------FUNCION PARA DESPLEGAR LAS CARACTERISTICAS DE LA PROPIEDAD------------//

var acc1 = document.getElementsByClassName("child-accordion");
var i1;

for (i1 = 0; i1 < acc1.length; i1++) {
  acc1[i1].addEventListener("click", function() {
    this.classList.toggle("active-child-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//--------------FUNCION PARA DESPLEGAR LOS FILTROS ESPECIFICOS------------//

function filtrosEspecificos() {
  var x = document.getElementById("caracteristicas");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//-----------Funcion para el sticky-info ---//

var prevScrollpos = window.innerHeight;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
   
if (99 > currentScrollPos) {
    document.getElementById("sticky-info").style.bottom = "-60px";
  } else {
    document.getElementById("sticky-info").style.bottom = "0px";
  }
  prevScrollpos = currentScrollPos;
}

//------- funcion para los carrusel de propiedades sugeridas---//

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


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
    
    