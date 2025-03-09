/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charSet = new Set()
    let left = 0
    let result = 0
    if (s.length === 0) return 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left])
            left++
        }
        charSet.add(s[right])
        result = Math.max(result, right - left + 1)
    } return result
};