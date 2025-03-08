/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate the max profit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};