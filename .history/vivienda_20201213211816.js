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


//---------------------------------- FUNCION PARA EL STEP FORM DE AGENDAR CITAS --------------------------//

const gap1 = 16;

const carousel1 = document.getElementById("carousel1"),
  content1 = document.getElementById("content1"),
  next1 = document.getElementById("next-hr"),
  prev1 = document.getElementById("prev-hr");

next1.addEventListener("click", e => {
  carousel1.scrollBy(width + gap1, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - width - gap1 <= carousel1.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width + gap1), 0);
  if (carousel1.scrollLeft - width - gap1 <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollWidth - width - gap1 <= carousel1.scrollLeft + width) {
    next1.style.display = "flex";
  }
});

let width = carousel1.offsetWidth;
window.addEventListener("resize", e => (width = carousel1.offsetWidth));
