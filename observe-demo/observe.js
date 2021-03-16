function updateView () {
  console.log('视图更新')
}

// 重新定义数组原型
const oldArrayPrototype = Array.prototype
// 创建新对象，原型指向 oldArrayPrototype，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayPrototype);
['push', 'pop', 'shift', 'unshift'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView()// 触发视图更新
    oldArrayPrototype[methodName].call(this, ...arguments)
  }
})

// 重新定义属性，监听起来
function defineReactive (target, key, value) {
  // 深度监听
  observe(value)
  
  // 核心 api
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newValue) {
      if (newValue !== value) {
        // 设置新值
        observe(newValue)
        // 注意 value 一直在闭包中，此处设置完之后，在 get 也会获取最新的值
        value = newValue
        
        // 触发更新视图
        updateView()
      }
    }
  })
}

// 监听对象属性
function observe (target) {
  // 不是数组 和 对象返回
  if (typeof target !== 'object' || target === null) return target 

  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  // 重新定义各个对象属性(for in 遍历对象或者数组)
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 准备数据
const data = {
  name: "zhangsan",
  age: 29,
  info: {
    address: '深圳'// 需要深度监听
  },
  nums: [10, 20, 30]
}

// 监听数据
observe(data)

// 测试数据
// data.name = 'laowang'

// data.age = 18
// console.log('age',data.age)
// data.age = { num: 18 }
// data.age.num = 60
// data.info.address = '宝鸡'// 深度监听

// 新增属性
// data.x = '100'// 新增属性，监听不到 - 所以有 Vue.set

// 删除属性
// delete data.name // 删除属性，监听不到 - 所以有 Vue.delete

// 修改数组
data.nums.push(10)
console.log(data.nums)
