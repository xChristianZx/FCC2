//TO DO
// 1. joining history array without commas
// 2. removing 0 from initial inputArr - use initialize

$(document).ready(function () {
    const clearArr = [0];
    var inputArr = [];
    var historyArr = [];

    function initialize () {
        inputArr = [];
        historyArr = [];
        $('#output-text').text(clearArr[0]);
        $('#history-text').text(clearArr[0]);
    };

    //Print to form
    function printToDisplay () {
        $('#output-text').text(inputArr.join(''));
        $('#history-text').text(historyArr.join(''));
    };
    
    function errantZero () {
        const regExp = /[0-9]/g;
        if (inputArr[0] == 0 && inputArr[1] == regExp) {
            inputArr.shift();
        };
    };

    function compute () {
      var test = inputArr.join('');
      var equals = math.eval(test);
      console.log('test', test, 'equals', equals)
      //console.log(typeof test);
      $('#output-text').text(equals);
      historyArr.push(equals);
      $('#history-text').text(inputArr);
      inputArr = [];
      inputArr.push(equals);
    };

    // AC all clear
    $('#all-clear').click(function () {
        inputArr = [];
        historyArr = [];
        $('#output-text').text(clearArr[0]);
        $('#history-text').text(clearArr[0]);
        console.log('All Clear', inputArr);
    });

    // CE clear entry - only clears input
    $('#clear-entry').click(function (){
        inputArr = [];
        $('#output-text').text(clearArr[0]);
        console.log('Clear Entry', inputArr);
    }); 

    // button click event
    $('button').click(function (e) {
        errantZero();
        var number = $(this).attr('value');
        $('#output-text').text(number);
        $('#history-text').text(number);
        inputArr.push(number)
        console.log(inputArr)
        //console.log(e);
        printToDisplay();
    })

     $('#equals').click(function () {
        compute();        
    });
});

