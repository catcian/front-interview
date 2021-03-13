
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






