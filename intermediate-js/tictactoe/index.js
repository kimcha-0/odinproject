const GameBoard = (() => {

    const board = [];
    for (i = 0; i < 3; i++) {
        const row = [];
        for (j = 0; j < 3; j++) {
            row.push('O');
        }
        board.push(row);
    }

    const getBoard = () => board;

    const checkWinCondition = (player) => {
        for (i = 0; i < board.length; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }
            if (board[0][i] === player && board[1][i] === player  && board[2][i] === player) {
                return true;
            }
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        return false;
    };

    const changeBoardState = (x, y, newValue) => {
        board[x][y] = newValue;
    }

    const cellIsEmpty = (x, y) => board[x][y] === '';

    const renderDisplay = () => {
        Display.clearDisplay();
        Display.display(board);
    }

    return {
        getBoard,
        checkWinCondition,
        changeBoardState,
        renderDisplay,
        cellIsEmpty,
    }

})();

const Display = (() => {
    const boardEl = document.querySelectorAll('.board-cell');

    const display = (board) => {
        let count = 0;
        for (i = 0; i < board.length; i++) {
            for ( j = 0; j < board[i].length; j++) {
                console.log(board[i][j]);
                boardEl[count].textContent = board[i][j];
                count++;
            }
        }
    }

    const clearDisplay = () => {
        for (i = 0; i < boardEl.length; i++) {
            boardEl[i].textContent = '';
        }
    }


    return {
        display,
        clearDisplay,
    }
})();

const Game = () => {
    let numMoves = 0;
    let turn = true;
    const inputValidation = (x, y) => x >= 0 && x < 3 && y >= 0 && y < 3 && GameBoard.cellIsEmpty(x, y);
    while (true) {
        if (turn) {
            // X's turn
            let xXMove = prompt("X move: Enter an X Coordinate: ") - 1;
            let yXMove = prompt("X move: Enter an Y Coordinate: ") - 1;
            console.log(inputValidation(xXMove, yXMove));
            while (!inputValidation(xXMove, yXMove)) {
                xXMove = prompt("X move: Enter an X Coordinate: ") - 1;
                yXMove = prompt("X move: Enter an Y Coordinate: ") - 1;
                console.log(inputValidation(xXMove, yXMove));
            }
            GameBoard.changeBoardState(xXMove, yXMove, 'X');
            Display.renderDisplay(GameBoard.getBoard());

            if (GameBoard.checkWinCondition('X') === true) {
                alert('X wins!');
                break;
            }
            turn = false;
        } else {
            let xOMove = prompt("O move: Enter an X Coordinate: ") - 1;
            let yOMove = prompt("O move: Enter an Y Coordinate: ") - 1;
            console.log(inputValidation(xOMove, yOMove));
            while (!inputValidation(xOMove, yOMove)) {
                xOMove = prompt("O move: Enter an X Coordinate: ") - 1;
                yOMove = prompt("O move: Enter an Y Coordinate: ") - 1;
                console.log(inputValidation(xOMove, yOMove));
            }
            GameBoard.changeBoardState(xOMove, yOMove, 'O');
            Display.renderDisplay(GameBoard.getBoard());

            if (GameBoard.checkWinCondition('O') === true) {
                alert('O wins!');
                break;
            }
            // O's turn
            turn = true;
        }
        numMoves++;
        if (numMoves === 9) {
            alert('tie!');
            break;
        }
    }
};
GameBoard.renderDisplay();
