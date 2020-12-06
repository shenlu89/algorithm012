学习笔记

## 课程作业 

- [如何从十进制转换为二进制](https://zh.wikihow.com/%E4%BB%8E%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BA%8C%E8%BF%9B%E5%88%B6)

### 简单

- 位 1 的个数（Facebook、苹果在半年内面试中考过）
- 2 的幂（谷歌、亚马逊、苹果在半年内面试中考过）
- 颠倒二进制位（苹果在半年内面试中考过）[56_MergeIntervals.md](https://github.com/shenlu89/algorithm012/blob/master/Week_08/56_MergeIntervals.md)
- 用自己熟悉的编程语言，手写各种初级排序代码，提交到学习总结中。
- 数组的相对排序（谷歌在半年内面试中考过）
- 有效的字母异位词（Facebook、亚马逊、谷歌在半年内面试中考过）

### 中等

- LRU 缓存机制（亚马逊、字节跳动、Facebook、微软在半年内面试中常考）
- 力扣排行榜（Bloomberg 在半年内面试中考过）
- 合并区间（Facebook、字节跳动、亚马逊在半年内面试中常考）[56_MergeIntervals.md](https://github.com/shenlu89/algorithm012/blob/master/Week_08/56_MergeIntervals.md)

### 困难

- N 皇后（字节跳动、亚马逊、百度在半年内面试中考过）
- N 皇后 II （亚马逊在半年内面试中考过）
- 翻转对（字节跳动在半年内面试中考过）

## 课程内容总结

- 位运算符
- 算数移位与逻辑移位
- 位运算的应用

**XOR - 异或**

异或：相同为 0，不同为 1。也可用“不进位加法”来理解。
异或操作的一些特点：

- x ^ 0 = x
- x ^ 1s = ~x // 注意 1s = ~0
- x ^ (~x) = 1s
- x ^ x = 0
- c = a ^ b => a ^ c = b, b ^ c = a // 交换两个数
- a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c // associative 

**为什么需要位运算**

- 机器里的数字表示方式和存储格式就是 二进制
- 十进制 <—> 二进制 : 如何转换？

**指定位置的位运算**

1. 将 x 最右边的 n 位清零：x & (~0 << n)
2. 获取 x 的第 n 位值（0 或者 1）： (x >> n) & 1
3. 获取 x 的第 n 位的幂值：x & (1 << n)
4. 仅将第 n 位置为 1：x | (1 << n)
5. 仅将第 n 位置为 0：x & (~ (1 << n))
6. 将 x 最高位至第 n 位（含）清零：x & ((1 << n) - 1)

**实战位运算要点**

判断奇偶：

x % 2 == 1 —> (x & 1) == 1
x % 2 == 0 —> (x & 1) == 0
- x >> 1 —> x / 2.
即： x = x / 2; —> x = x >> 1;
mid = (left + right) / 2; —> mid = (left + right) >> 1;
- X = X & (X-1) 清零最低位的 1
- X & -X => 得到最低位的 1
- X & ~X => 0

## 布隆过滤器 Bloom Filter

- [布隆过滤器(Bloom Filter)的原理和实现](https://www.cnblogs.com/cpselvis/p/6265825.html)
- [使用BloomFilter布隆过滤器解决缓存击穿、垃圾邮件识别、集合判重](https://blog.csdn.net/tianyaleixiaowu/article/details/74721877)

HashTable + 拉链存储重复元素

**Bloom Filter vs Hash Table**

一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在集合中

优点是空间效率和查询时间都远远超过一般的算法
缺点是有一定的误识别率和删除困难 (可以肯定一个元素没有，但是不能肯定一个元素有，常用在查询最外层作为缓存使用)

案例

1. 比特币网络
2. 分布式系统 （Map-Reduce） - Hadoop、searchengine
3. Redis 缓存
4. 垃圾邮件、评论等的过滤


## 排序算法

- [十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/p/7674659.html)

**排序算法**

1. 比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序
2. 非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序

排序算法

- 比较排序
  - 交换排序
    - 冒泡排序
    - 快速排序
  - 插入排序
    - 简单插入排序
    - 希尔排序
  - 选择排序
    - 简单选择排序
    - 堆排序
  - 归并排序
    - 二路归并排序
    - 多路归并排序
- 非比较排序
  - 计数排序
  - 桶排序
  - 基数排序

**初级排序**

1. 选择排序 (Selection Sort): 每次找到最小值，然后放到待排序数组的起始位置
2. 插入排序 (Insertion Sort): 从前到后逐步构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到响应位置并插入
3. 冒泡排序 (Bubble Sort): 嵌套循环，每次查看相邻的元素，如果逆序，则交换

**高级排序 - O(N*LogN)**


**快速排序**

- 快速排序 (Quick Sort)：数组取标杆 pivot，将小元素放 pivot 左边，大元素放右侧，然后依次对右边和右边的子数组继续快排；以达到整个序列有序


```js
// JavaScript
const quickSort = (nums, left, right) => {
  if (nums.length <= 1) return nums
  if (left < right) {
    index = partition(nums, left, right)
    quickSort(nums, left, index-1)
    quickSort(nums, index+1, right)
  }
}
      
const partition = (nums, left, right) => {
  let pivot = left, index = left + 1
  for (let i = index; i <= right; i++) {
    if (nums[i] < nums[pivot]) {
      [nums[i], nums[index]] = [nums[index], nums[i]]
      index++
    }
  }
  [nums[pivot], nums[index-1]] = [nums[index-1], nums[pivot]]
  return index -1
}
```

**归并排序**

- 归并排序 (Merge Sort) - 分治

1. 把长度为 n 的输入序列分成两个长度为 n/2 的子序列
2. 对这两个子序列分别采用归并排序
3. 将两个排列好的子序列合并成一个最终的排序序列



```js
// JavaScript
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length/2), 
      left = nums.slice(0, mid), 
      right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = []
  while(left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }
  while(left.length) result.push(left.shift())
  while(right.length) result.push(right.shift())
  return result
}
```

归并和快排具有相似性，但步骤顺序相反

归并： 先排序左右子数组，然后合并两个有序子数组
快排： 先调配出左右子数组，然后对于左右子数组进行排序

我的理解：

归并：找出数组中间位置，调配左右数组，在合并的过程中完成排序步骤
快排：排序发生在调配出左右子数组的过程中，合并时已完成排序步骤

**堆排序**

- 堆排序 (Heap Sort) - 堆插入 O(logN)，取最大/小值 O(1)

1. 数组元素依次简历小顶堆
2. 依次取堆顶元素，并删除



```js
// Javascript
function heapSort(arr) {
  if (arr.length === 0) return;
  let len = arr.length;
  // 建堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }
  // 排序
  for (let i = len - 1; i >= 0; i--) {
    // 堆顶元素与最后一个互换
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 对 0 ～ i 的数组建堆
    heapify(arr, i, 0);
  }
}
function heapify(arr, len, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}
```