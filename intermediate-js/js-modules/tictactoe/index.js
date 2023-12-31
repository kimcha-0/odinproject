const GameBoard = (() => {

    const board = [];
    for (i = 0; i < 3; i++) {
        const row = [];
        for (j = 0; j < 3; j++) {
            row.push(0);
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
        grid[x][y] = newValue;
    }

    return {
        getBoard,
        checkWinCondition,
        changeBoardState,
    }

})();

const DisplayBoard= (() => {
    const gridCells = document.querySelectorAll('grid-cell');
    const board = 
    const display = () => {
        count = 0;
        for (i = 0; i < board.length; i++) {
            for ( j = 0; j < board[i].length; j++) {
                if (board[i][j] === 1) {
                    gridCells[count].textContent = 'X';
                } else if (board[i][j] === 2) {
                    gridCells[count].textContent = 'O';
                }
                gridCells[count].addEventListener('click', () => {
                    // call display controller method and send coordinate data
                    DisplayBoardController.changeBoardController(i, j, player);
                });
                count += 1;
            }
        }
    };

    const clearDisplay = () => {
        for (i = 0; i < gridCells.length; i++) {
            gridCells[i].textContent = '';
        }
    }

    return {
        display,
        clearDisplay,
    }

})();

const Player = (type) => {
    const getPlayerType = () => type;

    const playMove = (x, y) => {
        DisplayBoardController.changeBoardController(x, y, type);
    }

    return {
        getPlayerType,
        playMove,
    }
};

const DisplayBoardController = (() => {
    const changeBoardController = (x, y, player) => {
        GameBoard.changeBoardState(x, y, player);

    }

    const renderDisplay = () => {
        Display.clearDisplay();
        Display.display();
    }

    return {
        changeBoardController,
        renderDisplay,
    }

})();

const xPlayer = Player('X');
const yPlayer = Player('Y');
let turn = true;

turn = false;

const body = document.querySelector('body');
const playGameCtrl = document.querySelector('game-controls');
const grid = GameBoard;
