// Makes sure the document is loaded before trying to execute any other code.
$(document).ready(() => {
    const x = 'X';
    const o = 'O';
    let turn = x;
    
    $('#turnOrder').append(`It is currently ${turn}'s turn.`);
    
    $('#sq1').click(event, () => {
        let mark = $('#sq1').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq1').append(`${turn}`);
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
        let mark = $('#sq2').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq2').append(`${turn}`);
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
        let mark = $('#sq3').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq3').append(`${turn}`);
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
        let mark = $('#sq4').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq4').append(`${turn}`);
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
        let mark = $('#sq5').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq5').append(`${turn}`);
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
        let mark = $('#sq6').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq6').append(`${turn}`);
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
        let mark = $('#sq7').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq7').append(`${turn}`);
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
        let mark = $('#sq8').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq8').append(`${turn}`);
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
        let mark = $('#sq9').text();
        if (mark == 'X' || mark == 'O') {
            alert("This square is already taken! Please choose another square.");
        } else {
            $('#sq9').append(`${turn}`);
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
        $('#turnOrder').empty();
        $('#turnOrder').append(`It is currently ${turn}'s turn.`);
    });
});