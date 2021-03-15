<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    <!-- tab 切换 -->
    <keep-alive>
      <keep-alive-state-a v-if="state === 'A'"></keep-alive-state-a>
      <keep-alive-state-b v-if="state === 'B'"></keep-alive-state-b>
      <keep-alive-state-c v-if="state === 'C'"></keep-alive-state-c>
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStateA from './KeepAliveStateA.vue'
import KeepAliveStateB from './KeepAliveStateB.vue'
import KeepAliveStateC from './KeepAliveStateC.vue'
export default {
  components: { KeepAliveStateA, KeepAliveStateB, KeepAliveStateC },
  name: 'KeepAliveDemo',
  data () {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState (type) {
      this.state = type
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
