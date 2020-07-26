# 剑指 Offer 06. 从尾到头打印链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
};
```