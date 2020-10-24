# Vue面试

## Vue使用

- 基本使用，组件使用 - 常用，必须会，不然不要投简历
- 高级特性 - 不常用，但体现深度
- Vuex和Vue-router使用

## 回顾之前的Vue面试题

- `v-show`和`v-if`的区别
  `v-show`是通过设置组件的css的`dispaly:none`去显示和隐藏，`v-if`是通过控制Vue组件的创建和销毁。
- 为何v-for中要用key
  `v-if`推荐使用`key`，如果不使用会抛出警告，`key`的使用不能直接使用`index`，需要用一个和业务相关的一个不重复的id。
- 描述Vue组件生命周期(有父子组件的情况)
  单组件生命周期画出来，**父组件的情况**
- Vue组件如何通讯
  父子组件用props和$emit，父子组件层级比较深，用自定义事件，Vuex通信存储所有子组件状态
- 描述组件渲染和更新的过程（原理和完整性）
- 双向数据绑定v-model的实现原理（原理和热门技术深度）

### Vue基本使用

- 日常使用，必须掌握，面试必考（不一定全考）
- 梳理知识点，从冗长的文档中摘出考点和重点
- 考查形式不限（参考后面的面试真题），但都在范围内


#### 指令，差值

- 差值，表达式
- 指令，动态属性
- v-html：会有XSS风险，会覆盖子组件

#### computed和watch

- computed有缓存，data不变则不会重新计算
- watch如何深度监听？
- watch监听引用类型，拿不到oldVal

#### class和style

- 使用动态属性
- 使用驼峰式写法

#### 条件渲染

- `v-if`和`v-else`的用法，可使用变量，也可以使用`===`表达式
- `v-if`和`v-show`的区别？
- `v-if`和`v-show`的使用场景
  
#### 循环(列表)

- 如何遍历对象？ ———— 也可以用v-for
- key的重要性。key不能乱写（如random或者index）
- `v-for`和`v-if`不能一起使用(同一级)!

#### 事件

- event参数，自定义参数
  - 1. event事件是原生的
  - 2. 事件被挂载到当前元素
- 事件修饰符，按键修饰符
-【观察】事件被绑定到哪里？

#### 事件修饰符

#### 表单

- v-model
- 常见表单项 textarea checkbox radio select
- 修饰符 lazy number trim

### Vue组件使用

- props和$emit
- 组件间通讯-自定义事件
- 组件生命周期
  
### 生命周期(单个组件)

- 挂载
- 更新
- 销毁


created和mounted的区别？

- `created`是实例初始化已经完成，但还没有开始渲染
- `mounted`是实例已经渲染完成

`beforeDestory`中可能会做什么事情
- 解除绑定
- 销毁子组件
- 销毁事件监听器

### 生命周期（父子组件）

- `created`从外到内
- `mounted`从内到外
- `beforeUpdate`从外到内
- `updated`从内到外

### Vue高级特性

- 自定义v-model
- $nextTick
- slot
- 动态异步组件
- keep-alive
- mixin

自定义`v-model`代码演示视频`3-8`

$nextTick

- Vue是一个异步渲染的框架（原理部分会详细讲解）
- data改变之后，DOM不会立即渲染
- $nextTick会在DOM渲染之后被触发，以获取最新DOM节点

#### Vue组件更新之后如何获取最新DOM

1. 异步渲染，$nextTick待DOM渲染完再回调
2. 页面渲染时会将`data`的修改做整合，多次`data`修改只会渲染一次

slot是什么

- 基本使用
- 作用域插槽
- 具名插槽

#### 动态组件

- :is = "component-name"用法
- 需要根据数据，动态渲染的场景。即组件类型不确定

```html
<div v-for="(val, key) in newsData" :key="key">
  <component :is="val.type"/>
</div>
```

```js
data() {
  return {
    newsData: {
      1: {
        type: 'text'
      },
      2: {
        type: 'text'
      },
      3: {
        type: 'image'
      }
    }
  }
}
```
#### 异步组件

- `import()`函数
- 按需加载，异步加载大组件

```html
<FormDemo v-if="showFormDemo"/>
<button @click="showFormDemo = true">show form deno</button>
```

```js
exprot default {
  components: {
    FormDemo: () => import('../BaseUse/FormDemo');
  }
}
```

#### keep-alive

- 缓存组件
- 频繁切换，不需要重复渲染
- Vue常见性能优化

Keep alive的代码演示

<keep-alive></keep-alive>

应用场景`tab`切换

#### mixin

- 多个组件有相同的逻辑，抽离出来
- mixin并不是完美的解决方案，会有一些问题
- Vue 3提出的Composition API旨在解决这些问题

mixin的问题

- 变量来源不明，不利于阅读
- 多mixin可能会造成命名冲突
- mixin和组件可能出现多对多的关系，复杂度较高

#### 相关的面试技巧

- 可以不太深入，但是必须知道
- 熟悉基本用法，了解使用场景
- 最好能和自己的项目经验结合起来

#### Vuex使用

