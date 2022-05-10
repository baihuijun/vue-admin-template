<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <el-tooltip :content="$t('header.theme')" placement="bottom">
      <el-icon :size="22" class="icon-style flex items-center">
        <i-majesticons-t-shirt-line></i-majesticons-t-shirt-line>
      </el-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="globalStore.effect === 'light'" command="theme-default">{{ $t("header.lightMode") }}</el-dropdown-item>
        <el-dropdown-item :disabled="globalStore.effect === 'dark'" command="theme-dark">{{ $t("header.darkMode") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store"
const globalStore = GlobalStore()
const handleSetTheme = (scopeName: string) => {
  globalStore.setTheme(scopeName)
}
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
