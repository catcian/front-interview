<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="info.city">
  </div>
</template>

<script>
export default {
  name: 'WathDemo',
  data () {
    return {
      name: 'catcian',
      info: {
        city: '北京'
      }
    }
  },
  watch: {
    name (oldVal, val) {
      console.log('watch name', oldVal, val)// 值类型，可正常拿到
    },
    info: {
      handler (oldVal, val) {
        console.log('watch info', oldVal, val)// 引用类型，拿不到oldVal, 此时指向新的value 
      },
      deep: true // 深度监听
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