- 面试考点并不多（因为熟悉Vue之后，Vuex没有难度）
- 但基本概念，基本使用和API必须掌握
- 可能会考察state的数据结构设计（后面会讲）

Vuex基本概念

- state
- getters
- action
- mutation

用于Vue组件

- dispatch
- commit
- mapState
- mapGetters
- mapActions
- mapMutations

**异步的操作（Backend API）只能在Action做，不能在Mutations里面做**

Vue-router使用

- 面试考点并不多（前提是熟悉Vue）
- 路由模式（hash, H5 history）
- 路由配置（动态路由，懒加载）

Vue-router路由模式

- hash模式（默认）: /#
- H5 history模式：/
- 后者需要server端支持，因此无特殊需求可选择前者

`Vue-router`路由配置 动态路由

```js
const User = {
  // 获取参数如 10 20
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头。能命中 `/user/10` `/user/20` 等格式的路由
    { path: '/user/:id', component: User }
  ]
})
```

Vue-router路由配置 懒加载

Vuex Vue-router 总结

- 面试考点并不多（前提是熟悉Vue）
- 掌握基本概念，基本使用
- 面试官时间有限，需考察最核心，最常用的问题，而非边角问题

Vue使用总结

- 基本使用，组件使用 （必须掌握好）
- 高级特性
- Vuex和Vue-router使用


### Vue原理（大厂必考）

原理和源码不是一回事

- 面试为何会考察原理？
- 面试中如何考察？以何种方式？
- Vue原理包括哪些？

面试为何会考察原理，又用不到？

- 知其然知其所以然 - 各行各业通用的道理
- 了解原理，才能应用的更好（竞争激烈，择优录取）
- 大厂造轮子（有钱有资源，业务定制，技术KPI）
  
面试如何考察Vue原理

- 考察重点，而不是考察细节。掌握好2/8原则
- 和使用向关联的原理，例如vdom，模板渲染
- 整体流程是否全面？热门技术是否有深度？

Vue原理

- **组件化**
- **响应式**
- **vdom和diff算法**
- 模板编译
- 渲染过程
- 前端路由

#### 组件化基础

- "很久以前"就有组件化
- 数据驱动视图（MVVM, setState）

数据驱动视图

- 传统组件，只是静态渲染，更新还要依赖于操作DOM
- 数据驱动视图 - Vue(MVVM) / React(setState)

Vue MVVM

- 数据层 Model (M): 应用的数据及业务逻辑，为开发者编写的业务代码；
- 视图层 View (V): 应用的展示效果，各类UI组件，由 template 和 css 组成的代码；
- 业务逻辑层 ViewModel (VM): 框架封装的核心，它负责将数据与视图关联起来；

`data()` 对应的是Model，`<template>` 对应的是View, 其他的逻辑部分对应ViewModel

#### Vue的两个核心点？

数据驱动和组件系统

数据驱动：ViewModel，保证数据和视图的一致性。
组件系统：应用类UI可以看作全部是由组件树构成的。

#### 理解ViewModel

它的主要职责就是：

数据变化后更新视图；
视图变化后更新数据；

那么，就可以得出它主要由两个部分组成：

监听器（Observer）：观察数据，做到时刻清楚数据的任何变化，然后通知视图更新；
解析器（Compiler）：观察UI，做到时刻清楚视图发生的一切交互，然后更新数据；

然后把二者组合起来，一个具有数据双向绑定的框架就诞生了。

#### Vue响应式

- 组件data的数据一旦变化，立刻触发视图更新
- 实现数据驱动视图的第一步
- 考察Vue原理的第一道题

Vue响应式

- 核心API, Object.defineProperty (答出这个就可以得50分了)
- 如何显示响应式，代码演示
- Object.defineProperty的一些缺点 (Vue3.0启用Proxy)
  
Proxy有兼容性问题
- Proxy兼容性不好，且无法polyfill (IE11不能用)
- Vue2.x还会存在一段时间，所以都得学

Object.defineProperty基本用法

```js
const data = {};
let name = "zhangsan";
Object.defineProperty(data, "name", {
  get: function () {
    console.log('get');
    return name;
  },
  set: function (newVal) {
    console.log('set');
    name = newVal;
  }
})

// 测试
console.log(data.name) // get zhangsan
data.name = 'lisi' // set
```

Object.defineProperty实现响应式

- 监听对象，监听数组
- 复杂对象，深度监听
- 几个缺点

Object.defineProperty缺点

- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性/删除属性 (Vue.set, Vue.delete)
- 无法监听数组，需要特殊处理

### Vue如何监听数组变化

- 基础API - Object.defineProperty
- 如何监听对象（深度监听），监听数组
- Object.defineProperty的缺点

### 虚拟DOM（Virtual DOM）和diff

- vdom是实现vue和react的一个重要的基石
- diff算法是vdom中最核心，最关键的部分
- vdom是一个热门话题
  
- DOM操作非常耗费性能，相对来说JS的执行是比较快的
- 以前用jQuery，可以自行控制DOM操作的时机，动手调整
- Vue和React是数据驱动视图，如何有效的控制DOM操作？

