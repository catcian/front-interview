<template>
  <div>
    <p :class="{ black: isBlack, yellow: isYellow}">使用 class</p>
    <p :class="[black, yellow]">使用 class 数组</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>

<script>
export default {
  name: 'ClassDome',
  data () {
    return {
      isBlack: true,
      isYellow: true,
      black: 'black',
      yellow: 'yellow',
      styleData: {
        fontSzie: '40px',// 转换为驼峰式
        color: 'ref',
        backgroundColor: '#ccc',
      }
    }
  }
}

</script>

<style scoped>
  .black {
    background: black 
  }
  .yellow {
    background: yellow
  }
</style>
