## 1-1 课程介绍（导学）

### 配合新版全家桶

- 路由 vue-router
- 状态管理 vuex
- 脚手架工具 vue-cli

### 前后端分离开发的难点

- 权限管理
- 路由规则
- 全局 store 结构设计
- 前端数据缓存设计与实现

1. 组件开发能力：使用一系列由浅入深的常用组件的开发为脉络
2. 真实的后端环境：告别 Mock 环境，直接使用线上真实数据

### 课程收获

- 熟练掌握 Vue3 新特性和 Typescript 基础以及进阶用法
- 掌握 Vue3 基础组件的分析开发和进阶
- 掌握复杂项目的分析，设计，实现的开发流程
- 激发学生分析问题和自主解决问题的潜力和思考方式


## 2-1 什么是 Typescript

2019年 typescript 大火

### 编程语言的类型

- 动态类型语言 (Dynamically Typed Language)
  - 在运行期间，进行数据类型检查的语言
  - **执行阶段决定变量所有的数据类型**
  - 使用动态类型语言进行编程的时候，我们不用给变量指定数据类型
  - 同一个变量可以赋值为数字或字符串，非常灵活
  - Javascript代码只有在运行时，才能发现里面的错误，有点危险。所以，静态类型代码检测器，eslint在编码期间提示一下有问题的地方
- 静态类型语言 (Statically Typed Language)
  - 数据类型检查发生在编译阶段
  - **编译阶段决定变量所有的数据类型**
  - 写程序要提前声明变量的数据类型 C/C++/C#/Java

- 强类型语言：不允许改变变量的数据类型，除非进行强制类型转换
- 弱类型语言：变量可以被赋予不同的数据类型

## 2-2 为什么要学习 typescript

### Typescript 是什么

- Javascript that scales（Javascript超集）
- 静态类型风格的类型系统
- 从 es6 到 es10 甚至是 esnext 的语法支持
- 兼容各种浏览器，各种系统，各种服务器，完全开源

### 为什么要使用 Typesccrpt

#### 程序更容易理解

- 问题：函数或者方法输入输出的参数类型，外部条件等
- 动态语言的约束：需要手动调试等过程
- “这段代码是干嘛的？” 有了 Typescript：代码本身就可以回答上述问题

#### 效率更高

- 在不同的代码块和定义中进行跳转
- 代码自动补全，接口提示

#### 更少的错误

- 编译期期间能够发现大部分错误
- 杜绝一些比较常见的错误

#### 非常好的包容性

- 完全兼容 Javascript
- 第三方库可以单独编写类型文件
- 大多数项目都支持 Typescript

### 一点小缺点

- 增加了一些学习成本
- 短期内增加了一些开发成本

## 2-4 原始数据类型和 Any 类型

```ts
let isDone: boolean = false
let age: number = 10
let firstName: string = 'viking'
let message: string = `Hello, ${firstName}`

let u: undefined = undefined
let n: null = null

// undefined 和 null 是所有类型的子类，所有可以赋值给其他类型的变量，而不会报错

let num: number = undefined

let notSure: any = 4
notSure = 'maybe a string'
notSure = true

notSure.myName // 不会报错
notSure.getName() // 不会报错
```

## 2-5 数组和元组

```js
let arrOfNumbers: number[] = [1,2,3]
// 不允许包含除number以外的类型
arrOfNumbers = [1, 2, 3, "123"] // 报错
arrOfNumbers.push("123") // 报错

// 类数组
function test() {
    console.log(arguments)
    let arr: any[] = arguments // 报错
}

// 在ts中, arguments的类型是IAgruments，其他的类数组。如 NodeList 也有

// 元组起源于函数式编程，python里面有
let user: [string, number] = ['viking', 20]
user = ['viking', '20'] // 报错
user = ['viking', 20, true] // 报错
user.push('123') // 可以
```

## 2-6 Interface- 接口 初探

### Interface

- 对对象的形状（shape）进行描述
- Duck Typing (鸭子类型)，如果有一个东西，长得像鸭子，行为像鸭子，它就可以被认为是鸭子。动态语言的一种对象推断策略，它更关注对象如何被使用，而不是对象的类型本身。

Interface本身就像一个抽象的契约或者图纸，非常灵活，可以描述编程语言的各种类型。

Interface是不存在于Javascript中的概念，TS被编译后，interface是不会被转换过来的

```js
interface IPerson { // Interface类建议前面加I
    name: string;
    age: number;
}

let viking: Person = {
    name: 'viking',
    age: 20
    // id: 1 会报错，因为不符合 IPerson 的定义
}

interface IPerson {
    name: string;
    age？: number; // age是可选属性
}

let viking: Person = { // 不会报错
    name: 'viking'
}

// 定义只读属性
interface Person {
    readonly id: number; // readyonly 代表只读属性。它和const 的区别是，const 是用在变量上，readonly 是用在属性上
    name: string;
    age?:number;
}

let viking: Person = {
    id: 1
    name: 'viking',
    age: 20
}

viking.id = 9527 //
```

## 2-7 函数

### Function 函数

- 在 JS 中，函数是一等公民 （还有人经常提到函数式编程）

