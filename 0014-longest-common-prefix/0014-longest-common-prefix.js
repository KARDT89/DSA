/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        // While the current word doesn't start with the current prefix, keep shortening the prefix.
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1)
            if (prefix === "") return "";
        }
    }
    return prefix;
};