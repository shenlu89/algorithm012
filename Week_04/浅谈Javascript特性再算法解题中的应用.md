# 浅谈Javascript特性在算法解题中的应用

## 有效括号

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0) return false;
    let map = {"(":")", "[":"]", "{":"}"};
    let stack = [];
    for(let i = s.length-1; i>=0; i--) {
        if(map.hasOwnProperty(s.charAt(i))) {
            if(stack.pop() !== map[s.charAt(i)]) return false;
        } else {
            stack.push(s.charAt(i));
        }
    }
    return !stack.length;
};
```

## 移动零

### 不使用Javascrpt的API解法

解法一： 双指针解法

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

### Javascript内置API解法

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

解法三：直接排序

还有一种最简洁的，使用Javascript的排序(sort)API。

- sort对数组是原地排序返回，**改变原内容**。详见[Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

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

## 斐波那契数

解法一：递归

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
	return N < 2 ? N : fib(N-1) + fib(N-2);
};
```


解法二：迭代/动态规划

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let first = 0;
    let second = 1;
    while (N--) {
        [first, second] = [second, first+second];
    }
    return first;
};
```

## 二叉树的层序遍历

解法一：递归

DFS很简单。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    function recusion(root, level) {
        if (!root) return;
        if (res[level] === undefined) res[level] = [];
        res[level].push(root.val);
        recusion(root.left, level+1);
        recusion(root.right, level+1);
    }
    recusion(root, 0);
    return res;
};
```

解法二：迭代

广度优先(BFS)再写一遍

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [root];
    while (queue.length) { // 没有节点在列，就是遍历完毕
        let level = [];
        for (let i = 0, len = queue.length; i < len; i++) { // 遍历当前层的节点
            let node = queue.shift(); // 出列
            level.push(node.val); // 填充level数组
            if (node.left) queue.push(node); // 下层节点入列
            if (node.right) queue.push(node);
        }
        res.push(level);
    }
    return res;
};
```

## 二叉树的最大深度

解法一：傻递归

复杂度分析：

- 时间复杂度：O(N)
- 空间复杂度：O(log⁡(N))

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};
```

解法二：FIFO队列

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [root];
    let level = 0;
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }
    return level;
};
```