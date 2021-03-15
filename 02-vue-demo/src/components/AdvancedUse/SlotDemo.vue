<template>
  <a :href="url">
    <slot>
      默认内容，即父组件没设置内容时，这里显示
    </slot>
  </a>
</template>

<script>
export default {
  name: 'SlotDemo',
  props: ['url']
}

</script>

<style  lang="stylus" scoped>

</style>
