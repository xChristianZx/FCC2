//TO DO

// fix history bug when doing multiple operators with equality 
// plus/ minus function
// idea: 3 arrays - input, holding, history = see iphone

$(document).ready(function () {
    const clearArr = [0];
    var inputArr = [];
    var historyArr = [];
    var equality;
    var test;
    var equals;
    var decimal;
    initialize();

    function equalsReset() {
        equals = false;
    };

    function decimalReset() {
        decimal = false;
    };

    function equalityReset() {
        equality = false;
    };

    function initialize() {
        inputArr = [];
        historyArr = [];
        equalsReset();
        decimalReset();
        equalityReset();
        console.log('equality: ', equality);
        $('#output-text').text(clearArr[0]);
        $('#history-text').text(clearArr[0]);
    };

    //Print to form
    function printToDisplay() {
        $('#output-text').text(inputArr.join(''));
        $('#history-text').text(historyArr.join(''));
    };

    function numberInput() {
        // refactor for below .bind();
        var number = $(this).attr('value');
        $('#output-text').text(number);
        $('#history-text').text(number);
        inputArr.push(number)
        console.log(inputArr)
        //console.log(e);
        printToDisplay();
    }

    function compute() {
        test = inputArr.join('');
        equals = math.eval(test);
        var ans = math.format(equals, {precision: 14}); //to prevent rounding errors
        console.log('test', test, 'equals', equals)
        //console.log(typeof test);
        // $('#output-text').text(equals);
        $('#output-text').text(ans);
        historyArr.push(test);
        $('#history-text').text(test);
        inputArr = [];
        inputArr.push(ans);
        equality = true;
        
        console.log('Equal sign equality: ', equality);
        console.log('history-text', historyArr);
    };

    function operatorCompute() {
        test = inputArr.join('');
        equals = math.eval(test);
        console.log('test', test, 'equals', equals)
        //console.log(typeof test);
        $('#output-text').text(equals);
        historyArr.push(test);
        $('#history-text').text(test);
        
        inputArr.push(equals);
        
        console.log('Equal sign equality: ', equality);
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
        decimalReset();
        console.log('Clear Entry', inputArr);
    });

// Decimal Button Click event
    $('#decimal').click(function (e) {
        if (decimal && equality) {
            equalityReset();
            inputArr = [];

            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
            decimal = true;
            console.log('decimal: ', decimal);
        } else if (decimal && !equality) {
            console.log('decimal should be true: ', decimal);
            e.preventDefault();
        } else {
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
            decimal = true;
            console.log('decimal: ', decimal);
        };
    });

// Number button click event
    $('.number').click(function (e) {
        if (equality) {
            console.log('Number equality check 1: ', equality);  
            equalityReset();
            console.log('Number equality check 2: ', equality);  
            //initialize();
            inputArr = [];
            
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            console.log('Number equality check:', equality);
            //numberInput();
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        }
    });

// Operator button click
    $('.operator').click(function (e) {
        if (equality) {
            
            console.log('Operator Eqauality Check 1: ', equality);
            equalsReset();
            decimalReset();
            equalityReset();
            console.log('Operator Eqauality Check 2: ', equality);

            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            decimalReset();
            console.log('Operator Eqauality Check: ', equality);
            var number = $(this).attr('value');
            $('#output-text').text(number);
            $('#history-text').text(number);
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        }
    });

//Equal Sign Click listener
    $('#equals').click(function () {
        compute();
    });
});