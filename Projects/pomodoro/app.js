//Fix doc.ready
//convert function
//reset ()

//$(document).ready(function () {

// 1 min = 60,000 ms;
// 1 sec = 1000ms;
// 5 min = 300 sec;

var time = 98;
var nIntervalId;
var min;
var sec;
var totalSec;

var $minutes = $('.minutes');
var $seconds = $('.seconds');

function init() {
    convertTime();
    renderHTML();
};
init();

function renderHTML() {
    $minutes.text((min < 10 ? ('0' + min) : min));
    $seconds.text((sec < 10 ? ('0' + sec) : sec))
}

function convertTime() {
    totalSec = time * 60;
    min = Math.floor(totalSec / 60);
    sec = totalSec % 60;
    return totalSec, min, sec;
}

function startTimer() {
    nIntervalId = setInterval(countdown, 1000);
    console.log('StartTimer');
};

function countdown() {
    if (totalSec <= 0) {
        stopTimer();
    } else {
        totalSec -= 1;
        console.log('Countdown - Minutes: ', min, 'Seconds: ', totalSec);
        updateTime(totalSec);
    }
};

function stopTimer() {
    clearInterval(nIntervalId);
    console.log('Time Done, stopTimer() executed');
};

function updateTime(x) {
    // convertTime();
    min = Math.floor(x / 60);
    sec = (x % 60);
    console.log('renderHTML: min:', min, 'sec: ', sec);
    renderHTML()
};

function addTime() {
    return ++time;
};

function subtractTime() {
    return --time;
};

$('.plus').click(function (e) {
    if (time >= 100) {
        e.preventDefault()
    } else {
        addTime();
        init();
        console.log(time, totalSec);
    }
});

$('.minus').click(function (e) {
    if (time <= 1) {
        e.preventDefault()
    } else {
        subtractTime();
        init();
        console.log(time, totalSec);
    }
});

//});