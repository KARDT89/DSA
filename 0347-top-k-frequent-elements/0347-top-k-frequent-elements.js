/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {};
    let bucket = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    for (let [num, freq] of Object.entries(map)) {
        if (!bucket[freq]) {
            bucket[freq] = new Set().add(Number(num));
        } else {
            bucket[freq] = bucket[freq].add(Number(num));
        }
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }

    return result
};