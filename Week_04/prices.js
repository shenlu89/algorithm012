// var maxProfit = function(prices) {
//     if (!prices) return 0;
//     let sum = 0;
//     for (let i = 0, j = i+1, len = prices.length; j < len;) {
//         if (prices[i] < prices[j]) {
//             while (j < len && prices[j] <= prices[j+1]) j++;
//             sum += prices[j] - prices[i];
//             i = j;
//             j = i+1;
//         } else {
//             i = j;
//             j++;
//         }
//     }
//     return sum;
// };

// let prices = [7,1,5,3,6,4];
// // let prices = [1,2,3,4,5];

// console.log(maxProfit(prices));

var search = function (nums) {
    let left = 0, right = nums.length-1;
    if (nums[left] < nums[right]) return -1;
    while (left < right) {
        let mid = parseInt((left+right)/2);
        if (nums[mid] > nums[mid + 1]) {
            return mid + 1;
        } else {
            if (nums[mid] < nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
}

let nums = [4, 5, 6, 7, 0, 1, 2]; // 4
// let nums = [1, 2, 3, 4] // -1
// let nums = [6, 5] // 1
// let nums = [2, 3, 4, 5, 1] // 4
// let nums = [5, 1, 2, 3, 4] // 1

console.log(search(nums));
