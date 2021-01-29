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
  


//****************************

//   Controllador mapa Api Google Map****************************
var app = angular.module('atlas_adminApp', ['ngMap', 'angucomplete-alt'], );

app.config(['$interpolateProvider',function($interpolateProvider){
  $interpolateProvider.startSymbol('$');
  $interpolateProvider.endSymbol('$');
}]);


app.controller('testCtrl', ['$scope', function testCtrl($scope) {
  $scope.latlng = [14.072280714531173, -87.1921455860138];
  $scope.getpos = function(event){
     $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
  };
  
}]);
