export default function Sound() {
  const pressSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/button-press.wav?raw=true');
  const endSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/timer-end.mp3?raw=true');
  const bgSound = new Audio('https://github.com/lucazcruz/timer/blob/main/assets/music/background.mp3?raw=true');

  bgSound.loop = true;

  return {
    pressSound,
    endSound,
    bgSound
  }
}