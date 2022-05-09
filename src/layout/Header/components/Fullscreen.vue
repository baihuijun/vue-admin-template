<template>
  <el-tooltip :effect="globalStore.effect" :content="isFullscreen ? $t('header.exitFullScreen') : $t('header.fullScreen')" placement="bottom">
    <el-icon :size="20" class="icon-style" @click="toggle">
      <i-teenyicons-minimise-solid v-if="isFullscreen"></i-teenyicons-minimise-solid>
      <i-teenyicons-expand-solid v-else></i-teenyicons-expand-solid>
    </el-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core"
import { GlobalStore } from "@/store"
const globalStore = GlobalStore()
const { toggle, isFullscreen } = useFullscreen()
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
