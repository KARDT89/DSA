/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // edge case
    if (s.length !== t.length) return false

    // the container
    let hashMap = {}

    // loop through s and store it in container
    for (let i = 0; i < s.length; i++) {
        let letter = s[i]
        if (!hashMap[letter]) {
            hashMap[letter] = 1
        } else {
            hashMap[letter]++
        }
    }

    // loop through t and check in container if the current letter is present.
    // If present, decrease the count. U get the point. EZ
    for (let j = 0; j < t.length; j++) {
        let letter = t[j]
        if (hashMap[letter] === undefined) return false
        if (hashMap[letter] < 1) return false
        hashMap[letter]--
    }

    return true

};