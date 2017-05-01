"use strict"
$(document).ready(function () {
    let $powerBtn = $('div.toggle.btn.btn-xs');

    var powerStatus = false;

    var powerSwitch = $powerBtn.on('click', function () {
        if (powerStatus === false) {
            powerStatus = true;
            console.log(powerStatus, "POWER ON!");
            $('.count').removeClass('off');
            //startup();
            startup(powerStatus);
        } else {
            powerStatus = false;
            console.log(powerStatus, "POWER OFF!!!")
            $('.count').addClass('off');
        }
    })

    function startup(powerStatus) {
        if (powerStatus === true) {
            setTimeout(function () {
                test(green)
            }, 200);
            setTimeout(function () {
                test(green)
            }, 400);
            setTimeout(function () {
                test(red)
            }, 400);
            setTimeout(function () {
                test(red)
            }, 600);
            setTimeout(function () {
                test(blue)
            }, 600);
            setTimeout(function () {
                test(blue)
            }, 800);
            setTimeout(function () {
                test(yellow)
            }, 800);
            setTimeout(function () {
                test(yellow)
            }, 1000);
            setTimeout(function () {
                test(green);
                test(red);
                test(blue);
                test(yellow);
            }, 1200)
            setTimeout(function () {
                test(green);
                test(red);
                test(blue);
                test(yellow);
            }, 2200)
        }

        var green = $(".green")
        var red = $(".red")
        var blue = $(".blue")
        var yellow = $(".yellow")

        function test(a) {
            $(a).toggleClass('clicked');
            //console.log(a);
        }

    }

    $('.color-button').mousedown(function () {
        $(this).toggleClass('clicked');
    }).mouseup(function () {
        $(this).toggleClass('clicked');
    })

});