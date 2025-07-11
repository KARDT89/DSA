/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []

    function doItAgain(current, openLeft, closeLeft) {
        // base case
        if (openLeft === 0 && closeLeft === 0) {
            result.push(current)
            return
        }
        if (openLeft > 0) {
            doItAgain(current + '(', openLeft - 1, closeLeft)
        }
        if (closeLeft > openLeft) {
            doItAgain(current + ')', openLeft, closeLeft - 1)
        }
    }

    doItAgain("", n, n)
    return result
};