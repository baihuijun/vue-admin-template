<template>
  <div class="welcome bg-red-400 hover:bg-blue-600">欢迎界面</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
