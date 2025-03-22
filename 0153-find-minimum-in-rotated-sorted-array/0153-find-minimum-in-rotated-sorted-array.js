/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        // If mid element is greater than the rightmost element, min must be on the right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, min could be mid or in the left half
            right = mid;
        }
    }

    return nums[left]; // or nums[right], both point to the minimum element
};