什么是一等公民呢？

函数和其他类型的对象都一样，可以传入参数，可以存入数组，可以被另外一个函数返回，可以被赋值给另外一个变量

函数由两部分组成，一个是传入的参数，一个是返回的结果

```js
function add(x:number, y:number): number {
    return x + y
}
add(1, '2') // 报错
add(1, 2, 3) // 报错

// 可选参数
function add(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

// 函数表达式
const add = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

let add2: (x: number, y: number, z?: number) => number = add // 这里的箭头是 TS 中特有的生命函数返回类型的方法

// 给上述方法加一个接口

interface ISum {
    (x: number, y: number, z?: number): number
}
let add2: ISum = add
```

## 2-8 类型推论 联合类型和 类型断言

```js
// 类型推论 (type inference)
let str = 'str'
str = 123 // 报错

// 联合类型 (union types)
let numberOrString: number | string

// 只能访问联合类型中共有的属性和方法
numberOrString.length // 报错
numberOrString.toString() // 没问题，因为 toString 方法是数字和字符串共有的属性

function getLength(input: string | number): number {
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

// type guard
function getLength2(input: string | number): number {
    if (typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}
```

## 2-9 class - 类 初次见面

### 类 Class

- 类 (Class)：定义了一切事物的抽象特点，包含了属性和方法
- 对象 (Object)：类的实例，通过 new 生成
- 面向对象 (OOP)：三大特征：封装，继承，多态
  - 封装（Encapsulation）：将数据操作的细节隐藏起来，只暴露对外的接口，外界调用端不需要，也不可能知道细节，只能通过对外提供的接口，访问该对象
  - 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特征外呢，还有一些更具体的特性。
  - 多态（Polymorphism）：由于继承产生了不同的类，对同一个继承方法可以有不同的响应

```js
// 封装
class Animal {
    constructor(name) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('lily')
console.log(sanke.run())

// 继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
conssole.log(xiaobao.bark())

// 多态
class Cat extends Animal {
    static categories = ['mammal']
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return `Meow, ${super.run()}`
    }
}
const maomao = new Cat('maomao')
console.log(maomao.run())
console.log(Cat.categories)
```

### Typescript 中的类

- Public: 修饰的属性和方法是共有的，可以在任何地方被调用
- Pravite: 修饰的属性和方法是私有的，不能在声明它类的外部调用
- Protected: 修饰的属性和方法是受保护的，允许子类访问的属性（有点像遗产，只有我和我的子女可以访问）

static 和 readonly 的区别

- static： 定义后的属性无需通过 new 构建实例，可以在 Class 上直接调用
- readonly：通过 new 生成的实例，可以通过属性访问，但禁止写入和修改内容

## 2-10 类和接口 - 完美搭档

### 类和接口

- 类不但可以对对象的形状进行描述，还可描述函数的类型。
- 接口还可以对对类的行为进行抽象

- 继承的困境：一个类只能继承自另外一个类，不同的类之间可以有一些共同的特性，可能这些特性有自己的实现，通过子类继承父类的方法很难完成
- 我们可以将这些特性提取成接口，类可以使用implements来实现接口

```js
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface Battery {
    checkBatteryStatus(): void;
}

class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

class Cellphone implements Radio, Battery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}

// 接口也可以直接继承，上面的代码可以改写成
interface Radio {
    switchRadio(trigger: boolean): void;
}

interface RadioWithBattery extends Raido {
    checkbBatteryStatus(): void
}

class Cellphone implements RadioWithBattery {
    switchRadio(trigger: boolean) {

    }
    checkBatteryStatus() {

    }
}
```

## 2-11 枚举（Enum）

常量：在执行程序时，不会被改变的值

1. 单一常量可以使用 const
2. 组合常量就需要枚举(Enum)了

```js
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up) // 0
console.log(Direction[0]) // Up
```

上面代码编译后的结果

```js
var Direction;
(function(Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 0] = "Down";
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 0] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);

// 基本原理
var Direction = {}
Direction[Direction["Up"] = 0] = "Up"
console.log(Direction) // {0: "Up", Up: 0}
```

```js
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
const value = 'UP'
if (value === Direction.Up) {
    console.log('go up!')
}
```

## 2-12 泛型（Generics） 第一部分

```js
// 第一种方式类型受限
function echo(arg: number): number {
    return arg
}

const result = echo(123)

// 第二种方式，输入参数和返回值没有受限，函数的类型推断不能流入到函数体内
function echo(arg: any): any {
    return arg
}

const result: string = echo(123)
```

**泛型 (Generics)：定义函数，接口或类的时候不预先指定具体类型，而是在使用的时候再指定类型**

```js
// 使用泛型后，确保参数和返回值都是同一类型
function echo<T>(arg: T): T {
    return arg
}

const str: stirng = 'str'
const result: string = echo(str) // result 也是 string 类型
const result = echo('str') // 类型推论可以帮助确定 result 的类型是 string
```

```js
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const result = swap(['string', 123])
```

## 泛型（Generics） 第二部分 - 约束泛型

