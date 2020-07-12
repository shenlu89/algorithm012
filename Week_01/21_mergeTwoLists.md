# 合并两个有序链表


解法一：递归

```js
var mergeTwoLists = function(l1, l2) {
   if(!l1) {
       return l2;
   }
   if(!l2) {
       return l1;
   }
   if(l1.val > l2.val) {
       l2.next = mergeTwoLists(l1, l2.next);
       return l2;
   } else {
       l1.next = mergeTwoLists(l1.next, l2);
       return l1;
   }
}
```

解法二：非递归

```js
var mergeTwoLists = function(l1, l2) {
    let sb = new ListNode(0)
    let node = sb
    while(l1 && l2) {
        if(l1.val < l2.val) {
            node.next = l1
            l1 = l1.next
        } else {
            node.next = l2
            l2 = l2.next
        }
        node = node.next
    }
    node.next = l1 ? l1 : l2
    return sb.next
};
```