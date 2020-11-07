function showMedia(cityName,elmnt,color) {
    var i, mediacontent, medialinks;
    mediacontent = document.getElementsByClassName("mediacontent");
    for (i = 0; i < mediacontent.length; i++) {
      mediacontent[i].style.display = "none";
    }
    medialinks = document.getElementsByClassName("medialink");
    for (i = 0; i < medialinks.length; i++) {
      medialinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("open").click();