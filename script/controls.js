export default function Controls({
  playButton, 
  pauseButton,
  stopButton,
  setTimerButton,
}) {
  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    setTimerButton.classList.add("hide");
    stopButton.classList.remove("hide");
  }
  
  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }
  
  function stop() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    setTimerButton.classList.remove("hide");
    stopButton.classList.add("hide");
  }

  function setTimer() {
    const minutes = prompt();
    if(isNaN(minutes)) return false;
    return minutes;
  }

  return {
    play,
    pause,
    stop,
    setTimer
  }
}