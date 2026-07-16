/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //Brute force
    let count = new Array(3).fill(0)

    // Count occurrences
    for (const v of nums) {
        count[v]++
    }
    // Overwrite the array
    let i = 0;

    for (let value = 0; value <= 2; value++) {
        while (count[value] > 0) {
            nums[i] = value;
            i++;
            count[value]--;
        }
    }

    return nums;
};