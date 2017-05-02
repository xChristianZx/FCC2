"use strict"
$(document).ready(function () {
    //Audio Import
    const greenTone = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    const redTone = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    const yellowTone = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    const blueTone = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

    //Initial variables
    var simonCall = [];
    var userResponse = [];
    var randomNum = 1;
    var count = 1;

    const green = {
        $el: $('.green'),
        tone: greenTone,
    }
    const red = {
        $el: $(".red"),
        tone: redTone,
    }
    const blue = {
        $el: $(".blue"),
        tone: blueTone,
    }
    const yellow = {
        $el: $(".yellow"),
        tone: yellowTone,
    }
    
    const $powerBtn = $('div.toggle.btn.btn-xs');

    //Power Button
    var powerStatus = false;
    var powerSwitch = $powerBtn.on('click', function () {
        if (powerStatus === false) {
            powerStatus = true;
            console.log(powerStatus, "POWER ON!");
            $('.count').removeClass('off');
            startup(powerStatus);
            buttonClick();
        } else {
            powerStatus = false;
            console.log(powerStatus, "POWER OFF!!!")
            $('.count').addClass('off');
            $('.color-button').unbind('mousedown').unbind('mouseup');
        }
    })
    //Startup fun
    function startup(powerStatus) {
        if (powerStatus === true) {

            function toggleColor(a) {
                $(a).toggleClass('clicked');
            }

            var arr = [green, blue, yellow, red];
            var time = [200, 400, 600, 800];
            var time2 = [400, 600, 800, 1000];

            arr.forEach(function (a, i, c) {
                setTimeout(
                    function () {
                        toggleColor(a.$el);
                        arr[i].tone.play();
                        console.log('Go!')
                    },
                    time[i]);
                setTimeout(function () {
                    toggleColor(a.$el);
                }, time2[i])
            });
            setTimeout(function () {
                toggleColor(green);
                //green.tone.play();
                toggleColor(red);
                toggleColor(blue);
                toggleColor(yellow);
            }, 1200)
            setTimeout(function () {
                toggleColor(green);
                toggleColor(red);
                toggleColor(blue);
                toggleColor(yellow);
            }, 2000)
        }
    }

    function buttonClick() {
        $('.color-button').mousedown(function () {
            $(this).toggleClass('clicked');
        }).mouseup(function () {
            $(this).toggleClass('clicked');
        })
    }

    function random() {
        randomNum = Math.floor((Math.random() * 4) + 1);
        simonCall.push(num);
    }
});