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
    <div class="table-header">
      <div class="header-button-lf">
        <el-button type="primary" icon="CirclePlus" @click="openDrawer('新增')" v-if="BUTTONS.add">新增用户</el-button>
        <el-button type="primary" icon="Upload" plain @click="batchAdd" v-if="BUTTONS.batchAdd">批量添加用户</el-button>
        <el-button type="primary" icon="Download" plain @click="downloadFile" v-if="BUTTONS.export">导出用户数据</el-button>
        <el-button type="danger" icon="Delete" plain :disabled="!isSelected" @click="batchDelete" v-if="BUTTONS.batchDelete"> 批量删除用户 </el-button>
      </div>
      <div class="header-button-ri">
        <el-button icon="Refresh" circle @click="getTableList"> </el-button>
      </div>
    </div>
    <el-table :data="tableData" :border="true" @selection-change="selectionChange" :row-key="getRowKeys">
      <el-table-column type="selection" reserve-selection width="80" />
      <el-table-column prop="username" label="用户姓名" :formatter="defaultFormat" show-overflow-tooltip width="140"></el-table-column>
      <el-table-column prop="gender" label="性别" show-overflow-tooltip width="140" v-slot="scope">
        {{ scope.row.gender == 1 ? "男" : "女" }}
      </el-table-column>
      <el-table-column prop="idCard" label="身份证号" :formatter="defaultFormat" show-overflow-tooltip></el-table-column>
      <el-table-column prop="email" label="邮箱" :formatter="defaultFormat" show-overflow-tooltip width="240"></el-table-column>
      <el-table-column prop="address" label="居住地址" :formatter="defaultFormat" show-overflow-tooltip></el-table-column>
      <el-table-column prop="createTime" label="创建时间" :formatter="defaultFormat" show-overflow-tooltip width="200"></el-table-column>
      <el-table-column prop="status" label="用户状态" width="180" v-slot="scope">
        <el-switch :value="scope.row.status" :active-text="scope.row.status === 1 ? '启用' : '禁用'" :active-value="1" :inactive-value="0" @change="changeStatus($event, scope.row)" v-if="BUTTONS.status" />
        <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'" v-else> {{ scope.row.status === 1 ? "启用" : "禁用" }}</el-tag>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="320" v-slot="scope">
        <el-link type="primary" :underline="false" @click="openDrawer('查看', scope.row)">
          <el-icon> <View></View></el-icon>
          查看
        </el-link>
        <el-link type="primary" :underline="false" @click="openDrawer('编辑', scope.row)">
          <el-icon> <EditPen></EditPen></el-icon>
          编辑
        </el-link>
        <el-link type="warning" :underline="false" @click="resetPass(scope.row)">
          <el-icon> <Refresh></Refresh></el-icon>
          重置密码
        </el-link>
        <el-link type="danger" :underline="false" @click="deleteAccount(scope.row)">
          <el-icon> <Delete></Delete></el-icon>
          删除
        </el-link>
      </el-table-column>
      <template #empty>
        <div class="table-empty">
          <img src="@/assets/images/notData.png" alt="notData" />
          <div>暂无数据</div>
        </div>
      </template>
    </el-table>
    <el-pagination :currentPage="pageable.pageNum" :page-size="pageable.pageSize" :page-sizes="[10, 25, 50, 100]" background layout="total, sizes, prev, pager, next, jumper" :total="pageable.total" @size-change="handleSizeChange" @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<script lang="ts" setup name="useHooks">
import { getUserTableList, changeUserStatus } from "@/api/userApi"
import { genderType } from "@/utils/serviceDict"
import { useTable } from "@/hooks/useTable"
import { useSelection } from "@/hooks/useSelection"
import { useAuthButtons } from "@/hooks/useAuthButtons"
import { useHandleData } from "@/hooks/useHandleData"
import { defaultFormat } from "@/utils/util"
const { tableData, searchShow, pageable, searchParam, getTableList, search, reset, handleSizeChange, handleCurrentChange } = useTable(getUserTableList)
const { isSelected, selectionChange, getRowKeys } = useSelection()
// 用户按钮权限
const { BUTTONS } = useAuthButtons()
onMounted(() => {
  getTableList()
})
const openDrawer = (type: string, row?: any) => {
  console.log(type)
  console.log(row)
  // console.log(selectedListIds.value)
}
const resetPass = (row: any) => {
  console.log(row)
}
const deleteAccount = (row: any) => {
  console.log(row)
}
const batchAdd = () => {
  console.log("查看")
}
const batchDelete = () => {
  console.log("删除")
}
const downloadFile = () => {
  console.log("导出")
}
// 切换用户状态
const changeStatus = async (val: number | string | boolean, params: any) => {
  console.log(val)
  console.log(params)
  await useHandleData(changeUserStatus, { id: params.id, status: val }, `切换【${params.username}】用户状态`)
  params.status = params.status == 1 ? 0 : 1
}
</script>
<style lang="scss" scoped></style>
