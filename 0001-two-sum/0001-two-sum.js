/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let prevMap = {} // A hashmap to store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i] // Calculate the required number to form the sum

        // Check if the needed number exists in the hashmap
        if (needed in prevMap) {
            return [prevMap[needed], i]; // If found, return the indices
        } else {
            // Otherwise, store the current number and its index in the hashmap
            prevMap[nums[i]] = i;
        }
    } return
};