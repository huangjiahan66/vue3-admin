<template>
  <div>
    <h1>占位</h1>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import { computed } from 'vue'

const router = useRouter()

// console.log(router.getRoutes())
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
