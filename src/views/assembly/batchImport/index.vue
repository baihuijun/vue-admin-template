<!--
 * @Author: baihuijun dreamerbai@163.com
 * @Date: 2022-05-20 13:19:31
 * @LastEditors: bhj
 * @LastEditTime: 2022-05-27 21:30:15
 * @FilePath: \template3\vue-admin-template\src\views\assembly\batchImport\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="batchImport flex flex-col">
    <div>常用组件</div>
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
