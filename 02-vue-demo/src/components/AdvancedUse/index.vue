<template>
  <div>
    <p>vue 高级特性</p>
    <hr>

    <!-- 自定义 v-model -->
    <!-- <p>{{ name }}</p>
    <custom-v-model v-model="name"></custom-v-model> -->
    <!-- $nextTick -->
    <next-tick></next-tick>

    <!-- slot -->
    <slot-demo :url="website.url">
      {{ website.title }}
    </slot-demo>
    <br>

    <!-- slot scoped -->
    <scoped-slot-demo :url="website.url">
      <template v-slot="slotProps">
        {{slotProps.slotData.url}}
      </template>
    </scoped-slot-demo>
    <br>

    <!-- slot 具名插槽 -->
    <name-slot>
      <template #header>
        <h1>将插入 header slot 中</h1>
      </template>
      <p>将插入到 main slot 中，即未命名的 slot</p>
      <template v-slot:footer>
        <p>将插入到 footer slot 中</p>
      </template>
    </name-slot>

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName"></component> -->
    <!-- <div v-for="(val, key) of newsData" :key="key">
      <component :is="val.type"></component>
    </div> -->

    <!-- 异步组件 -->
    <form-demo v-if="showFormDemo"></form-demo>
    <button @click="showFormDemo = true">show form demo</button>

    <!-- keep-alive 缓存组件 -->
    <keep-alive-demo></keep-alive-demo>
    <!-- 组件抽离公共逻辑 -->
    <mixin-demo></mixin-demo>
  </div>
</template>

<script>
import KeepAliveDemo from './KeepAliveDemo.vue'
import MixinDemo from './MixinDemo.vue'
import NameSlot from './NameSlot.vue'
// import CustomVModel from './CustomVModel.vue'
import NextTick from './NextTick.vue'
import ScopedSlotDemo from './ScopedSlotDemo.vue'
import SlotDemo from './SlotDemo.vue'
export default {
  components: { 
    // CustomVModel, 
    NextTick,
    NameSlot,
    SlotDemo,
    ScopedSlotDemo,
    FormDemo: () => import('../BaseUse/FormDemo.vue'),
    KeepAliveDemo,
    MixinDemo
  },
  name: 'Index',
  data () {
    return {
      name: "CatCian",
      website: {
        url: 'www.baidu.com',
        title: 'baidu',
        subTitle: '百度'
      },
      NextTickName: 'NextTick',
      newsData: {
        1: { type: 'test' },
        2: { type: 'test' },
        3: { type: 'images' },
      },
      showFormDemo: false
    }
  }
}

</script>

<style  lang="stylus" scoped>

</style>
