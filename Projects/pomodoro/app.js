//Fix doc.ready
//convert function
//reset ()

//$(document).ready(function () {

// 1 min = 60,000 ms;
// 1 sec = 1000ms;
// 5 min = 300 sec;

var time = 5.25;
var min;
var nIntervalId;
var s;

var $minutes = $('.minutes');
var $seconds = $('.seconds');

var timeToSec = time * 60;
//  function timeToSec (t) {
//      return t * 60;
//  }
var seconds = timeToSec;

function init() {
    convertTime(time);
    renderHTML();
};
init();

function renderHTML() {
    $minutes.text((min < 10 ? ('0' + min) : min));
    $seconds.text((s < 10 ? ('0' + s) : s))
}

function convertTime(time) {
   var t = time * 60;
    min = Math.floor(t / 60);
    s = t % 60;
    return t, min, s;
}

function startTimer() {
    nIntervalId = setInterval(countdown, 1000);
    console.log('StartTimer');
};

function countdown() {
    if (seconds <= 0) {
        stopTimer();
    } else {
        seconds -= 1;
        console.log('Countdown - Minutes: ', min, 'Seconds: ', seconds)
        updateTime(seconds);
    }
};

function stopTimer() {
    clearInterval(nIntervalId);
    console.log('Time Done, stopTimer() executed');
};

function updateTime(sec) {
    //convert(sec);
    min = Math.floor(sec / 60);
    s = (sec % 60);
    console.log('renderHTML: min:', min, 'sec: ', s);

    renderHTML()
};

function addTime() {
    return ++time;
};
function subtractTime() {
    return --time;
};

$('.plus').click(function () {
    addTime();
    init();
    console.log(time,seconds);
});

$('.minus').click(function () {
    subtractTime();
    init();
    console.log(time);
});

//});