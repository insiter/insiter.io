window.initMap = function () {
  const style = [
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'saturation': 36
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 40
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'visibility': 'on'
        },
        {
          'color': '#000000'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        },
        {
          'weight': 1.2
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#beb9b9'
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 20
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 21
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 29
        },
        {
          'weight': 0.2
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#3c3939'
        },
        {
          'lightness': 18
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [
        {
          'lightness': 16
        },
        {
          'color': '#434040'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 19
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 17
        }
      ]
    }
  ]

  const myLocation = {
    lat: -16.7035345,
    lng: -49.268107
  }

  /* global google */
  const map = new google.maps.Map(document.getElementById('local'), {
    center: myLocation,
    zoom: 15,
    scrollwheel: false,
    styles: style
  })

  /* eslint-disable no-new */
  new google.maps.Marker({
    position: myLocation,
    map
  })
}
