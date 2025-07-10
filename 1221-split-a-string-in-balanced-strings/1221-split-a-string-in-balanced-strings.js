/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let counter = 0
    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') counter++
        if (s[i] === 'L') counter--
        if (counter === 0) total += 1
    }
    return total
};