解决方案 - vdom

- 有了一定的复杂度，想减少计算次数比较难
- 能不能把计算，更多的转移为JS计算？因为JS执行速度很快
- vdomm - 用JS模拟DOM结构，计算出最小的变更，操作DOM

用JS模拟DOM结构

- 所有的XML语言都可以用JS和JSON的方式来表示

请用vnode模拟以下html片段

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px">
    <li>a</li>
  </ul>
</div>
```

js或json模拟dom

```js
{
  tag: 'div',
  props: {
    className: 'container',
    id: 'div1'
  }
  children: [
    {
      tag: 'p',
      children: 'vdom'
    },
    {
      tag: 'ul',
      props: { style: 'font-size: 20px' }
      children: [
        {
          tag: 'li',
          children: 'a'
        }
      ]
    }
  ]
}
```

通过`snabbdom`学习`vdom`

- 简洁强大的`vdom`库，易学易用
- Vue参考它实现的`vdom`和`diff`
- Vue3.0重写了vdom的代码，优化了性能
- 但vdom的基本理念不变，面试考点也不变
- React vdom具体实现和Vue也不相同，但不妨碍统一学习

snabbdom重点

- h函数
- vnode数据结构
- patch函数

vdom总结

- 用JS模拟DOM结构（vnode）
- 新旧vnode对比，得出最小的更新范围，最后更新DOM
- 数据驱动视图的模式下，有效控制DOM操作

#### diff算法

- diff算法是vdom中最核心，最关键的部分
- diff算法能在日常使用vue react中体现出来(如key)
- diff算法是前端的热门话题，面试“宠儿”

diff算法概述

- diff即对比，是一个广泛的概念，如linux diff命令，git diff等
- 两个对象做diff (例如，jiff)
- 两棵树做diff，如这里的vdom diff

树diff的时间复杂度O(n^3)

- 第一，遍历tree1; 第二，遍历tree2;
- 第三, 排序
- 1000个节点，要计算1亿次，算法不可用

优化时间复杂度到O(n)

- 只比较同一层级，不跨级比较
- tag不相同，则直接删掉重建，不再深度比较
- tag和key，两者都相同，则认为是相同节点，不再深度比较

#### snabbdom - 源码

#### 不使用key vs 使用key

diff算法总结

- patchVnode
- addVnodes removeVnodes
- updateChildren (key的重要性)

#### vdom和diff - 总结

- 细节不重要，`updateChildren`的过程也不重要，不要深究
- vdom核心概念很重要：h, vnode, patch, diff, key等
- vdom存在的价值更加重要，数据驱动视图，控制DOM操作
  
#### 模板编译

- 模板是Vue开发中最常见的部分，即与使用向关联的原理
- 它不是html，是指令，插值，JS表达式，到底是什么？
- 面试不会直接问，但会通过“组件渲染和更新过程”考察
  
模板编译（前置知识）

- 前置知识：JS的with语法
- vue template complier将模板编译成函数
- 执行render函数生产vnode

with语法

```js
const obj = {a: 100, b: 200};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c); // undefined

// 使用with, 能改变 {} 内自由变量的查找方式
// 将 {} 内自由变量，当做 obj 的属性来查找
with(obj) {
  console.log(a);
  console.log(b);
  console.log(c); // 会报错!!!
}
```

with语法

- 改变{}内自由变量的查找规则，当做obj属性来查找
- 如果找不到匹配的obj属性，就会报错
- with要慎用，它打破了作用域规则，易读性变差

编译模板

- 模板不是html，有指令，插值，JS表达式，能实现判断，循环
- html是标签语言，只有JS才能实现判断，循环（图灵完备的）
- 因此，模板一定是转换为某种JS代码，即编译模板

模板（函数体）`<template>` -> `render`函数 -> 返回`vnode`

编译模板

- 模板编译为`render`函数，执行`render`函数返回`vnode`
- 基于`vnode`再执行`patch`和`diff` （后面会讲）
- 使用`webpack vue-loader`会在开发环境下编译模板（重要）

#### Vue组件中使用render代替template

- 讲完模板编译，再讲这个`render`，就比较好理解了
- 在有些复杂情况中，不能用`template`，可以考虑用`render`
- react一直都用render（没有模板），和这里一样

总结

- with语法
- 模板到`render`函数，再到`vnode`，再到渲染和更新
- vue组件可以用`render`代替`template`

#### 组件的渲染/更新过程

- 一个组件渲染到页面，修改data触发更新（数据驱动视图）
- 其背后原理是什么，需要掌握哪些要点？
- 考察对流程了解的全面程度

回顾学过的知识

- 响应式：监听`data`属性`getter setter`（包括数组）
- 模板编译：模板到`render`函数，再到`vnode`
- vdom: path(elem, vnode)和patch(vnode, newVnode)

组件的渲染/更新过程

- 初次渲染过程
- 更新过程
- 异步渲染

1. 初次渲染

- 解析模板`render`函数（或在开发环境已完成，vue-loader）
- 触发(touch)响应式，监听`data`属性`getter setter`
- 执行`render`函数，生成`vnode`, `patch`(elem, vnode)

执行`render`函数会触发`getter`

```js
<p>{{ message }}</p>
<sript>
export default {
  data() {
    return {
      message: 'hello', // 会触发get
      city: '北京' // 不会触发get, 因为模板没有用到，即和视图没关系
    }
  }
}
</script>
```

2. 更新过程

- 修改`data`， 触发`setter` (此前在`getter`中已被监听)
- 重新执行`render`函数，生成`newVnode
- patch(vnode, newVnode)

