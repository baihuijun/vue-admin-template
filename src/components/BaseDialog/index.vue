<template>
  <el-dialog
    :model-value="props.visible"
    :title="props.title"
    :width="props.width"
    :draggable="props.draggable"
    @close="cancel"
    :close-on-click-modal="props.closeOnClickModal"
    destroy-on-close
  >
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ cancelBtn }}</el-button>
        <el-button type="primary" @click="submit">{{ submitBtn }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
interface BaseDialogProps {
  visible: boolean
  title: string
  draggable?: boolean
  width?: string | number
  cancelBtn?: string
  submitBtn?: string
  closeOnClickModal?: boolean
}
const $emit = defineEmits(["cancel", "submit"])
const props = withDefaults(defineProps<BaseDialogProps>(), {
  visible: false,
  title: "Tips",
  draggable: true,
  cancelBtn: "关闭",
  submitBtn: "提交",
  closeOnClickModal: false
})
const cancel = () => {
  console.log("关闭")
  $emit("cancel", false)
}
const submit = () => {
  console.log("提交")
  $emit("submit", false)
}
onMounted(() => {})
</script>
<style lang="scss" scoped></style>
