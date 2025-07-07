/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleanedString = clean(s)
    return isPal(cleanedString)
};

function clean(str) {
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        if (char.indexOf(str[i].toLowerCase()) !== -1) {
            newStr += str[i].toLowerCase()
        }
    } return newStr
}

function isPal(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) return false
        left++
        right--
    } return true
}

