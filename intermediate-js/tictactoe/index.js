let turn = true;

const GameBoard = (() => {

    const board = [];
    for (i = 0; i < 3; i++) {
        const row = [];
        for (j = 0; j < 3; j++) {
            row.push('');
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
    // array of grid cell divs
    const boardEl = document.querySelectorAll('.board-cell');

    const display = (board) => {
        let count = 0;
        for (i = 0; i < board.length; i++) {
            for ( j = 0; j < board[i].length; j++) {
                boardEl[count].textContent = board[i][j];
                count++;
            }
        }
    }
    const displayListen = (board) => {
        let count = 0;
        for (i = 0; i < board.length; i++) {
            for (j= 0; j < board[0].length; j++) {
                boardEl[count].addEventListener('click', () => {
                    const test = document.getElementById(`${i}-${j}`);
                    const ids = test.id.split('-').map(x => parseInt(x));
                    turn === true ? board[ids[0]][ids[1]] = 'X' : board[ids[0]][ids[1]] = 'Y';
                    if (turn)
                        console.log('X');
                    else
                        console.log('Y');
                    console.log(ids);
                    count++;
                    Controller.updateState();
                })

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
        displayListen,
    }
})();


const Controller = (() => {
    const updateState = () => {
        switchTurn();
    }

    const switchTurn = () => turn = !turn;

    return {
        updateState,
        switchTurn,
    }
})();


const Game = (() => {
    const startGame = () => {
        Display.displayListen(GameBoard.getBoard());
        GameBoard.renderDisplay();
    }

    return {
        startGame,
    }
})();


Game.startGame();
