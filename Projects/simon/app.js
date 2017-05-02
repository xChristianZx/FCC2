"use strict"
$(document).ready(function () {
    //Audio Import
    const audio = {
        greenTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        redTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellowTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        blueTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }

    //Initial variables
    var simonCall = [];
    var userResponse = [];

    var randomNum = 1;
    var count = 1;

    var colors = {
        green: {
            $el: $('.green'),
            tone: audio.greenTone,
        },
        red: {
            $el: $(".red"),
            tone: audio.redTone,
        },
        blue: {
            $el: $(".blue"),
            tone: audio.blueTone,
        },
        yellow: {
            $el: $(".yellow"),
            tone: audio.yellowTone,
        }
    }
    var colorArr = [colors.green, colors.blue, colors.yellow, colors.red];

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
            (function lightUp() {
                function toggleColor(a) {
                    $(a).toggleClass('clicked');
                }

                var time = [200, 400, 600, 800];
                var time2 = [400, 600, 800, 1000];

                colorArr.forEach(function (a, i, c) {
                    setTimeout(
                        function () {
                            toggleColor(a.$el);
                            colorArr[i].tone.play();
                            console.log('Go!')
                        },
                        time[i]);
                    setTimeout(function () {
                        toggleColor(a.$el);
                    }, time2[i])
                });
                setTimeout(function () {
                    toggleColor(colors.green.$el);
                    //green.tone.play();
                    toggleColor(colors.red.$el);
                    toggleColor(colors.blue.$el);
                    toggleColor(colors.yellow.$el);
                }, 1200)
                setTimeout(function () {
                    toggleColor(colors.green.$el);
                    toggleColor(colors.red.$el);
                    toggleColor(colors.blue.$el);
                    toggleColor(colors.yellow.$el);
                }, 2000)
            })();
        }
    }

    function buttonClick(color) {
        $('.color-button').mousedown(function () {
            $(this).toggleClass('clicked');
            //playtone
        }).mouseup(function () {
            $(this).toggleClass('clicked');
        });

    }

    function random() {
        randomNum = Math.floor((Math.random() * 4) + 1);
        simonCall.push(colorArr[randomNum]);
        buttonClick(); //playback()
    }
});