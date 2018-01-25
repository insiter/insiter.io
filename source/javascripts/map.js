export default () => {
  const mapContainer = document.querySelector('[data-google-maps]')

  const center = {
    lat: -16.6697035,
    lng: -49.2358471
  }

  /* global google */
  const map = new google.maps.Map(mapContainer, {
    zoom: 16,
    scrollwheel: false,
    styles: require('./map-style.json'),
    center
  })

  /* eslint-disable no-new */
  new google.maps.Marker({
    position: center,
    map
  })
}
