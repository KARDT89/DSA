/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let hash = {}
    // Count characters in s
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }
    // Subtract using t
    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) {
            return false;
        }
        hash[t[i]]--;
    }

    return true;
    
};