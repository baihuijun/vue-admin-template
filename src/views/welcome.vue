<template>
  <div class="welcome">
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <div class="h-6 mt-6 bg-yellow-600 hover:bg-purple-600"></div>
    <BaseTable></BaseTable>
    <BaseForm></BaseForm>
    <!-- <el-icon size="22" color="#000">
      <IconBaseline5g />
    </el-icon> -->
    <el-icon :size="20" color="red">
      <!-- <i-carbon-accessibility /> -->
      <i-carbon-airline-digital-gate />
    </el-icon>
    <el-icon :size="20" color="red">
      <!-- <i-ic-baseline-5g /> -->
      <i-ion-arrow-down-circle></i-ion-arrow-down-circle>
      <!-- <i-GoogleMaterialIcons-baseline-5g /> -->
      <!-- <i-iconicons-airplane /> -->
      <!-- <i-carbon-4k /> -->
    </el-icon>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.box {
  height: 50px;
  background-color: var(--el-color-primary);
}
</style>
