<template>
  <div class="table-box">
    <div class="table-search">
      <el-form ref="formRef" :model="searchParam" :inline="true" label-width="100px">
        <el-form-item label="用户姓名 :">
          <el-input v-model="searchParam.username" placeholder="请输入" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别 :">
          <el-select v-model="searchParam.gender" placeholder="请选择" clearable>
            <el-option v-for="item in genderType" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号 :">
          <el-input v-model="searchParam.idCard" placeholder="请输入" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱 :">
          <el-input v-model="searchParam.email" placeholder="请输入" clearable></el-input>
        </el-form-item>
        <div class="more-item" v-show="searchShow">
          <el-form-item label="创建时间 :">
            <el-date-picker v-model="searchParam.createTime" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
        </div>
      </el-form>
      <div class="search-operation">
        <el-button type="primary" icon="Search" @click="search">搜索</el-button>
        <el-button icon="Delete" @click="reset">重置</el-button>
        <el-link type="primary" class="search-isOpen" @click="searchShow = !searchShow">
          {{ searchShow ? "收起" : "展开" }}
          <el-icon class="el-icon--right"> <component :is="searchShow ? 'ArrowUp' : 'ArrowDown'"></component> </el-icon
        ></el-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="useHooks">
import { getUserTableList } from "@/api/userApi"
import { genderType } from "@/utils/serviceDict"
import { useTable } from "@/hooks/useTable"
const { tableData, searchShow, pageable, searchParam, getTableList, search, reset, handleSizeChange, handleCurrentChange } = useTable(getUserTableList)
onMounted(() => {
  getTableList()
})
</script>
<style lang="scss" scoped></style>
