//TO DO

// 1. fix history bug when doing multiple operators with equality 
// 2. plus/ minus function
// 3. number input refactoring
// 4. operator summation
// 5. percentage btn and function
// 6. Reactive design
// idea: 3 arrays - input, holding, history = see iphone

$(document).ready(function () {
    const clearArr = [0];
    const $outputText = $('#output-text');
    const $historyText = $('#history-text');

    var inputArr = [];
    var historyArr = [];
    var equality;
    var test;
    var equals;
    var decimal;
    var number;
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
        //console.log('equality: ', equality);
        $outputText.text(clearArr[0]);
        $historyText.text(clearArr[0]);
    };

    //Print to form
    function printToDisplay() {
        $outputText.text(inputArr.join(''));
        $historyText.text(historyArr.join(''));
    };

    function numberInput() {
        // refactor for below - .bind();
        number = $(this).attr('value');
        inputArr.push(number)
        console.log(inputArr)

        printToDisplay();
    }

    function compute() {
        test = inputArr.join('');
        equals = math.eval(test);
        var ans = math.format(equals, {
            precision: 14
        }); //to prevent rounding errors
        console.log('test', test, 'equals', equals)
        $outputText.text(ans);
        historyArr.push(test);
        $historyText.text(test);
        inputArr = [];
        inputArr.push(ans);
        equality = true;

        console.log('Equal sign equality: ', equality);
        console.log('history-text', historyArr);
    };

    // ideally to sum a input as you enter an operator - like iPhone
    // function operatorCompute() {
    //     test = inputArr.join('');
    //     equals = math.eval(test);
    //     console.log('test', test, 'equals', equals)
    //     //console.log(typeof test);
    //     $outputText.text(equals);
    //     historyArr.push(test);
    //     $historyText.text(test);

    //     inputArr.push(equals);

    //     console.log('Equal sign equality: ', equality);
    //     console.log('history-text', historyArr);
    // };

    // AC all clear
    $('#all-clear').click(function () {
        initialize();
    });

    // CE clear entry - only clears input
    $('#clear-entry').click(function () {
        inputArr = [];
        $outputText.text(clearArr[0]);
        decimalReset();
        console.log('Clear Entry', inputArr);
    });

    // Decimal Button Click event
    $('#decimal').click(function (e) {
        if (decimal && equality) {
            equalityReset();
            inputArr = [];

            number = $(this).attr('value');
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
            number = $(this).attr('value');
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
            decimal = true;
            console.log('decimal: ', decimal);
        };
    });

    //Plus/Minus button
    $('#plus-minus').click(function () {

    });

    // Number button click event
    $('.number').click(function (e) {
        if (equality) {
            console.log('Number equality check 1: ', equality);
            equalityReset();
            console.log('Number equality check 2: ', equality);
            inputArr = [];
            number = $(this).attr('value');
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            console.log('Number equality check:', equality);
            // numberInput();
            console.log('THIS', this);
            number = $(this).attr('value');
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

            number = $(this).attr('value');
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
        } else {
            decimalReset();
            console.log('Operator Eqauality Check: ', equality);
            number = $(this).attr('value');
            inputArr.push(number)
            console.log(inputArr)
            //console.log(e);
            printToDisplay();
            console.log('THIS', this);
        }
    });

    //Equal Sign Click listener
    $('#equals').click(function () {
        compute();
    });
    
    //Keybindings
    $(document).keydown(function (e) {
        if (e.shiftKey) {
            switch (e.which){
                case 56:
                    $('#multiply').click();
                    break;
                case 187:
                    $('#add').click();
                    break;
            }
        } else {
            switch (e.which) {
                case 48:
                case 96:
                    $('#zero').click();
                    console.log(e);
                    break;
                case 49:
                case 97:
                    $('#one').click();
                    break;
                case 50:
                case 98:
                    $('#two').click();
                    break;
                case 51:
                case 99:
                    $('#three').click();
                    break;
                case 52:
                case 100:
                    $('#four').click();
                    break;                
                case 53:
                case 101:
                    $('#five').click();
                    break;
                case 54:
                case 102:
                    $('#six').click();
                    break;
                case 55:
                case 103:
                    $('#seven').click();
                    break;
                case 56:
                case 104:
                    $('#eight').click();
                    break;
                case 57:
                case 105:
                    $('#nine').click();
                    break;
                case 65:
                    $('#all-clear').click();
                    break;
                case 67:
                    $('#clear-entry').click();
                    break;
                case 13:
                case 187:
                    $('#equals').click();
                    break;                    
                case 189:
                case 109:
                    $('#subtract').click();
                    break;
                case 190:
                case 110:
                    $('#decimal').click();
                    break;
                case 191:
                case 111:
                    $('#divide').click();
                    break;
                case 106:
                    $('#multiply').click();
                    break;
                case 107:
                    $('#add').click();
                    break;
                default:
                    return;
            }
        }
        e.preventDefault();
    });
});