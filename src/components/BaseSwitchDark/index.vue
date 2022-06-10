<template>
  <el-switch
    v-model="theme"
    inline-prompt
    active-color="#0a0a0a"
    inactive-color="#dcdfe6"
    active-icon="Sunny"
    active-value="dark"
    inactive-icon="Moon"
    inactive-value="light"
  />
</template>

<script lang="ts" setup>
import { GlobalStore } from '@/store'
import { useDark } from '@/hooks/useDark'
const { switchTheme } = useDark()
const globalStore = GlobalStore()
const theme = computed({
  get: () => globalStore.theme,
  set: val => {
    globalStore.setTheme(val)
    switchTheme()
  }
})
</script>
<style lang="scss" scoped></style>
