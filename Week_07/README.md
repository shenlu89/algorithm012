# 学习笔记

## 本周作业

### 简单

- 爬楼梯（阿里巴巴、腾讯、字节跳动在半年内面试常考）[70_climbStairs.md](https://github.com/shenlu89/algorithm012/blob/master/Week_07/70_climbStairs.md)

### 中等

- 实现 Trie (前缀树) （亚马逊、微软、谷歌在半年内面试中考过）
- 朋友圈（亚马逊、Facebook、字节跳动在半年内面试中考过）
- 岛屿数量（近半年内，亚马逊在面试中考查此题达到 361 次）
- 被围绕的区域（亚马逊、eBay、谷歌在半年内面试中考过）[130_SurroundedRegions.md](https://github.com/shenlu89/algorithm012/blob/master/Week_07/130_SurroundedRegions.md)
- 有效的数独（亚马逊、苹果、微软在半年内面试中考过）
- 括号生成（亚马逊、Facebook、字节跳动在半年内面试中考过）[22_GenerateParentheses.md](https://github.com/shenlu89/algorithm012/blob/master/Week_07/22_GenerateParentheses.md)
- 单词接龙（亚马逊、Facebook、谷歌在半年内面试中考过）
- 最小基因变化（谷歌、Twitter、腾讯在半年内面试中考过）

### 困难

- 单词搜索 II （亚马逊、微软、苹果在半年内面试中考过）
- N 皇后（亚马逊、苹果、字节跳动在半年内面试中考过）
- 解数独（亚马逊、华为、微软在半年内面试中考过）

### 下周预习题目

- LRU 缓存机制
- 有效的字母异位词

## 课程内容总结

1. 字典树的数据结构
2. 字典树的核心思想
3. 字典树的基本性质

### 字典树(Tire)

**基本结构**

字典树，即 Trie 树，又称单词查找树或键树，是一种树形结构。典型应用是用于统计和排
序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。

它的优点是：最大限度地减少无谓的字符串比较，查询效率比哈希表高。

**基本性质**

1. 结点本身不存完整单词；
2. 从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的
字符串；
3. 每个结点的所有子结点路径代表的字符都不相同。

**核心思想**

Trie 树的核心思想是空间换时间。

利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

```js
// JavaScript
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = "$";
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return node[this.endOfWord] === this.endOfWord;
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}


let trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple")); // 返回 true
console.log(trie.search("app")); // 返回 false
console.log(trie.startsWith("app")); // 返回 true
console.log(trie.insert("app"));
console.log(trie.search("app")); // 返回 true
```

### 并查集（Disjoint Set）

**适用场景**

1. 组团、配对问题
2. Group or not ?

**基本操作**

1. makeSet(s)：建立一个新的并查集，其中包含 s 个单元素集合。
2. unionSet(x, y)：把元素 x 和元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并。
3. find(x)：找到元素 x 所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下就可以了


### 高级搜索

- 剪枝
- 双向 BFS
- 启发式搜索（A*）


### 回溯法

回溯法采用试错的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案。

回溯法通常用最简单的递归方法来实现，在反复重复上述的步骤后可能出现两种情况：

- 找到一个可能存在的正确的答案
- 在尝试了所有可能的分步方法后宣告该问题没有答案

在最坏的情况下，回溯法会导致一次复杂度为指数时间的计算。


### 双向 BFS

### 启发式搜索 Heuristic Search (A*)


```js
// Javascript
function aStarSearch(graph, start, end) {
  // graph 使用二维数组来存储数据
  let collection = new SortedArray([start], (p1, p2) => distance(p1) - distance(p2));

  while (collection.length) {
    let [x, y] = collection.take();
    if (x === end[0] && y === end[1]) {
      return true;
    }

    insert([x - 1, y]);
    insert([x + 1, y]);
    insert([x, y - 1]);
    insert([x, y + 1]);
  }
  return false;

  function distance([x, y]) {
    return (x - end[0]) ** 2 - (y - end[1]) ** 2;
  }

  function insert([x, y]) {
    if (graph[x][y] !== 0) return;
    if (x < 0 || y < 0 || x >= graph[0].length || y > graph.length) {
      return;
    }
    graph[x][y] = 2;
    collection.insert([x, y]);
  }
}


class SortedArray {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }

  // 每次取最小值
  take() {
    let min = this.data[0];

    let minIndex = 0;
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i];
        minIndex = i;
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.push();

    return min;
  }

  insert(value) {
    this.data.push(value);
  }

  get length() {
    return this.data.length;
  }
}
```

**估价函数**

启发式函数： h(n)，它用来评价哪些结点最有希望的是一个我们要找的结点，h(n) 会返回一个非负实数,也可以认为是从结点n的目标结点路径的估计成本。

启发式函数是一种告知搜索方向的方法。它提供了一种明智的方法来猜测哪个邻居结点会导向一个目标。


### 高级树、AVL 树和红黑树

- 树（Tree）
- 二叉树（Binary Tree）
- 二叉树遍历（Pre-order/In-order/Post-order）
	- 1. 前序(Pre-order)：根-左-右
	- 2. 中序(In-order)：左-根-右
	- 3. 后序(Post-order)：左-右-根
- 二叉搜索树（Binary Search Tree）

二叉搜索树，也称二叉搜索树、有序二叉树（Ordered Binary Tree）、排序二叉树（Sorted Binary Tree），是指一棵空树或者具有下列性质的二叉树：

1. 左子树上所有结点的值均小于它的根结点的值；
2. 右子树上所有结点的值均大于它的根结点的值；
3. 以此类推：左、右子树也分别为二叉查找树。 （这就是 重复性！）

中序遍历：升序排列

**保证性能的关键**

二维维度！ —> 左右子树结点平衡（recursively）
2. Balanced
3. https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree

**AVL 树**

1. 发明者 G. M. Adelson-Velsky和 Evgenii Landis
2. Balance Factor（平衡因子）：
是它的左子树的高度减去它的右子树的高度（有时相反）。
balance factor = {-1, 0, 1}
3. 通过旋转操作来进行平衡（四种）
4. https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree

**旋转操作**

1. 左旋
2. 右旋
3. 左右旋
4. 右左旋

- 参考动画： [https://zhuanlan.zhihu.com/p/63272157](https://zhuanlan.zhihu.com/p/63272157)
- Tree_rotation: [https://en.wikipedia.org/wiki/Tree_rotation#/media/File:Tree_Rebalancing.gif](https://en.wikipedia.org/wiki/Tree_rotation#/media/File:Tree_Rebalancing.gif)

**AVL 总结**

1. 平衡二叉搜索树
2. 每个结点存 balance factor = {-1, 0, 1}
3. 四种旋转操作

AVL 总结

不足：结点需要存储额外信息、且调整次数频繁

### 红黑树 Red-black Tree

红黑树是一种近似平衡的二叉搜索树（Binary Search Tree），它能够确保任何一个结点的左右子树的高度差小于两倍。具体来说，红黑树是满足如下条件的二叉搜索树：

- 每个结点要么是红色，要么是黑色
- 根结点是黑色
- 每个叶结点（NIL结点，空结点）是黑色的。
- 不能有相邻接的两个红色结点
- 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。

**关键性质**

从根到叶子的最长的可能路径不多于最短的可能路径的两倍长。

**对比**

AVL trees providefaster lookups than Red Black Trees because they are more strictly
balanced.

- Red Black Trees providefaster insertion and removal operations than AVL trees as
fewer rotations are done due to relatively relaxed balancing.
- AVL trees storebalance factors or heightswith each node, thus requires storage for
an integer per node whereas Red Black Tree requires only 1 bit of information per
node.
- Red Black Trees are used in most of the language libraries
likemap, multimap, multisetin C++whereas AVL trees are used indatabaseswhere
faster retrievals are required.

