/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let countMap = {};
    let majorityCount = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in countMap) {
            countMap[nums[i]]++;
        } else {
            countMap[nums[i]] = 1;
        }
        if (countMap[nums[i]] > majorityCount) return nums[i];
    }
};