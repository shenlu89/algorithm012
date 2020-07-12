# 爬楼梯

参考了leetcode上整理的[答案](https://leetcode-cn.com/problems/climbing-stairs/solution/70-pa-lou-ti-by-alexer-660/)

解法一：傻递归（超哥说的）

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) {
        return n;
    }
    return climbStairs(n-1) + climbStairs(n-2); 
};
```

但是超时了。

减少重复计算版本

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   let arr = [...Array(n+1)].map(_=>0)
   return climb_stairs(0,n,arr)
};

const climb_stairs = function(i,n,arr) {
    if(i > n) {
        return 0;
    }
    if( i === n) {
        return 1;
    }
    if(arr[i]) { // 这里主要是为了减少重复计算，比如在循环的时候回有多次arr[3],或者arr[5]等，这样做就减少了重复计算
        return arr[i]
    }
    arr[i] = climb_stairs(i+1,n,arr) + climb_stairs(i+2,n,arr);
    return arr[i];
}
```

解法二：循环遍历 + 累加法

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) {
        return n;
    }
    let first = 1;
    let second = 2;
    let third = 3;
    for(let i = n; i >= 3; i-- ) {
        third = first + second;
        first = second;
        second = third;
    }
    return second;
};
```

循环一次累加，时间复杂度O(n)，空间复杂度O(1)

解法三：动态规划

```js
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    // 求第n步 所以索引到n
    var dp = new Array(n+1);
    if(n <= 3){
        return n;
    }
    dp[1] = 1;
    dp[2] = 2;
    for(var i = 3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1];
    }
    return dp[n];
};
```

解法四：特征方程

```js
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    var sqrt5 = Math.sqrt(5);
    var pow =  Math.pow((1+sqrt5)/2,n+1) - Math.pow((1-sqrt5)/2,n+1);
    return Math.round( pow/sqrt5 );
};
```

解法五：简化版累加法

```js
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function(n) {
    var first = 1;
    var second = 1;
    while(n--){
        first = (second += first) - first;
    }
    return first;
};
```