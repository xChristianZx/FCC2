$(document).ready(function () {
    var inputArr = [];
    console.log(inputArr);
    
    //Print to form
    function printToDisplay () {
        $('#output-text').text(inputArr.join(''));
    };

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
        printToDisplay();
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

