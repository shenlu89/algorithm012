## 2-1 面试之前需要准备你什么

- 先不急于学知识
- 先了解一下什么是面试
- 面试之前需要准备什么

### 本章主要内容

- 面试的环节和流程
- JD分析
- 如何写简历
- 准备工作和注意事项

## 2-2 投递简历的几种方式

### 面试的环节和流程

- 什么是面试
- 如何拿到简历
- 面试流程

### 什么是面试

- 经过组织者精心设计
- 以交谈和观察为主要手段
- 评价知识，能力和经验，综合素质

### 如何拿到简历

- 员工内推
- 猎头推荐
- hr收集（主动搜索，接收邮件）

>员工内推后，就不要投简历了，避免发生冲突

## 2-3 面试的主要环节

### 面试流程

这里指的是部门比较齐全，技术岗位比较齐全的公司

- 约面：电话HR打电话，确定面试时间
- 一面：基础知识，比较深，比较广，不需要都会。面试官一般是比较靠谱的基层工程师
- 二面 （交叉面试）：基础知识开始，到框架原理，到计算机原理，到设计和业务场景的考察，也就是项目经验。面试官一般是资深工程师
- 三面：面试官是项目leader，介绍组内角色定位，来了负责哪个产品，你对这个产品有什么样的想法，来了之后你怎么样把这个产品做的更好。怎么帮助周围的人提升，你未来的技术规划是什么样的。
- HR 面试：HR有一票否决权，如实回答，薪资也是实在，踏实谦卑的心态去谈

### 校招和社招的区别

- 校招看中基础知识和能力，主要在一面
- 社招看中经验，主要在二面（基础知识要过关）
- 社招，工作时间越长，越偏重经验

## 2-4 JD分析-知己知彼（上）

- JD 是什么
- JD 分析的思路
- 案例

### JD 是什么

- JD 是用人单位发布的招聘信息
- 职位描述
- 岗位要求

### 从JD 中能看到什么

- 工作内容
- 技术栈
- 经验要求

### 不要过于在意 JD

- JD 是 hr 发布的
- hr 和技术人员可能沟通不及时
- 不能完全相信 JD 的要求

## 2-8 面试前的准备工作和注意事项

### 面试前的准备工作

- 看JD，是否需要临时准备一下（约你肯等符合要求，不要答错就行）
- 打印纸质简历，带着纸和笔
- 最好带着自己的电脑，现场可能手写代码
- 要有时间观念，如果迟到或者推迟要提前说
- 衣着适当，不用正装，也不要太随意
- 为何离职？——— 不要吐槽前东家，说自己的原因 （找一个更好的平台去发展）

### 面试前的注意事项

- 能加班吗？ ——— 能！除非你特别自信，能找到其他机会
- 不要挑战面试官，即便他错了
- 遇到不会的问题，要表现出自己积极的一面（能不能给个提示。这个问题我不会，能不能告诉我哪里能查到这个答案）

### 其他情况

