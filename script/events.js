import {
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
} from "./elements.js";


export default function Events({ controls, timer }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countDown();
  })
  
  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.hold();
  })
  
  stopButton.addEventListener("click", () => {
    controls.stop();
    timer.reset();
  })
  
  setTimerButton.addEventListener("click", () => {
    const minutes = controls.setTimer();
    timer.updateDisplay(minutes)
  })
}