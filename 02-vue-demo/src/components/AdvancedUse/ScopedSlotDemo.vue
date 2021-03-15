<template>
  <a :href="url">
    <slot :slotData="website">
        <!-- 默认显示 subTitle，即父组件不传值 -->
        {{ website.subTitle }}
    </slot>
  </a>
</template>

<script>
export default {
  name: 'ScopedSlotDemo',
  props: ['url'],
  data () {
    return {
      website: {
        url: 'www.imooc.com',
        title: 'CatCian',
        subTitle: 'catcat'
      }
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
