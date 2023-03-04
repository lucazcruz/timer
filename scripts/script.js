import  {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
  displayMinutes,
  displaySeconds,
  minutes,
} from './elements.js'

import Events from './events.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetTimer,
})

const timer = Timer({
  displaySeconds, 
  displayMinutes,
  resetControls: controls.reset,
  minutes,
  sound
})

Events( { controls, timer, sound})