```js
// 约束泛型传入值包含length属性
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const result = swap(['string', 123]) 

// 但这个方案并不完美，String就不支持上面的方案
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

// 带有length属性的参数，就都可以兼容了
const str = echoWithLength('str')
const str = echoWithLength({})
const str = echoWithLength('str')
```

## 2-14 泛型第三部分 - 泛型在类和接口中的使用

```js
class Queue {
    private data = [];
    push(item: number) { // 我们可以通过添加类型，来控制传入参数的类型，但是每个函数都要添加一个类型，修改起来很麻烦
        return this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}
const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

// 上面的类统一添加泛型，就可以解决这个问题
class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop()<T> {
        return this.data.shift()
    }
}
const queue = new Queue<number>()

// 接口定义泛型
interface KeyPair {
    key: T
    value: U
}

let kp1: KeyPair<number, string> = {key: 1, value: "string"}
let kp2: KeyPair<string, number> = {key: 'str', value: 1}

// 创建一个数字类型数组
let arr: number[] = [1,2,3]
let arrTwo： Array<number> = [1,2,3]
```

## 2-15 类型别名，字面量 和 交叉类型

```js
// type alias
let sum: (x: number, y: number) => number
const result = sum(1, 2)

// 上面的写法太长了，非常的不方便，可以通过类型别名改写成
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 3)
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

// literal 字面量类型
const str: 'name' = 'name'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directinos = 'Left'

// 交叉类型
interface IName {
    name: string
}
type IPerson = IName & {age: number}
let person: IPerson = { name: '123', age: 123 }
```

>类似于interface的继承(extends)，但是有区别的，这里不展开讲了

>type只是其他类型的别名，有点像快键方式。当使用交叉和组合类型的时候，可以考虑使用type。接口(interface)是duck typing的一种实现方式，是一种类型

## 2-16 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

```js
// jQuery.ts.d
declare var jQuery: (selector: string) => any;
```

```js
jQuery('#foo')
```

第三方类型声明文件

```sh
npm install --save @types/jquery
```

## 2-17 内置类型

Standard built-in object

内置对象，是根据标准(ECMAscript,DOM等)，在全局作用域(global)中存在的对象

```js
// global objects
const a: Array<number> = [1,2,3]
const data = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

// bulid-in object
Math.pow(2,2) // Math 是静态函数，不是构造函数

// DOM and BOM
let body = document.body
let allLis = document.body.querySelectorAll('li')
allLis.keys()

document.addEventListener('click', (e) => {
    e.preventDefault()
})

// Utility Types (TS独有)

// Partial<T> 类型
interface IPerson {
    name: string,
    age: number
}
let viking: IPerson = { name: 'viking', age: 20}
let viking: IPerson = { name: 'viking'} // 报错
let viking: IPerson = {} // 报错

// 改成下面这样就没有问题了
type IPartial = Partial<IPerson>
let viking2: IPerson = { name: 'viking', age: 20}
let viking2: IPerson = { name: 'viking'}
let viking2: IPerson = {}

// Omit<T> 类型
type IOmit = Omit<IPerson, 'name'>
let viking3 = { age: 20 } // 不会报错
```

## 3-1 vue3 新特性巡礼

- Vue3 支持 2 的大部分特性
- 性能提升
  - 打包大小减少41%,
  - 初次渲染快55%，更新快133%
  - 内存使用减少54% (重写虚拟DOM的实现，tree-shaking的优化)
  - 更好的Typescript支持

复杂组建的代码变得越来越难以维护，缺少一种比较干净的，在多个组件之间提取和复用逻辑的机制，现在的重用机制有一些弊端，如Mixin

### Composition API

- ref 和 reactive
- computed 和 watch
- 新的生命周期的函数
- 自定义函数 - Hooks函数

### 其他新特性

- Teleport - 瞬移组件的位置
- Suspense - 异步加载组件的新福音
- 全局 API 的修改和优化
- 更多的试验性特性

## 3-2 为什么会有 vue3

### 为什么要有Vue3

### Vue2 遇到的难题

```js
// 相关的功能会分散到不同的地方
export default {
    data() {
        return {
            filter: {}, // 过滤
            pagination: {} // 分页
        }
    },
    methods: {
        filterMethod: () => {}, // 过滤
        paginationMethod: () => {} // 分页
    },
    computed: {
        ...
    }
}
```

#### 随着复杂度上升，带来的问题

Mixin的解决方案

```js
const filterMixin = {
    data() {
        return {}
    },
    methods: {

    }
}

const paginationMixin = {
    data() {
        return {}
    },
    methods: {

    }
}

export default {
    mixins: [filterMixin, paginationMixin]
}
```

#### Mixin 的缺点

- 命名冲突
- 不清楚暴露出来变脸的作用
- 重用到其他component经常会遇到问题

#### Vue2 对于 Typescript的支持非常的有限

## 3-3 使用 vue-cli 配置 vue3 开发环境

## 3-4 项目文件结构分析和推荐插件安装

## 3-5 vue3 - ref 的妙用

## 3-7 vue3 响应式对象的新花样

- Vue官方文档：深入响应式原理
- $set

