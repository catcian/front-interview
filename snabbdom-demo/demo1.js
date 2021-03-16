const snabbdom = window.snabbdom

// 定义 patch
const path = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners,
])

// 定义 h
const h = snabbdom.h

const container = document.getElementById('container')

// 生成 vnode
const vnode = h('ul#list', {}, [
  h('li.item', {}, 'Item 1'),
  h('li.item', {}, 'Item 2')
])

// 首次渲染 空dom 元素
path(container, vnode)

// 监听 button click 事件
document.getElementById('btn-change').addEventListener('click', function () {
  // 生成 newVnode
  const newVnode = h('ul#list', {}, [
    h('li.item', {}, 'Item 1'),
    h('li.item', {}, 'Item 8'),
    h('li.item', {}, 'Item 3'),
  ])
  
  // 更新已有内容
  path(vnode, newVnode)
})