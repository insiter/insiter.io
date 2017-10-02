// This is where it all goes :)

import components from './components'

document.addEventListener('DOMContentLoaded', () => {
  components.forEach(component => component())
})
