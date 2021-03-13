<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>

    <!-- 阻止单机事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不在重载页面 -->
    <form v-on:submit.prevent></form>
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>


    <!-- 按键修饰符 -->
    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button @click.ctrl="onClick">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button @click.ctrl.exact="onCLick">A</button>

    <!-- 没有任何系统修饰符被按下时候触发 -->
    <button @click.exact="onCLick">A</button>


  </div>
</template>

<script>
export default {
  name: 'EventDemo',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    increment1 (event) {
      console.log('event', event, event.__proto__.constructor)// 原生 event 对象
      console.log(event.target)
      // 事件被在什么地方触发的
      console.log(event.currentTarget)// 注意，事件被注册到当前元素的，和 react 不同
      this.num ++
      // 结论
      // 1. event 是原生的
      // 2. 事件被挂载到当前元素
    },
    increment2 (params, event) {
      // console.log('event', event, event.__proto__.constructor)
      console.log(event.target)
      this.num += params
    }
  }

}

</script>

<style  lang="stylus" scoped>

</style>
