## 1-1 导学

- 3 年工作经验，面试必考设计
- 成为项目技术负责人，设计能力是必要基础
- 从写好代码，到做好设计，设计模式是必经之路

### 课程概述

- 做什么？- 讲解 JS 设计模式
- 哪些部分？- 面向对象，设计原则，设计模式
- 技术？- 面向对象，UML类图，ES6

### 知识点介绍

#### 面向对象

- ES6 class 语法
- 三要素
- UML 类图

#### 设计原则

- 何为设计？
- 5大设计原则
- 从设计到模式

#### 设计模式

- 分优先级讲解
- 结合核心技术
- 结合框架应用

#### 综合示例

- 设计方案
- 代码演示
- 设计模式对应

### 课程安排

#### 面向对象

- 使用 webpack 和 babel 搭建 ES6 编译环境
- ES6 class 面向对象的语法
- 面向对象三要素：继承，封装，多态

#### 设计原则

- 通过《Linux/Unix设计哲学》理解何为设计
- 5大设计原则分析和理解，以及代码演示
- “设计模式” -> 从“设计”到“模式”

#### 设计模式

- 概述：创建型，结构型，行为型
- 常用设计模式，详细讲解，结合经典使用场景
- 非常用设计模式，理解概念，示例演示
- 有主有次，掌握重点

#### 综合示例

- 用jQuery实现一个简单的购物车
- 设计分析，画UML类图
- 代码演示
- 总结使用的7种设计模式

#### 讲授方式

- 先基础后实践，先“设计”后“模式”
- 重点，常用的设计模式，配合经典使用场景
- 综合示例，演示设计模式如何使用
- 用JS的方式讲解面向对象和设计模式

#### 课程收获

- 面向对象思想，UML类图
- 5大设计原则，23种设计模式
- 能应对前端面试中相关的面试题
- 提升个人设计能力

#### 学习前提

- 了解面向对象，能熟练使用jQuery或类似工具库
- 有 ES6 语法基础，用过 nodejs 和 npm 环境
- 了解 vue 和 React (至少看过文档，做过 demo)

#### 重点提示

- 本课程讲解设计模式，不是实战项目也不是源码分析
- 23 种设计模式不是都常用，分清主次
- 设计模式在 JS 和 Java 中的讲解方式有区别
- 不适合刚入门编程的同学，参考上文的学习前提

## 2-1 搭建开发环境1

- 搭建开发环境
- 什么是面向对象
- UML类图
- 总结

### 搭建开发环境

- 初始化npm环境
- 安装webpack
- 安装webpack-dev-server
- 安装babel

## 2-5 什么是面向对象

### 什么是面向对象

- 概念
- 三要素：继承，封装，多态
- JS的应用举例
- 面向对象的意义

面向对象的概念

- 类
- 对象（实例）

```js
// 类，即模板
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
```

```js
// 创建实例
let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

// 创建实例
let wang = new People('wang', 21)
wang.eat()
wang.speak()
```

## 2-6 面向对象-继承

### 三要素

- 继承，子类继承父类
- 封装，数据的权限和保密
- 多态，统一接口不同实现

#### 继承

```js
// 父类
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

// 子类继承父类
class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alter(`${this.name} study`)
    }
}

// 实例
let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
console.log(xiaoming.number)
xiaoming.eat()
```

## 2-7 面向对象-封装

### 封装

- public 完全开放
- protected 对子类开放
- private对自己开放
- (ES6尚不支持，可以用Typescript来演示)

public，protect和private是为了定义属性

```ts
// 父类
class People {
    name // 默认 public
    age
    protected weight 
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        alert(`${name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

// 子类继承父类
class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alter(`${this.name} study`)
    }
}
```