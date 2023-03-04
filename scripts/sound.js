export default function Sound() {

  const buttonPress = new Audio('../audios/button-press.wav')
  const timerEnd = new Audio('../audios/timer-end.mp3')
  const background = new Audio('../audios/background.mp3')
  
  background.loop = true

  return {
    buttonPress,
    timerEnd,
    background
  }
}