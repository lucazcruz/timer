export default function Sound() {

  const buttonPress = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/button-press.wav?raw=true')
  const timerEnd = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/timer-end.mp3?raw=true')
  const background = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/background.mp3?raw=true')
  
  background.loop = true

  return {
    buttonPress,
    timerEnd,
    background
  }
}