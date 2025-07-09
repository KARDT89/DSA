/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let hash = {}
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1
    }

    let maxVowels = 0
    let maxConsonant = 0

    for (let x in hash) {
        if (vowels.includes(x)) {
            maxVowels = Math.max(maxVowels, hash[x]);
        } else {
            maxConsonant = Math.max(maxConsonant, hash[x]);
        }
    }
    return maxVowels + maxConsonant
};