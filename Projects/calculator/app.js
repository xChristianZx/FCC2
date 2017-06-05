$(document).ready(function () {
    var inputArr = [];
    console.log(inputArr);

    //Print to form
    function printToDisplay () {
        $('#output-text').text(inputArr.join(''));
    };
    
    //AC all clear
    $('#clear').click(function () {
        inputArr = [];
        $('#output-text').text(0);
    });

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

    function compute () {
      var test = inputArr.join('');
      var equals = math.eval(test);
      console.log('test', test, 'equals', equals)
      //console.log(typeof test);
      $('#output-text').text(equals);
      inputArr = [];
      inputArr.push(equals);
    };

     $('#equals').click(function () {
        compute();
        
    });
});

