/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let write = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0){
            [nums[write], nums[i]] = [nums[i], nums[write]]
            write++
        }
    }

    let back = nums.length - 1
    
    while(write <= back){
        if(nums[write] === 2){
            [nums[write], nums[back]] = [nums[back], nums[write]]
            back--
        }else{
            write++
        }
    }

};