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