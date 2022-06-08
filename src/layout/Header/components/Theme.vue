<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <el-tooltip :content="$t('header.theme')" placement="bottom">
      <i :class="'iconfont icon-zhuti'" class="icon-style" style="font-size: 26px"></i>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="globalStore.theme === 'light'" command="light">
          {{ $t("header.lightMode") }}
        </el-dropdown-item>
        <el-dropdown-item :disabled="globalStore.theme === 'dark'" command="dark">
          {{ $t("header.darkMode") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store"
import { useDark } from "@/hooks/useDark"
const { switchTheme } = useDark()
const globalStore = GlobalStore()
const handleSetTheme = (scopeName: string) => {
  globalStore.setTheme(scopeName)
  switchTheme()
}
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
