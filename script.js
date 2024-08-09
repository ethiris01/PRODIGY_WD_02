let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    running = false;
    display.textContent = '00:00:00:000'; 
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = display.textContent;
    const lapElement = document.createElement('li');
    lapElement.textContent = lapTime;
    lapList.appendChild(lapElement);
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}.` +
        `${milliseconds.toString().padStart(3, '0')}`;
}
