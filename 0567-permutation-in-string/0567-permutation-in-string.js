/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false; // s1 can't be a substring of s2 if it's longer

    let s1Count = Array(26).fill(0); // Frequency array for s1
    let s2Count = Array(26).fill(0); // Sliding window frequency for s2

    // Fill frequency array for s1 and first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Check initial window
    if (s1Count.join('') === s2Count.join('')) return true;

    // Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        // Add new char at right end
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        // Remove old char from left end
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;

        // Check if frequency matches
        if (s1Count.join('') === s2Count.join('')) return true;
    }

    return false;
};
