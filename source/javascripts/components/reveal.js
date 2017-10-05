import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal()

const elementsToReveal = [
  { selector: '.hero-reveal', interval: 500 },
]

const init = () => {
  elementsToReveal.forEach(element => {
    sr.reveal(element.selector, element.interval)
  })
}

export default init
