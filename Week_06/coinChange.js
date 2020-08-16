var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b);
    let minCount = 0
    let bigCoin = coins.pop();
    while (coins.length) {
        if (amount < bigCoin) {
            bigCoin = coins.pop()
            if (bigCoin === amount) {
                return ++minCount;
            }
        } else {
            amount = amount - bigCoin;
            minCount++;
        }
    }
    return -1;
};

let coins = [1, 2, 5];
let amount = 11;

console.log(coinChange(coins, amount));

https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-by-alexer-660/