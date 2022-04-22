<script lang="ts" setup>
import { useAppStoreHook } from '@/store/modules/app'
import { computed } from 'vue'
const useApp = useAppStoreHook()

const showIcon = computed(() => {
  return useApp.sidebar.opened ? 'expand' : 'fold'
})
</script>
<template>
  <div class="app-header">
    <el-icon :size="25" @click="useApp.toggleSideBar()">
      <component :is="showIcon"></component>
    </el-icon>
  </div>
</template>
<style lang="scss" scoped>
.app-header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.el-icon {
  cursor: pointer;
}
</style>
