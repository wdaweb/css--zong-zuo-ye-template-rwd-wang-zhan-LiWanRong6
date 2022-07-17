let valueDisplays = document.querySelectorAll('.number')
let intervlaue = 3000


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0
  let endValue = parseInt(valueDisplay.getAttribute('data-number'))
  let duration = Math.floor(intervlaue / endValue)
  let counter = setInterval(function () {
    startValue++
    valueDisplay.textContent = startValue

    if (startValue == endValue) {
      clearInterval(counter)
    }
  }, duration)
})