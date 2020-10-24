# 两两交换链表中的节点

方法一：递归

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const sb = head.next;
    head.next = swapPairs(sb.next);
    sb.next = head;
    return sb;
};
```

复杂度分析:
- 时间复杂度：O(n)
- 空间复杂度：O(n)

方法二：迭代

题解: [https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-91/](https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-91/)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let tmp = dummy;
    while (tmp.next && tmp.next.next) {
        let first = tmp.next;
        let second = first.next;
        tmp.next = second;
        first.next = second.next;
        second.next = first
        tmp = first;
    }
    return dummy.next;
};
```

复杂度分析:
- 时间复杂度：O(n)
- 空间复杂度：O(1)