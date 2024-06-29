const timerDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let timerSeconds = 1800; // Tempo inicial em segundos (30 minutos)
let timerInterval;

function updateTimer() {
  const hours = Math.floor(timerSeconds / 3600);
  const minutes = Math.floor((timerSeconds % 3600) / 60);
  const seconds = timerSeconds % 60;

  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  timerSeconds--;

  if (timerSeconds < 0) {
    alert("Tempo esgotado!");
    clearInterval(timerInterval);
  }
}

startButton.addEventListener('click', () => {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.style.display = "none";
  pauseButton.style.display = "inline-block";
  resetButton.disabled = false;
});

pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none";
  resetButton.style.display = "inline-block";
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerSeconds = 1800;
  updateTimer();
  startButton.style.display = "inline-block";
  pauseButton.style.display = "none"; 
  resetButton.style.display = "none"; 
  resetButton.disabled = true;
  pauseButton.disabled = true; // Desabilita o "pause" após o reset
  
  // Habilita o "pause" novamente após o reset
  startButton.addEventListener('click', () => {
    pauseButton.disabled = false;
  });
});
