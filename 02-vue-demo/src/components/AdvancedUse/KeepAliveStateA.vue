<template>
  <p>KeepAliveStateA</p>
</template>

<script>
export default {
  name: 'KeepAliveStateA',
  mounted () {
    console.log('A mounted')
  },
  destroyed () {
    console.log('A destroyed')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
