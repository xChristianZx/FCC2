// convert function
// responsive design

$(document).ready(function() {
  var time = 25;
  var nIntervalId;
  var min;
  var sec;
  var totalSec;
  var timerOn = false;

  var $minutes = $(".minutes");
  var $seconds = $(".seconds");

  var alarm =
    "/Users/christianzenaty/Desktop/FCC/Projects/pomodoro/assets/analog-watch-alarm_daniel-simion.mp3";
  var audio = new Audio(alarm);

  function init() {
    convertTime();
    renderHTML();
  }
  init();

  function renderHTML() {
    $minutes.text(min < 10 ? "0" + min : min);
    $seconds.text(sec < 10 ? "0" + sec : sec);
  }

  function convertTime() {
    totalSec = time * 60;
    min = Math.floor(totalSec / 60);
    sec = totalSec % 60;
    return totalSec, min, sec;
  }

  function startTimer() {
    if (!timerOn) {
      timerOn = true;
      nIntervalId = setInterval(countdown, 1000);
      $(".start")
        .addClass("on")
        .text("Stop");
      console.log("StartTimer");
    } else {
      timerOn = false;
      clearInterval(nIntervalId);
      $(".start")
        .removeClass("on")
        .text("Start");
      console.log("Time Done, stopTimer() executed");
    }
  }

  function stopTimer() {
    timerOn = false;
    clearInterval(nIntervalId);
    console.log("Time Done, stopTimer() executed");
  }

  function countdown() {
    if (totalSec <= 0) {
      stopTimer();
      audio.play();
      reset();
      $(".start")
        .removeClass("on")
        .text("Start");
    } else {
      totalSec -= 1;
      console.log("Countdown - Minutes: ", min, "Seconds: ", totalSec);
      updateTime(totalSec);
    }
  }

  function updateTime(x) {
    // convertTime();
    min = Math.floor(x / 60);
    sec = x % 60;
    console.log("renderHTML: min:", min, "sec: ", sec);
    renderHTML();
  }

  function reset() {
    init();
  }

  function addTime() {
    return ++time;
  }

  function subtractTime() {
    return --time;
  }

  $(".start").click(function() {
    startTimer();
  });

  $(".reset").click(function() {
    reset();
    console.log("reset!");
  });

  $(".plus").click(function(e) {
    if (time >= 100) {
      e.preventDefault();
    } else {
      addTime();
      init();
      console.log(time, totalSec);
    }
  });

  $(".minus").click(function(e) {
    if (time <= 1) {
      e.preventDefault();
    } else {
      subtractTime();
      init();
      console.log(time, totalSec);
    }
  });
});
