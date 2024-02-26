export default function Sound() {
  const pressSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/button-press.wav');
  const endSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/timer-end.wav');
  const bgSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/background.wav');

  return {
    pressSound,
    endSound,
    bgSound
  }
}