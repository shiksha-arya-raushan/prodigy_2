let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapsContainer = document.getElementById('lapsList');

let msec = 0, secs = 0, mins = 0;
let timerId = null;

startBtn.onclick = function() {
    if(timerId !== null) clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
};

stopBtn.onclick = function() {
    clearInterval(timerId);
};

resetBtn.onclick = function() {
    clearInterval(timerId);
    msec = secs = mins = 0;
    timerDisplay.innerHTML = "00 : 00 : 00";
    lapsContainer.innerHTML = "";
};

lapBtn.onclick = function() {
    if(timerId !== null) {
        let li = document.createElement('li');
        li.innerHTML = `<span>Lap ${lapsContainer.childElementCount + 1}</span> <span>${timerDisplay.innerHTML}</span>`;
        lapsContainer.prepend(li); // Put latest lap at the top
    }
};

function startTimer() {
    msec++;
    if(msec == 100) {
        msec = 0;
        secs++;
        if(secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let ms = msec < 10 ? `0${msec}` : msec;
    let s = secs < 10 ? `0${secs}` : secs;
    let m = mins < 10 ? `0${mins}` : mins;
    timerDisplay.innerHTML = `${m} : ${s} : ${ms}`;
}