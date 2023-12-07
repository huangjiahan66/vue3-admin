<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 切换
const toggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}

// icon图标
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  display: inline-block;
  .hamburger {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
