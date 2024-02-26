export default function Sound() {
  const pressSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/button-press.wav?raw=true');
  const endSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/timer-end.wav?raw=true');
  const bgSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/background.wav?raw=true');

  return {
    pressSound,
    endSound,
    bgSound
  }
}