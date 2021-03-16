
1-1 
面试流程
1面 基础知识
js 基础知识
框架基本应用

2面 高级特性、原理
框架高级特性
框架原理

3面 设计、经验
项目设计能力
工作经验和环境

通过

框架面试：vue 基本使用、vue 高级特性、vue 原理
框架面试：react 基本使用、 react 高级特性、react 原理

工具面试：webpack 配置、性能优化、babel

项目设计：状态设计、组件设计、组件通信

2-1 面试题
1. v-show v-if 区别
1. v-for 用到 key
1. 描述 vue 组件生命周期（有父子组件的情况）
1. vue 组件如何通讯
1. 描述组件渲染和更新过程
1. 双向数据绑定 v-model 实现原理

1. react 组件如何通讯
1. jsx 本质是什么
1. context 是什么，有何用途
1. shoulComponentUpdate 用途 SCU 性能优化
1. 描述 redux 单项数据流
1. setState 是同步、异步

框架综合引用
1. 基于 react 设计 todolist（组件结构，redux state 数据结构）
1. 基于 vue 设计一个购物车（组件结构，vuex state 数据结构）

webpack
1. 前端代码为何要进行构建和打包
1. module chunk bundle 分别是什么意思
1. loader plugin 区别
1. webpack 如何实现懒加载
1. webpack 常见性能优化
1. babel-runtime babel-polyfill 区别

如何对应上述面试题
1. 框架的使用（基本使用、高级特性、周边插件）
1. 框架原理（基本原理，热门技术深度，全面性）
1. 框架的实际应用，即设计能力（组件结构，数据结构）

3-1 vue 使用
1. 基本使用，组件使用 --- 常用、必须会
1. 高级特性 --- 不常用，但体验深度
1. vuex 和 vue-router 使用

自己去看文档不行吗？行，最低效方式
文档 备忘录，给会用的人查阅，并不是入门教程
文档 全面冗长，且细节过多，不能突出面试考点

1. v-show v-if 区别
1. v-for 用到 key
1. 描述 vue 组件生命周期（有父子组件的情况）
1. vue 组件如何通讯
1. 描述组件渲染和更新过程
1. 双向数据绑定 v-model 实现原理

3-2 vue 基本使用
1. 日常使用，必须掌握，面试必考（不一定全考）
1. 梳理知识点，从冗长的文档中摘出考点和重点
1. 考察形式不限，但都在范围内

基本使用：模版（插值、指令）、computed/watch、class/style、条件、循环、事件、表单

自己用 vue-cli 创建项目

模版（插值、指令）
1. 插值、表达式
1. 指令、动态属性
1. v-html 会有 xss 风险，会覆盖子组件


computed awatch
1. computed 有缓存，data 不变则不会重新计算
1. watch 如何深度监听
1. watch 监听应用类型，拿不到oldVal

class style
1. 使用动态属性
1. 使用驼峰式写法

条件渲染
1. v-if v-else 的用法，可以使用变量，可以使用 === 表达式
1. v-if v-show 区别： vif根据条件渲染出元素；vshow它是什么就显示什么，如果不是display none 还是要渲染。
1. v-if v-show使用场景
更新不频繁，选择vif；很频繁切换，选择vshow性能比较好

3-3 循环（列表）渲染
1. 如何遍历对象 也可以用v-for1
1. key 的重要性， key 不能乱写（如random index）
1. vfor 和 vif 不能一起使用

事件
1. event 参数，自定义参数
1. 事件修饰符，按键修饰符
1. 观察事件被绑定到哪里？

表单
1. v-model
1. 常见表单项 textarea checkbox radio select
1. 修饰符 lazy number trim

总结
1. 必须掌握，否则面试不会通过
1. 重点和考点

3-4 vue 父子组件如何通讯
vue 组件使用
1. props $emit  props:父组件向子组件传递信息；$emit子组件向父组件触发一个事件
1. 组件间通讯 - 自定义事件
1. 组件生命周期 必问

props $emit 代码演示
/components/ComonentsDemo/index.vue


3-5 自定义事件/兄弟组件如何通讯
/components/ComponentsDemo/event.js export default new Vue() 实例
组件挂载时监听事件，销毁组件前记得卸载事件

