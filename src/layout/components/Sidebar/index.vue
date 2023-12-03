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
import { getChildrenRoutes } from '@/utils/route'

const router = useRouter()

console.log(router.getRoutes())
console.log(getChildrenRoutes(router.getRoutes()))
</script>

<style lang="scss" scoped></style>
