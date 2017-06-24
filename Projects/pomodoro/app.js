// $(document).ready(function () {

// Date.now minus 25mins 
// 1 min = 60,000 ms;
// 1 sec = 1000ms;
// 5 min = 300 sec;

var now = new Date();
var time;
var min;
var sec;
var nIntervalId;
var s;

var $minutes = $('.minutes');
var $seconds = $('.seconds');

time = 1; // 5 min
var timeToSec = time * 60;
var seconds = timeToSec;

function init() {
    //$minutes.
    //$seconds.
};

function convert(time) {
    t = time * 60;
    min = Math.floor(t / 60);
    s = t % 60;

}

function startTimer() {
    nIntervalId = setInterval(countdown, 1000);
};

function countdown() {
    if (seconds <= 0) {
        stopTimer();
    } else {
        seconds -= 1;
        console.log('Minutes: ', min, 'Seconds: ', seconds)
        renderHTML(seconds);
    }
};

function stopTimer() {
    clearInterval(nIntervalId);
    console.log('Time Done, stopTimer() executed');
};

function renderHTML(sec) {
    min = Math.floor(sec / 60);
    s = sec % 60;
    console.log('renderHTML: min:', min, 'sec: ', sec);

    $minutes.text(min);
    $seconds.text(s);
};


// });