export default function Timer({
  displaySeconds, 
  displayMinutes,
  resetControls,
  minutes,
  sound
}) {
  
  let timerout;

  function countDown() {
    timerout = setTimeout(() => {

      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)
  
      if (seconds <= 0) {
        seconds = 60
        if (minutes <= 0) {
          reset()
          resetControls();
          sound.timerEnd.play()
          return
        }
        updateDisplay(--minutes, seconds)
      }
      updateDisplay(minutes, --seconds)
  
      countDown();
    }, 1000)
  }

  function updateDisplay(minutes, seconds) {
    minutes = minutes
    displayMinutes.textContent = String(minutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }

  function hold() {
    clearTimeout(timerout)
  }

  return {
    countDown,
    updateDisplay,
    reset,
    updateMinutes,
    hold
  }
}