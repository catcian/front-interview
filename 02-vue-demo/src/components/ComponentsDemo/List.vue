<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>

      </li>
    </ul>
  </div>
</template>

<script>
import event from './event'
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    deleteItem (id) {
      this.$emit('delete', id)
    },
    addTitleHandler (title) {
      console.log('List.vue on add title', title)
    }
  },
  created () {
    console.log('List.vue created')
  },
  mounted () {
    console.log('List.vue mounted')
    // 绑定自定义事件, 调用函数，而不是（）=》 {} 方便解绑
    event.$on('onAddTitle', this.addTitleHandler)
  },
  beforeDestroy () {
    // 及时销毁，否则可能造成内存泄露
    event.$off('onAddTitle', this.addTitleHandler)
  },
  destroyed () {
    console.log('List.vue destroyed')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
