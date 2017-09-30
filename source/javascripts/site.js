// This is where it all goes :)

(function () {
  var classes = {
    headerToggleClose: 'header-toggle-visible',
    menuAnimatable: 'menu-animatable',
    menuVisible: 'menu-visible',
  };

  var menu = document.querySelector('.js-menu');
  var toggle = document.querySelector('.js-toggle');

  var handleToggleClick = function (e) {
    menu.classList.add(classes.menuAnimatable);

    if (!menu.classList.contains(classes.menuVisible)) {
      toggle.classList.add(classes.headerToggleClose);
      menu.classList.add(classes.menuVisible);
    } else {
      toggle.classList.remove(classes.headerToggleClose);
      menu.classList.remove(classes.menuVisible);
    }
  };

  var handleMenuTransitionEnd = function (e) {
    menu.classList.remove(classes.menuAnimatable);
  };

  toggle.addEventListener('click', handleToggleClick, false);
  menu.addEventListener('click', handleToggleClick, false);
  menu.addEventListener('transitionend', handleMenuTransitionEnd, false);
}());
