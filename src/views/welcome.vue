<template>
  <div class="welcome">
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <div class="h-6 mt-6 bg-yellow-600 hover:bg-purple-600"></div>
  </div>
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
