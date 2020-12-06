学习笔记

## 课程作业

## 本周作业

### 简单

- 字符串中的第一个唯一字符（亚马逊、微软、Facebook 在半年内面试中考过）
- 反转字符串 II （亚马逊在半年内面试中考过）
- 翻转字符串里的单词（微软、字节跳动、苹果在半年内面试中考过）
- 反转字符串中的单词 III （微软、字节跳动、华为在半年内面试中考过）
- 仅仅反转字母（字节跳动在半年内面试中考过）
- 同构字符串（谷歌、亚马逊、微软在半年内面试中考过）
- 验证回文字符串 Ⅱ（Facebook 在半年内面试中常考）

### 中等

- 在学习总结中，写出不同路径 2 这道题目的状态转移方程。
- 最长上升子序列（字节跳动、亚马逊、微软在半年内面试中考过）
- 解码方法（字节跳动、亚马逊、Facebook 在半年内面试中考过）
- 字符串转换整数 (atoi) （亚马逊、微软、Facebook 在半年内面试中考过）
- 找到字符串中所有字母异位词（Facebook 在半年内面试中常考）
- 最长回文子串（亚马逊、字节跳动、华为在半年内面试中常考）

### 困难

- 最长有效括号（亚马逊、字节跳动、华为在半年内面试中考过）
- 赛车（谷歌在半年内面试中考过）
- 通配符匹配（Facebook、微软、字节跳动在半年内面试中考过）
- 不同的子序列（MathWorks 在半年内面试中考过）

## 课程内容总结

小结提纲

1. 动态规划复习；附带 递归、分治
2. 多种情况的动态规划的状态转移方程串讲
3. 进阶版动态规划的习题

感触

1. 人肉递归低效、很累
2. 找到最近最简方法、将其拆解成可重复解决的问题
3. 数学归纳法思维

本质：寻找重复性 -> 计算机指令集

### 递归状态树

### 动态规划 Dynamic Promgramming

1. "Simplifying a complicated problem by breaking it down into simpler sub-problems"
2. Divide & Conquer + Optimal substructure: 分治 + 最优子结构
3. 顺推形式：动态递推

### DP 顺推模板

```
function DP():
    dp = [][] # 二维情况
    for i = 0...M
        for j = 0...N
            dp[i][j] = _Function(dp[i'][j'])
    return dp[M][N]
```

### 关键点

动态规划和递归或者分治，没有根本上的区别（关键看有无最优的子结构）
拥有共性：找到重复子问题
差异性：最优子结构、中途可以淘汰次优解

## 高级

### 复杂度来源

1. 状态拥有更多维度（二维、三维、或者更多、甚至需要压缩）
2. 状态方程更加复杂

本质：内功、逻辑思维、数学

## 字符串算法

### 参考链接