3-6 生命周期（单个组件）
1. 挂载阶段
beforeCeate、created、beforeMount、mounted
1. 更新阶段
beforUpdate、updated
1. 销毁阶段
beforDestroy、destroyed

created\mounted 区别？
created 之后需要做一些判断，比如判断options 是否存在el、是否存在template
created 只是把 vue 的实例初始化，只是js 中的变量而已，此时并没有渲染
mounted 是组件真正的在网页进行渲染完成

beforeDestroy 应该做什么事情？
解除绑定，销毁事件监听器


生命周期（父子组件）
1. 创建 vue 实例 是从外到内的，父组件 到 子组件
1. 渲染 是从内到外的，因为从子组件渲染完成后父组件才能渲染完成

vue 组件 总结
1. props $emit
1. 组件间通讯 - 自定义事件
1. 生命周期

3-7 面试考察哪些vue 高级特性
1. 不是每个都很常用，但是用到的时候必须要知道
1. 考察 vue 的掌握是否全面、且有深度
1. 考察做过的项目是否有深度和复杂度（至少能用到高级特性）

高级特性
1. 自定义 v-model
1. $nextTick
1. refs
1. slot
1. 动态、异步组件
1. keep-alive
1. mixin 逻辑比较复杂的时候通常会用到

3-8 自定义 v-model
./components/AdvancedUse/index

3-9 vue 组件更新之后如何获取最新的 dom
$nextTick
1. vue 是异步渲染框架（原理部分会详细讲解）
1. data 改变之后，dom 不会立刻渲染
1. $nextTick 会在 DOM 渲染之后被触发，以获取最新的 dom 节点

AdvancedUse/NextTick.vue

3-10 slot 是什么？ 插槽
父组件 向子组件 插入点内容
1. 基本使用
1. 作用域插槽
1. 具名插槽
AdvancedUse/SlotDemo
AdvancedUse/ScopedSlotDemo
AdvancedUse/NamedSolot

3-11 vue 动态组件
1. :is = "component-name" 用法
1. 需要根据数据，动态渲染的场景，即组件类型不确定

3-12 vue 如何加载异步组件
toB PC 中台 管理 系统，
1. import() 函数
1. 按需加载，异步加载大组件

3-13 vue 如何缓存组件 keep-alive
1. 缓存组件
1. 频繁切换，不需要重复渲染
1. vue 常见性能优化中，不只 keep-alive

3-14 vue 组件如何抽离公共逻辑 mixin 混合
1. 多个组件有相同的逻辑，抽离出来
1. mixin 并不是完美的解决方案，会有一些问题
1. vue3 提出 composition api 旨在解决这些问题

问题：
1. 变量来源不明确，不利于阅读
1. 多 mixin 可能造成变量重复，命名冲突
1. mixin 和组件可能出现多对多的关系，复杂度较高

/MixinDemo.vue

3-15 vue 高级特性知识点小结
1. 自定义 v-model
1. nextTick
1. slot
1. 动态、异步组件
1. keep-alive
1. mixin

面试技巧
1. 可以不太深入，但必须知道
1. 熟悉基本用法，了解使用场景
1. 最好能和自己的项目经验结合起来

3-16 vuex 使用
1. 面试考点并不多
1. 基本概念，基本使用 和 api 必须掌握
1. 考察 state 数据结构设计（后面会讲）

vuex 基本概念
1. state
1. getters
1. action
1. mutation

用于 vue 组件
1. dispatch
1. commit
1. mapState
1. mapGetters
1. mapActions
1. mapMutations

重点：Actions 才能做异步操作

Mutations 原子操作，最小同步

3-17 vue-router 知识点串讲
1. 考点并不多
1. 路由模式hash H5 history
1. 路由配置：动态路由、懒加载

vue-router 路由模式
1. hash 模式（默认）http://abc.com/#/user/10
1. H5 history 默认 http://abc.com/user/20
1. 后者需要 server 端支持，因此无特殊需要可选择前者（后端配置例子）
const router = new VueRouter({
  mode: 'history'// 使用 h5 history 模式
  routes: [...]
})

vue-router 路由配置 动态路由
const User = {
  // 获取参数 10 20
  template: '<div>User {{ $route.params.id}}</div>'
}
const router = new VueRouter({
  routes: [
    // 动态路径参数，以冒号开头。命中 ‘/user/10' '/user/20'
    {path: '/user/:id', component: User}
  ]
})

