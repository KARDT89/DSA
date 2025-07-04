/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0
    let count = 0
    for (let element of nums) {
        if (element !== 0) {
            count++
            if (count > maxCount) {
                maxCount = count
            }
        } else {
            count = 0
        }
    }
    return maxCount
};