#### 异步渲染

- 回顾`$nextTick`
- 汇总`data`的修改，一次性更新视图
- 减少DOM的操作次数，提高性能

总结1

- 渲染和响应式的关系
- 渲染和模板编译的关系
- 渲染和`vdom`的关系

总结2

- 初次渲染过程
- 更新过程
- 异步渲染

#### 前端路由原理

- 稍微复杂一点的SPA，都需要路由
- `vue-router`也是vue全家桶的标配之一
- 属于“和日常使用相关的原理”，面试常考
- 回顾`vue-router`的路由模式
- hash
- H5 history

```js
// http://127.0.0.1:8881/01-hash.html?a=100&b=20#/aaa/bbb
location.protocal // 'http:'
location.hostname // '127.0.0.1'
location.host // '127.0.0.1:8881'
location.port // '8881'
location.pathname // '/01-hash.html'
location.search // '?a=100&b=20'
location.hash // '#/aaa/bbb'
```

hash的特点

- hash变化会触发网页跳转，即浏览器的前进，后退
- hash变化不会刷新页面，SPA必须的特点
- hash永远不会提交到server端(前端自生自灭)

代码演示

#### H5 history

- 用url规范的路由，但跳转时不刷新页面
- history.pushState
- window.onpopstate

正常页面浏览

- `https://github.com/xxx`刷新页面
- `https://github.com/xxx/yyy`刷新页面
- `https://github.com/xxx/yyy/zzz`刷新页面

改造成 H5 History模式

- `https://github.com/xxx`刷新页面
- `https://github.com/xxx/yyy`前端跳转，刷新页面
- `https://github.com/xxx/yyy/zzz`前端跳转，刷新页面

```html
<body>
  <p>history API test</p>
  <button id="btn1">修改</button>
  <script>
    // 页面初次加载，获取 hash
    document.addEventListener('DOMContentLoaded', () => {
      console.log('load', location.pathname);
    })
    
    // 打开一个新的路由
    // 【注意】用pushState方式，浏览器不会刷新页面
    document.getElementById('btn1').addEventListener('click', () => {
      const state  = { name: 'page1' };
      console.log('切换路由到'， 'page1');
      history.pushState(state, '', 'page1'); //重要!
    })

    // 监听浏览器前进、后退
    window.onpopstate = (event) => {
      console.log('onpopstate', event.state, location.pathname)
    }
  </script>
</body>
```

总结

- hash - window.onhashchange
- H5 history - history.pushState和window.onpopstate
- H5 history 需要后端支持

两者如何选择

- to B的系统推荐用hash，简单易用，对url规范不敏感
- to C的系统，可以考虑选择H5 history, 但需要服务端支持
- 能选择简单的，就别用复杂的，要考虑成本和收益

### Vue面试真题演练

- 自己觉得是面试重点
- 网上收集整理的面试题
- 热门技术和知识点

1. v-show和v-if的区别
  
- v-show通过css display控制显示和隐藏
- v-if组件真正的渲染和销毁，而不是显示和隐藏
- 频繁切换显示状态用v-show，否则用v-if

2. 为何在v-for中使用key

- 必须用key，且不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性功能

3. 描述Vue组件生命周期（父子组件）

- 单组件的生命周期图
- 父子组件生命周期关系

4. Vue组件如何通讯（常见）

- 父子组件`props`和`this.$emit`
- 自定义事件 event.$on event.$off event.$emit
- vuex

5. 描述组件渲染更新过程

图


6. 双向数据绑定`v-model`的实现原理

- input元素的value = this.name
- 绑定input事件this.name = $evnet.target.value
- data更新触发re-render

7. 对MVVM的理解

图

8. computed有何特点

- 缓存, data不变不会重新计算
- 提高性能

9. 为何组件data必须是一个函数？

闭包，隔离变量

10. ajax请求应该放在哪个生命周期

- mounted
- JS是单线程的，ajax获取异步数据
- 放在mounted之前没有用，只会让逻辑更加混乱

11. 如何将所有props传递给子组件？

- $props
- <User v-bind="$props"/>
- 细节知识点，优先级不高

12. 如何自己实现`v-model`

```html
<template>
  <input type="text" :value="text" @input="$emit('change', $event.target.value)">
  <!-- 
    注意
    第一, 上面使用 :value而没用v-model
    第二, 上面的change和model.event对应起来即可，名字自己改
   -->
</tempate>

<script>
export default {
  model: {
    prop: "text", // 对应到props text
    event: "change"
  },
  props: {
    text: String
  }
}
</script>
```

