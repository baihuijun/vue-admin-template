<template>
  <div class="batchImport flex flex-col">
    <div>常用组件</div>
    <!-- <div>常用组件</div>
    <div>常用组件</div>
    <div>常用组件</div> -->
    <BaseTable :columns="columns" :requestApi="getUserTableList"></BaseTable>
  </div>
</template>

<script lang="ts" setup>
import { Table } from "@/components/BaseTable/interface/index"
import { getUserTableList } from "@/api/userApi"
const columns: Partial<Table.ColumnProps>[] = [
  {
    type: "selection",
    width: 80,
    fixed: "left"
  },
  {
    type: "index",
    label: "#",
    width: 80
  },
  {
    type: "expand",
    label: "Expand",
    width: 120
  },
  {
    prop: "username",
    label: "用户姓名",
    search: true
  },
  {
    prop: "gender",
    label: "性别",
    width: "140",
    // enum: genderType,
    search: true,
    sortable: true
    // searchType: "select"
  },
  {
    prop: "idCard",
    label: "身份证号",
    search: true
  },
  {
    prop: "email",
    label: "邮箱",
    search: true
  },
  {
    prop: "address",
    label: "居住地址",
    search: true
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 200,
    sortable: true,
    search: true
    // searchType: "datetimerange",
    // initSearchParam: ["2022-04-05 00:00:00", "2022-05-10 23:59:59"]
  },
  {
    prop: "status",
    label: "用户状态",
    sortable: true,
    width: 180
  },
  // {
  //   prop: "avatar",
  //   label: "头像",
  //   width: 140,
  //   image: true
  // },
  {
    prop: "operation",
    label: "操作",
    width: 330,
    fixed: "right"
  }
]
</script>
<style lang="scss" scoped>
.batchImport {
  height: 100%;
}
</style>
