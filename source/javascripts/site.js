// This is where it all goes :)

import components from './components'

window.initMap = function() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -30.035292, lng: -51.226415 },
    zoom: 15,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-25.363882, 131.044922),
    map: map
  });
  marker.setMap(map);
}

document.addEventListener('DOMContentLoaded', () => {
  components.forEach(component => component())
})