- [双越 Web前端工程师](https://www.imooc.com/t/4427201#Article)

## 3-1 html、css面试介绍

### HTML CSS 面试题

- HTML 面试题
- CSS 面试题

#### HTML 面试题

1. 如何理解 HTML 语义化
2. 默认情况下，哪些 HTML 标签是块级元素、哪些是内联元素？

#### CSS 面试题

- 分析知识模块
  - 布局
  - 定位
  - 图文样式
  - 响应式
  - CSS3

面试题目：

1. 盒子模型的宽度如何计算？
2. margin 纵向重叠的问题
3. margin 负值的问题

CSS - 布局（2）

1. BFC 理解和应用
2. float布局的问题，以及clearfix
3. flex 画色子

CSS - 定位

1. absolute 和 relative 分别依据什么定位？
2. 居中对齐有哪些实现方式？

CSS - 图文样式

1. line-height的继承问题

CSS - 响应式

- rem 是什么？
- 如何实现响应式？

CSS - CSS3

- 关于动画

## 3-2 html面试题

### HTML 面试题

#### 如何理解HTML语义化

- 让人更容易读懂(增加代码可读性)
- 让搜索引擎更容易读懂(SEO）

#### 块级元素 & 内联元素

- display: block/table; 有 div, h1-h6, table, ul ol p等
- display: inline/inline; 有span img input button 等

块级元素：独占一行
内联元素：不会独占一行，从左网游依次排列，直到排满整个一行为止再换行

## 3-3 布局-题目

#### 盒子模型的宽度如何计算？

## 8-11 async-await是语法糖，异步的本质还是回调函数

### 异步的本质

- async/await是消灭异步回调的终极武器
- JS还是单线程，还得是有异步，还得是基于`event loop`
- async/await只是一个语法糖，但这颗糖很香！

```js
async function async1 () {
    console.log('async1 start') // 2 重要
    await async2()
    // await 的后面，都可以看做 callback 里的内容，即异步
    // 类似， event loop, setTimeout(function() { console.log('async1 end') })
    // Promise.resovle().then(() => { console.log('async1 end') })
    console.log('async1 end') // 5
}

async function async2 () {
    console.log('async2') // 3
}

console.log('script start') // 1
async1()
console.log('script end') // 4
// 同步代码已经执行完 (event loop)
```

下一个例子

```js
async function async1 () {
    console.log('async1 start') // 2 重要
    await async2()
    // 下面三行都是异步回调 callback 的内容
    console.log('async1 start') // 5
    await async3()
    console.log('async1 end 2') // 7
}

async function async2 () {
    console.log('async2') // 3
}

async function async3 () {
    console.log('async3') // 6
}

console.log('script start') // 1
async1()
console.log('script end') // 4
// 同步代码执行完
```
## 8-12 for-of的应用场景

### for ... of

- for ... in (以及forEach for)是常规的同步遍历
- for ... of 常用于异步的遍历

代码演示

```js
function muti(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

const nums = [1, 2, 3]

nums.forEach(async (i) => {
    const res = await muti(i)
    console.log(res)
})
// 一秒钟后，一次性输出1, 4, 9

!(async function() {
    for (let i of nums) {
    const res = await muti(i)
    console.log(res)
    }
})()
// 每隔一秒输出, 1, 4, 9

!(async function() {
    for (let i in nums) {
    const res = await muti(i)
    console.log(res)
    }
})()
// 每隔一秒输出, 0, 1, 4
```

### async/await 总结

- async/await 解决了callback hell
- async/await 和 Promise 的关系，重要！
- for...of的使用

## 8-13 什么是宏任务和微任务

### 宏任务macroTask和微任务microTask

- 什么是宏任务，什么是微任务
- event loop 和 DOM渲染
- 微任务和宏任务的区别

```js
console.log(100) // 1
// 宏任务
setTimeout(() => {
    console.log(200) // 4
})
// 微任务
Promise.resolve().then(() => {
    console.log(300) // 3
})
console.log(400) // 2
```

### 宏任务和微任务

- 宏任务： setTimeout, setInterval, Ajax， DOM事件
- 微任务： Promise async/await
- 微任务执行时机比宏任务要早 (先记住)

## 8-14 event-loop和DOM渲染的关系

### event loop 和 DOM 渲染

- 再次回归一遍 event loop 的过程
- JS 是单线程的, 而且和DOM渲染共用一个线程
- JS 执行的时候，得留一些时机供 DOM 渲染

```js
const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('container').append($p1)
            .append($p2)
            .append($p3)
console.log('length', $('#container').children().length)
```

### 回顾 event loop 过程 （增加 DOM 渲染时机）

再看一遍示例

```js
console.log('Hi')

setTimeout(function cb1() {
    console.log('cb1') // cb 即 callback
}, 5000)

console.log('Bye')
```

event loop 图解

- Browser console
- Call Stack
- Web APIs
- Callback Queue
- Event Loop

1. Call Stack空闲
2. 尝试 DOM 渲染
3. 触发Event Loop

## 8-15 为什么微任务比宏任务执行更早

```js
const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('container').append($p1)
            .append($p2)
            .append($p3)
console.log('length', $('#container').children().length)
alert('本次 call stack结束， DOM 结构已更新，但尚未触发渲染')
// (alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果)
```

### 微任务和宏任务的区别

- 宏任务：DOM渲染后触发，如setTimeout
- 微任务：DOM渲染前触发，如Promise
- 先演示现象，稍后再追究原理

```js
const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('container').append($p1)
            .append($p2)
            .append($p3)

// 微任务：DOM渲染前触发
Promise.resolve().then(() => {
    console.log('length1'， $('container').children().length) // 3
    alert('Promise then') // DOM渲染了吗？ ——— No
})

// 宏任务：DOM渲染后触发
setTimeout(() => {
    console.log('length2', $('#container').children().length) // 3
    alert('setTimeout') // DOM渲染了吗？ ———— Yes
})
```

## 8-16 微任务和宏任务的根本区别

### 从event loop解释，为何微任务执行更早

为什么？

- 微任务会放到micro task quene中，不会放进Web APIs里
- 因为Promise是ES6规范，不是W3C规范

因为

- 微任务是ES6语法规定的
- 宏任务是浏览器规定的

整个过程应该是：
1. Call Stack 清空
2. 执行当前的微任务
3. 尝试 DOM 渲染
4. 触发Event Loop
5. 执行宏任务

### 微任务和宏任务 - 总结

- 宏任务有哪些？微任务有哪些？微任务触发时机更早
- 微任务，宏任务和DOM渲染的关系
- 微任务，宏任务和DOM渲染，在event loop的过程

## 8-17 解答JS异步的面试题

- 描述 event loop机制（可画图）
- 和DOM渲染的关系
- 微任务和宏任务在event loop过程中的不同

1. 什么是宏任务和微任务，两者区别

- 宏任务： setTimeout, setInterval, Ajax, DOM事件
- 微任务： Promise, async/await
- 微任务执行时机比宏任务早

2. Promise 的三种状态，如何变化

- pending resolved rejected
- pending -> resolved 或 pending -> rejected
- 变化不可逆
- resolved会触发then回调，rejected会触发catch回调

3. 场景题 - promise then 和 catch 的连接

```js
// 第一题
Promise.resolve().then(() => {
    console.log(1) // 1
}).catch(() => {
    console.log(2)
}).then(() => {
    console.log(3) // 3
})

// 第二题
Promise.resolve().then(() => {
    console.log(1) // 1
    throw new Error('error1')
}).catch(() => {
    console.log(2) // 2
}).then(() => {
    console.log(3) // 3
})

// 第三题
Promise.resolve().then(() => {
    console.log(1) // 1
    throw new Error('error1')
}).catch(() => {
    console.log(2) // 2
}).catch(() => { // 这里是 catch
    console.log(3)
})
```

4. 场景题 - async/await 语法

```js
async function fn() {
    return 100
}
(async function () {
    const a = fn() // Promise.resolved(100)
    const b = await fn() // 100
})
```

```js
(async function () {
    console.log('start')
    const a = await 100 // 相当于将100直接返回
    console.log('a', a) // 100
    const b = await Promise.resolve(200)
    console.log('b', b) // 200
    const c = await Promise.reject(300) // await 相当于 then 是获取不到 rejected状态的，需要用 try...catch
    console.log('c', c) // Promise {<rejected>: 300}
    console.log('end')
})() // 执行完毕，打印出那些内容
```

- async 相当于 Promise, await 相当于 then

5. 场景题 - promise 和 setTimeout 的顺序

```js
console.log(100) // 1
setTimeout(() => {
    console.log(200) // 4
})
Promise.resolve().then(() => {
    console.log(300) // 3
})
console.log(400) // 2
```

6. 场景题：各类异步执行顺序问题


```js
async function async1 () {
  console.log('async1 start', 2) // 2
  await async2()
  console.log('async1 end', 6) // 6
}

async function async2 () {
  console.log('async2', 3) // 3
}

console.log('script start', 1) // 1

setTimeout(function () { // 宏任务 setTimeout
  console.log('setTimeout', 8) // 8
}, 0)

async1()

// 初始化 promise 时，传入的函数会立刻被执行
new Promise (function (resolve) {
  console.log('promise1', 4) // 4
  resolve()
}).then (function () { // 微任务
  console.log('promise2', 7) // 7
})

console.log('script end', 5) // 5

// 前5步执行完之后，event loop - call stack 已被清空
// 执行微任务
// （尝试触发 DOM 渲染）
// 触发 event loop, 执行宏任务
```

对题目稍加修改后，结果是

```js
async function async1 () {
  console.log('async1 start', 2) // 2
  await async2()
  console.log('async1 end', 4) // 4
}

async function async2 () {
  console.log('async2', 3) // 3
}

console.log('script start', 1) // 1

setTimeout(function () {
  console.log('setTimeout', 8) // 8
}, 0)

await async1()

new Promise (function (resolve) {
  console.log('promise1', 5) // 5
  resolve()
}).then (function () {
  console.log('promise2', 7) // 7
})

console.log('script end', 6) // 6
```

## 8-18 本章考点总结

### JS异步进阶 - 总结

- event loop
- promise 进阶
- async/await
- 微任务/宏任务

#### event loop 过程1

- 同步代码，一行一行放在Call Stack执行
- 遇到异步，会先“记录”下，等待时机（定时，网络请求等）
- 时机到了，就移动到Callback Queue

#### event loop 过程2

- 如Call Stack为空(即同步代码执行完) Event loop开始工作
- 轮询查找Callback Queue，如有则移动到Call Stack执行
- 然后继续下一轮查询（永动机一样）

DOM事件和event loop

- JS是单线程的
- 异步(setTimeout, ajax等)使用回调，基于event loop
- DOM事件也是使用回调，基于event loop

#### Promise 进阶

- 三种状态，状态的表现和变化
- then和catch对状态的影响（重要）
- then和catch的链式调用（常考）

#### async/await

- async/await解决了异步回调，是一个很香的语法糖
- async/await和Promise的关系，重要！
- for...of的使用

### 微任务和宏任务

- 宏任务有哪些？微任务有哪些？微任务触发时机更早
- 微任务、宏任务和 DOM 渲染的关系
- 微任务、宏任务和 DOM 渲染，在event loop的过程

## 9-1 从JS基础到JS-Web-API

- JS基础知识，规定语法 (ECMA 262标准)
- JS Web API，网页操作的API（W3C 标准）
- 前者是后者的基础，两者结合才能真正实际应用

### JS 基础知识

- 变量的类型和计算
- 原型和原型链
- 作用域和闭包

### JS Web API

- DOM
- BOM
- 事件绑定
- ajax
- 存储

## 9-2 DOM的本质是什么

### 前言

- vue和react框架应用广泛，封装了 DOM 操作
- 但 DOM 操作一直都会是前端工程是的基础，必备知识
- 只会vue而不懂DOM操作的前端程序员，不会长久

### DOM操作（Document Object Model）

#### 题目

- DOM是哪种数据结构
- DOM操作的常用API
- attr和property的区别
- 一次性插入多个DOM节点，考虑性能

#### 知识点

- DOM的本质是什么
- DOM节点的操作
- DOM结构操作
- DOM性能

1. DOM的本质

- DOM 的本质是一棵树
- HTML是XML的一种扩展

## 9-3 DOM节点操作

#### DOM 节点操作

- 获取DOM节点
- attribute
- property

#### 获取 DOM 节点

```js
const div1 = document.getElementById('div1') // 元素
const divList = document.getElementsByTagName('div') // 集合
console.log(divList.length)
console.log(divList[0])

const constainerList = document.getElementByClassName('.container') // 集合
const PList = document.querySelectorAll('p') // 集合
```

>返回的结果是一个类数组队形(NodeList)，不是Array。

#### DOM节点的property

```js
const pList = document.querySelectorAll('p')
const p = pList[0]
console.log(p.style.width) // 获取样式

// property 形式
p.style.width = '100px' // 修改样式
console.log(p.className) // 获取 class
p.className = 'p1' // 修改 class

// 获取 nodeName 和 nodeType
console.log(p.nodeName) // DOM节点名
console.log(p.nodeType) // DOM节点类型

// DOM 节点的attribute
const pList = document.querySelectorAll('p')
const p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'imooc')
p.getAttribute('style')
p.setAttribute('style', 'font-size:30px')
```

#### property 和 attribute

- property: 修改对象属性，不会体现到html节点结构中（平常尽量使用property）
- attribute: 修改html属性，会改变html节点结构
- 两者都有可能引起 DOM 重新渲染

## 9-4 DOM结构操作

### DOM结构操作

#### 新增/插入节点

```js
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')

// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is p1'
// 插入节点
div1.appendChild(p1) // 添加新创建的元素

// 移动节点
const p1 = document.getElementById('p1')
div1.appendChild(p1)
```

#### 获取子元素列表 & 获取父元素

```js
// 获取子元素列表
const div1 = document.getElementById('div1')
const child = div1.childNodes // 标签元素+文本元素
const div1ChildNodesP = Array.prototype.slice.call(div.childNodes).filter(child => {
    return child.nodeType === 1
})

// 获取父元素
const div1 = document.getElementById('div1')
const parent = div1.parentNode
```

#### 删除节点

```js
const div1 = document.getElementById('div1')
const child = div1.childNodes
div1.removeChild(child[0])
```

## 9-5 如何优化 DOM 操作的性能

### DOM 性能

- DOM 操作非常“昂贵”，避免频繁的 DOM 操作
- 对 DOM 查询做缓存
- 将频繁操作改为一次性操作

#### DOM 查询做缓存

```js
// 不做缓存 DOM 查询结果

for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
    // 每次循环都会计算 length, 频繁进行 DOM 查询
}

// 缓存 DOM 查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for (let i = 0; i < length; i++) {
    // 缓存 length, 只进行一次 DOM 查询
}
```

#### 将频繁操作改为一次性操作

```js
const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
    const li = document.createElement("li")
    li.innerHTML = `list item ${x}`
    frag.appendChild(li)
}

// 都完成之后，再插入到 DOM 树中
listNode.appendChild(frag)
```

## 9-6 DOM 操作相关的面试题

1. DOM 是哪种数据结构

- 树 (DOM 树)

2. DOM 操作常用 API

- DOM 节点操作
- DOM 结构操作
- attribute和property

3. property 和 attribute 的区别

- property: 修改对象属性，不会体现到html节点结构中（平常尽量使用property）
- attribute: 修改html属性，会改变html节点结构
- 两者都有可能引起 DOM 重新渲染

4. 一次性插入节点，考虑性能

```js
const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
    const li = document.createElement("li")
    li.innerHTML = `list item ${x}`
    frag.appendChild(li)
}

// 都完成之后，再插入到 DOM 树中
listNode.appendChild(frag)
```

#### 小结

- DOM 本质
- DOM 节点操作
- DOM 结构操作
- DOM 性能

## 10-1 BOM 操作相关的面试题

### BOM 操作 (Browser Object Model)

题目

- 如何识别浏览器的类型
- 分析拆解url各个部分

知识点

- navigator
- screen
- location
- history

#### navigator 和 screen

```js
// navigator
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)
```

#### location 和 history

```js
// location
console.log(location.href)
console.log(location.protocal) // 'http:' 'https:'
console.log(location.pathname) // 'learn/199'
console.log(location.search)
console.log(location.hash)

// history
history.back()
history.forward()
```

## 11-1 事件绑定和事件冒泡

### 事件

题目

- 编写一个通用的事件监听函数
- 描述事件冒泡的流程
- 无限下拉图片列表，如何监听每个图片的点击

知识点

- 事件绑定
- 事件冒泡
- 事件代理

#### 事件绑定

```js
const btn = document.getElementById('btn1')
btn.addEventListener('click', event => {
    console.log('clicked')
})

// 通用的绑定函数
function bindEvent(ele, type, fn) {
    elem.addEventListener(type, fn)
}

const a = document.getElementById('link1')
bindEvent(a, 'click', e =>{
    // console.log(event.target) // 获取触发的元素
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})
```

#### 事件冒泡

```html
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>
```

```js
// 普通绑定
const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', e => {
    e.stopPropagation() // 阻止事件冒泡
    alert('激活')
})
bindEvent(body, 'click', e => {
    alert('取消')
})
```

## 11-2 什么是事件代理（面试必考）

### 事件代理

```html
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <p href="#">a3</p>
    <p href="#">a4</p>
</div>
<button>
    点击增加一个a标签
</button>
```

```js
const div1 = document.getElementById('div1')
div1.addEventListener('click', e => {
    e.preventDefault() // 阻止跳转到 /#
    const target = e.target
    if (e.nodeName === 'A') {
        alert(target.innerHTML)
    }
})
```

#### 事件代理

- 代码简洁
- 减少浏览器内存占用
- 但是，不要滥用

通用事件绑定

```js
function bindEvent(elem, type, selector, fn) {
    if(fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function(event) {
    event.preventDefault() // 阻止默认行为
    alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function(event) => {
    event.preventDefault()
    alert(this.innerHTML)
})
```

[ES6 - 箭头函数、箭头函数与普通函数的区别](https://juejin.im/post/6844903805960585224#heading-5)

#### 问题解答

1. 编写一个通用的事件监听函数

```js
function bindEvent (elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        if (selector) {
            // 需要代理
            const target = event.target
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        }
        // 不需要代理
        fn.call(target, event)
    })
}
```

2. 描述事件冒泡的流程

- 基于 DOM 树形结构
- 事件会顺着触发元素往上冒泡
- 应用场景：事件代理

1. 无限下拉图片列表，如何监听每个图片的点击

- 事件代理
- 用 e.target 获取触发元素
- 用 matches 判断是否是触发元素

## 12-1 ajax 的核心API - XMLHttpRequest

### ajax

题目

- 手写一个简易的ajax
- 跨域的常用实现方式

知识点

- XMLHttpRequest
- 状态码
- 跨域：同源策略，跨域解决方案

#### XMLHttpRequest

```js
// get 请求
const xhr = new XMLHttpRequest()
xhr.open("GET", "/api", false)
xhr.onreadystatechange = function() {
    // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
    if (xhr.readyState === 4) {
        if (xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
            alert(xhr.responseText)
        }
    }
}
xhr.send(null)

// post 请求
const xhr = new XMLHttpRequest()
xhr.open("POST", "/LOGIN", true) // true是异步请求
xhr.onreadystatechange = function() {
    // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
    if (xhr.readyState === 4) {
        if (xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
            alert(xhr.responseText)
        }
    }
}
const postData = {
    userName: 'zhangsan',
    password: 'xxx'
}
xhr.send(postData)
```

#### xhr.readyState

- 0: (未初始化) 还没调用send() 方法
- 1: (载入) 已调用send()方法，正发送请求
- 2: (载入完成) send()方法执行完成，已接收到全部响应内容
- 3: (交互) 正在解析响应内容
- 4: (完成) 响应内容解析完成，可以在客户端调用

#### xhr.status

- 2xx: 表示成功处理请求，如200
- 3xx: 需要重定向，浏览器直接跳转，如 301 302 304
- 4xx: 客户端请求错误， 如404 403
- 5xx: 服务器端错误

## 12-2 什么是浏览器的同源策略

### 跨域

- 什么是跨域（同源策略）
- JSONP
- CORS（服务端支持）

#### 同源策略

- ajaxx请求，浏览器要求当前网页和server端必须同源（安全）
- 同源：协议，域名，端口，三者必须一致

#### 加载图片 css js 可无视同源策略

- <img src=跨域的图片地址/>
- <link href=跨域的css地址/>
- <script src=跨域的js地址></script>

应用

- <img/> 可用于统计打点，可使用第三方统计服务
- <link/> <script>可使用CDN, CDN一般都是外域
- <script> 可实现 JSONP

#### 跨域

- 所有的跨域，都必须经过server端允许和配合
- 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

## 12-3 实现跨域的常见方式 - jsonp 和 CORS

#### JSONP

- 访问`https://imooc.com`，服务端一定返回一个html文件吗？
- 服务器可以任意动态拼接数据返回，只要符合html格式要求
- 同理于<script src="https://imooc.com/getData.js">
- <script> 可绕过跨域限制
- 服务器可以任意动态拼接数据返回
- 所以，<script> 就可以获得跨域的数据，只要服务器端愿意返回

```html
<script>
window.callback = function (data) {
    // 这是我们跨域得到信息
    console.log(data)
}
</script>
<script src="https://imooc.com/getData.js"></script>
<!-- 将返回 callback({x: 100, y: 200}) -->
```

jQuery实现jsonp

```js
$.ajax({
    url: 'http://localhost:8882/x-origin.json',
    dataType: 'jsonp',
    jsonCallback: 'callback',
    success: function (data) {
        console.log(data)
    }
})
```

#### CORS - 服务器设置http header

```js
// 第二个参数填写允许跨域的域名称，不建议直接写"*"
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", true);
```

### 题目

1. 手写一个简易的ajax

```js
function ajax(url, successFn) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successFn(xhr.responseText)
            }
        }
    }
    xhr.send(null)
}
```

promise写法

```js
function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "/data/test.json", true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404) {
                    reject(
                        new Error("404 not found")
                    )
                }
            }
        }
        xhr.send(null)
    })
    return p
}

const url = '/data/test.json'
ajax(url).then(res => console.log(res)).catch(err => console.log(err))
```

## 12-5 ajax 本章相关的面试题 - part2

### 跨域的实现方式

- JSONP
- CORS

### 知识点

- XMLHttpRequest
- 状态码：readyState status
- 跨域：同源策略（如何绕过）,JSONP,CORS

## 12-6 实际项目中 ajax 的常用插件

- ajax
- fetch 
  - 更简洁，但缺乏兼容
  - fetch返回的Promise不会标记为reject，即使该HTTP响应的状态码是404或500。它会将Promise标记为resolve(但是会将resolve的返回值的ok属性设置为false),仅当网络故障时或请求被阻止时，才会标记为reject
  - 默认情况下，fetch不会从服务发送和接收任何cookies，如果站点依赖用户session，则会导致未经认证的请求（要发送cookies，必须设置credentials选项）。
- axios
  - 支持浏览器和node.js
  - 对 XMLHttpRequest 的一个封装
  
## 13-1 如何理解 cookie

题目

- 描述 cookie localStorage sessionStorage 区别

知识点

## 13-1 如何理解 cookie

### cookie

- 本身用于浏览器和server通讯
- 被“借用”到本地存储来（不是为了做本地存储，而是为了前后端通讯，在H5出现之前）
- 可以document.cookie = '..' 来修改

### cookie的缺点

- 存储大小，最大4KB (因为发送请求的时候带上cookie，早期网速很慢，cookie太大会影响请求发送和接收的速度)
- http请求时需要发送到服务器，增加请求数据量
- 只能用document.cookite = '..'来修改，太过简陋

## 13-2 localStorage SessionStorage 和 cookie 的区别

### localStorage和sessionStorage

- HTML5 专门为存储而设计，最大可存5M
- API 简洁易用 setItem getItem
- 不会随 http 请求发送出去

区别

- localStorage数据会永久存储，除非代码或手动删除
- sessionStorage数据只存储在当前会话，浏览器关闭则清空
- 一般用localStorage会更多一些

#### 问题解答

1. 描述 cookie localStorage sessionStorage 区别

- 容量
- API易用性
- 是否跟随http请求发送出去

## 14-1 http的几个面试题 （必面）

### http 面试题

- 前端工程师开发界面
- 需要动用后端接口，提交/获取 数据 ———— http协议
- 要求事先掌握好ajax

### 看几个题目

- http常见的状态码有哪些？
- http常见的header有哪些？
- 什么是Restful API
- 描述一下http缓存机制（重要）

## http常见的状态码有哪些-part1

### http状态码

- 状态码分类
- 常见状态码
- 关于协议和规范

#### 状态码分类

- 1xx: 服务器收到请求
- 2xx: 请求成功，如200
- 3xx: 重定向(服务器告诉浏览器，你到我这儿来不行，我告诉你另外一个地址，你去别的地放去)，浏览器直接跳转，如 301 302 304
- 4xx: 客户端请求错误， 如404 403
- 5xx: 服务器端错误，如 500

- 200 成功
- 301 永久重定向 （配合location, 浏览器会记住，之后自动处理）
- 302 临时重定向 （配合location, 浏览器不会记住，每次都会重新验证，之后自动处理）
  
## 14-3 http常见的状态码有哪些-part2

- 304 资源未被修改 （本地缓存还有效，没有过期，可以继续使用，不需要再从服务器获取）
- 404 资源未找到
- 403 没有权限
- 500 服务器错误
- 504 网关超时

### 关于协议和规范

- 就是一个约定
- 要求大家都跟着执行
- 不要违反规范，例如IE浏览器

## 14-4 什么是Restful-API

### http methods

- 传统的methods
- 现在的methods
- Restful API

#### 传统的methods什么意思

- get 获取服务器数据
- post 向服务器提交数据
- 简单的网页功能，就这两个操作

#### 现在的methods

- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据
  
## 14-4 什么是Restful-API

### Restful API

- 一种新的API设计方法（早已推广使用）
- 传统API设计：把每个url当做一个功能
- Restful API设计：把每个url当做一个唯一的资源

#### 如何设计出一个资源

- 尽量不用url参数
- 用method表示操作类型

#### 不使用url参数

- 传统API设计：/api/list?pageIndex=2
- Restful API 设计：/api/list/2

#### method表示操作类型（传统API设计）

- post请求：/api/create-blog
- post请求：/api/update-blog?id=100
- get请求： /api/get-blog?id=100

#### 用method表示操作类型（Restful API设计）

- post请求 /api/blog
- patch请求 /api/blog/100
- get请求 /api/blog/100

## 14-5 http哪些常见header

### http header

- 常见的Request Headers
- 常见的Response Headers
- 演示

#### Request Headers

- Accept 浏览器可接收的数据格式
- Accept-Encoding 浏览器可接收的压缩算法，如gzip
- Accept-Languange 浏览器可接收的语言，如zh-CN
- Connection:keep-alive一次TCP连接重复使用
- cookie
- host 域名
- User-Agent(简称UA) 浏览器信息
- Content-type 发送数据的格式，如application/json (post/patch请求带有的)

#### Response Headers

- Content-type 返回数据的格式，如 application/json
- Content-length 返回数据的大小，多少字节
- Content-Encoding 返回数据的压缩算法，如gzip
- Cache-Control 返回数据添加强制缓存
- Set-Cookie

#### 之定义header

#### 缓存相关的 headers

- Cache-Control Expires
- Last-Modified If-Modified-Since
- Etag If-None-Match

## 14-6 http为何需要缓存

### http 缓存

- 关于缓存的介绍
- http缓存策略（强制缓存+协商缓存）
- 刷新操作方式，对缓存的影响

#### 关于缓存

- 什么是缓存？
- 为什么需要缓存（页面加载速度更快，减少服务器端压力，应对网络的不稳定环境。网络请求的加载相比于CPU的计算，包括页面的渲染都是非常慢的一个事情，如果做性能优化和让网页显示的更快，从网络请求入手）
- 哪些资源可以被缓存？—— 静态资源(js css img)

## 14-7 cache-control是什么意思-http强制缓存

### http 缓存 - 强制缓存

#### Cache-Control

- Response Headers中
- 控制强制缓存的逻辑
- 例如 Cache-Control: max-age=31536000 (单位是秒)

#### cache-control 的值

- max-age 缓存最大过期事件
- no-cache 不使用本地强制缓存，服务端缓存不管
- no-cache 不使用本地缓存，而且不使用服务端的缓存措施
- private 只允许最终用户做缓存
- public 允许中间路由和代理做缓存

#### 关于Expires

- 同在 Response Headers 中
- 同为控制缓存过期
- 已被 Cache-Control 代替

## 14-8 Etag和Last-Modified是什么意思-http协商缓存

### http 缓存 - 协商缓存（对比缓存）

- 服务器端缓存策略 （服务器端来判断一个资源是否可以被缓存，是否可以用缓存）
- 服务器判断客户端资源，是否和服务器端资源一样
- 一致则返回304，否则返回200和最新的资源

过程

- 客户端初次请求服务器资源
- 服务器返回资源和资源标识
- 客户端再次请求资源并带有上次服务器端返回的资源标识
- 返回304，或者返回新的资源和资源标识

#### 资源标识

- 在Response Headers中，有两种
- Last-Modified 资源的最后修改时间
- Etag 资源的唯一标识（一个字符串，类似人类的指纹）

#### Last-Modified

- 初次请求
- 返回资源，和Last-Modified
- 再次请求，Request Headers带着If-Modified-Since
- 返回304，或返回资源和新的Last-Modified

#### Etag

- 初次请求
- 返回资源和Etag
- 再次请求，Request Headers 带着 If-None-Match
- 返回 304，或返回资源和新的Etag

#### Etag和Last-Modified

- Last-Modified和Etag共存，会优先使用Etag
- Last-Modified只能精确到秒级
- 如果资源被重复生成，而内容不变，则Etag更精确

#### http 缓存 - 综述

图

## 14-9 刷新页面对http缓存的影响

### 三种刷新操作

- 正常操作：地址栏输入url，跳转链接，前进后退等
- 手动刷新：F5，点击刷新按钮，右击菜单刷新
- 强制刷新： ctrl + F5

不同刷新操作，不同的缓存策略

- 正常操作：强制缓存有效，协商缓存有效
- 手动刷新：强制缓存失效，协商缓存有效
- 强制刷新：强制缓存失效，协商缓存失效

小结

- 强制缓存 Cache-Control
- 协商缓存 Last-Modified 和 Etag， 304状态码
- 完整的流程图

## 14-10 http考点总结

http 面试 - 总结

- http 状态码
- http method
- Restful API
- http headers
- http 缓存策略

## 15-1 前端开发常用的开发工具

### 关于开发环境

- 面试官想通过开发环境了解候选人的实际工作情况
- 开发环境的工具，能体现工作产出效率
- 会以聊天形式为主，不会问具体的问题

### 开发环境

- Git
- 调试工具
- 抓包
- webpack babel
- linux 常用命令

## 15-2 什么是 git

- 最常用的代码版本管理工具
- 大型项目需要多人协作开发，必须熟用git
- 如果你不知道或者之前不用git，不会通过面试

#### git

- Mac OS 自带 git 命令，windows 可去官网下载安装
- git 服务端常见的有 github coding.net
- 大公司会搭建自己的内网git服务

#### 常用git命令

- git add .
- git checkout xxx
- git commit -m 'xxx'
- git push origin master
- git pull origin master
- git branch
- git checkout -b xxx/ git checkout xxx
- git merge xxx

## 15-3 git 的常用命令有哪些

看极客时间课程

## 15-5 如何用 chrome 调试 js 代码

### chrome 调试工具

- 一般不会面试考察
- 但这是前端工程师必备的技能（不算知识）

常用的调试工具有

- Elements
- Console
- Debugger
- Network
- Application

### 15-6 移动端 h5 如何抓包网络请求

- 移动端h5页，查看网络请求，需要用工具抓包
- windows 一般用 fiddler
- Mac OS 一般用 charles

#### 抓包

- 手机和电脑连同一个局域网
- 将手机代理到电脑上
- 手机浏览网页，即可抓包

#### 抓包演示

- 查看网络请求
- 网址代理
- https

## 15-7 如何配置 webpack

### webpack 和 babel

- ES6 模块化，浏览器暂不支持
- ES6 语法，浏览器并不完全支持
- 压缩代码，整合代码，让网页加载更快

## 15-8 如何配置 babel

## 15-9 ES6 模块化规范是什么

```js
// a.js
export function fn() {
    console.log('fn')
}

export const name = 'a'
export const obj = {
    name: 'zhangsan'
}
```

```js
// index.js
import { fn, name, obj } from './a' // 解构赋值
fn()
console.log(name)
console.log(obj)
```

```js
// b.js
function fn() {
    console.log('fn')
}

const name = 'a'
const obj = {
    name: 'zhangsan'
}

export {
    fn,
    name,
    obj
}

// 上面是ES6的一个简写形式，当导入的名字和定义的名字一样的时候可以用，下面的才是完整写法
// export {
//     fn: fn
//     name: name
//     obj: obj
// }
```

```js
// index.js
import { fn, name, obj } from './b' // 解构赋值
fn()
console.log(name)
console.log(obj)
```

```js
// c.js
const xxx = {
    name: "xxx"
}

export default xxx
```

```js
// index.js
import xxx from './c'
console.log(xxx)
```

```js
// b.js
function fn() {
    console.log('fn')
}

const name = 'a'
const obj = {
    name: 'zhangsan'
}

export default {
    fn,
    name,
    obj
}
```

```js
// index.js
import b from './b' // 解构赋值
b.fn()
console.log(b.name)
console.log(b.obj)
```

## 15-10 如何配置 webpack 生产环境

## 15-11 前端用到的 linux 常用命令有哪些

- 公司的线上机器一般都是linux（参考阿里云）
- 测试机也需要保持一致，用linux
- 测试机或者线上机出了问题，本地又不能复现，需要去排查


## 开发环境

- git
- 调试工具
- 抓包
- webpack babel
- linux常用命令

## 16-1 JS 上线之后在什么哪里运行？

- 运行环境即浏览器（server端有node.js）
- 下载网页代码，渲染出页面，期间会执行若干JS
- 要保证代码在浏览器中：稳定且高效

### 运行环境

- 网页加载过程
- 性能优化
- 安全

## 16-2 网页是如何加载并渲染出来的

题目

- 从输入url到渲染出页面的整个过程
- window.onload 和 DOMContentLoaded的区别

知识点

- 加载资源的形式
- 加载资源的过程
- 渲染页面的过程

### 资源的形式

- html 代码
- 媒体文件，如图片，视频等
- javascript css

#### 加载过程

>这部分看浏览器工作原理

- DNS 解析：域名 -> IP地址
- 浏览器根据IP地址向服务发起http请求
- 服务器处理http请求，并返回给浏览器

#### 渲染过程

- 根据HTML代码生成DOM tree
- 根据CSS代码生成CSSOM
- 将 DOM Tree 和 CSSOM 整合形成 Render Tree
- 根据 Render Tree 渲染页面
- 如果遇到<script>则暂停渲染，优先加载并执行JS代码，完成再继续
- 直至把 Render Tree 渲染完成

## 16-3 网页加载和渲染的示例

### 思考

1. 为何建议把css放在head中？ // 关键渲染路径

2. 为何建议把js放在body最后？ // 关键渲染路径 

3. window.onload 和 DOMContentLoaded

```js
window.addEventListener('load', function() {
    // 页面的全部资源加载完才会执行，包括图片，视频等
})
document.addEventListener('DOMContentLoaded', function() {
    // DOM 渲染完即可执行，此时图片，视频还可能没有加载完
})
```

## 问题解答

- 从输入url到渲染出页面的整个过程
- window.onload 和 DOMContentLoaded 的区别

1. 从输入url到渲染出页面的整个过程

- 下载资源：各个资源类型，下载过程
- 渲染页面：结合html css javascript 图片等

2. window.onload 和 DOMContentLoaded

- window.onload 资源全部加载完成才能执行，包括图片
- DOMContentLoaded DOM 渲染完成即可，图片可能尚未下载

代码测试

```js
const img1 = document.getElementById('img1')
img1.onload = function () {
    console.log('img loaded')
}

window.addEventListener('load', function() {
    console.log('window loaded')
})

document.addEventListener('DOMContentLoaded', function() {
    console.log('dom content loaded')
})
```

## 16-5 前端性能优化有哪些方式

### 性能优化

- 是一个综合性问题，没有标准答案，但要求尽量全面
- 某些细节问题可能会单独提问：手写防抖、节流
- 只关注核心点，针对面试

### 性能优化原则

- 多使用内存、缓存或其他方法
- 减少CPU计算量，减少网络加载耗时
- 以上适用于所有编程的性能优化 ——— 空间换时间

### 从何入手

- 让加载更快
- 让渲染更快

#### 让加载更快

- 减少资源体积：压缩代码
- 减少访问次数：合并代码，SSR 服务器端渲染，缓存

#### 让渲染更快

- CSS 放在 head，JS 放在 body 最下面
- 尽早开始执行 JS，用 DOMContentLoaded触发
- 懒加载（图片懒加载，上滑加载更多）
- 对 DOM 查询进行缓存
- 频繁 DOM 操作，合并到一起插入 DOM
- 节流 throttle 防抖 debounce

## 16-6 前端性能优化的示例

#### 资源合并


#### 缓存

- 静态资源加hash后缀，根据文件内容计算hash
- 文件内容不变，则hash不变，则url不变
- url和文件不变，则会自动触发http请求缓存机制，返回304

#### CDN

#### SSR

- 服务器端渲染：将网页和数据一起加载，一起渲染
- 非SSR（前后端分离）：先加载网页，再加载数据，再渲染数据
- 早先的JSP ASP PHP，现在的Vue React SSR

#### 懒加载

```js
<img id="img1" src="preview.png" data-realsrc="abc.png">
<script type="text/javascript">
    var img1 = document.getElementById('img1')
    img1.src = img1.getAttribute('data-realsrc')
</script>
```

#### 缓存 DOM 查询

#### 频繁 DOM 操作，合并到一起插入 DOM

#### 尽早开始 JS 执行

## 16-7 手写防抖 debounce

### 防抖 debounce

- 监听一个输入框的，文字变化后触发 change 事件
- 直接用 keyup 事件，则会频发触发 change 事件
- 防抖：用户输入结束或暂停时，才会触发 change 事件

代码实例

```html
<input type="text" id="input1">
<script src="./debounce.js">
```

```js
// debounce.js
const input1 = document.getElementById('input1')
let timer = null
input1.addEventListener('keyup', function() {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        // 触发 change 事件
        console.log(input1.value)
        // 清空定时器
        timer = null
    }, 500)
})
```

封装一下 debounce 函数

```js
function debounce(fn, delay = 500) {
    // timer 是闭包中的
    let timer = null
    return function () {
        if (timer) {
            clearTimemout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

input.addEventListener('keyup', debounce(function() {
    console.log(input1.value)
}), 600)
```

#### 节流 throttle

节流和防抖不同，防抖在频繁输入和频繁操作完成后触发；节流是在在频繁输入和频繁操作过程中，保持一个频率连续触发

- 拖拽一个元素时，要随时拿到该元素被拖拽的位置
- 直接用drag事件，则会触发触发，很容易导致卡顿
- 节流：无论拖拽速度多快，都会每隔100ms触发一次

```html
<div id="div1" draggable="true">可拖拽</div>
<script src="./throttle.js"></script>
```

```js
const div1 = document.getElementById('div1')

let timer = null
div1.addEventListener('drag', function(e) {
    if (timer) {
        return
    }
    timer = setTimeout(() => {
        console.log(e.offsetX, e.offsetY)
        timer = null
    }, 100)
})
```
封装一下 throttle 函数

```js
function throttle(fn, delay = 100) {
    let timer = null
    return function() {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

div1.addEventListener('drag', throttle(function(e){
    console.log(e.offsetX, e.offsetY)
}), 100)
```

## 16-9 如何预防 xss 攻击

### 安全

- 问题：常见的web前端攻击方式有哪些？
- XSS 跨站请求攻击
- XSRF 跨站请求伪造

#### XSS 攻击

跨站脚本攻击(Cross-site scripting, XSS)

- 一个博客网站，我发表一篇博客，其中嵌入<script>脚本
- 脚本内容：获取cookie，发送到我的服务器（服务器配合跨域）
- 发布这篇博文，有人查看它，我轻松收割访问者的cookie

```html
<script>alert(document.cookie);</script>
```

#### XSS 预防

- 替换特殊字符，如 < 变为 &lt; > 变为 &gt;
- <script> 变为 &lt;script&gt;，直接显示，而不会作为脚本执行
- 前端要替换，后端也要替换，都做总不会有错

## 16-10 如何预防 xsrf 攻击

### XSRF 攻击

- 你正在购物，看中了某个商品，商品id是100
- 付费接口是xxx.com/pay?id=100,但没有任何验证
- 我是攻击者，我看中了一个商品，id是200
- 我向你发送一封电子邮件，邮件标题很吸引人
- 但邮件正文隐藏着<img src="xxx.com/pay?id=200"/>
- 你一查看邮件，就帮我购买了id是200的商品

### XSRF预防

- 使用 post 接口
- 增加验证，例如密码，短信验证码，指纹等


## 16-11 运行环境的考点总结

### 运行环境

- 网站加载过程
- 性能优化
- 安全

#### 网页加载过程

- 加载资源的形式
- 加载资源的过程
- 渲染页面过程

#### 性能优化 - 让加载更快

- 减少资源体积：压缩代码
- 减少访问次数：合并代码，SSR 服务器端渲染，缓存
- 使用更快的网络：CDN

#### 性能优化 - 让渲染更快

- CSS放在head，JS放在body最下面
- 尽早开始执行JS，用 DOMContentLoaded 触发
- 懒加载（图片懒加载，上滑加载更多）
- 对 DOM 查询进行缓存
- 频繁 DOM 操作，合并到一起插入
- 节流 throttle 防抖 debounce

#### 安全

- XSS 跨站请求攻击和防御
- XSRF 跨站请求伪造和防御

## 17-1 课程总结~

- 知识点 -> 题目
- 回顾知识点，思维导图
- 回顾之前的所有问题

### 思维导图

图

## 17-2 面试技巧

- 关于简历
- 面试过程中注意事项

### 关于简历

- 简洁明了，突出个人技能和项目经验
- 可以把个人博客、开源作品放在简历中（但博客要有内容）
- 不要造假，保证能力上的真实性（斟酌用词，如精通xxx）

### 面试过程中注意事项

- 如何看待加班：像借钱，救急不救穷
- 千万不要挑战面试官，反考面试官
- 学会给面试官惊喜，证明你能想到更多，做的更好，但不要太多
- 遇到不会的问题，说出你知道的部分即可，但别岔开话题
- 谈一谈你的缺点：说一下你最近在学什么即可

## 18-1 章节介绍

### 面试真题

- 搜集网上的高频JS初级面试题
- 验证和复习之前学过的知识
- 补充其他技能，如正则表达式，数组 API

## 18-2 题目讲解-1：何为变量提升？

### 题目

1. var 和 let const 的区别

- var 是 ES5 语法， let const 是 ES6 语法；var 有变量提升
- var 和 let 是变量，可修改；const 是常量，不可修改；
- let const 有块级作用域，var 没有
  
```js
// 变量提升 ES5
console.log(a)
var a = 200

//等价于

var a
console.log(a)
a = 200

for (var i = 0; i < 10; i++) {
    var j = i + 1
}
console.log(i, j) // 10 10

// 块级作用域
for (let i = 0; i < 10; i++) {
    var j = i + 1
}
console.log(i, j) // 报错
```

1. typof 返回哪些类型

- undefined string number boolean symbol
- object (注意，typeof null === 'object')
- function

2. 列举强制类型转换和隐式类型转换

- 强制：parseInt, parseFloat toString
- 隐式：if, 逻辑运算，==, +拼接字符串

## 18-3 题目讲解-2：手写深度比较 isEqual

1. 手写深度比较，模拟 lodash isEqual

```js
// 实现如下效果
const obj1 = {a: 10, b: { x: 100, y: 200 }}
const obj2 = {a: 10, b: { x: 100, y: 200 }}
isEqual(obj, obj2) === true
```

代码演示

```js
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
// 全相等
function isEqual(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)) {
        // 先取出 obj1 和 obj2 的 keys, 比较个数
        const obj1Keys = Reflect.ownKeys(obj1)
        const obj2Keys = Reflect.ownKeys(obj2)
        if (obj1Keys.length !== obj2Keys) {
            return false
        }
        // 2. 以 obj1 为基准，和 obj2 依次递归比较
        // let...in适用于数组和对象
        for (let key of obj1Keys) {
            // 比较当前 key 的 val -- 递归!!!
            if(!isEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

    } else {
        // 值类型
        return obj1 === obj2
    }
    // 3. 全相等
    return true;
}
```

2. split() 和 join() 的区别

```js
'1-2-3'.split('-') // [1, 2, 3]
[1,2,3].join('-') // '1-2-3'
```

3. 数组的 pop push unshift shift 分别做什么

- 功能是什么？
- 返回值是什么？
- 是否会对原数组造成影响

```js
const arr = [10, 20, 30, 40]

// pop
const popRes = arr.pop() // 40
console.log(popRes, arr)

// shift
const shiftRes = arr.shift() // 10
console.log(shiftRes, arr)

// push
const pushRes = arr.push(50) // 3 (返回 length)
console.log(pushRes, arr)

// unshift
const unshiftRes = arr.unshift(5) // 4 (返回 length)
console.log(unshiftRes, arr)


【扩展】数组的API，有哪些是纯函数？

- 纯函数：1. 不改变原数组（没有副作用）；2.返回一个数组
const arr = [10, 20, 30, 40]

// concat
const arr1 = arr.concat([50, 60, 70])

// map
const arr2 = arr.map(num => num * 10)

// filter
const arr3 = arr.filter(num => num > 25)

// slice
const arr4 = arr.slice() // 类似于深拷贝，但并不是，数组中的obj是共享引用的

// 非纯函数
// push pop shift unshif
// forEach
// some every
// reduce
// splice
```

## 18-4 题目讲解-3：你是否真的会用数组 map

1. 数组 slice 和 splice 的区别？

- 功能区别（slice - 切片， splice - 剪切）
- 参数和返回值
- 是否是纯函数

```js
const arr = [10, 20, 30, 40, 50]

// slice 纯函数
const arr1 = arr.slice() // [10, 20, 30, 40, 50]
const arr2 = arr.slice(1, 4) // [20, 30, 40]
const arr3 = arr.slice(2) // [30, 40, 50]
const arr4 = arr.slice(-2) // [30, 40]

// splice 非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
console.log(spliceRes, arr) // [10, 'a', 'b', 'c', 40, 50]
```

1. [10, 20, 30].map(parseInt) 返回结果是什么？

- map 的参数和返回值
- parseInt 参数和返回值

代码演示

```js
const res = [10, 20, 30].map(parseInt)
console.log(res) // 10 NaN NaN

// 拆解
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})
```

1. ajax 请求 get 和 post 的区别？

- get 一般用于查询操作，post一般用户提交操作
- get 参数拼接在url上，post放在请求体内（数据体积可更大）
- 安全性: post 易于防止 CSRF

## 18-5 题目讲解-4：再学闭包

1. 函数 call 和 apply 的区别？

```js
fn.call(this, p1, p2, p3) // 参数一个一个分开传参
fn.apply(this, arguments) // 参数是一个数组或类数组
```

>call 和 apply的使用可以相互转换

2. 事件代理（委托）是什么？

3. 闭包是什么？有何特性？有何影响？

- 回顾作用域和自由变量
- 回顾闭包应用场景：作为参数被传入，作为返回值被返回
- 回顾：自由变量的查找要在函数定义的地方（而非执行的地方）
- 影响：变量会常驻内存，得不到释放。闭包不要乱用

```js
// 闭包 函数作为返回值 - 内存不会被释放
function create() {
    let a = 100
    return funciton() {
        console.log(a)
    }
}
let fn = create()
let a = 200
fn() // 100

// 闭包 函数作为参数被传入 - 内存不会被释放
function print(fn) {
    let a = 200
    fn()
}
let a = 100
function fn() {
    console.log(a)
}
print(fn) // 100
```

## 18-6 面试讲解-5：回顾 DOM 操作和优化

1. 如何阻止事件冒泡和默认行为？

- event.stopPropagation()
- event.preventDefault()

2. 查找，添加，删除，移动 DOM 节点的方法



3. 如何减少 DOM 操作？

减少 DOM 操作的原因是 DOM 操作非常“昂贵”

- 缓存 DOM 查询结果
- 多次 DOM 操作，合并到一次插入

## 18-7 面试讲解-6：jsonp 本质是 ajax 吗

1. 解释jsonp的原理，为何它不是真正的ajax?

ajax 是通过 XMLHttpRequest 实现的， jsonp 是通过 <script> 实现的

- 浏览器的同源策略（服务器端没有同源策略）和跨域
- 哪些 html 标签能绕过跨域？
- jsonp的原理

```js
<script>
    window.abc = function(data) {
        console.log(data)
    }
</script>
<script src="http://localhost:8002/jsonp.js?username=xxx&callback=abc"></script>
```


1. document load 和 ready 的区别

2. == 和 === 的区别

- == 会尝试类型转换
- === 严格相等
- 哪些场景才用 == ?

## 18-8 面试讲解-7：是否用过 Object.create()

1. 函数声明和函数表达式的区别

- 函数声明 function fn() {...}
- 函数表达式 const fn = function() {...}
- 函数声明会在代码执行前预加载，而函数表达式不会

```js
const res = sum(10, 20)
console.log(res)

// 函数声明
function sum(x, y) {
    return x + y
}

// 函数表达式
const sum = function(x, y) {
    return x + y
}
```

1. new Object() 和 Object.create() 的区别

- {} 等同于 new Object()，原型 Object.prototype
- Object.create(null) 没有原型
- Object.create({...}) 可指定原型

```js
const obj1 = {
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
}

let obj2 = new Object({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})

console.log(obj1 === obj2) // false;
console.log(obj1 == obj2) // false;

obj2 = new Object(obj1)

console.log(obj1 === obj2) // true

const obj3 = Object.create(null)
const obj4 = new Object() // 等同于 const obj4 = {}

const obj5 = Object.create(new Object({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})) // 参数会放在一个空对象的原型中

const obj6 = Object.create(obj1)
obj1.c = 1000
console.log(obj6.c) // 1000
console.log(obj6.__proto__ === obj1) // true
console.log(obj6 === obj1)
```

1. 关于 this 的场景题

```js
const User = {
    count: 1,
    getCount: function() {
        return this.count
    }
}
console.log(User.getCount()) // 1
const func = User.getCount
console.log(func()) // undefined
```

## 18-9 面试讲解-8：常见的正则表达式

正则表达式是一个脱离了语言和平台的标准规范

1. 关于作用域和自由变量的场景题 - 1

```js
let i
for(i = 1; i<= 3; i++) {
    setTimeout(function(){
        console.log(i)
    }, 0)
}

// 4
// 4
// 4
```

3. 判断字符串以字母开头，后面字母数字下划线，长度6-30

- [正则表达式入门教程](https://deerchao.cn/tutorials/regex/regex.htm)
- [REGEXPER](https://regexper.com/)

```js
const reg = /^[a-zA-Z]\w{5,29}/

// 邮政编码
/\d{6}/

// 小写英文字母
/^[a-z]+$/

// 英文字母
/^[a-zA-Z]+$/

// 日期格式 2019-12-1
/^\d{4}-\d{1,2}=\d{1,2}$/

// 用户名
/^[a-zA-Z]\w{5,17}$/

// 简单的 IP 地址
/\d+\.\d+\.\d+\.\d+/
```

1. 关于作用域和自由变量的场景题 - 1

```js
let a = 100
function test() {
    alert(a)
    a = 10
    alert(a)
}
test()
alert(a)
// 100
// 10
// 10
```

## 18-10 面试讲解-9：如何获取最大值

1. 手写字符串 trim 方法，保证浏览器兼容性

```js
String.prototype.trim = function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '')
}
// 原型、this、正则表达式
```

- 如何获取多个数字中的最大值

```js
Math.max(10, 30, 20, 40)
```

- 如何用JS实现继承

- class 继承
- prototype 继承

## 18-11 面试讲解-10：解析 url 参数

1. 如何捕获JS程序异常?

```js
try {
    // todo
} catch (ex) {
    console.error(ex) // 手动捕获 catch
} finally {
    // todo
}

// 自动捕获
window.onerror = function(message, source, lineNum, colNum, error) {
    // 第一，对跨域的 js，如 CDN 的，不会有详细的报错信息
    // 第二，对于压缩的 js，还要配合 sourceMap 反查到未压缩代码的行、列
}
```

2. 什么是JSON?

- json 是一种数据格式，本质是一段字符串
- json 格式和 js 对象结构一致，对 JS 语言更友好
- window.JSON 是一个全局对象：JSON.stringify JSON.parse

```js
{
    "name": "张三"
}
// 属性名必须用引号括起来
// 字符串要使用双引号，不能用单引号
```

1. 获取当前url参数

- 传统方式，查找 location.search
- 新 API，URLSearchParams


```js
// search: "?a=10&b=20&c=30"
// 传统方式
function query(name) {
    const search = location.search.substr(1) // 类似 arrary.slice(1)
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i') // new RegExp(`(^|&)`,'i')等同于 /(^|&)/i
    const res = search.match(reg)
    console.log(res)
    if (res === null) {
        return null
    }
    return res[2]
}

query('b') // 20
query('d') // null

// URLSearchParams
function query(name) {
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
query('a') // 10
```

## 18-12 面试讲解-11：数组去重有几种方式？

1. 将url参数解析为JS对象

2. 手写数组flatern，考虑多层

```js
flat([[1,2], 3, [4,5, [6, 7, [8, 9, [10, 11]]]]])
// [1,2,3,4,5,6,7,8,9,10,11]

function flat(arr) {
    // 验证 arr 中，还有没有深层数组 [1, 2, [3, 4]]
    isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr  // 已经是 flatern [1, 2, 3, 4]
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(arr) // 递归
})

const res = flat( [1, 2, [3, 4], 5] )
console.log(res)

// Array 原生 API
var arr = [1, 2, [3, 4], 5]
Array.prototype.concat.apply([], arr) // [1, 2, 3, 4, 5]

// 等价于
Array.prototype.concat.call([], 1, 2, [3, 4], 5)

// 等价于
[].concat(1, 2, [3, 4], 5)
```

3. 数组去重

- 传统方式，遍历元素挨个比较、去重
- 使用Set
- 考虑计算效率

```js
// 传统方式
function unique(arr) {
    const res = []
    arr.forEach(item => {
        if (res.indexOf(item) < 0) {
            res.push(item)
        }
    })
    return res
}

// 使用 Set 方式
function unique(arr) {
    const set = new Set(arr)
    return [...set]
}

const res = unique([30, 10, 20, 30, 40, 10])
console.log(res)
```

## 18-13 面试讲解-12：是否用过 requestAnimationFrame

1. 手写深拷贝

```js
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj === null) {
        // obj 是 null, 或者不是对象和数组，直接返回
        return obj
    }
    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key])
        }
    }
    // 返回结果
    return result
}
```

> 注意，Object.assign不是深拷贝！

例如

```js
const obj = {a: 10, b: 20, c:30}
// 追加信息到obj
Object.assign(obj, {d: 40})
console.log(obj) // {a: 10, b: 20, c:30, d: 40}
const obj1 = Object.assign({}, obj, {e: 50})
console.log(obj) // {a: 10, b: 20, c:30, d: 40}
console.log(obj1) // {a: 10, b: 20, c:30, d: 40, e: 50}
obj.a = 100
console.log(obj1) // {a: 10, b: 20, c:30, d: 40, e: 50}

// 虽然 obj1没有受到obj.a变化的影响，但是 Object.assign 并没有对 obj 做一个深拷贝，只是在 obj 第一层级做了一个拷贝，没有更深层的拷贝

// 举个例子
const obj = {a: 10, b: {x: 100, y: 100}}
const obj1 = Object.assign({}, obj, {c: 30})
obj.b.x = 101
console.log(obj1) // {a: 10, b: {x: 101, y: 100}, c: 30}
```

1. 介绍一下 RAF requestAnimationFrame

- 想要动画流畅，更新频率要60帧/s，即16.67ms更新一次视图
- setTimeout 要动手控制频率，而 RAF 浏览器会自动控制
- 后台标签或隐藏iframe中，RAF会暂停，而setTimeout依然执行

```js
// 3s 把宽度从 100px 变为 640px，即增加 540px
// 60帧/s，3s 180 帧，每次变化 3px

const $div = $('#div1')
let curWidth = 100
const maxWidth = 640

// setTimeout
function animate() {
    curWidth = curWidth + 3
    $div.css('width', curWidth)
    if (curWidth < maxWidth) {
        setTiemout(animate, 16.7) // 自己控制时间
    }
}

function animate() {
    curWidth = curWidth + 3
    $div.css('width', curWidth)
    if (curWidth < maxWidth) {
        window.requestAnimationFrame(animate) // 时间不用自己控制
    }
}

// 切换浏览器tab页面的时候，requestAnimationFrame会停止执行，而setTimeout会继续执行
```

1. 前端性能如何优化？一般从几个方面进行考虑？

- 原则：多使用内存，缓存，减少计算，减少网络请求
- 方向：加载页面，页面渲染，页面操作流畅度

