/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    let streak = 0
    let set = new Set(nums)

    for (num of set) {
        if (set.has(num - 1)) continue
        let currentStreak = 1
        while (set.has(num + 1)) {
            currentStreak++
            num++
        }
        streak = Math.max(streak, currentStreak)
    }
    return streak
};