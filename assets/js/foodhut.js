/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll

function inclusive() {document.body.style.backgroundColor= "white"
                      document.body.style.color= "black";

                       document.getElementById("header").style.backgroundColor = "#373e38";
                       document.getElementById("header").style.color = "white";
                       document.getElementById("main").style.backgroundColor = "#373e38";
                       document.getElementById("mainn").style.backgroundColor = "#373e38";
                       document.getElementById("p").style.backgroundColor = "#373e38";
                       document.getElementById("p").style.color = "white";
                       document.getElementById("section").style.backgroundColor = "white"
                       document.getElementById("sectionn").style.backgroundColor = "#373e38"
                       document.getElementById("footer").style.backgroundColor = "white"
                       document.getElementByID("nav").style.backgroundcolor = "#373e38"
                      }

function información() {alert("Diseñado por Gabriel Luna - Correo Electrónico: lunakovalgabriel@gmail.com");}

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }
