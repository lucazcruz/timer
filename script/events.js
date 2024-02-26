import {
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
} from "./elements.js";


export default function Events({ controls, timer, sound }) {
  playButton.addEventListener("click", () => {
    controls.play();
    timer.countDown();
    sound.pressSound.play();
  })
  
  pauseButton.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sound.pressSound.play();
  })
  
  stopButton.addEventListener("click", () => {
    controls.stop();
    timer.reset();
    sound.pressSound.play();
  })
  
  setTimerButton.addEventListener("click", () => {
    const minutes = controls.setTimer();
    timer.updateDisplay(minutes);
    sound.pressSound.play();
  })
}