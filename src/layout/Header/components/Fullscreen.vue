<template>
  <el-tooltip :content="isFullscreen ? $t('header.exitFullScreen') : $t('header.fullScreen')" placement="bottom">
    <i :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="icon-style" @click="toggle"></i>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
const { toggle, isFullscreen } = useFullscreen()
</script>

<style scoped lang="scss">
@import '../index.scss';
.icon-style {
  margin-right: 22px;
}
</style>
