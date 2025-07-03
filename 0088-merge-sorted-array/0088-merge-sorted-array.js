/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pointer = m + n - 1 // last index
    let pointer1 = m - 1 // pointing at the actual end of nums1
    let pointer2 = n - 1 // pointing at the actual end of nums2

    while (pointer1 >= 0 && pointer2 >= 0) {
        if (nums1[pointer1] < nums2[pointer2]) {
            nums1[pointer] = nums2[pointer2]
            pointer2--
        } else {
            nums1[pointer] = nums1[pointer1]
            pointer1--
        }
        pointer--
    }
    // If anything left in nums2, copy it
    while (pointer2 >= 0) {
        nums1[pointer] = nums2[pointer2]
        pointer--
        pointer2--
    }

};