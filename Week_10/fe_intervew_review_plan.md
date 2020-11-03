## 十一月复习计划

### 复习安排

1. 上午看资料
2. 下午看新题
3. 晚上写代码

#### Scss

- [史上最全scss教程](https://juejin.im/post/6844903922394464269)

#### 算法

- [] 排序算法：冒泡，选择，插入，归并，快速，堆

#### Vue

- [] Vue todo list
- [] v-model的实质

- [Vue3.0 前的 TypeScript 最佳入门实践](https://juejin.im/post/6844903865255477261#heading-20)
- [vue源码学习总结 prop data method computed 的命名冲突处理策略](https://blog.csdn.net/lyt_angularjs/article/details/105121406)

#### Web

- [] 从浏览器输入url到页面器渲染完成
- ssh / https 连接的整个过程
- websocket 工作原理和实现、难点

#### Git

- [] Git课程看完


### 知识点记录

Vue组件引用的三个条件

1. 子组件通过 export default 导出
2. 父组件通过 import 导入子组件 *.vue
3. 组件通过 components 属性挂载到父组件上

生产环境知识点

如何使用eslint保存时自动纠错？

## v-model修饰符

1. .lazy: 在输入框中，v-model默认是在input事件中同步输入框中的数据，使用修饰符.lazy会转变为在输入框失焦或者按下回车后更新
2. .number: 将输入类型转为数字
3. .trim: 输入内容去除前后空格

## Vue3 中 tsconfig.json 中各个配置的含义

```json
// tsconfig.json
{
  "compilerOptions": {
    // this aligns with Vue's browser support
    "target": "es5",
    // this enables stricter inference for data properties on `this`
    "strict": true,
    // if using webpack 2+ or rollup, to leverage tree shaking:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```

#### ref 的工作原理和在哪个生命周期产生作用


#### ES6 模块与 CommonJS 模块的差异


ES6 模块与 CommonJS 模块完全不同。它们有两个重大差异。

- CommonJS 输出是值的拷贝，即原来模块中的值改变不会影响已经加载的该值，ES6静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 加载的是整个模块，即将所有的接口全部加载进来，- ES6 可以单独加载其中的某个接口（方法），
- CommonJS this 指向当前模块，ES6 this 指向undefined
- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。

在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”

```js
// CommonJS模块
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。

除了静态加载带来的各种好处，ES6 模块还有以下好处。

- 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
- 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

严格模式主要有以下限制。

- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（比如protected、static和interface）

另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

```js
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```

上面代码输出变量foo，值为bar，500 毫秒之后变成baz

这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新，详见下文《Module 的加载实现》一节。

最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

```js
import {a} from './xxx.js'

a = {}; // Syntax Error : 'a' is read-only;
```

上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。

```js
import {a} from './xxx.js'

a.foo = 'hello'; // 合法操作
```

>感觉和const一样

注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

```js
foo();

import { foo } from 'my_module';
```

上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

```js
// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
```


最后，import语句会执行所加载的模块，因此可以有下面的写法。

```js
import 'lodash';
```

上面代码仅仅执行lodash模块，但是不输入任何值。

如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

```js
import 'lodash';
import 'lodash';
```

目前阶段，通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，但是最好不要这样做。因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。下面的代码可能不会得到预期结果。

```js
require('core-js/modules/es6.symbol');
require('core-js/modules/es6.promise');
import React from 'React';
```

```js
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
```

注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

```js
import * as circle from './circle';

// 下面两行都是不允许的
circle.foo = 'hello';
circle.area = function () {};
```

- [export default 命令](https://es6.ruanyifeng.com/#docs/module#export-default-%E5%91%BD%E4%BB%A4)

```js
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
```

改写成这样好理解了

```js
// 正确
export var a = 1;

// 正确
var a = 1;
export var default = a;

// 错误
export var default = var a = 1;

// 正确
export default 42;

// 报错
export 42;

// 报错
var m = 1;
export m;

// 正确
export var m = 1;

// 正确
var m = 1;
export {m};

// 正确
var n = 1;
export {n as m};
```

如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。

```js
import _, { each, forEach } from 'lodash';
```

假设有一个circleplus模块，继承了circle模块。

```js
// circleplus.js

export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
  return Math.exp(x);
}
```

上面代码中的export *，表示再输出circle模块的所有属性和方法。注意，export *命令会忽略circle模块的default方法。


```js
// main.js

import * as math from 'circleplus';
import exp from 'circleplus';
console.log(exp(math.e));
```
上面代码中的import exp表示，将circleplus模块的默认方法加载为exp方法。


前面介绍过，import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行（import命令叫做“连接” binding 其实更合适）。所以，下面的代码会报错。

```js
// 报错
if (x === 2) {
  import MyModual from './myModual';
}
```

上面代码中，引擎处理import语句是在编译时，这时不会去分析或执行if语句，所以import语句放在if代码块之中毫无意义，因此会报句法错误，而不是执行时错误。也就是说，import和export命令只能在模块的顶层，不能在代码块之中（比如，在if代码块之中，或在函数之中）。

这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。如果import命令要取代 Node 的require方法，这就形成了一个障碍。因为require是运行时加载模块，import命令无法取代require的动态加载功能。

ES2020提案 引入import()函数，支持动态加载模块。

```js
import(specifier)
```

上面代码中，import函数的参数specifier，指定所要加载的模块的位置。import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。


### commonJS 和 es6模块化 区别：

```js
es6 {
　　export : '可以输出多个，输出方式为 {}' ，
　　export default : ' 只能输出一个 ，可以与export 同时输出，但是不建议这么做'，
　　解析阶段确定对外输出的接口，解析阶段生成接口，
　　模块不是对象，加载的不是对象，
　　可以单独加载其中的某个接口（方法），
　　静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变，
　　this 指向undefined
}
commonJS {
　　module.exports = ... : '只能输出一个，且后面的会覆盖上面的' ，
　　exports. ... : ' 可以输出多个'，
　　运行阶段确定接口，运行时才会加载模块，
　　模块就是对象，加载的是该对象，
　　加载的是整个模块，即将所有的接口全部加载进来，
　　输出的是值的拷贝，即原来模块中的值改变不会影响已经加载的该值，
　　this 指向当前模块
}
```

1. commonJS 模块输出的是一个值的拷贝，ES6模块输出的是值的引用
2. commonJS 模块是运行时加载，ES6 模块是编辑时输出接口
3. commonJS 加载全部模块，运行时通过对象属性查找，ES6模块编译时确定加载模块，可按需加载
4. commonJS 可以在运行过程中按需加载，ES6模块在编译时确定，不能运行时按需加载
5. commonJS 可以在块级作用域中加载，ES6模块不能放在块级作用域中
6. CommonJS其实加载的是一个对象，这个对象只有在脚本运行时才会生成。ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

## 11月4日

上午看完

- [] class基本用法和class的继承
- [] 弄懂所有排序算法
- [] 写完Vue2.x和Vue3.0的两个todo List版本

## 11月5日

- [] promise和setTimeout作用域复杂情况
- [] 看HTML/CSS两个部分的视频