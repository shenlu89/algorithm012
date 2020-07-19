var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b) => a - b);
    nums2 = nums2.sort((a,b) => a - b);
    let i = 0;
    let j = 0;
    let res = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }else if(nums1[i] > nums2[j]){
            j++;
        }else{
            res.push(nums1[i]);
            i++;
            j++;
        }
    }
    return res;
};

// var intersect = function(nums1, nums2) {
//     var len1 = nums1.length;
//     var len2 = nums2.length;
//     var shortArr = nums2
//     var longArr = nums1
//     if (len1 < len2) {
//         shortArr = nums1 
//         longArr = nums2
//     }
//     var arr = []
//     for (let i=shortArr.length - 1; i>=0; i--) {
//         var num = shortArr[i]
//         let index = longArr.indexOf(num)
//         if (index != -1) {
//             arr.push(num)
//             longArr[index] = undefined
//         }
//     }
//     return arr
// };

// var intersect = function(nums1, nums2) {
//     if(!nums1 || !nums2){
//     	return [];
//     }
//     nums1.sort((a,b) => a-b);
//     nums2.sort((a,b) => a-b);
//     let arr = [];
//     while(nums1.length && nums2.length) {
//     	if(nums1[0] === nums2[0]) {
//             let item = nums1[0];
//     		arr.push(item);
//             nums2.shift();
//             nums1.shift();
//     	} else if (nums1[0] < nums2[0]) {
//     		nums1.shift();
//     	} else {
//     		nums2.shift();
//     	}
//     }
//     return arr;
// };

// let nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
// let nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];

let nums1 = [4,9,5,2,3,10];
let nums2 = [9,4,9,8,4,3,2,1];

console.log(intersect(nums1, nums2))