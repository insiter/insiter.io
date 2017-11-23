// This is where it all goes :)

import components from './components'

window.initMap = function() {
  var style = [{
      "elementType": "geometry",
      "stylers": [{
          "visibility": "simplified"
      }, {
          "hue": "#ff0000"
      }]
  }, {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "off"
      }]
  }, {
      "featureType": "transit.station",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "off"
      }]
  }, {
      "featureType": "poi",
      "stylers": [{
          "visibility": "off"
      }]
  }, {
      "featureType": "administrative",
      "stylers": [{
          "visibility": "simplified"
      }]
  }, {
      "featureType": "water",
      "stylers": [{
          "visibility": "off"
      }]
  }];

  var myLocation = {
      lat: -30.035292,
      lng: -51.226415
  };

  var map = new google.maps.Map(document.getElementById("local"), {
    center: myLocation,
    zoom: 15,
    scrollwheel: false,
    styles: style
  });

  var marker = new google.maps.Marker({
    position: myLocation,
    map: map
  });

  var contentString = '<p class="address">Rua Coronel Genuíno, 130<br>Centro Histórico - Porto Alegre - RS</p>';

  var infoWindow = new google.maps.InfoWindow({
    content:contentString
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  components.forEach(component => component())
})
