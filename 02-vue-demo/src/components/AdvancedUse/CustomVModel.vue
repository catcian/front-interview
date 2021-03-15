<template>
  <div>
    <input type="text"
    :value="text"
    @input="$emit('change', $event.target.value)">
  </div>
  <!-- 

    1. 上面的 input 使用了 :value 而不是 v-model
    1. 上面额 change 和 model.event 要对应起来
    1. text1 属性对应起来
   -->
</template>

<script>
export default {
  name: 'CustomVModel',
  model: {
    prop: "text",// 对应 props text
    event: 'change'
  },
  props: {
    text: String,
    default () {
      return ''
    }
  },

}

</script>

<style  lang="stylus" scoped>

</style>
