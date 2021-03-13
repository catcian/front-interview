<template>
  <div>
    <Input @add="addHandler"></Input>
    <List :list="list" @delete="deleteHandler"></List>
  </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
  name: 'Index',
  components: {
    Input,
    List
  },
  data () {
    return {
      list: [
        {id: 'id-1', title: '标题1'},
        {id: 'id-2', title: '标题2'},
      ]
    }
  },
  methods: {
    addHandler (title) {
      this.list.push({
        id: this.list.length + 1,
        title: title || `标题${this.list.length + 1}`
      })
    },
    deleteHandler (id) {
      const newList = this.list.filter(i => i.id !== id)
      this.list = newList
    },
  },
  created () {
    console.log('index.vue created')
  },
  mounted () {
    console.log('index.vue mounted')
  },
  beforeUpdate () {
    console.log('index.vue beforeUpdate')
  },
  updated () {
    console.log('index.vue updated')
  }
}

</script>

<style  lang="stylus" scoped>

</style>
