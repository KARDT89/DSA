/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    if (nums.length % 2 !== 0) return false
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1
        } else {
            count[nums[i]]++
        }
    }
    for (let k of Object.values(count)) {
        if (k % 2 !== 0) return false
    }
    return true
};