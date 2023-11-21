<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// 测试-----------!!!
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  created() {
    console.log('123')
  },
  components: {
    HelloWorld
  }
}
</script>
