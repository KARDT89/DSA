/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    let left = right = sum = max = 0;
    let bucket = new Set()
    while (right < nums.length) {
        if (!bucket.has(nums[right])) {
            bucket.add(nums[right])
            sum += nums[right]
            right++

        } else {
            bucket.delete(nums[left])
            sum -= nums[left]
            left++
        }
        if (max < sum) max = sum
    }
    return max
};