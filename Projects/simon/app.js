'use strict'

$(document).ready(function () {
    //Audio Import
    const audio = {
        greenTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        redTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellowTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        blueTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
        errorSound: new Audio('/Users/christianzenaty/Desktop/FCC/Projects/simon/assets/Wrong-answer-sound-effect.mp3')
    };

    //Initial variables
    var simonCall = [];
    var playerResponse = [];
    var gameStart = false;
    var turnCount = 0;
    var round = 0;
    var strict = false;
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
        round = 0;
        gameStart = false;
        strict = false;
        $('.start-label').text('Start');
        toggleOffBtnLights();
        renderRoundText();
    };

    function toggleColor(a) {
        $(a).toggleClass('clicked');
    }

    function toggleOffBtnLights() {
        $('.start-btn').removeClass('active');
        $('.strict-btn').removeClass('active');
    }

    function renderRoundText() {
        if (gameStart) {
            $('.count').text(round + 1);
        } else {
            $('.count').text('--');
        }
    }

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
            initializeGame();
        }
    })

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
        if (powerStatus && !gameStart) {
            gameStart = true;
            console.log('Start Game!');
            $('.start-label').text('Restart');
            renderRoundText();
            setTimeout(function () {
                randomNumGenerator();
            }, 2000);
        } else if (powerStatus && gameStart) {
            console.log('Restart');
            toggleOffBtnLights();
            setTimeout(function () {
                initializeGame();
            }, 1000);
        } else {
            console.log('Press the Power Button!')
        }
    };

    function strictMode() {
        if (!strict) {
            strict = true;
        } else {
            strict = false;
        }
    };


    $('.start-btn').on('click', startGame);
    $('.strict-btn').on('click', strictMode);

    function buttonClick() { //Clean up this up/ down listner!
        // if (gameStart) {
        $('.color-button').mousedown(function (e) {
            $(this).toggleClass('clicked');
            const thisTone = this.dataset.color;
            colors[thisTone].tone.play();
            playerResponse.push(colors[thisTone]);

            checkPlayerInput(playerResponse, simonCall);
            console.log('STRICT', strict);
        }).mouseup(function () {
            $(this).toggleClass('clicked');
        });
        // } else {
        //     console.log('Start the game!');
        // }
    }

    // $('.color-button').click(buttonClick);

    var randomNumArr = [];

    function randomNumGenerator() {
        const min = Math.ceil(0);
        const max = Math.floor(3);
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        randomNumArr.push(randomNum);
        simonCall.push(colorArr[randomNum]);
        playSoundArr(simonCall);
        console.log(randomNumArr);
        console.log('simonCall Arr: ', simonCall)
    };

    function playSoundArr(arr) {
        const time = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]; //getting stuck maxing out of iterations thus, doubling up on playing notes
        const time2 = [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500, 8500, 9500];

        arr.forEach(function (a, i) {
            setTimeout(
                function () {
                    toggleColor(a.$el);
                    arr[i].tone.play();
                },
                time[i]);
            setTimeout(function () {
                toggleColor(a.$el);
            }, time2[i])
        });
    };

    function nextRound() {
        if (round === 4) {
            alert('You Win!');
            console.log('YOU WIN!');
            initializeGame();
        } else {
            round += 1;
            playerResponse = [];
            console.log('nextRound: ', round, playerResponse);
            randomNumGenerator();
            renderRoundText();
        }
    }


    function checkPlayerInput(player, simon) {
        let playerArr = player;
        let simonArr = simon;
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
        } else if (playerArr[turnCount].name !== simonArr[turnCount].name && strict) {
            return console.log('nope!'), audio.errorSound.play(),
                setTimeout(function () {
                    initializeGame();
                    toggleOffBtnLights();
                    renderRoundText();
                    gameStart = false;
                }, 2000);;
        } else {
            return console.log('nope!'), audio.errorSound.play(),
                setTimeout(function () {
                    turnCount = 0;
                    playerResponse = [];
                    playSoundArr(simonCall)
                }, 2000);;
        }
    }

    initializeGame();
});