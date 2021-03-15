<template>
  <div>
    <p>{{ name }} {{ major }} {{ city }}</p>
    <button @click="showCity">显示城市</button>
  </div>
</template>

<script>
import myMixin from './myMixin'
export default {
  mixins: [myMixin],
  name: 'MixinDemo',
  data () {
    return {
      name: 'wangchen',
      major: 'web 前端'
    }
  },
  mounted () {
    console.log('MixinDemo mounted')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
