<template>
  <p>KeepAliveStateB</p>
</template>

<script>
export default {
  name: 'KeepAliveStateB',
  mounted () {
    console.log('B mounted')
  },
  destroyed () {
    console.log('B destroyed')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