vue-router 路由配置 懒加载
export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: () => import('./../components/Navigator')
    },
    {
      path: '/feedback', 
      component: () => import(
        /* webpackChunkName: "feedback "*/
        './../components/feedback')
    }
  ]
})

vuex vue-router 总结
1. 考点不多
1. 基本概念，基本使用
1. 面试官时间有限，考察最核心，常用问题，非边角问题

3-18 vue 使用 考点总结复习
1. 基本使用，组件使用
1. 高级特性
1. vuex vue-router使用

回顾 vue 面试题
1. v-show v-if区别
1. 为何 v-for 要用 key ，业务需要用的不重复 id
1. 描述 vue 组件生命周期 （有父子组件的情况）
1. vue 组件如何通讯 父子组件、层级比较（自定义事件）、vuex通讯
1. 描述组件渲染和更新的过程
1. 双向数据绑定 v-model实现原理

4-1 vue 原理（大厂必考）
1. 原理不代表源码
1. 面试为何会考察原理？
1. 面试中如何考察？以何种方式？
1. vue 原理包括哪些？

面试为何会考察原理，又用不到？
1. 知其然知其所以然 - 各行业通用道理
1. 了解原理，才能应用更好（竞争激烈，择优录用）
1. 大厂造轮子（有钱有资源，业务定制，技术 kpi）

面试如何考察 vue 原理？
1. 考察重点，而不是考察细节，掌握好 2/8 原则
1. 和使用相关的原理，例如 vdom 、模板渲染
1. 整体流程是否全面？热门技术是否有深度？

vue 原理
1. 组件化
1. 响应式原理
1. vdom 和 diff
1. 模板编译
1. 组件渲染过程
1. 前端路由

4-2 vue 组件化基础
1. 如何了解 vue MVVM 模型和组件化分不开
1. 很久以前就有组件化
1. 数据驱动视图（MVVM，setState）

很久以前组件化
1. asp jsp php 已经有组件化
1. nodejs 中也有类似的组件化

对比 vue react 的组件化

数据驱动视图
1. 传统组件，只是静态渲染，更新还要依赖操作 dom
1. 数据驱动视图 vue MVVM
1. 数据驱动视图 react setState 
1. 数据驱动视图：不在自己操作dom，想改什么地方，就去修改哪些数据就行，更加关注业务

vue MVVM 模型 Model View ViewModel
1. View -》 DOM Listeners/ Directives(指令) -> Model
    dom     viewModel             

Model (data)
View (template)            
ViewModel (@click methods View 怎么去修改Model)

总结
1. 组件化，很久以前就存在了
1. 数据驱动视图
1. MVVM 模型

4-3 监听data 变化核心 api是什么？
Vue 响应式
1. 组件 data 数据一旦变化，立刻触发视图更新
1. 实现数据驱动视图第一步
1. 考察 vue 原理的第一题

1. 核心 api - Object.defineProperty
1. 如何实现响应式，代码演示
1. Object.defineProperty 的一些缺点 （Vue3.0 启用 Proxy）

Proxy 有兼容性问题
1. Proxy 兼容性不好，且无法 polyfill
1. vue2.x 还会存在一段时间，所以都得学
1. vue3.x 相关知识，下一掌讲，这里只是先提一下

Obkect.defineProperty 基本用法
``` Object.defineProperty
const data = {}
let name = "zhangsan"
Object.defineProperty(data, "name", {
    get: function () {
        console.log("get")
        return name
    },
    set: function (newVal) {
        console.log("set")
        name = newVal
    }
})

data.name = 'laowang' / set
data.name / get
```

Object.defineProperty 实现响应式
1. 监听对象，监听数组
1. 复杂对象，深度监听
1. 几个缺点

4-4 如何深度监听 data 变化
observe-demo/index.html
observe-demo/observe.js
npm i http-server -g
http-server -p 8001

1. 准备数据
1. 监听数据/监听对象属性 -> 重新定义属性，监听起来
1. 测试 数据发生变化 触发更新视图 upDataView

Object.defineProperty 缺点
1. 深度监听，需要递归监听，一次性计算量大 （对象非常非常大，可能会卡死）
1. 无法监听新增属性/删除属性（因此增加 Vue.set/Vue/delete)
1. 无法监听原生数组，需要特殊处理
问题：
1. 深度监听，需要一次性递归完么？
1. 新增属性，删除属性不会监听到？