13. 多个组件相同的逻辑如何抽离？

- mixin
- 以及mixin的一些缺点

14. 何时要使用异步组件？

- 加载大组件
- 路由异步加载

15. 何时需要使用`keep-alive`?

- 缓存组件，不需要重复渲染
- 多个静态tab页的切换
- 优化性能

16. 何时需要使用beforeDestory

- 解除自定义事件`event.$off`
- 清除定时器
- 解绑自定义的DOM事件，如`window scroll`等

17. 什么是作用域插槽

```html
<template>
  <a :href="url">
    <slot :website="website">
      {{website.subTitle}} <!-- 默认值显示subTitle -->
    </slot>
  </a>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      website: {
        url: 'http://wangEditor.com/'
        title: 'wangEditor',
        subTitle: '轻量级富文本编辑器'
      }
    }
  }
}
</script>

<ScopedSlotDemo :url="website.url">
  <template v-slot="slotProps">
  {{ /* slotProps 名字可自定义 */ }}
  {{ slotProps.website.title }}
  </template>
</ScopedSlotDemo>
```

18. Vuex中`action`和`mutation`有何区别

- `action`中处理异步，`mutation`不可以
- `mutation`做原子操作
- `action`可以整合多个`mutation`

19. Vue-router常用的路由模式

- hash默认
- H5 history （需要服务端支持）
- 两者比较

20. 如何配置Vue-router异步加载

```js
export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./../components/Navigator');
    },
    {
      path: '/feedback',
      component: () => import('./../components/FeedBack');
    }
  ]
})
```

21. 请用vnode描述一个DOM结构

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 20px">
    <li>a</li>
  </ul>
</div>
```

js或json模拟dom

```js
{
  tag: 'div',
  props: {
    className: 'container',
    id: 'div1'
  }
  children: [
    {
      tag: 'p',
      children: 'vdom'
    },
    {
      tag: 'ul',
      props: { style: 'font-size: 20px' }
      children: [
        {
          tag: 'li',
          children: 'a'
        }
      ]
    }
  ]
}
```

22. 监听data变化的核心API是什么

- Object.defineProperty
- 以及深度监听，监听数组
- 有何缺点

23. Vue如何监听数组变化

- Object.defineProperty不能监听数组变化
- 重新定义原型，重写push pop等方法，实现监听
- Proxy可以原生支持监听数组变化

24. 请描述响应式原理

- 监听data变化
- 组件渲染和更新的流程

25. diff算法的时间复杂度

- O(n)
- 在O(n^3)基础上做了一些调整

26. 简述diff算法过程

- patch(elem, vnode)和patch(vnode, newVnode)
- patchVnode和addVnodes和removeVnodes
- updateChildren (key的重要性)

27. Vue为何是异步渲染， $nextTick何用？

- 异步渲染(以及合并data修改)，以提高渲染性能
- $nextTick在DOM更新完之后，触发回调

28. Vue常见性能优化

- 合理使用v-show和v-if
- 合理使用computed
- v-for时加key，以及避免和v-if同时使用
- 自定义事件，DOM事件及时销毁
- 合理使用异步组件
- 合理使用keep-alive
- data层级不要太深
- 使用vue-loader在开发环境中做模板编译（预编译）
- webpack层面的优化
- 前端通用的性能优化，如图片懒加载
- 使用SSR

### Vue3

- Vue3尚未发布，还在开发中
- 面试会考察候选人对新技术的关注程度
- 新版本发布后，再做补充

#### Vue3升级内容

- 全部用ts重新（响应式，vdom，模板编译等）
- 提升性能，代码量减少
- 会调整部分API

#### Vue2.x马上就要过时了吗？

- Vue3从正式发布到推广开来，还需要一段时间
- Vue2.x应用范围非常广，有大量的项目需要维护升级
- Proxy存在浏览器兼容性问题，且不能polyfill

### Proxy实现响应式

- 回顾Object.defineProperty
- Proxy实现响应式
- 两者对比

#### Object.defineProperty的缺点

- 深度监听需要一次性递归
- 无法监听新增属性/删除属性(Vue.set Vue.delete)
- 无法原生监听数组，需要特殊处理

#### Proxy实现响应式

- 基本使用
- Reflect
- 实现响应式

#### Reflect作用

- 和Proxy能力一一对应
- 规范化，标准化，函数式
- 代替Object上的工具函数

```js
const obj = {a: 100, b: 200};
'a' in obj // true
Reflect.has(obj, 'a') // true
delete obj.a // true
Reflect.deleteProperty(obj, 'b'); // true
```

```js
const obj = {a: 100, b: 200};
Object.getOwnPropertyNames(obj); // ["a", "b"]
Reflect.ownKeys(obj); // ["a", "b"]
```

#### Proxy实现响应式

- 深度监听，性能更好
- 可监听 新增/删除 属性
- 可监听数组变化

总结

- Proxy能规避Object.defineProperty的问题
- Proxy无法兼容所有浏览器，无polyfill

## 组件和状态设计

- 框架(Vue React)的使用(和高级特性)是必要条件
- 能独立负责项目？还是需要别人带着？————考察设计能力
- 二面必考（二面/三面），场景题

### 考察重点

- 数据驱动视图
- 状态：数据结构设计（React - state, Vue - data）
- 视图： 组件结构和拆分

### 回顾面试题

- Vue设计todolist
- Vue设计购物车(组件结构， Vuex state数据结构)

### 如何讲解

- Todo List
- 购物车

#### Vue实现Todo List

- data数据结构
- 组件设计（拆分，组合）和组件通讯
- 代码演示

设想原型图

图

data数据结构

- 用数据描述所有的内容
- 数据要结构化，易于程序操作（遍历，查找）
- 数据要可扩展，以便增加新的功能

```js
data() {
  list: [
    {
      id: 1,
      title: '标题1'，
      completed: false
    }
  ]
}
```

组件设计

- 从功能上拆分层次
- 尽量让组件原子化
- 容器组件（只管理数据）&UI组件（只显示视图）

```js
<App> // 只负责管理数据
  <Input/> // 只负责输入，将数据结果给父组件
  <List> // 只负责显示列表，从父组件获取数据
    <ListItem/> // 显示单条数据，删除，切换完成状态
    <ListItem/>
    <ListItem/>
  </List>
