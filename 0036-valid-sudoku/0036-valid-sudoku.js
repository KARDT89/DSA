/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows = new Array(9).fill().map(() => new Set());
    let cols = new Array(9).fill().map(() => new Set());
    let squares = new Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (board[r][c] === '.') continue;
            if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || squares[squareIndex].has(board[r][c])) {
                return false // found duplicate
            }
            rows[r].add(board[r][c])
            cols[c].add(board[r][c])
            squares[squareIndex].add(board[r][c])
        }
    } 
    return true // All good
};