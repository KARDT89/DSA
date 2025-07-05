/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = board
    // Check rows
    for (row of rows) {
        const filteredRow = row.filter(num => num !== ".")
        if (new Set(filteredRow).size !== filteredRow.length) return false
    }

    const subBoxes = {}
    for (let i = 0; i < 9; i++) {
        let col = []
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j]

            if (cell === '.') continue;
            // Check column
            col.push(cell)

            // Check 3x3 sub-box
            const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            if (!subBoxes[boxIndex]) {
                subBoxes[boxIndex] = [cell]
            } else {
                if (subBoxes[boxIndex].find((num) => num === cell)) return false;
                subBoxes[boxIndex].push(cell)
            }
        }
        if (new Set(col).size !== col.length) return false
    }
    return true
};