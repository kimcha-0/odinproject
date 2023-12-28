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

    return {
        getBoard,
        checkWinCondition,
    }

})();

const Display = ((grid) => {

    // const boardEl = document.getElementById('board');

    const displayGrid = () => {
        for (i = 0; i < grid.length; i++) {
            // const rowEl = document.createElement('div');
            rowEl.className = 'board-row';
            for ( j = 0; j < grid[i].length; j++) {
                // const cellEl = document.createElement('div');
                cellEl.className = 'board-cell';
                if (grid[i][j] === 1) {
                    cellEl.id = 'X';
                } else if (grid[i][j] === 2) {
                    cellEl.id = 'O';
                } else {
                    cellEl.id = 'blank';
                }
            }
            boardEl.appendChild(rowEl);
        }
    };

    return {
        displayGrid,
    };

})();

const Player = (type, grid) => {

    const getType = () => type;
    
    const playMove = (x, y) => {
        grid[x][y] = type;
    }

    return {
        getType,
        playMove,
    };
};

const PlayGame  = () => {
    let moves = 0;
    let turn = true;
    const playerOne = Player(1);
    const playerTwo = Player(2);
    while (true) {
        if (turn) {
            playerOne.playMove(x, y);
            if (GameBoard.checkWinCondition(playerOne.getType())) {
                console.log("player one wins");
                break;
            }
            turn = !turn;
        } else {
            playerTwo.playMove(x, y);
            if (GameBoard.checkWinCondition(playerTwo.getType())) {
                console.log("player two wins");
                break;
            }
            turn = !turn;
        }

        moves++;
        if (moves === 9) {
            console.log("tie");
            break;
        }
        // Display(board).displayGrid();
    }

};

const body = document.querySelector('body');
const playGameCtrl = document.querySelector('game-controls');
const grid = GameBoard;
console.log(grid.getBoard());

const playGameBtn = document.createElement('button');
playGameBtn.className = 'play-game';
playGameBtn.id = 'start-btn';
playGameBtn.addEventListener('click', () => {
    Display.displayBoard();
});
