/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false
    let hashST = {}
    let hashTS = {}
    for (let i = 0; i < s.length; i++) {
        if (hashST[s[i]] === undefined && hashTS[t[i]] === undefined) {
            hashST[s[i]] = t[i]
            hashTS[t[i]] = s[i]
        } else {
            if (hashST[s[i]] !== t[i] || hashTS[t[i]] !== s[i]) return false
        }
    }
    return true
};