</App>
```

代码演示

#### React显示Todo List

- state数据结构设计
- 组件设计组件通讯
- 结合redux

### Vue实现购物车

- data数据结构设计
- 组件设计和组件通讯
- 代码演示

state数据结构

```js
{
  productionList: [
    {
      id: 1,
      title: "商品1"，
      price: 10,
    }
  ],
  cartList: [
    {
      id: 1,
      quantity: 1
    },
  ]
}
```

组件设计

```js
<APP> // 管理所有数据
  <ProductionList> // 商品列表
    <ProductionListItem/>
    <ProductionListItem/>
    <ProductionListItem/>
  </ProductionList>
  <CartList> // 购物车列表和总价
    <CartItem>
    <CartItem>
  </CartList>
</App>
```

## Webpack

- webpack已是前端打包构建的不二选择
- 每日必用，面试必考
- 成熟的工具，重点在于配置和使用，原理并不高优

讲解范围

- 基本配置
- 高级配置
- 优化打包效率
- 优化产出代码
- 构建流程概述
- babel

回顾之前的webpack面试题

- 前端代码为何要进行构建和打包
- module chunk bundle分别什么意思，有何区别？
- loader和plugin的区别？
- webpack如何实现懒加载？
- webpack常见性能优化
- babel-runtime和babel-polyfill的区别

webpack基本配置

候选人是cli工程师

- Vue-cli create-react-app
- 常用上述脚手架，而不会自己配置webpack?
- 则面试不会通过

基本配置

- 拆分配置和merge (common, dev, prod)
- 启动本地服务 (proxy)
- 处理ES6
- 处理样式
- 处理图片
- （模块化）

[contentHash:8]: 如果内容变了，hash就会变；如果内容不变，就会命中缓存。

- 基本配置只能做demo，不能做线上项目
- 面试考察基本配置，只是为了快速判断你是否用过webpack
- 以下高级配置，也是通过面试的必备条件

webpack高级配置

- 多入口
- 抽离css文件（从js文件中）
- 抽离公共代码 (splitChunk)
- **懒加载**
- 处理JSX
- 处理Vue

#### module chunk bundle的区别 （结合一些使用去说）

- module - 各个源码文件， webpack中一切皆模块
- chunk - 多模块合并成的，如entry import() splitChunk
- bundle - 最终的输出文件

#### webpack性能优化

- 大厂必考 & 社区热议话题
- 优化打包构建速度 - 开发体验和效率
- 优化产出代码 - 产品性能

#### webpack性能优化 - 构建速度

- 优化`babel-loader`
- IgnorePlugin
- noParse
- happyPack
- ParallelUglifyPlugin
- 自动刷新
- 热更新
- DllPlugin

优化`babel-loader`

```js
{
  test: /\.js$/,
  use: ['babel-loader?cacheDirectory'] // 开启缓存
  include: path.resolve(__dirname, 'src') // 明确范围
  // // 排除范围， include 和 exclude 两者选一个即可
  // exclude: path.resolve(__dirname, 'node_modules')
}
```

IgnorePlugin避免引入无用模块

- import moment from 'moment'
- 默认会引入所有语言JS代码，代码过大

```js
// 忽略 moment 下的 /locale 目录
new webpack.IgnorePlugin(/\.\/local/, /moment/)
```

noParse避免重复打包

```js
module.export = {
  module: {
    // 独完整的 `react.min.js` 文件就没有采用模块化
    // 忽略对 `react.min.js` 文件的递归解析处理
    noParse: [/react\.min\.js$/]
  }
}
```

IgnorePlugin和noParse的区别

共同点：优化产出效率和执行体积

- IgnorePlugin直接不引人，代码中没有
- noParse引入，但不打包

happyPack 多进程打包

- JS单线程，开启多进程打包
- 提高构建速度（特别是多核CPU）
  
ParallelUglifyPlugin 多进程压缩 JS

- webpack内置Uglify工具压缩JS
- JS单线程，开启多进程压缩更快
- happyPack同理

关于开启多进程

- 项目较大，打包较慢，开启多进程能提高速度
- 项目较小，打包很快，开启多进程会降低速度（进程开销）
- 按需使用

自动刷新

文件修改后，页面会自动刷新

```js
module.export = {
  watch: true, // 开启监听，默认为 false;
  // 注意，开启监听之后，webpack-dev-server 会自动开启刷新浏览器!!!
  // 监听配置
  watchOptions: {
    ignored: /node_modules/, // 忽略哪些
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    aggregateTimeout: 300, // 默认为 300ms
    // 判断文件是否发生变化是通过不停的询问系统指定文件有没有变化实现的
    poll: 1000 // 默认每隔1000毫秒询问一次
  }
}
```
>devSever就可以自动开启了

热更新

- 自动刷新：整个网页全部刷新，速度较慢，状态会丢失
- 热更新：新代码生效，网页不刷新，状态不丢失

Dllplugin 动态链接库插件

- 前端框架如Vue React，体积大，构建慢
- 较稳定，不常升级版本
- 同一个版本只构建一次即可，不用每次都重新构建
- webpack已内置DllPlugin支持
- DllPlugin - 打包出dll文件
- DllReferencePlugin - 使用dll文件

webpack优化构建速度（可用于生产环境）

- 优化babel-loader
- IgnorePlugin
- noParse
- happyPack
- ParalleUglifyPlugin

webpack优化构建速度（可用于生产环境!）

- 自动刷新
- 热更新
- DllPlugin

webpack 性能优化 - 产出代码

- 体积更小
- 合理分包，不重复加载
- 速度更快，内存使用更少

怎么做到上述这些优化

- 小图片base64编码
- bundle加hash
- 懒加载
- 提取公共代码
- IngorePlugin
- 使用CDN加速
- 使用productino
- Scope Hosting

使用production

- 自动开启代码压缩
- Vue React等会自动删掉调试代码（如开发环境的warning）
- 启动Tree-shaking

Tree-shaking

>ES6 Module才能让 tree-shaking 生效, commonjs就不行

#### ES6 Module和Common.js区别（这部分没有讲清楚）

- ES6 Module静态引用，编译时引用
- Commonjs动态引用，执行时引入
- 只有ES6 Module才能静态分析，实现Tree-shaking


commonjs

```js
let apiList = require('../config/api.js')
if (isDev) {
  // 可以动态引入，执行时引入
  apiList = require('../config/api_dev.js')
}
```

ES6 Module

```js
import apiList from '../config/api.js')
if (isDev) {
  // 编译时报错，只能静态引入
  import apiList from '../config/api_dev.js')
}
```

#### Scope Hosting

- 代码体积更小
- 创建函数作用域更少
- 代码可读性更好

插件：ModuleConcatentationPlugin

```js
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

