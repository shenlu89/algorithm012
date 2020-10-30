# Javascript 正则表达式

## 什么是正则表达式

- Regular Expression 使用单个字符串来描述，匹配一系列符合某个句法规则的字符串

- 简单的说就是按照某种规则去匹配符合条件的字符串

通配符

- find ./ -name *.txt

- [正则表达式入门教程](https://deerchao.cn/tutorials/regex/regex.htm)
- [REGEXPER](https://regexper.com/)
- [Regulex](https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24) 

正则表达式的伪代码

```js
let expression = /pattern/flag
```

**flag**

- g: 全局搜索。
- i: 不区分大小写搜索。
- m: 多行搜索。
- s: 允`.`匹配换行符。
- u: 使用unicode码的模式进行匹配。
- y: 执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始。



**详细解读**

`s`特殊字符圆点`.`中包含换行符`\n`。默认情况下的圆点`.`是 匹配除换行符`\n`之外的任何字符，加上`s`修饰符之后,`.`中包含换行符`\n`。

```js
var str="google\nrunoob\ntaobao";
var n1=str.match(/google./);   // 没有使用 s，无法匹配\n
var n2=str.match(/runoob./s);  // 使用 s，匹配\n
```

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 `RegExp` 的 `exec` 和 `test` 方法, 以及 `String` 的 `match`、`matchAll`、`replace`、`search` 和 `split` 方法

