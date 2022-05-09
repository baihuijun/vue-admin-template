<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <el-tooltip :effect="globalStore.effect" :content="$t('header.theme')" placement="bottom">
      <el-icon :size="22" class="icon-style flex items-center">
        <i-majesticons-t-shirt-line></i-majesticons-t-shirt-line>
      </el-icon>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="globalStore.effect === 'dark'" command="theme-default">{{ $t("header.lightMode") }}</el-dropdown-item>
        <el-dropdown-item :disabled="globalStore.effect === 'light'" command="theme-dark">{{ $t("header.darkMode") }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { GlobalStore } from "@/store"
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"

const globalStore = GlobalStore()

const theme = computed((): string => globalStore.theme)
console.log(theme.value)
const handleSetTheme = (scopeName: string) => {
  globalStore.setTheme(scopeName)
  toggleTheme({
    scopeName
  })
}

watch(
  () => theme.value,
  theme => {
    const htmlDom = document.getElementsByTagName("html")
    if (theme === "theme-dark") {
      htmlDom[0].classList.add("dark")
    } else {
      htmlDom[0].classList.remove("dark")
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
