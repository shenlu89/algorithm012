var maxProfit = function(prices) {
    if (!prices) return 0;
    let sum = 0;
    for (let i = 0, j = i+1, len = prices.length; j < len;) {
        if (prices[i] < prices[j]) {
            while (j < len && prices[j] <= prices[j+1]) j++;
            sum += prices[j] - prices[i];
            i = j;
            j = i+1;
        } else {
            i = j;
            j++;
        }
    }
    return sum;
};

let prices = [7,1,5,3,6,4];
// let prices = [1,2,3,4,5];

console.log(maxProfit(prices));