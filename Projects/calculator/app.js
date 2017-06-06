//TO DO

// 1. fix after equality followed by more number instead of operator

// post equality(true) =>
//     1. number [x]
//     2. operator []
//     3. clear [x]

$(document).ready(function () {
    const clearArr = [0];
    var inputArr = [];
    var historyArr = [];
    var equality = false;
    var test;
    var equals;

    function initialize() {
        inputArr = [];
        historyArr = [];
        equality = false;
        console.log('equality: ', equality);
        $('#output-text').text(clearArr[0]);
        $('#history-text').text(clearArr[0]);
    };

    //Print to form
    function printToDisplay() {
        $('#output-text').text(inputArr.join(''));
        $('#history-text').text(historyArr.join(''));
    };

    function errantZero() {
        const regExp = /[0-9]/g;
        if (inputArr[0] == 0 && inputArr[1] == regExp) {
            inputArr.shift();
        };
    };

    function numberInput() {
        //refactor for below

        // var number = $(this).attr('value');
        //     $('#output-text').text(number);
        //     $('#history-text').text(number);
        //     inputArr.push(number)
        //     console.log(inputArr)
        //     //console.log(e);
        //     printToDisplay();
    }

    function compute() {
        test = inputArr.join('');
        equals = math.eval(test);
        console.log('test', test, 'equals', equals)
        console.log(typeof test);
        $('#output-text').text(equals);
        historyArr.push(test);
        $('#history-text').text(test);
        inputArr = [];
        inputArr.push(equals);
        equality = true;
        console.log('equality', equality);
        console.log('history-text', historyArr);
    };

    // AC all clear
    $('#all-clear').click(function () {
        initialize();
        //console.log('AC', inputArr, historyArr);
    });

    // CE clear entry - only clears input
    $('#clear-entry').click(function () {
        inputArr = [];
        $('#output-text').text(clearArr[0]);
        console.log('Clear Entry', inputArr);
    });

    // number button click event
    $('.number').click(function (e) {
        //errantZero();
        if (equality) {
            console.log(equality);
            initialize();
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            console.log(equality);
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        }
    });

    // operator button click
    $('.operator').click(function (e) {
        if (equality) {
            //insert solution here!!!
            equality = false;
            console.log(equality);
            
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            console.log(equality);
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        }
    });

    $('#equals').click(function () {
        compute();
    });
});