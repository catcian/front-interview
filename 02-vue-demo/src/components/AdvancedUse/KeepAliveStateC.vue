<template>
  <p>KeepAliveStateC</p>
</template>

<script>
export default {
  name: 'KeepAliveStateC',
  mounted () {
    console.log('C mounted')
  },
  destroy () {
    console.log('C destroyed')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
