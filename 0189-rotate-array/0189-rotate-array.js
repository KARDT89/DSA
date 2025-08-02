/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    reverse(0, nums.length - 1, nums);     // Reverse whole array
    reverse(0, k - 1, nums);               // Reverse first k elements
    reverse(k, nums.length - 1, nums);     // Reverse the rest
};

function reverse(left, right, arr){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}