```js
Object.defineProperty(data, 'count', {
    get() {},
    set() {}
})

new Proxy(data, {
    get(key) { },
    set(key, value) { },
})
// proxy 在更高的维度进行拦截，defineProperty 监听需要知道属性名，新增的属性就无法监听了
```

## 3-8 老瓶新酒 - 生命周期

- [生命周期图示](https://v3.cn.vuejs.org/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

```sh
// mapping vue2 to vue3
beforeCreate -> use setup()
created -> use setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
activated -> onActivated
deactivated -> onDeactived
errorCaptured -> onErrorCaptured

// added
OnRenderTracked
onRenderTriggered
```

## 3-9 侦测变化 - watch

## 3-10 vue3 模块化妙用- 鼠标追踪器

## 3-11 模块化难度上升 - useURLLoader

## 3-13 Typescript 对 vue3 的加持

- defineComponent 包裹，可以自动补全
- setup可以传入props和context

## 3-14 Teleport - 瞬间移动 第一部分

弹出对话框，中间位置

遇到的问题

- Dialog 被包裹在其他组件之中，容易被干扰
- 样式也在其他组件中，容易变得非常混乱

## 3-16  Suspense - 异步请求好帮手第一部分

- 异步请求的困境
- Suspense 是 Vue3 推出的一个内置的特殊组件
- 如果使用 Suspense，要返回一个promise

## 3-17 Suspense - 异步请求好帮手第二部分

## 3-18 全局 API 修改

- Global API Change - 全局 API 修改
- Vue2 入口文件写法

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements
Vue.use(...)
Vue.mixin(...)
Vue.component(...)
Vue.directive(...)
Vue.prototype.customProperty = () => {}

new Vue({
    render: h => h(App)
}).$mount('#app')
```

直接在Vue实例的基础上修改全局状态

### Vue2 全局 API 遇到的问题

- 在单元测试中，全局配置非常容易污染全局环境 (插件在测试的过程当中非常的困难)
- 在不同的apps中，共享一份有不同配置的Vue对象，也变得非常困哪

Vue3 新的写法

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.isCustomElement = tag =>
tag.startsWith('app-')
app.use(...)
app.mixin(...)
app.directive(...)
app.config.globalProperties.customProperty = () => {}
app.mount('#app')
```

从直接修改Vue对象，到修改Vue的实例

#### 全局配置：Vue.config -> app.config

- config.productionTip 被删除
- config.ignoredElements 改名为 config.isCustomElement
- config.keyCodes 被删

#### 全局注册类 API

- Vue.component -> app.component
- Vue.directive -> app.directive
- Vue.mixin -> app.mixin
- Vue.use -> app.use


#### Global API Treeshaking

支持 ES Modules

- api具名导出
- Vue实例api变为undefined了

```js
// vue2
import Vue from 'vue'

Vue.nextTick(() => {})

const obj = Vue.observable({})

import Vue, { nextTick, observable } from 'vue'

Vue.nextTick // undefined

nextTick(() => {})

const obj = observable({})
```

## 4-1 项目起航 需求分析

### 完美的 Vue 实践项目是怎样的？

- 数据的展示 - 最好是有多级复杂数据的展示
- 数据的创建 - 可以发散出多个功能
- 组件的抽象 - 循序渐进的组件开发
- 整体状态数据结构的设计和实现
- 权限管理和控制
- 真实的后端 API

## 4-2 文件结构和代码规范

```sh
/assets
/components
    ColumnList.vue
    Dropdown.vue
    ...
/hooks
    useURLLoader.ts
    ...
/views
    Home.vue
    ...
App.vue
main.ts
store.ts
router.ts
```

代码规范：[Javascript Standard Style](https://standardjs.com/rules.html)

## 4-3 样式解决方案简介和分析

### 从好用的样式库开始

- 将 UI 划分出组件的层级
- 创建应用的静态版本

## 4-5 ColumnList 组件编码

vscode 设置 `vetur.experimental.templateInterpolationService: true`: 将 Vue 文件转换成 Typescript 文件，language server 分析 Typescript 语法，最后再把结果转换为 Vue 文件


## 4-9 Dropdown 组件添加 DropdownItem

```
const dropdownItems = {
    {'text': 'option one'},
    {'text': 'option two'}
}

<dropdown :title="" :item="dropdownItems"/>

<dropdown :title="">
    <dropdown-item>
        option one
    </dropdown-item>
    <dropdown-item disable>
        option two
    </dropdown-item>
    <dropdown-item>
        option three
    </dropdown-item>
</dropdown-item>
```

## 4-10 Dropdown 组件点击外部区域自动隐藏

- 在 mounted 时候添加 click 事件，在 unmounted 的时候将事件删除
- 拿到 Dropdown 的 DOM 元素从而判断，点击的内容是否被这个元素包含

## 5-1 web 世界的经典元素 - 表单

## 5-3 ValidateInput 第二部分 —抽象验证规则 

```html
<validate-input :rules=""/>

interface RuleProp {
    type: 'required' | 'email' | 'range' | ...
    message: string
}

export type RulesProp = RuleProp[]
```

## 5-4 ValidateInput 第三部分 — 支持 v-model

```html
// vue2 原生组件
<input v-model="val">
<input :value="val" @input="val = $event.target.value"/>

// vue2 自定义组件
<my-conponent v-model='val' />
<my-conponent :value='val' @input='val = argument[0]'>

// 非同寻常表单元素
<input type="checkbox" :checked='val' @change=''>
```

#### Vue 2 的 MyComponent 的实现

```html
// App.vue
<MyComponent v-model="val"></MyComponent>

// MyComponent input
<template>
    <input type="text" :value="value" @input="updateInput">
</template>

<script>
export default {
    props: {
        value: String
    },
    methods: {
        updateInput(e) {
            this.$emit("input", e.target.value)
        }
    }
}
</script>

// BaseCheckbox checkbox
<MyComponent v-model="checked"></MyComponent>

<template>
    <input type="checkbox" :checked="checked" @change="updateInput">
</template>

<script>
export default {
    props: {
        checked: Boolean
    },
    model: {
        prop: "checked",
        event: "change"
    },
    methods: {
        updateInput(e) {
            this.$emit("change", e.target.checked)
        }
    }
}
</script>
```

### Vue3 中的 v-model

```html
// vue3 compile 以后的结果
<my-conponent v-model='foo' />
h(Comp, {
    modelValue: foo,
    'onUpdate:modelValue': value => (foo = value)
})
```

## 5-5 ValidateInput 编码第四部分 — 使用 $attrs 支持默认属性

- inheritAttrs: false: 不希望根组件继承 attribute


## 5-6 ValidateForm 组件需求分析

```html
interface FormProps {
    submitText: string;
    submitClass: string;
    ...
}

<validate-form form-submit="onFormSubmit">
    <validate-input></validate-input>
    <validate-input></validate-input>
    <button type="submit" class="btn btn-danger">提交 Form</button>
</validate-form>

const onFormSubmit = (isValid) => {
    is (isValid) {
        // 验证通过 继续下面的逻辑
    }
}
```

- 语义化包裹， ValidateInput 组件
- 提交按钮有默认值，也可以自定义
- 当提交完毕触发特定事件供用户做下一步处理
- 难点：验证包裹的 ValidateInput 组件的结果


## 5-7 ValidateForm 编码第一部分 - 使用插槽 slot

在组件内添加自定义的内容，要使用 slot 特性


```html
<validate-form form-submit="onFormSubmit">
    // slot 1
    <validate-input></validate-input>
    <validate-input></validate-input>
    // slot 2
    <button type="submit" class="btn btn-danger">提交 Form</button>
</validate-form>
```

在不同的地方插入两个插槽：具名插槽

<slot> 元素有一个特殊的 attribute: name，可以用来定义额外的插槽。没有加name的<slot>默认值是 default

通过 v-slot 在 template 上引用，缩写为 #


## 5-8 ValidateForm 编码第二部分 - 尝试父子通讯

通过 ref 取自定义子组件的 validateInput
slot 不支持 ref 属性

## 5-9 ValidateForm 编码第三部分 - 寻找外援 mitt

## 5-10 ValidateForm 编码第四部分 - 大功告成

作业：submit 成功后，尝试清空 validate-input 里面的值（在validateForm里完成）

## 6-1 什么是 SPA（Single Page Application） 应用？

### 使用 Vue Router 开发 SPA 应用

#### 什么是 SPA？

- 一种 Web 应用程序或网站 （History API 实现 Vue-router的原理可能是考察点）
- 在和用户交互的时候，当前用户不会跳转到其他页面
- 由 JS 实现 URL 变换和动态变换 HTML 内容

#### SPA 应用的优点

- 快速，第一次下载完成静态文件，跳转不需要再次下载
- 体验好，整个交互趋于无缝，更倾向于原生应用
- 为前后端分离提供了实践场所

SPA 矿建

- ember
- Angular

Vue是一套渐进式框架，所以本体是没有路由系统的

## 6-2 vue-router 安装和使用

## 6-3 vue-router 配置路由

```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        path: '/',
        name: 'home',
        component: Home
    ]
})
const app = createApp().use(router).mount('#app')
```

## 6-4 vue-router 添加路由

Node.js URL 图

<pre></pre> HTML 标签了解一下

路由跳转的两种方式

```html
// 模板跳转
<router-link :to="{name: 'column', params: 'column.id'}"></router-link>
<router-link :to=`/column/${column.id}`></router-link>

// JS 跳转
import { useRouter } from 'vue-router'
const router = useRouter()
router.push({name: 'column', params: 'column.id'})
```

## 6-5 添加 columnDetail页面

## 6-6 状态管理工具是什么

### 全局对象的弊端

- 数据不是响应式的
- 数据修改无法追踪
- 不符合组件开发的原则

#### 状态管理工具三杰

- Vuex
- Redux
- Mobx

### 状态管理工具的基本原则

- 一个类似 object 的全局数据结构 - 称之为 store
- 只能调用一些特殊的方法来实现数据修改

## 6-7 Vuex 简介和安装

- Vuex 的核心是 Store
- store 包含应用中大多数状态 (State)

### Vuex 的特点

- 状态存储是响应式的
- 不能直接改变 store 中的状态，唯一途径就是显式地提交 (commit) mutation

```js
import { createStore } from 'vuex'
const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        add (state) {
            state.count++
        }
    }
    store.commit('add')
})
```

```js
import store from './store'
const app = createApp(App)
app.use(router).use(store).mount('#app')
```

## 6-8 Vuex 整合当前应用

### Vuex解决的问题

- 将组件树的状态层层传递
- 数据同步，需要向上触发事件完成

```js
import { useStore } from 'vuex'
import { GlobalDataProps} from '../store'

export default defineComponent({
    name: 'Home',
    components: {
        ColumnList
    },
    setup() {
        const store = useStore()
        store.state.
        return {
            list: testData
        }
    }
})
```

ES6技巧，扩展运算符展开对象

```js
let state = {}
state.user = { login:true }
state.user = { ...state.user, isLogin: true }
console.log(state.user)
// { login: true, isLogin: true }
```

## 6-10 添加新建文章页面

## 6-11 Vue router 添加路由守卫 - 前置守卫

跳转到其他页面，需要登录授权，通过导航守卫控制路由跳转

导航守卫的执行顺序是根据定义顺序控制的，类似于koa的洋葱模型，可以控制全局，子页面和组件
```js
router.beforeEach((to, from ,next) => {

})
```

## 6-12 Vue router 添加路由守卫 - 使用元信息完成权限管理

三种路由行为

- 首页：什么情况下都可以访问的
- 写文章：登录用户才可以操作
- 登录页面：用户登录后，跳转到首页

## 7-1 前后端分离开发是什么

### 前后端分离开发

#### 前端开发的上古时代

- html/jade
- Node的诞生
  - 前端工程化
  - HTML5 和 Javascript 的进化
  - React Native，微信小程序，PWA 等等

#### 前后端分离之前的开发模式

提出需求 -> 前端开发页面 -> 翻译成模板 -> 前后端对接 -> 集成遇到问题 -> 前端返工 -> 后端返工 -> 二次集成 -> 集成成功 -> 交付上线

#### 前后端分离开发模式

图

#### 前后端分离开发的优点

- 为优质产品打造精益团队
- 提升开发效率
- 完美应对复杂多变的前端需求
- 增强代码可维护性

## 7-2 RESTful API 设计理念

### 什么是 RESTful API?

```html
// endpoints
https://api.example.com/teams
https://api.example.com/players

// verbs
GET /teams: 列出所有球队
POST /teams: 新建一球队
```

#### HTTP 动词

- GET (SELECT): 从服务器取出资源（一项或多项）
- POST (CREATE): 在服务器新建一个资源
- PUT / PATCH(UPDATE): 在服务器更新资源
- DELETE (UPDATE): 删除一个资源

```js
{
    "code":0， // 状态码
    "data":,
    "msg": '请求成功'
}
```

#### 常见状态码

```js
// 200 OK - [GET]: 服务器成功返回用户请求数据
// 201 CREATED - [POST/PUT/PATCH]: 用户新建或修改数据成功
// 204 NO CONTENT - [DELETE]: 用户删除数据成功
// 401 Unauthorized - [*]: 表示用户没有权限（令牌，用户名，密码错误）
// 403 Forbidden - [*] 表示用户得到授权 (与401错误相对)，但访问是被禁止的
// 404 NOT FOUND - [*]: 用户发出的请求针对的是不存在的记录，服务器没有进行操作
```

## 7-3 使用 swagger在线文档查看接口详情

### 接口文档需要包括的点

- endpoints: 具体路径
- 使用什么样的method？
- 发送请求的具体参数
- 请求返回数据的格式

#### 确定RESTful API设计

```js
## endpoints

## parameters

### responses
**200响应**
{
    'code':0,
    'data':'',
    'msg':''
}
```

### Swagger的出现

课程 API: http://api.vikingship.xyz/public/swagger/index.html

## 7-4 axios 的基本用法和独家后端API 使用（必看）

http://apis.imooc.com/api/columns?icode={codeName}

```js
// axios全局配置
import axios from 'axios'
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
    config.params = { ...config.params, icode: `${codeName}` }
    return config
})
axios.get('/columns').then(resp => {
    console.log(resp.data)
})
// 添加额外参数
axios.get('/columns'， {key: "hello"}).then(resp => {
    console.log(resp.data)
})
```

## 7-5 后端Icode终极使用方案

```js
// 替换 baseURL
axios.defaults.baseURL = 'http://apis.imooc.com/api/'
// 下面的 icode 值是从慕课网获取的 token 值，可以在课程右侧的项目接口校验码找到
axios.interceptors.request.use(config =&gt; {
  ... 其他代码
  // get 请求，添加到 url 中
  config.params = { ...config.params, icode: '******' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '******')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '******' }
  }
  return config
})
```

## 7-6 使用vuex action 发送异步请求

Mutation 必须是同步函数，因为 Mutation 是异步请求会破坏 Vuex 的可追溯性

Actions 替换 Mutation 执行异步操作，Action 提交的是 Mutation 而不是直接变更状态

```js
mutations: {
    fetchColumns(state, rawData) {
        state.columns = rawData.data.list
    }
}
actions: {
    fetchColumns(context) {
        axios.get('/columns').then(resp => {
            context.commit('fetchColumns', resp.data)
        })
    }
}

// 调用 action
onMounted(() => {
    store.dispatch('fetchColumns')
})
```

#### 阿里云对象储存OSS

## 7-7 使用vuex action 发送异步请求第二部分

## 7-8 使用 async 和 await 改造异步请求

async和await是Promise的语法糖，让异步编写更容易被理解和阅读。

```js
// 同步代码
function hello() {
    return 'hello'
}
console.log(hello())

// 加 async
async function hello() {
    return 'hello'
}
console.log(hello()) // Promise {<resolvued>: "hello"}
hello().then(value => console.log(value)) // hello

async function hello() {
    const greeting = await Promise().resolve('hello')
    return greeting 
}
hello().then(value => console.log(value)) // hello
```

修改 axios 成 async/await 写法

```js
actions: {
    async fetchColumns({ commit }) {
        const { data } = axios.get('/columns')
        commit('fetchColumns', resp.data)
        })
    }
}
```

## 7-9 使用axios拦截器添加loading效果

```js
axios.defaults.baseURL = 'xxxx'
axios.interceptors.request.use(config => {
    store.commit('setLoading', true)
    return config
})

axios.interceptors.response.use(config => {
    store.commit('setLoading', false)
    return config
})
```

## 7-10  Loader 组件编码第一部分 - 基本实现

```css
// loading 半透明遮盖层
.loading-container {
    background: rgba(255, 255, 255, .5);
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: cnter
}
```

## 7-11 Loader 组件编码第二部分 - 使用 Teleport 进行改造

## 8-1 登录第一部分 获取token

## 8-2 jwt 的运行机制

### session/cookie

1. 浏览器 -> Post/login -> 服务器
2. 创建对应的session数据并保存
3. 浏览器 <- HTTP 200 OK/Set-Cookie:sessionid="xxx" <- 服务器 
4. 浏览器 -> Get/api/user/Cookie:sessionid="xxx" -> 服务器
5. 使用 Cookie 中的信息查看服务器中是否存在该 session 数据
6. 浏览器 <- { HTTP 200 OK/Set-Cookie:sessionid="xxx" | HTTP 401 Not authorized } <- 服务器

session/cookie 是有状态的，前后端都要保存信息，不利于服务器扩展和信息共享。解决方案是，session的数据持久化，但是工程量相对较大，而且如果持久层出现问题，整个登录系统都会出现问题

### jwt

1. 浏览器 -> Post/login -> 服务器
2. 使用 JWT 算法生成对应的 token
3. 浏览器 <- HTTP 200 OK / token: "xxx" <- 服务器
4. 浏览器 -> Get/api/user/Header: { Authorization: Bearer <token> } -> 服务器
5. JWT 反向验证对应的 token 是否正确
6. 浏览器 <- { HTTP 200 OK / {name: 'xxx'} | HTTP 401 Not authorized } <- 服务器

JWT 是无状态的

### 发送 token

```sh
-H "Authorization: Bearer token"
```

## 8-3 登录第二部分  axios 设置通用 header

登录时添加 Authorization 到 header 上

```js
axios.defaults.headers.commonn.Authorization = `Bearer ${token}`

// 异步按顺序执行，使用组合 action
loginAndFetch({ dispatch }, loginData) {
    return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
    })
}
```

## 8-4 登录第三部分 持久化登录状态

1. 初始化 store token: localStorage.getItem('token') (App 第一次加载)
2. 判断 token 是否存在，并且用户还未登录
3. 满足条件，设置 Authorization 头，并且发送 fetchCurrentUser 请求
4. 请求成功，显示用户登录信息
5. 显示错误提示，清空 localStorage token

## 8-5 通用错误处理

```js
// axios全局拦截错误
axios.interceptors.response.use(function (response) {
    return response;
}, function(error) {
    return Promise.reject(error);
})
```

## 8-7 Message 组件改进为函数调用形式

```html
<template>
    <Message type="></Message>
</template>

createMessage('hello', 'error')
```

## 8-8 作业：注册页面的编写

## 9-1 上传组件需求分析

1. beforeUpload
2. uploading
3. fileUploaded / uploadedError

<uploader 
    action="https://upload-me"
    beforeUpload=""
    @uploading=""
    @fileUploaded=""
    @uploadedError
>
    <Button/>
    <template #upload></template>
    <template #loading></template>
</Button>

两种上传方式

- form表单(enctype="multipart/form-data")
- ajax异步请求

## 9-3 (打点 时间) Uploader 组件第一部分

## 9-5 Uploader 组件第三部分：自定义模版

## 9-6 改进路由验证系统

## 9-9 作业 完成文章详情页

## 11-1 可以优化的两个点

Normalizing State Shape

## 12-1 生产环境和开发环境的异同

开发环境

- 有尽量丰富的信息帮助程序员定位问题
- 使用本地的数据或者 mock 数据
- 开发服务器提供各种便利的功能

生产环境

- 尽量消除程序错误和调试信息
- 使用上线真实数据
- 访问速度是第一要务

## 12-3 服务器的概念

### 什么是服务



# 3-1 核心Composition API介绍(16:30)

### Vue 获取 input 数据的两种方案

方案一： v-model

```html
<template>
  <div class="hello">
    <input type="text" v-model.number="num1">
    <span>+</span>
    <input type="text" v-model.number="num2">
    <span>+</span>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      num1: 0,
      num2: 0
    }
  },
  computed: {
    result () {
      return parseInt(this.num1) + parseInt(this.num2)
    }
  }
})
</script>
```

方案二： ref

```html
<template>
  <div class="hello">
    <input type="text" ref="num1" @keyup="add()">
    <span>+</span>
    <input type="text" ref="num2" @keyup="add()">
    <span>+</span>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    add () {
      this.result = parseInt(this.$refs.num1.value) + parseInt(this.$refs.num2.value)
    }
  }
})
</script>
```

Vue3 中使用

方案一：ref

```html
<template>
  <div class="hello">
    <input type="text" v-model.number="num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model.number="num2" @keyup="add()">
    <span>+</span>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const num1 = ref('0')
    const num2 = ref('0')
    const result = ref(0)
    function add () {
      result.value = (+num1.value) + (+num2.value)
    }
    return {
      num1,
      num2,
      result,
      add
    }
  }
})
</script>
```

方案二： reactive

```html
<template>
  <div class="hello">
    <input type="text" v-model.number="num1" @keyup="add()">
    <span>+</span>
    <input type="text" v-model.number="num2" @keyup="add()">
    <span>+</span>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const state = reactive({
      num1: '0',
      num2: '0',
      result: 0
    })
    function add () {
      state.result = (+state.num1) + (+state.num2)
    }
    return {
      ...toRefs(state),
      add
    }
  }
})
</script>
```

再用 computed 再改造一下

```html
<template>
  <div class="hello">
    <input type="text" v-model.number="num1">
    <span>+</span>
    <input type="text" v-model.number="num2">
    <span>+</span>
    {{ result }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const state: any = reactive({
      num1: '0',
      num2: '0',
      result: computed(() => (+state.num1) + (+state.num2))
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
```

Vue3 如何传递进行父子组件通信

```html
// 父组件
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @sendMsg="handler" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const handler = (value: number) => {
      console.log('setup -> value', value)
    }
    return {
      handler
    }
  }
})
</script>
```

```html
// 子组件
<template>
  <div class="hello">
    <input type="text" v-model.number="num1">
    <span>+</span>
    <input type="text" v-model.number="num2">
    <span>+</span>
    {{ result }}
    <button type="button" @click="clickEvent()">emit event</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props, { emit }) {
    const state: any = reactive({
      num1: '0',
      num2: '0',
      result: computed(() => (+state.num1) + (+state.num2))
    })
    const clickEvent = () => {
      console.log('click')
      // this.$emit('child-event', payload)
      emit('send-msg', toRefs(state.result))
    }
    return {
      ...toRefs(state),
      clickEvent
    }
  }
})
</script>
```

尽量不要混用 vue2.x和vue3 中的生命周期函数，如 mounted。

Vue3中的生命周期

```js
setup () {
    // 组件生成挂载到DOM上触发仅一次
    onMounted(() => {
        console.log("mounted!")
    })
    // 组件刷新（如事件绑定）触发
    onMounted(() => {
        console.log("updated!")
    })
    // 切换路由无缓存触发
    onUnmounted(() => {
        console.log("unmounted!")
    })
    // 帮助查看数据绑定过程，通过e和debugger
    // 会被触发很多次
    onRenderTracked((e) => {
        debugger
        console.log("renderTracked!" + e)
    })
    //
    onRenderTriggered(() => {
        console.log("renderTriggered!")
    })
}
```

eslint 和 prettier 保存前美化代码

- [VS Code保存代码自动按eslint格式fix](https://my.oschina.net/u/4381446/blog/4260685)

- [vue项目实现保存时按eslint规则自动格式化代码格 使用vue-cli 3+构建的](https://blog.csdn.net/k250119101/article/details/104246399)

- [前端进阶积累](http://obkoro1.com/web_accumulate/accumulate/tool/Eslint%E8%87%AA%E5%8A%A8%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF.html#_1-%E5%AE%89%E8%A3%85vscode%E7%9A%84eslint%E5%92%8Cvetur%E6%8F%92%E4%BB%B6)

在 Vue CLI 项目中添加
```js
// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  }
```


### Vite 是什么？

Vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，在生产环境下基于 Rollup 打包。

> Vite 只支持 Vue3.0，不向前兼容

它主要具有一下特点：

- 快速的冷启动
- 即时的模块热更新
- 真正的按需编译

原理

ESM: script module 是 ES 模块在浏览器端的实现，目前主流的浏览器都已经支持。其最大的特点是在浏览器端使用 export、import 的方式导入和导出模块，在 script 标签里设置 type="module"