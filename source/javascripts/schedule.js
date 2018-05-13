export default () => {
  const scheduleWrapperElement = document.querySelector('[data-schedule-list]')

  scheduleWrapperElement.addEventListener('click', (e) => {
    const scheduleItemElement = e.target.closest('[data-schedule-item]')

    scheduleItemElement && scheduleItemElement.classList.toggle('active')
  })
}
