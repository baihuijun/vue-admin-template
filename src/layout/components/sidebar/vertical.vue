<template>
  <!-- <div class="app-logo">
    <img src="@/assets/logo.png" alt="" />
    <span v-if="!isCollapse" class="text-white font-bold pl-5">Admin</span>
  </div> -->
  <div style="height: 68px; background-color: black"></div>
  <el-menu
    class="el-menu-vertical-box"
    text-color="#000"
    active-text-color="#f1c40f"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStoreHook } from '@/store/modules/app'
const useApp = useAppStoreHook()
const isCollapse = computed(() => useApp.sidebar.opened)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
.el-menu {
  background-color: var(--el-color-primary);
}
.el-menu-vertical-box {
  border: none;
  user-select: none;
}
.el-menu-vertical-box:not(.el-menu--collapse) {
  width: 250px;
}
.app-logo {
  width: 100%;
  height: 60px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  img {
    width: 48px;
    height: 48px;
  }
}
</style>
