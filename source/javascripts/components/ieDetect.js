const init = () => {
  let html = document.querySelector('html')
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if(navigator.appVersion.indexOf('Trident') === -1) {
          html.className += 'isEDGE';
      } else {
          html.className += 'isIE isIE11';
      }
  }
  if( navigator.appVersion.indexOf("MSIE") !== -1 ) {
      html.className += 'isIE';
  }
}

export default init
