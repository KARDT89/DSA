/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    // improved Boyer-Moore Voting Algorithm
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};