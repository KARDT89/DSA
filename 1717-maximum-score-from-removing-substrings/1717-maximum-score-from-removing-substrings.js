/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    let score = 0;

    // Helper function to remove substrings using stack
    const remove = (s, firstChar, secondChar, points) => {
        let stack = [];
        let gained = 0;

        for (let char of s) {
            if (stack.length && stack[stack.length - 1] === firstChar && char === secondChar) {
                stack.pop();
                gained += points;
            } else {
                stack.push(char);
            }
        }

        return [stack.join(""), gained];
    };

    // Step 1: Prioritize higher score substring
    if (x > y) {
        [s, gain] = remove(s, 'a', 'b', x); // remove "ab"
        score += gain;
        [s, gain] = remove(s, 'b', 'a', y); // remove "ba"
        score += gain;
    } else {
        [s, gain] = remove(s, 'b', 'a', y); // remove "ba"
        score += gain;
        [s, gain] = remove(s, 'a', 'b', x); // remove "ab"
        score += gain;
    }

    return score;
};