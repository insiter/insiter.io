export default () => {
  const mapContainer = document.querySelector('[data-google-maps]')
  const { lat, lng } = mapContainer.dataset
  const center = {
    lat: Number(lat),
    lng: Number(lng)
  }

  /* global google */
  const map = new google.maps.Map(mapContainer, {
    zoom: 15,
    scrollwheel: false,
    styles: require('./map-style.json'),
    gestureHandling: 'cooperative',
    center
  })

  /* eslint-disable no-new */
  new google.maps.Marker({
    position: center,
    map
  })
}
