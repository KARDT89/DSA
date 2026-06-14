/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {}
    for (let [index, val] of nums.entries()) {
        let result = target - val
        if (result in hash) {
            return [index, hash[result]]
        }
        hash[val] = index
    }
    return false
};