/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let cars = position.map((pos, i) => {
        return [pos, speed[i]] // Sort by position descending
    })
    cars.sort((a, b) => b[0] - a[0])

    let stack = []

    for (let [pos, spd] of cars) {
        let timeToReach = (target - pos) / spd

        // If stack is empty or this car takes longer than the top fleet, create a new fleet
        if (stack.length === 0 || timeToReach > stack[stack.length - 1]) {
            stack.push(timeToReach)
        }
    }
    return stack.length
};