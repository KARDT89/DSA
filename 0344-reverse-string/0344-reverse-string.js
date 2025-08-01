/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0
    let right = s.length - 1
    while(left < right){
        let container = s[left]
        s[left] = s[right]
        s[right] = container
        left++
        right--
    }
};