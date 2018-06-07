export default () => {
  /* eslint-disable no-new */
  const deadline = new Date('June 9 2018 08:00:00 GMT-0300').getTime()
  const daysCounterElement = document.querySelector('[data-counter-days]')
  const hoursCounterElement = document.querySelector('[data-counter-hours]')
  const minutesCounterElement = document.querySelector('[data-counter-minutes]')
  const secondsCounterElement = document.querySelector('[data-counter-seconds]')
  const padPlaces = 2
  const padFiller = '0'

  const getRemainingTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const updateCountdown = () => {
    /* eslint-disable no-new */
    const currentDate = new Date().getTime()
    const timeDiff = deadline - currentDate
    const { days, hours, minutes, seconds } = getRemainingTime(timeDiff)

    if (timeDiff < 0) {
      return clearInterval(counter)
    }

    daysCounterElement.innerHTML = days.toString().padStart(padPlaces, padFiller)
    hoursCounterElement.innerHTML = hours.toString().padStart(padPlaces, padFiller)
    minutesCounterElement.innerHTML = minutes.toString().padStart(padPlaces, padFiller)
    secondsCounterElement.innerHTML = seconds.toString().padStart(padPlaces, padFiller)
  }

  updateCountdown()
  const counter = setInterval(updateCountdown, 1000)
}
