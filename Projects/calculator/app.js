$(document).ready(function () {
    var inputArr = [0];
    console.log(inputArr);
    
    $('#output-text').text(inputArr);

    $('#clear').click(function () {
        inputArr = [];
        $('#output-text').text(0);
    })

    $('button').click(function () {
        var number = $(this).attr('value');
        $('#output-text').text(number);
        inputArr.push(number);
    })


});