- [不可变字符串](https://lemire.me/blog/2017/07/07/are-your-strings-immutable/)
- [Atoi 代码示例]()

```js
// JavaScript
function myAtoi(str) {
  let index = 0;
  let sign = 1;
  let total = 0;
  // 1. Empty String
  if (str.length === 0) return 0;

  // 2. trim
  while (str[index] === " " && index < str.length) {
    index++;
  }

  // 3. get sign
  if (str[index] === "+" || str[index] === "-") {
    sign = str[index] === "+" ? 1 : -1;
    index++;
  }

  // 4. covert
  while (index < str.length) {
    let digit = str[index].codePointAt(0) - "0".codePointAt(0);
    if (digit < 0 || digit > 9) break;
    total = total * 10 + digit;
    index++;
  }

  if (sign * total > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else {
  }

  return Math.max(Math.min(sign * total, 2 ** 31 - 1), -(2 ** 31)
```

### 字符串基础问题

- 转换成小写字母（谷歌在半年内面试中考过）
- 最后一个单词的长度（苹果、谷歌、字节跳动在半年内面试中考过）
- 宝石与石头（亚马逊在半年内面试中考过）
- 字符串中的第一个唯一字符（亚马逊、微软、Facebook 在半年内面试中考过）
- 字符串转换整数 (atoi) （亚马逊、微软、Facebook 在半年内面试中考过）

### 字符串操作问题

- 最长公共前缀（亚马逊、谷歌、Facebook 在半年内面试中考过）
- 反转字符串（亚马逊、谷歌、苹果在半年内面试中考过）
- 反转字符串 II （亚马逊在半年内面试中考过）
- 翻转字符串里的单词（微软、字节跳动、苹果在半年内面试中考过）
- 反转字符串中的单词 III （微软、字节跳动、华为在半年内面试中考过）
- 仅仅反转字母（字节跳动在半年内面试中考过）

### 异位词问题

- 有效的字母异位词（Facebook、亚马逊、谷歌在半年内面试中考过）
- 字母异位词分组（亚马逊在半年内面试中常考）
- 找到字符串中所有字母异位词（Facebook 在半年内面试中常考）

### 回文串问题

- 验证回文串（Facebook 在半年内面试中常考）
- 验证回文字符串 Ⅱ（Facebook 在半年内面试中常考）
- 最长回文子串（亚马逊、字节跳动、华为在半年内面试中常考）

## 高级字符串算法

### 最长子串、子序列问题

1. Longest common sequence (最长子序列)

```js
dp[i][j] = dp[i-1][j-1] + 1 (if s1[i-1]==s2[j-1])
else dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

2. Longest common substring (最长子串)

```js
dp[i][j] = dp[i-1][j-1] + 1 (if s1[i-1]==s2[j-1])
else dp[i][j] = 0
```

3. Edit distance (编辑距离)

- 最长公共子序列（亚马逊、字节跳动、谷歌在半年内面试中考过）
- 编辑距离（亚马逊、字节跳动、谷歌在半年内面试中考过）
- 最长回文子串（亚马逊、华为、字节跳动在半年内面试常考）

### 字符串 +DP 问题

- 正则表达式匹配（Facebook、微软、字节跳动在半年内面试中考过）
- 题解： https://leetcode-cn.com/problems/regular-expression-matching/solution/ji-yu-guan-fang-ti-jie-gen-xiang-xi-de-jiang-jie-b/
- 通配符匹配（Facebook、微软、字节跳动在半年内面试中考过）
- 不同的子序列（MathWorks 在半年内面试中考过）

### 字符串匹配算法

1. 暴力法（brute force）
2. Rabin-Karp 算法
3. KMP 算法



- [Boyer-Moore 算法](https://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html)
- [Sunday 算法](https://blog.csdn.net/u012505432/article/details/52210975)
- 字符串匹配暴力法代码示例

```js
// Javascript
function bf(text, pattern) {
  let n = text.length;
  let m = pattern.length;
  for (let i = 0; i < n - m + 1; i++) {
    let matched = true;
    for (let j = 0; j < m; j++) {
      if (source[i + j] !== pattern[j]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
}

console.log(bf("abcabcabx", "abcabx"));
```

- Rabin-Karp 代码示例

在朴素算法中，我们需要挨个比较所有字符，才知道目标字符串中是否包含子串。那么，是否有别的方法可以用来判断目标字符串是否包含子串呢？

答案是肯定的，确实存在一种更快的方法。为了避免挨个字符对目标字符串和子串进行比较，我们可以尝试一次性判断两者是否相等。因此，我们需要一个好的哈希函数（hash function）。通过哈希函数，我们可以算出子串的哈希值，然后将它和目标字符串中的子串的哈希值进行比较。这个新方法在速度上比暴力法有显著提升。

### Rabin-Karp 算法

Rabin-Karp 算法的思想：

1. 假设子串的长度为 M(pat)，目标字符串的长度为 N(txt)
2. 计算子串的 hash 值 hash_pat
3. 计算目标字符串 txt 中每个长度为 M 的子串的 hash 值 （共需要计算 N-M+1次）
4. 比较 hash 值不同，字符串必然不匹配；如果 hash 值相同，还需要使用朴素算法再次判断

```js
// JavaScript
function rabinKarpSearch(text, pattern) {
  const D = 256;
  const Q = 9997;

  let N = text.length;
  let M = pattern.length;
  let patHash = 0;
  let txtHash = 0;

  for (let i = 0; i < M; i++) {
    patHash = (D * patHash + pattern[i].codePointAt(0)) % Q;
    txtHash = (D * txtHash + text[i].codePointAt(0)) % Q;
  }

  let highestPow = 1; // 256 ** (M - 1);
  for (let i = 0; i < M - 1; i++) {
    highestPow = (highestPow * D) % Q;
  }

  let i, j;
  for (i = 0; i < N - M + 1; i++) {
    if (patHash === txtHash) {
      for (j = 0; j < M; j++) {
        if (pattern[j] !== text[i + j]) break;
      }
      if (j === M) return i;
    }
    if (i < N - M) {
      txtHash = (D * (txtHash - text[i].codePointAt(0) * highestPow) + text[i + M].codePointAt(0)) % Q;
      if (txtHash < 0) {
        txtHash += Q;
      }
    }
  }
  return -1;
}

console.log(rabinKarpSearch("abcabcabx", "abcabx"));
```

- [KMP 字符串匹配算法视频](https://www.bilibili.com/video/av11866460?from=search&seid=17425875345653862171)

KMP 算法 (Knuth-Morris-Pratt) 的思想就是，当子串与目标字符串不匹配时，其实你已经知道前面已经匹配成功那一部分的字符串（包括子串于目标字符串）。以阮一峰的文章为例，当空格与 D 不匹配时，你其实知道前面六个字符是“ABCDAB”。KMP 算法的想法是，设法利用这个已知信息，不要把“搜索位置”移回已经比较过的位置，继续把它向后移，这样就提高了效率。

- [字符串匹配的 KMP 算法](https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)