const classes = {
  headerToggleClose: 'header-toggle-visible',
  menuAnimatable: 'menu-animatable',
  menuVisible: 'menu-visible',
}

const menu = document.querySelector('.js-menu')
const toggle = document.querySelector('.js-toggle')

const init = () => {
  bindEvents()
}

const bindEvents = () => {
  toggle.addEventListener('click', handleToggleClick, false)
  menu.addEventListener('click', handleToggleClick, false)
  menu.addEventListener('transitionend', handleMenuTransitionEnd, false)
}

const handleToggleClick = (e) => {
  menu.classList.add(classes.menuAnimatable)

  if (!menu.classList.contains(classes.menuVisible)) {
    toggle.classList.add(classes.headerToggleClose)
    menu.classList.add(classes.menuVisible)
  } else {
    toggle.classList.remove(classes.headerToggleClose)
    menu.classList.remove(classes.menuVisible)
  }
}

const handleMenuTransitionEnd = (e) => {
  menu.classList.remove(classes.menuAnimatable)
}

export default init
