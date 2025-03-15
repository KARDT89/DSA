/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0
    let high = nums.length 
    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            high = mid 
        } else {
            low = mid + 1
        }
    } return -1
};