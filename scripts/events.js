import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  soundOn,
  soundOff,
  minutes
} from './elements.js'

export default function Events({ controls, timer, sound}) {
  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countDown()
    sound.buttonPress.play()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.buttonPress.play()
  })

  buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    timer.updateDisplay(minutes,0)
    sound.buttonPress.play()
  })

  buttonSetTimer.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()
    if (newMinutes) {
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    }
    sound.buttonPress.play()
  })

  soundOn.addEventListener('click', ()=> {
    soundOff.classList.remove('hide')
    soundOn.classList.add('hide')
    sound.background.pause()
  })

  soundOff.addEventListener('click', ()=> {
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    sound.background.play()
  })
}
