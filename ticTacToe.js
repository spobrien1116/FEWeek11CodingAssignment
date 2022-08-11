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

    $('#sq1').on('click', () => {
        if (mark1 === 'X' || mark1 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq1').append(`${turn}`);
            mark1 = $('#sq1').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq2').on('click', () => {
        if (mark2 === 'X' || mark2 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq2').append(`${turn}`);
            mark2 = $('#sq2').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq3').on('click', () => {
        if (mark3 === 'X' || mark3 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq3').append(`${turn}`);
            mark3 = $('#sq3').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq4').on('click', () => {
        if (mark4 === 'X' || mark4 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq4').append(`${turn}`);
            mark4 = $('#sq4').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq5').on('click', () => {
        if (mark5 === 'X' || mark5 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq5').append(`${turn}`);
            mark5 = $('#sq5').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq6').on('click', () => {
        if (mark6 === 'X' || mark6 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq6').append(`${turn}`);
            mark6 = $('#sq6').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq7').on('click', () => {
        if (mark7 === 'X' || mark7 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq7').append(`${turn}`);
            mark7 = $('#sq7').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq8').on('click', () => {
        if (mark8 === 'X' || mark8 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq8').append(`${turn}`);
            mark8 = $('#sq8').text();
            total++;
            checkWinner();
            if (turn === 'X') {
                turn = o;
            } else {
                turn = x;
            }
            $('#turnOrder').empty();
            $('#turnOrder').append(`It is currently ${turn}'s turn.`);
        }
    });
    $('#sq9').on('click', () => {
        if (mark9 === 'X' || mark9 === 'O') {
            $('#alerts').append(`<div class="alert alert-warning alert-dismissible" role="alert">This square is already taken! Please choose another square.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
        } else {
            $('#sq9').append(`${turn}`);
            mark9 = $('#sq9').text();
            total++;
            checkWinner();
            if (turn === 'X') {
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
        mark1 = '';
        mark2 = '';
        mark3 = '';
        mark4 = '';
        mark5 = '';
        mark6 = '';
        mark7 = '';
        mark8 = '';
        mark9 = '';
        turn = x;
        total = 0;
        $('#turnOrder').empty();
        $('#turnOrder').append(`Game has been reset. It is currently ${turn}'s turn.`);
        $('#alerts').empty();
    });

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
            $('#alerts').append(`<div class="alert alert-warningrole="alert">The game ended in a draw.</div>`);
        } else {
            winner = 0;
        }

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