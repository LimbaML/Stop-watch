let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 1000);
    document.getElementById("startStop").innerText = "Pause";
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById("startStop").innerText = "Resume";
  }
}

function stopStopwatch() {
  clearInterval(timer);
  timer = null;
  document.getElementById("startStop").innerText = "Start";
}

function resetStopwatch() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStop").innerText = "Start";
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
