export default function Timer({
  displayMinutes,
  displaySeconds
}) {

  let interval;
  
  function countDown() {
    let minutes = displayMinutes.innerText;
    let seconds = displaySeconds.innerText;

    interval = setInterval(() => {
      if(seconds <= 0) {
        seconds = 60;
        updateDisplay(--minutes, seconds);
      }
      updateDisplay(minutes, --seconds);
      if(minutes <= 0 && seconds <= 0) reset();
    }, 1000);
  }

  function updateDisplay(minutes, seconds = 0) {
    displayMinutes.innerText = String(minutes).padStart(2, 0);
    displaySeconds.innerText = String(seconds).padStart(2, 0);
  }

  function reset() {
    hold();
    updateDisplay(2);
  }

  function hold() {
    clearInterval(interval);
  }
  
  return {
    countDown,
    updateDisplay,
    reset,
    hold,
  }
}
