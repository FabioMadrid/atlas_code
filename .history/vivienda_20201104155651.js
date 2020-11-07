
  function showMedia(media, tipoMedia) {
    var i, mediacontent, medialinks;
    mediacontent = document.getElementsByClassName("mediacontent");
    for (i = 0; i < mediacontent.length; i++) {
        mediacontent[i].style.display = "none";
    }
    medialinks = document.getElementsByClassName("medialinks");
    for (i = 0; i < medialinks.length; i++) {
        medialinks[i].className = medialinks[i].className.replace(" active", "");
    }
    document.getElementById(tipoMedia).style.display = "block";
    media.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
document.getElementById("open").click();