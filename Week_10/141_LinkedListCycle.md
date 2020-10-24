# 环形链表

方法一:节点标记法

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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false;
    }
    while(head) {
        if (head.flag) {
            return true;
        }
        head.flag = true;
        head = head.next;
    }
    return false;
};
```

方法二：快慢指针法

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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    let [slow, fast] = [head, head.next];
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        [slow, fast] = [slow.next, fast.next.next];
    }
    return true;
};
```

- `!head || !head.next`也可以改成`!(head && head.next)`