const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSetTimer = document.querySelector('.set-timer')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const soundOn = document.querySelector('.sound-on')
const soundOff = document.querySelector('.sound-off')

let minutes = displayMinutes.textContent

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  displayMinutes,
  displaySeconds,
  soundOn,
  soundOff,
  minutes
}