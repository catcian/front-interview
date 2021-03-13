<template>
  <div>
    <p>vue 高级特性</p>
    <hr>

    <!-- 自定义 v-model -->
    <p>{{ name }}</p>
    <custom-v-model></custom-v-model>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel.vue'
export default {
  components: { CustomVModel },
  name: 'Index',
  data () {
    return {
      name: "CatCian"
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
