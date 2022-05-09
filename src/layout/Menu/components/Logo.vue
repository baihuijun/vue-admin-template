<template>
  <div class="logo flex justify-center items-center">
    <el-icon :size="30" class="imgIcon">
      <logoSvg />
    </el-icon>
    <span v-show="!isCollapse">Geeker Admin</span>
  </div>
</template>

<script setup lang="ts">
import logoSvg from "@/assets/images/logo.svg"
defineProps<{ isCollapse: boolean }>()
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
