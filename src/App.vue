<script setup lang="ts">
import { GlobalStore } from "@/store"
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"
const globalStore = GlobalStore()
const theme = computed((): string => globalStore.theme)
watch(
  () => theme.value,
  theme => {
    const htmlDom = document.getElementsByTagName("html")
    toggleTheme({
      scopeName: theme
    })
    if (theme === "theme-dark") {
      htmlDom[0].classList.add("dark")
    } else {
      htmlDom[0].classList.remove("dark")
    }
  },
  { immediate: true }
)
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
