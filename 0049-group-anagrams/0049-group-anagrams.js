/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groups = {}

    for(const str of strs){
        const sig = str.split("").sort().join("")

        if(!groups[sig]) groups[sig] = []

        groups[sig].push(str)
    }

    return Object.values(groups)
};