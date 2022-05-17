<template>
  <div class="welcome">
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div class="h-5 bg-red-500 hover:bg-purple-600 mt-5"></div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.box {
  height: 50px;
  background-color: var(--el-color-primary);
}
</style>
