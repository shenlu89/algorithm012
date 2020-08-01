// var threeSum = function(nums) {
//    let list = [];
//    if(!nums) return list;
//    let len = nums.length;
//    nums.sort((a,b) => a-b);
//    if(len < 3 || nums[len-1] < 0) return list;
//    for(let i = 0; i < len-2; i++) {
//       if (nums[i] > 0) break;
//       if (i > 0 && nums[i] === nums[i-1]) continue;
//    	let left = i+1, right = len-1;
//       while (left < right) {
//          let sum = nums[i] + nums[left] + nums[right];
//          if (sum === 0) {
//             list.push([nums[i], nums[left], nums[right]]);
//             while (left < right && nums[left] === nums[left+1]) left++;
//             while (left < right && nums[right] === nums[right-1]) right--;
//             left++;
//             right--;
//          } else if (sum < 0) {
//             left++;
//          } else {
//             right--;
//          }
//       }
//    }
//    return list;
// };

var fourSum = function(nums, target) {
    let res = [];
    if (!nums) return res;
    let len = nums.length;
    nums.sort((a,b) => a-b);
    if (len < 4) return res;
    for (let i = 0; i < len-3; i++) {
        if (nums[i]*4 > target) break;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i+1; j < len-2; j++) {
            if (nums[j]*3 > target-nums[i]) break;
            if (j > i+1 && nums[j] === nums[j-1]) continue;
            let left = j+1;
            let right = len-1;
            while (left < right) {
                let temp = [nums[i], nums[j], nums[left], nums[right]];
                let sum = temp.reduce((a,b) => a+b);
                if (sum === target) {
                    res.push(temp);
                    while (left < right && nums[left] === nums[left+1]) left++;
                    while (left < right && nums[right] === nums[right-1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return res;
};

// let nums = [1,0,-1,0,-2,2];
let nums = [1,-2,-5,-4,-3,3,3,5]

// console.log(nums.sort((a,b) => a-b));

// console.log(fourSum(nums, -11))

var topKFrequent = function(nums, k) {
    let map = {};
    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
    }
    return Object.entries(map).sort((a,b) => b[1]-a[1]).splice(0,k);
};

console.log(topKFrequent(nums, 1))

var Element = function(nums) {
    let res = [];
    let map = {};
    if (!nums || nums.length < 2) return res;
    for (let n of nums) {
        map[n] = (map[n] || 0) + 1;
        if (map[n] === 2) res.push(n);
    }
    return res;
}

let nums1 = [4,3,2,7,8,2,3,1];

console.log(Element(nums1));