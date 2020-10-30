尝试用配置一个Vue3.0的通用开发环境

- Vue3.x
- Vue cli 4.x
- Vite
- Webpack

## 为什么要使用 Vue3 呢

- 与 Vue2.x相比，mount 50%提升，内存占用小120%
- 核心代码+Composition API: 13.5kb, 最小11.75kb
- 所有Runtime:22.5kb（Vue2.x是32kb）

Vue3.0 带来的变化

- 按需加载 & 组合 API
- TS支持，新增：Fragment, Teleport, Suspense
- 性能提升1.3 ~ 2x

### 按需加载

- 基础： Virtual DOM, 响应式算法
- 非常用功能，按需加载，e.g. v-model, Transition

### Compiler 原理篇

[Vue 3 Template Explorer](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup%22%2C%22foo%22%3A%22setup%22%2C%22bar%22%3A%22props%22%7D%7D%7D)

- [vue3的一些新特性](https://zhuanlan.zhihu.com/p/166100143)
- [Vue3 模板编译原理](https://zhuanlan.zhihu.com/p/181505806)

编译方面的优化：

- diff方法优化
- hoistStatic 静态提升
- cacheHandlers 事件侦听器缓存 (享元模式)
- ssr渲染

结论

- 静态node不再做更新处理(hoistStatic -> SSR优化)
- 静态绑定的class, id不再做更新处理
- 结合打包Hint，进行更新分析（动态绑定）
- 事件监听Cache缓存处理（cacheHandlers）
- hoistStaic自动针对多静态节点进行优化，输出字符串
- 按需加载

Compiler总结

- Virtual DOM机制调整
- 内存优化，更少的占用
- 按需加载，更灵活的组件化

### Vue 组合式 API

- watchEffect: 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数

1. watch 和 watchEffect 的区别？

- watch 就等同于 Vue2.x 中的 watch，它会去具体的去监听某一个变量
- watchEffect 会监听这个函数里面和它相关的函数的变量，当里面任意变量发生变化时，会重新执行该函数

影响面： watchEffect > computed > watch
监听面： computed > watchEffect > watch

>看官方网站的概述视频

Composition API 的优点

- 相同逻辑的代码写在同一个地方
- 方便代码复用，代替Vue2.x的mixin

## 查看Vue-cli方式

1. --mode 指定环境模式 (默认值：development)
2. 运行命令，在终端输出：
    - 开发环境：npx vue-cli-service inspect --mode development
    - 生产环境：npx vue-cli-service inspect --mode production
3. 运行命令，将输出导入到 js 文件：
    - 开发环境：npx vue-cli-service inspect --mode development >> webpack.config.development.js
    - 生产环境：npx vue-cli-service inspect --mode production >> webpack.config.production.js
4. 在产生的 js 文件开头，添加：module.exports =，然后格式化即可查看。

#### 开发环境 - Vite

#### 生产环境 - Webpack

