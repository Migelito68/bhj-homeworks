let countdownTimer = document.getElementById("timer");
let interval = setInterval(() => {
    countdownTimer.textContent -= 1;
  if (countdownTimer.textContent <= 0) {
    alert('Вы победили в конкурсе!');
    return clearInterval(interval);
  }
}, 1000);