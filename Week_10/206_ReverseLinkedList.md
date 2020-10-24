# 206. 反转链表


解法一：迭代

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
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
    	let tmp = curr.next;
    	curr.next = prev;
    	prev = curr;
    	curr = tmp;
    }
    return prev;
};
```

简化一下

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
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
    	[curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};
```

方法二：自递归

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
var reverseList = function(head) {
    // 如果测试用例只有一个节点 或者 递归到了尾节点，返回当前节点 
    if(!head || !head.next) return head;
    // 存储当前节点的下一个节点
    let next = head.next;
    let reverseHead = reverseList(next);
    // 断开 head ，如图闪电⚡️标记处
    head.next = null;
    // 反转，后一个节点连接当前节点
    next.next = head;
    return reverseHead;
};
```

方法三：尾递归

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
var reverseList = function(head) {
    let [prev, curr] = [null, head];
    while(curr) {
    	[curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
};
```