<template>
  <div id="app">
    <ul ref="ul1">
      <li v-for="(item, index) of list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">添加一项</button>

  </div>
</template>

<script>
export default {
  name: 'NextTick',
  data () {
    return {
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem () {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      // 1. 异步渲染，$nextTick 待 dom 渲染完在回调
      // 1. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
      this.$nextTick(() => {
        // 获取 dom 元素
        const ulElem = this.$refs.ul1
        console.log(ulElem.children.length)// ulElem.childNodes.length
      })
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
