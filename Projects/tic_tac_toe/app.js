// clear board after game
// modal to start game

//X's turn on odd number moves, O's on even

// [ ] User Story: I can play a game of Tic Tac Toe with the computer.
// [ ] User Story: My game will reset as soon as it's over so I can play again.
// [ ] User Story: I can choose whether I want to play as X or O.

$(document).ready(function () {
    const playerX = 'X';
    const playerO = 'O';
    const $square = $('.square');

    var modalOff = $('.startup-modal').css('display', 'none');

    var humanPlayer;
    var computerPlayer;

    var turnCount = 1;

    function resetGame() {
        $square.text(' ');
        turnCount = 1;
        console.log('New Game Start', '\nX\'s turn', '\nturnCount: ', turnCount, );
        console.log('Player value: ', humanPlayer, computerPlayer);
        $('.startup-modal').css('display', 'flex');
        newGame();
    };

    function hideModal() {
        $('.startup-modal').css('display', 'none');
    }

    function newGame() {
        $('button').click(function (e) {
            if (e.target.className == 'button-x') {
                humanPlayer = 'X';
                computerPlayer = 'O';
                console.log(`Players Chosen - Human: ${humanPlayer} 'Computer: ' ${computerPlayer}`);
               hideModal();
            } else if (e.target.className == 'button-o') {
                humanPlayer = 'O';
                computerPlayer = 'X';
                console.log(`Players Chosen - Human: ${humanPlayer} 'Computer: ' ${computerPlayer}`);
                hideModal();
            } else {
                console.log('Choose player!');
            }
        });
    }

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
        if (turnCount % 2 === 1 && e.target.textContent !== 'O' && e.target.textContent !== 'X') {
            $(this).text('X');
            console.log($(this));
            console.log('E: ', e)
            turn();
        } else if (turnCount % 2 === 0 && e.target.textContent !== 'X' && e.target.textContent !== 'O') {
            $(this).text('O');
            turn();
        } else {
            console.log('Cannot Move here!');
        }
    });

    resetGame();
});