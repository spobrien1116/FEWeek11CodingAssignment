// Makes sure the document is loaded before trying to execute any other code.
$(document).ready(() => {
    let total = 0;
    let winner = 0;
    const x = 'X';
    const o = 'O';
    let turn = x;
    $('#turnOrder').append(`The game has begun. `);
  
    let mark1 = $('#sq1').text();
    let mark2 = $('#sq2').text();
    let mark3 = $('#sq3').text();
    let mark4 = $('#sq4').text();
    let mark5 = $('#sq5').text();
    let mark6 = $('#sq6').text();
    let mark7 = $('#sq7').text();
    let mark8 = $('#sq8').text();
    let mark9 = $('#sq9').text();

    $('#turnOrder').append(`It is currently ${turn}'s turn.`);

    $('#sq1').click(event, () => {
        if (mark1 == 'X' || mark1 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq1').append(`${turn}`);
            mark1 = $('#sq1').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq2').click(event, () => {
        if (mark2 == 'X' || mark2 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq2').append(`${turn}`);
            mark2 = $('#sq2').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq3').click(event, () => {
        if (mark3 == 'X' || mark3 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq3').append(`${turn}`);
            mark3 = $('#sq3').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq4').click(event, () => {
        if (mark4 == 'X' || mark4 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq4').append(`${turn}`);
            mark4 = $('#sq4').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq5').click(event, () => {
        if (mark5 == 'X' || mark5 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq5').append(`${turn}`);
            mark5 = $('#sq5').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq6').click(event, () => {
        if (mark6 == 'X' || mark6 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq6').append(`${turn}`);
            mark6 = $('#sq6').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq7').click(event, () => {
        if (mark7 == 'X' || mark7 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq7').append(`${turn}`);
            mark7 = $('#sq7').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq8').click(event, () => {
        if (mark8 == 'X' || mark8 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq8').append(`${turn}`);
            mark8 = $('#sq8').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq9').click(event, () => {
        if (mark9 == 'X' || mark9 == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq9').append(`${turn}`);
            mark9 = $('#sq9').text();
            total++;
            checkWinner();
            if (turn == 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#resetGame').click(event, () => {
        $('#sq1').empty();
        $('#sq2').empty();
        $('#sq3').empty();
        $('#sq4').empty();
        $('#sq5').empty();
        $('#sq6').empty();
        $('#sq7').empty();
        $('#sq8').empty();
        $('#sq9').empty();
        turn = x;
        total = 0;
        $('#turnOrder').empty();
        $('#turnOrder').append(`Game has been reset.`);
    });

    function checkWinner () {
        if ((mark1 == x && mark2 == x && mark3 == x) || (mark1 == x && mark4 == x && mark7 == x) || (mark1 == x && mark5 == x && mark9 == x) || 
        (mark2 == x && mark5 == x && mark8 == x) || (mark3 == x && mark6 == x && mark9 == x) || (mark3 == x && mark5 == x && mark7 == x) || 
        (mark4 == x && mark5 == x && mark6 == x) || (mark7 == x && mark8 == x && mark9 == x)) {
            winner = 1;
            alert(`X is the winner!`);
        } else if ((mark1 == o && mark2 == o && mark3 == o) || (mark1 == o && mark4 == o && mark7 == o) || (mark1 == o && mark5 == o && mark9 == o) || 
        (mark2 == o && mark5 == o && mark8 == o) || (mark3 == o && mark6 == o && mark9 == o) || (mark3 == o && mark5 == o && mark7 == o) ||
        (mark4 == o && mark5 == o && mark6 == o) || (mark7 == o && mark8 == o && mark9 == o)) {
            winner = 1;
            alert(`O is the winner!`);
        } else if (total == 9 && winner == 0) {
            winner = 0;
            alert("The game ended in a draw.")
        } else {
            winner = 0;
        }
    }

});