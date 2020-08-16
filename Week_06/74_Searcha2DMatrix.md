# 搜索二维矩阵


```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if (m == 0) return false;
    let n = matrix[0].length;
    let low = 0;
    let high = m*n - 1;
    while(low <= high){
        let mid = low+((high-low)>>1);
        let row = parseInt(mid/n);
        let col = mid%n;
        let matrixMid = matrix[row][col];
        if (matrixMid < target) {
            low = mid + 1;
        } else if (matrixMid > target) {
            high = mid -1;
        } else if (matrixMid == target) {
            return true;
        }
    }
    return false;
};
```