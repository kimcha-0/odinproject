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
    };

    return {
        getBoard,
        checkWinCondition,
    }

})();


const displayGameBoard = ((gameBoard) => {

    return {
        gameBoard,
    };

})();