4-5 如何监听数组变化
Object.defineProperty 不具备监听 数组能力
const arrProto = Object.create(oldArrayPrototype)

<- 临时 补充 闭包知识点 ->
6-1 作用域
题目
1. this 的不同应用场景，如何取值？
1. 手写 bind 函数
1. 实际开发中闭包的应用场景
1. 创建 10 个 a 标签，点击的时候弹出来对应的序号

知识点
1. 作用域和自由变量
1. 闭包
1. this

作用域：某个变量的合法使用范围
1. 全局作用域
1. 函数作用域
1. 块级作用域（ES6 新增）

自由变量
1. 一个变量在当前作用域没有定义，但被使用了
1. 向上级作用域，一层一层依次寻找，直至找到为止
1. 如何到了全局作用域都没有找到，则报错， xx is not defined

6-2 闭包
1. 作用域应用的特殊情况，有两种表现：
1. 函数作为参数被传递
1. 函数作为返回值
<- 临时 补充 闭包知识点 ->

4-6 虚拟 dom virtual dom 和 diff 算法
1. vdom 是实现 vue 和 react 的重要基石
1. diff 算法是 vdom 中最核心、最关键的部分
1. vdom 是一个热门话题，也是面试中的热门问题

背景：
1. dom 操作非常耗费性能
1. 以前用 jQuery，可以自行控制 dom 操作时机，手动跳转
1. vue 和 react 都是数据驱动视图，如何有效控制 dom 操作？

解决方法 vdom react 先提出
1. 有一个定复杂度，想减少计算次数比较难
1. 能不能把计算，更多的转为js 计算？因为 js 执行速度很快
1. vdom 用 js 模拟 dom 结构，计算出最小的变更，操作 dom

具体怎么操作？
用 js 模拟 dom 结构
div#div1.container
  p{vdom}
  ul[style=font-size: 20px] > li{a}
  url
/div

{
  tag: 'div'
  props: {
    className: 'container'
    id div1
  },
  children [
    {
      tag p
      children 'vdom'
    },
    {
      tag ul
      props {
        style font-size 20px
      },
      children [
        {
          tag li
          children 'a'
        }
      ]
    }
  ]
}

通过 snabbdom 学习 vdom
1. 简单强大的 vdom 库， 易学易用
1. vue 参考它实现的 vdom 和 diff
1. https://github.com/snabbdom/snabbdom
1. vue 3.0 重写了vdom 代码，优化了性能
1. 但是 vdom 的基本理念不变，面试考点也不变
1. react vdom 具体实现 和 vue 也不同，但是不妨碍统一学习

4-7 用过 虚拟dom 吗 
snabbdom 代码演示
1. 面试题：请用 vnode 模拟 html 片段

snabbdom 重点总结
h 函数
1. 接收参数
1. 返回 vnode
vnode 数据结构
patch 函数
1. 直接渲染到空的dom元素中
1. 更新已有的内容

vdom 总结
1. 用 js 模拟 dom 结构（vnode）
1. 新旧 vnode 对比，得出最小的更新范围，最后更新 dom
1. 数据驱动视图的模式下，有效控制 dom 更新

4-8 虚拟 dom -diff 算法
通过 把dom 用js 模拟，进行计算，对比，找出最小的更新范围，让它去更新，对比的过程：diff 算法
diff 算法
1. diff 算法 是 vdom 中最核心，最关键部分
1. diff 算法能在日常使用 vue react 中体现出来
1. diff 算法是前端热门话题，面试“宠儿”

diff 算法不是独创的
diff 算法概念
1. diff 即对比，是一个广泛的概念，linux diff git diff
1. 两个 js 对象也可以做 diff https// github.com/cujijs/jiff
1. 两棵树做 diff ，vdom diff

树 diff 的时间复杂度 O(n^3)
1. 第一，遍历 tree1，第二，遍历 tree2
1. 第三，排序
1. 1000 个节点，要计算1亿次，算法不可用

优化时间复杂度到 O(n)
1. 只比较同一层级，不跨级比较
1. tag 不相同，则直接删掉重建，不再深度比较
1. tag 和 key 两者都相同，则认为是相同节点，不再深度比较
 
核心函数、流程梳理