module.export = {
  resolve: {
    // 针对npm中的第三方模块优先采用，jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  plugin: {
    // 开启 Scope Hoisting
    new ModuleConcatenationPlugin(),
  }
}
```

```js
// hello.js
export default 'Hello shaungyue'

// main.js
import str from './hello.js'
console.log(str)
```

babel：解析ES6+语法到ES5，提高浏览器兼容性

- 前端开发环境必备工具
- 同webpack，需要了解基本的配置和使用
- 面试考察概率不高

内容

- 环境搭建 & 基本配置
- babel-polyfill
- babel-runtime

#### babel环境搭建

- 环境搭建
- .babelrc配置
- presets和plugins

>presets(@babel/presets-env)代表了一堆预设好的plugins

#### babel-polyfill

- 什么是polyfill (浏览器兼容的补丁)
- core-js和regenerator (core-js所有新语法的poly-fill, 有一个不支持，就是ES6 generator函数（处理异步）， 被async/await代替， regenerator库就支持了generator函数的语法)
- babal-polyfill就是两者的集合
- Babal 7.4 之后弃用 babel-polyfill
- 推荐直接使用core-js和regenerator
- 但并不影响面试会考察它

babel-polyfill只关心语法，符合ES5规范，并不关心API是否可用，不处理模块化（模块化是webpack的工作）

babel-polyfill按需引入

- 文件较大
- 只有一部分功能，无需全部引入
- 配置按需引入

.babelrc

````json
{
  "presets": {
    [
      "@babel/presets-env",
      {
        "useBuildIns": "usage", //按需引入
        "corejs": 3 // 版本号
      }
    ],
    "plugins": [

    ]
  }
}
```

babel-polyfill的问题

- 会污染全局环境
- 如果做一个独立的web系统，则无碍
- 如果做一个第三方lib，则会有问题

安装

```json
"devDependencies": {
  "@babel/plugin-transform-runtime": "^7.7.5"
}
"dependencies": {
  "@babel/runtime": "^7.7.5"
}
```

