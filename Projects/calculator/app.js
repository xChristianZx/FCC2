$(document).ready(function () {
    var inputArr = [0];
    console.log(inputArr);
    
    //Print to form
    $('#output-text').text(inputArr);

    $('#clear').click(function () {
        inputArr = [];
        $('#output-text').text(0);
    })

    $('button').click(function (e) {
        var number = $(this).attr('value');
        $('#output-text').text(number);
        inputArr.push(number)
        //mouseButtonClick();
        console.log(inputArr)
        console.log(e);
        $('#output-text').text(inputArr);
    })
    
    function mouseButtonClick() {
        $('.btn').mousedown(function () {
            $(this).toggleClass('clicked');
            //playtone
        }).mouseup(function () {
            $(this).toggleClass('clicked');
        });
    };

});

