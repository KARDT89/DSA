/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let hash = {};
    let count = 0;
    for (let s of stones) {
        hash[s] ? hash[s]++ : hash[s] = 1
    }
    for (let j of jewels) {
        if (hash[j]) count += hash[j];
    }
    return count;
};