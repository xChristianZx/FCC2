'use strict'
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
    var playerResponse = [];
    var gameStart = false;
    var turnCount = 0;
    var round = 0;

    const $powerBtn = $('div.toggle.btn.btn-xs');

    const colors = {
        green: {
            name: 'Green',
            $el: $('.green'),
            tone: audio.greenTone,
        },
        red: {
            name: 'Red',
            $el: $(".red"),
            tone: audio.redTone,
        },
        blue: {
            name: 'Blue',
            $el: $(".blue"),
            tone: audio.blueTone,
        },
        yellow: {
            name: 'Yellow',
            $el: $(".yellow"),
            tone: audio.yellowTone,
        }
    };
    const colorArr = [colors.green, colors.blue, colors.yellow, colors.red];


    function initializeGame() {
        simonCall = [];
        playerResponse = [];
        turnCount = 0;
    };

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

    function toggleColor(a) {
        $(a).toggleClass('clicked');
    }

    //Startup fun
    function startup(powerStatus) {
        if (powerStatus === true) {
            (function lightUp() {

                var time = [200, 400, 600, 800];
                var time2 = [400, 600, 800, 1000];
                // colorArr.forEach(function (a, i, c) {
                //     setTimeout(
                //         function () {
                //             toggleColor(a.$el);
                //             colorArr[i].tone.play();
                //             console.log('Go!')
                //         },
                //         time[i]);
                //     setTimeout(function () {
                //         toggleColor(a.$el);
                //     }, time2[i])
                // });
                setTimeout(function () {
                    toggleColor(colors.green.$el);
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

    function startGame() {
        if (powerStatus) {
            gameStart = true;
            console.log('gameStart = true');
            renderRoundText();
            setTimeout(function () {
                random();
            }, 2000);
        } else {
            console.log('Turn on the power');
        }
    }
    $('.start-btn').on('click', startGame);

    function buttonClick() { //Clean up this up/ down listner!
        // if (gameStart) {
            $('.color-button').mousedown(function (e) {
                $(this).toggleClass('clicked');
                const thisTone = this.dataset.color;
                colors[thisTone].tone.play();
                playerResponse.push(colors[thisTone]);
                // console.log('colors[thisTone}', colors[thisTone]);
                // console.log('********E: ', e);
                // console.log('*******This: ', this);
                // console.log('********', e.target);
                // console.log("playerResponse Arr: ", playerResponse);
                check2(playerResponse, simonCall);
            }).mouseup(function () {
                $(this).toggleClass('clicked');
            });
        // } else {
        //     console.log('Start the game!');
        // }
    }

    // $('.color-button').click(buttonClick);

    var randomNumArr = [];

    function random() {
        const min = Math.ceil(0);
        const max = Math.floor(3);
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumArr.push(randomNum);
        simonCall.push(colorArr[randomNum]);
        playArr(simonCall);
        console.log(randomNumArr);
        console.log('simonCall Arr: ', simonCall)
    };

    function playArr(arr) {
        const time = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]; //getting stuck maxing out of iterations thus, doubling up on playing notes
        const time2 = [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500];

        arr.forEach(function (a, i) {
            setTimeout(
                function () {
                    toggleColor(a.$el);
                    arr[i].tone.play();
                    //console.log('Go!')
                },
                time[i]);
            setTimeout(function () {
                toggleColor(a.$el);
            }, time2[i])
        });
    };

    function nextRound() {
        if (round === 4) {
            console.log('YOU WIN!');
        } else {
            round += 1;
            playerResponse = [];
            console.log('nextRound: ', round, playerResponse);
            random();
            renderRoundText();
        }
    }

    function renderRoundText() {
        $('.count').text(round);
    }

    function check2(player, simon) {
        var playerArr = player;
        var simonArr = simon;
        console.log(playerArr[turnCount].name);
        console.log(simonArr[turnCount].name);
        if (playerArr[turnCount].name === simonArr[turnCount].name && turnCount < round) {
            return true, turnCount += 1;
        } else if (playerArr[turnCount].name === simonArr[turnCount].name && turnCount === round) {
            return true, turnCount = 0,
                setTimeout(function () {
                    nextRound()
                }, 2000);
            console.log('Next Round!');
        } else {
            return false, console.log('nope!');
        }
    }

    initializeGame();
});