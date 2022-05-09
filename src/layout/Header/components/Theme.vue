<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <el-tooltip effect="dark" :content="$t('header.theme')" placement="bottom">
      <el-icon :size="22" class="icon-style flex items-center" @click="open">
        <i-majesticons-t-shirt-line></i-majesticons-t-shirt-line>
      </el-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="theme-default">{{ $t("header.darkMode") }}</el-dropdown-item>
        <el-dropdown-item command="theme-mauve">{{ $t("header.lightMode") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"

const handleSetTheme = (scopeName: string) => {
  toggleTheme({
    scopeName
  })
}
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
