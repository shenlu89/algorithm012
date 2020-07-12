# 两两交换链表中的节点

第四天

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let sb = new ListNode(0);
    sb.next = head;
    let shaobing = sb;
    while(shaobing.next !== null && shaobing.next.next !== null){
        let first = shaobing.next;
        let second = shaobing.next.next;
        shaobing.next = second;
        first.next = second.next;
        second.next = first;
        shaobing = first;
    }
    return sb.next;
};
```