// modal to choose X or O's
// modal to start game

//X's turn on odd number moves, O's on even

// [ ] User Story: I can play a game of Tic Tac Toe with the computer.
// [ ] User Story: My game will reset as soon as it's over so I can play again.
// [ ] User Story: I can choose whether I want to play as X or O.

$(document).ready(function () {
    const playerX = 'X';
    const playerO = 'O';
    const $square = $('.square');

    var humanPlayer;
    var computerPlayer;

    var turnCount = 1;

    function resetGame() {
        turnCount = 1;
        console.log('New Game Start', '\nX\'s turn', '\nturnCount: ', turnCount,);
        $('.startup-modal').css('display', 'flex');
    };

    $('button').click(function(){
        $('.startup-modal').css('display', 'none');
    })

    function turn() {
        if (turnCount === 9) {
            console.log('game over \n ***********************');
            resetGame();
        } else if (turnCount % 2 === 1) {
            console.log('X has gone, O\'s turn', '\n ------------');
            ++turnCount;
            console.log('Turn:', turnCount);
        } else {
            console.log('O has gone, X\'s turn', '\n ------------');
            ++turnCount;
            console.log('Turn:', turnCount);
        }
    };

    $square.click(function (e) {
        if (turnCount % 2 === 1 && e.target.textContent !== 'O') {
            $(this).text('X');
            console.log($(this));
            console.log('E: ', e)
            turn();
        } else if (turnCount % 2 === 0 && e.target.textContent !== 'X') {
            $(this).text('O');
            turn();
        } else {
            console.log('Cannot Move here!');
        }
    });

    resetGame();
});