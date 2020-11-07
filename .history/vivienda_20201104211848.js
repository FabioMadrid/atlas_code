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
  
  // Get the element with id="defaultOpen" and click on it
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

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}