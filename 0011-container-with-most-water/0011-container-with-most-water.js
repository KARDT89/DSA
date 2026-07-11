/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, max = 0
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right])
        max = Math.max(area, max)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};