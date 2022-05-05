<template>
  <div class="welcome">
    <forms></forms>
    <div class="box"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import forms from '@/components/forms.vue'

// toggleTheme({
//   scopeName: 'theme-mauve'
//   // scopeName: 'theme-default'
//   // 可选，link的href处理，看情况用， 当启用 themePreprocessorPlugin 的 extract后才需要
//   // customLinkHref: (href) => href,
//   // 可选，默认对应 themePreprocessorPlugin 的 themeLinkTagId
//   // themeLinkTagId: "theme-link-tag",
//   // 可选 "head" || "body"
//   // themeLinkTagInjectTo: "head",
//   // 可选，对应 themePreprocessorPlugin 的 multipleScopeVars
//   // multipleScopeVars
// })
</script>
<style lang="scss" scoped>
.welcome {
  // height: 1000px;
}
.box {
  height: 50px;
  background-color: var(--el-color-primary);
}
</style>
