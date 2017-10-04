import Vivus from 'vivus'

const getIconsId = () => {
  let iconsEl = [].slice.call(document.querySelectorAll('.hero-icon'))
  let iconsId = iconsEl.map((icon) => icon.id)
  return iconsId
}

const placeIcons = () => {
  var container = document.querySelector(".hero-container")
  var width = container.clientWidth
  var height = container.clientHeight

  var logo = document.querySelector(".hero-logo-container")
  var logoOffset = {
    left: logo.offsetLeft,
    top: logo.offsetTop
  }
  var logoSize = {
    width: logo.clientWidth,
    height: logo.clientHeight
  }

  var description = document.querySelector(".hero-description-container")
  var descriptionOffset = {
    left: description.offsetLeft,
    top: description.offsetTop
  }
  var descriptionSize = {
    width: description.clientWidth,
    height: description.clientHeight
  }

  var doodles = []
  var doodle, box;

  var overlap = function(x11, y11, x12, y12, x21, y21, x22, y22) {
    let x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21))
    let y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21))
    return x_overlap * y_overlap;
  }
  var distance = function(x11, y11, x12, y12, x21, y21, x22, y22) {
    var x1 = (x11 + x12) / 2
    var x2 = (x21 + x22) / 2
    var y1 = (y11 + y12) / 2
    var y2 = (y21 + y22) / 2
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
  var avg = function(values) {
    if (values.length === 0) return 0
    var sum = values.reduce(function(a, b) { return a + b; });
    return sum / values.length;
  }
  var median = function(values) {
    if (values.length === 0) return 0
    return values.sort()[Math.floor(values.length / 2)]
  }

  var place = function(doodle) {
    var spot;
    var margin = width < 650 ? 5 : 30

    var generateSpot = function() {
      var spot = {
        x: margin + Math.random() * (width - 1.5 * margin),
        y: margin + Math.random() * (height - 1.5 * margin),
        overlaps: false
      }

      var logoOverlap = overlap(
        spot.x - margin,
        spot.y - margin,
        spot.x + doodle.width + margin,
        spot.y + doodle.height + margin,
        logoOffset.left,
        logoOffset.top,
        logoOffset.left + logoSize.width,
        logoOffset.top + logoSize.height
      )

      var descriptionOverlap = overlap(
        spot.x - margin,
        spot.y - margin,
        spot.x + doodle.width + margin,
        spot.y + doodle.height + margin,
        descriptionOffset.left - margin,
        descriptionOffset.top - margin,
        descriptionOffset.left + descriptionSize.width + margin,
        descriptionOffset.top + descriptionSize.height + margin
      )

      spot.overlaps = descriptionOverlap > 0 || logoOverlap > 0;

      if (spot.overlaps || doodles.length === 0)
        return spot

      var overlapping = doodles.find(function(d) {
        return overlap(
          spot.x - margin,
          spot.y - margin,
          spot.x + doodle.width + margin,
          spot.y + doodle.height + margin,
          d.x,
          d.y,
          d.x + d.width,
          d.y + d.height
        ) > 0
      })

      if (overlapping) {
        spot.overlaps = true;
        return spot;
      }

      return spot;
    }


    var iter = 0;
    while (iter < 110 && (spot == null || spot.overlaps)) {
      iter++;
      spot = generateSpot()
    }
    return spot
  }

  for (var i = 0; i < getIconsId().length; i++) {

    doodle = {
      $elem: document.querySelectorAll('.hero-icon')[i],
      rotation: Math.random() * 360,
      scale: width < 650 ? 0.4 : 0.75,
    }

    var rect = doodle.$elem.getBoundingClientRect()
    doodle.width = rect.width
    doodle.height = rect.height
    var spot = place(doodle)

    if (spot != null) {
      doodle.x = spot.x
      doodle.y = spot.y
      doodle.$elem.setAttribute('style', `transform: translate(${spot.x}px, ${spot.y}px) rotate(${doodle.rotation}deg) scale(${doodle.scale})`)
      doodles.push(doodle)
    }
  }
}

const animateIcons = () => {
  let elIds = getIconsId()
  elIds = elIds.sort(function() {
    return .5 - Math.random();
  })
  elIds.forEach((el) => {
    const INTERVAL_MIN = 1000
    const INTERVAL_MAX = 3000
    let interval = Math.floor(Math.random() * (INTERVAL_MAX - INTERVAL_MIN) +  INTERVAL_MIN)

    let vivus = new Vivus(el, {
      duration: 150,
      type: 'oneByOne',
      start: 'manual'
    })

    setInterval(() => {
      vivus.play(() => {
        setTimeout(() => {
          vivus.reset()
        },
          interval/2)
      })
    }, interval)

  })
}

const init = () => {
  placeIcons()
  animateIcons()
}

export default init
