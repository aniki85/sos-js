//https://developers.google.com/maps/documentation/javascript/
//1.initialiser la map
//2.création du marker
//3.popup
var map;

function initMap(){
  var Olonne_sur_Mer = {
      lat: 46.536401999999995 ,
      lng: -1.772826
  }
var content = '<img src="1.png" class="avatar"><h2>Olonne sur Mer, France<p>coucou</p></h2><p><a href="./formulaire/index.html">Contact</a></p>';

map = new google.maps.Map(document.getElementById('map'),{
    center: Olonne_sur_Mer,
    zoom: 8,
    styles:[
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -17
            },
            {
                "gamma": 0.36
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    }
]
});

var infos = new google.maps.InfoWindow({
    content: content
})

var marker = new google.maps.Marker({
    position: Olonne_sur_Mer,
    map: map
});
marker.addListener('click',function(){
    infos.open(map, marker);
});
}


//teste
