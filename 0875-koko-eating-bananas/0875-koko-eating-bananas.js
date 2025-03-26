/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let answer = 0

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        let value = 0
        for (let i = 0; i < piles.length; i++) {
            value += Math.ceil(piles[i] / mid)
        }
        if (value <= h) {
            right = mid - 1
            answer = mid
        } else {
            left = mid + 1
        }
    }
    return answer
};