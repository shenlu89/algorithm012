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
```