````json
{
  "presets": {
    [
      "@babel/presets-env",
      {
        "useBuildIns": "usage", //按需引入
        "corejs": 3 // 版本号
      }
    ],
    "plugins": [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
}
```

演示babel-runtime

babel总结

- 环境搭建 & 基本配置
- babel-polyfill
- babel-runtime

1. 前端为何要进行打包和构建？

- 体积更小（Tree-shaking, 压缩，合并），加载更快
- 编译高级语言或语法（TS，ES6+，模块化，scss）
- 兼容性和错误检查（Polyfill，postcss，eslint）
- 统一，高效的开发环境
- 统一的构件流程和产出标准
- 集成公司构建规范（提测，上线等）

2. module chunk bundle的区别 （结合一些使用去说）

- module - 各个源码文件， webpack中一切皆模块
- chunk - 多模块合并成的，如entry import() splitChunk
- bundle - 最终的输出文件

3. loader和plugin的区别

- loader模块转换器，如less -> css
- plugin扩展插件，如HtmlWebpackPlugin

常见的loader和plugin看一下

4. babel和webpack的区别

- babel - JS新语法编译工具，不关心模块化
- webpack - 打包构建工具，是多个loader plugin的集合

5. 如何产出一个lib

- 参考webpack.dll.js
- output.library

```js
output: {
  // lib 的文件名
  filename: 'lodash.js',
  // 输出 lib 到 dist 目录下
  path: distPath,
  // lib 的全局变量名
  library: 'lodash'
}
```

6. babel-polyfill和babel-runtime的区别

- babel-polyfill会污染全局
- babel-runtime不会污染全局
- 产出第三方lib要用babel-runtime

7. webpack如何实现懒加载

- import()
- 结合Vue React异步组件
- 结合Vue-router React-router异步加载路由

8. 为何Proxy不能被Polyfill？

哪些可以polyfill?

- Class可以用function模拟
- Promise可以用callback来模拟

但Proxy的功能用Object.defineProperty无法模拟 

## 项目流程

- 项目分多人，多角色参与
- 项目分多阶段
- 项目需要计划和执行

### 为何考察项目流程

- 确定你真正参与过实际项目（而不是个人项目，毕业设计等）
- 确定你能真正解决项目的问题
- 看你能否独立承担起一个项目（作为项目负责人）

看几个面试题

- PM想在项目开发过程中增加需求，该怎么办？
- 项目延期了该怎么办？
- 你如何保证项目质量？

如何讲解

- 项目的所有角色
- 项目的全流程
- 各个阶段中的常见问题

#### 项目角色

1. PM 产品经理 （前端开发的页面是什么样子的，流程是什么样子的，点击按钮是什么样子的，原型图）
2. UE 视觉设计师 （规范的视觉设计图，前端开发工程师）
3. FE 前端开发（）
4. RD 后端开发
5. CRD 移动端开发
6. QA测试人员

#### 完整项目流程

需求分析（各个角色） -> 技术方案设计（FE RD CRD） -> 开发（FE） -> 联调 （FE RD CRD） -> 测试（FE QA） -> 上线（FE）

Stage1 - 需求分析

需求人员和开发人员是矛盾的

- 了解背景
- 质疑需求是否合理
- 需求是否闭环
- 开发难度如何
- 是否需要其他支持
- 不要急于给排期

Stage2 - 技术方案设计

- 求简，不过度设计
- 产出文档
- 找准设计重点
- 组内评审
- 和RD CRD沟通
- 发出会议结论

Stage3 - 开发 （你将如何保证项目质量？）

- 如何反馈排期（预留一个buffer, 大约1/4的时间）
- 符合开发规范
- 写出开发文档
- 及时单元测试
- Mock API
- Code Review

Stage4 - 联调

- 和RD CRD技术联调
- 让UE确定视觉效果
- 让PM确定产品功能

PM加需求怎么办？

- 不能拒绝，走需求变更流程即可
- 如果公司有规定，则按规定走
- 否则，发起项目组和leader的评审，重新评估排期

Stage5 - 测试

- 提测发邮件，抄送项目组 （一般PM发）
- 测试问题要详细记录
- 有问题及时沟通，QA和FE天生信息不对称

“我电脑没有问题”

- 不要这样说话！
- 当面讨论，让QA帮你复现
- 如果需要特定设备才能复现，让QA提供设备

Stage6 - 上线

- 上线之后及时通知QA回归测试
- 上线之后及时同步给PM和项目组
- 如有问题，及时回滚。先止损，再排查问题。

#### 项目沟通

- 多人协作，沟通是最重要的事情
- 每日一沟通（如站会），有事说事，无事报平安
- 及时识别风险，及时汇报

总结

- 为何考察 - 确定项目经验
- 项目分多阶段
- 项目分计划和执行
- 讲解内容
- 项目流程阶段
- 遇到的问题

回答面试题

- PM想在项目开发过程中增加需求，该怎么办？
- 项目即将延期了，该怎么办？
- 你将如何保证项目质量？

