/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let i = num.length
    while(i > 0){
        if(Number(num[i - 1]) % 2 !== 0) return num.slice(0, i)
        i--
    }
    return ""
};