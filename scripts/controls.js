export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer
}) {
  
  function play() {
    buttonPlay.classList.add('hide')
    buttonSetTimer.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')  
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonSetTimer.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt()
    if (isNaN(newMinutes)) {
      return false
    }
    return newMinutes
  }

  return {
    play,
    pause,
    reset,
    getMinutes
  }
}