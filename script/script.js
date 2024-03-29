import {
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
  displayMinutes,
  displaySeconds
} from "./elements.js";

import Controls from "./controls.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Sound from "./sound.js";

const sound = Sound();

const controls = Controls({
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  sound
});

Events({
  controls,
  timer,
  sound
});
