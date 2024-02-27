import {
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
  soundOnButton,
  soundOffButton,
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
    if(minutes) timer.updateDisplay(minutes);
    sound.pressSound.play();
  })

  soundOffButton.addEventListener('click', () => {
    soundOnButton.classList.remove("hide");
    soundOffButton.classList.add("hide");
    sound.bgSound.play();
  });

  soundOnButton.addEventListener('click', () => {
    soundOnButton.classList.add("hide");
    soundOffButton.classList.remove("hide");
    sound.bgSound.pause();
  });
}