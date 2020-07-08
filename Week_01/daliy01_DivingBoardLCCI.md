## 每日一题 2020/07/08

### 跳水版

感觉就是排列组合题，结果去重，结果是一个数组，从小到大的顺序排列返回。

```javascript
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if(k === 0) return [];
    if(shorter === longer) return [k*shorter];
    let divingBoardList = [];
    for(let i = k; i >= 0; i--) {
        divingBoardList.push(i*shorter + (k-i)*longer)
    }
    return divingBoardList;
};
```

总结错误经验：

- 没有想到特殊情况，k值是0的时候
- 返回结果是什么格式和排列顺序