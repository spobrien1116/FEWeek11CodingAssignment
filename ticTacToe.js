// Makes sure the document is loaded before trying to execute any other code.
$(document).ready(() => {
    // Declaration of variables that will be used each time the game runs.
    let total = 0;
    let winner = 0;
    const x = 'X';
    const o = 'O';
    let turn = x;

    // Declaration of variables for checking win conditions later on in the function checkWinner().
    let mark1 = '';
    let mark2 = '';
    let mark3 = '';
    let mark4 = '';
    let mark5 = '';
    let mark6 = '';
    let mark7 = '';
    let mark8 = '';
    let mark9 = '';

    runGame();
    
    function runGame() {
        // Assigned variables for each time the game begins or is reset.
        total = 0;
        winner = 0;
        turn = x;
        // Empties the contents of the div squares.
        $('#sq1').empty();
        $('#sq2').empty();
        $('#sq3').empty();
        $('#sq4').empty();
        $('#sq5').empty();
        $('#sq6').empty();
        $('#sq7').empty();
        $('#sq8').empty();
        $('#sq9').empty();
        $('#turnOrder').append(`The game has begun. `);

        // Assigned variables for checking win conditions later on in the function checkWinner().
        mark1 = $('#sq1').text();
        mark2 = $('#sq2').text();
        mark3 = $('#sq3').text();
        mark4 = $('#sq4').text();
        mark5 = $('#sq5').text();
        mark6 = $('#sq6').text();
        mark7 = $('#sq7').text();
        mark8 = $('#sq8').text();
        mark9 = $('#sq9').text();

        $('#turnOrder').append(`It is currently ${turn}'s turn.`);

        // All 9 event handlers for clicking on the 9 squares. Calls a function to add the mark.
        $('#sq1').on('click', () => {
            mark1 = addMark('#sq1', mark1);
            checkWinner();
        });
        $('#sq2').on('click', () => {
            mark2 = addMark('#sq2', mark2);
            checkWinner();
        });
        $('#sq3').on('click', () => {
            mark3 = addMark('#sq3', mark3);
            checkWinner();
        });
        $('#sq4').on('click', () => {
            mark4 = addMark('#sq4', mark4);
            checkWinner();
        });
        $('#sq5').on('click', () => {
            mark5 = addMark('#sq5', mark5);
            checkWinner();
        });
        $('#sq6').on('click', () => {
            mark6 = addMark('#sq6', mark6);
            checkWinner();
        });
        $('#sq7').on('click', () => {
            mark7 = addMark('#sq7', mark7);
            checkWinner();
        });
        $('#sq8').on('click', () => {
            mark8 = addMark('#sq8', mark8);
            checkWinner();
        });
        $('#sq9').on('click', () => {
            mark9 = addMark('#sq9', mark9);
            checkWinner();
        });
        
        // Event handler that resets the game.
        $('#resetGame').on('click', () => {
            $('#sq1').off('click');
            $('#sq2').off('click');
            $('#sq3').off('click');
            $('#sq4').off('click');
            $('#sq5').off('click');
            $('#sq6').off('click');
            $('#sq7').off('click');
            $('#sq8').off('click');
            $('#sq9').off('click');
            $('#turnOrder').empty();
            $('#turnOrder').append(`Game has been reset. `);
            $('#alerts').empty();
            runGame();
        });
    }

    // Changed the functionality of each event handler to mostly be handled by one function, rather than the same code 9 times.
    function addMark(squareId, mark) {
        if (mark === 'X' || mark === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $(squareId).append(`${turn}`);
            mark = $(squareId).text();
            total++;
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
        return mark;
    }
    
    // Checks to see if three squares line up with the same value. If 9 values are on the board and there is no winner, it defaults to a draw.
    function checkWinner () {
        if ((mark1 === x && mark2 === x && mark3 === x) || (mark1 === x && mark4 === x && mark7 === x) || (mark1 === x && mark5 === x && mark9 === x) || 
        (mark2 === x && mark5 === x && mark8 === x) || (mark3 === x && mark6 === x && mark9 === x) || (mark3 === x && mark5 === x && mark7 === x) || 
        (mark4 === x && mark5 === x && mark6 === x) || (mark7 === x && mark8 === x && mark9 === x)) {
            winner = 1;
            $('#alerts').append(`<div class="alert alert-success role="alert">X is the winner!</div>`);
        } else if ((mark1 === o && mark2 === o && mark3 === o) || (mark1 === o && mark4 === o && mark7 === o) || (mark1 === o && mark5 === o && mark9 === o) || 
        (mark2 === o && mark5 === o && mark8 === o) || (mark3 === o && mark6 === o && mark9 === o) || (mark3 === o && mark5 === o && mark7 === o) ||
        (mark4 === o && mark5 === o && mark6 === o) || (mark7 === o && mark8 === o && mark9 === o)) {
            winner = 1;
            $('#alerts').append(`<div class="alert alert-success role="alert">O is the winner!</button></div>`);
        } else if (total === 9 && winner === 0) {
            winner = 2;
            $('#alerts').append(`<div class="alert alert-warning role="alert">The game ended in a draw.</div>`);
        } else {
            winner = 0;
        }

        // When the game sees a win or a draw, it turns off the event handlers to place marks in boxes.
        if (winner === 1 || winner === 2) {
            $('#sq1').off('click');
            $('#sq2').off('click');
            $('#sq3').off('click');
            $('#sq4').off('click');
            $('#sq5').off('click');
            $('#sq6').off('click');
            $('#sq7').off('click');
            $('#sq8').off('click');
            $('#sq9').off('click');
        }
    }

});