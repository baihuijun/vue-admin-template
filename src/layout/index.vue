<script setup lang="ts">
import Vertical from './components/sidebar/vertical.vue'
import AppMain from './components/appMain.vue'
import AppHeader from './components/appHeader.vue'
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <Vertical></Vertical>
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: var(--el-color-primary);
}
.el-main {
  padding: 0;
}
.el-aside {
  background-color: var(--el-color-primary);
  position: relative;
  overflow-x: hidden;
}
</style>
