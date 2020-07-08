## 复杂度分析

### 时间复杂度

- 最好：O(n)
- 最坏：O(n)
- 平均：O(n)
- 均摊：O(n)

### 空间复杂度

O(1)

## 不使用Javascrpt的API解法

看到这个题目第一次尝试写了一下

解法一： 双指针解法

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = 0, j = 0, len = nums.length; i < len; i++) {
        if(nums[i] !== 0) {
            nums[j], nums[i] = nums[i], nums[j];
            j++;
        }
    }
    return nums；
}
```

第一次提交的写法，报错：

- 没有理解好ES6的结构，应该将需要交换的`nums[index]`放入一个数组中，详见[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

另外写法上和讨论区比较，有些冗余的地方

递增运算符为其操作数增加1，返回一个数值。如果使用后置（postfix），即运算符位于操作数的后面（如 x++），那么将会在递增前返回数值。如果使用前置（prefix），即运算符位于操作数的前面（如 ++x），那么将会在递增后返回数值。下面的代码，数组中的`j`先进行了解构换值，再进行了递增(`j++`)。

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = 0, j = i, len = nums.length; i < len; i++) {
        if(nums[i] !== 0) {
            [nums[j++], nums[i]] = [nums[i], nums[j]];
        }
    }
    return nums;
}
```

## Javascript内置API解法

解法二： 倒着遍历 + 数组操作

倒叙是为了减少声明和遍历操作数，思路很简单，就不细说了。`splice`是Javascript的Array对象用来操作内置API

- splice(index, deleteCount, insertItemsList)，第一个参数是从第几个index开始，第二个参数是从index之后删除几个数组元素，第三个参数（这里没有用到）是插入(insert)的元素，用逗号隔开。
- splice是修改原数组的操作，会改变原来的数组内容，详见[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = nums.length -1; i >=0; i--) {
        if(nums[i] !== 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums；
}
```

解法三：

还有一种最简洁的，使用Javascript的排序(sort)API。

- sort对数组是原地排序返回，改变原内容。详见[Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    return nums.sort((a,b) => b === 0 ? -1 : 0);
};
```

- 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
- 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
- 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
- compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

在Leetcode上比较这三种解法的结果，没有实质性的差距。从实用角度，我觉得第三种方法最好，最简洁。但从面试角度，自己感觉最好三种写法都列出来。因为有些解法不但可以反映出你对算法的了解，还可以反映出你对Javascript内置API的熟悉程度。