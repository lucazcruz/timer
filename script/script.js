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


const controls = Controls({
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
});

const timer = Timer({
  displayMinutes,
  displaySeconds
});

Events({
  controls,
  timer  
});
