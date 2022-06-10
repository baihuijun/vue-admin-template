<template>
  <div class="flex flex-col flex-1">
    <div class="tableBox flex-1">
      <div class="tableContainer">
        <el-table
          ref="tableRef"
          :data="state.tableData"
          :border="border"
          @selection-change="selectionChange"
          :row-key="getRowKeys"
          :stripe="stripe"
          v-loading="loading"
          element-loading-text="列表加载中..."
          height="100%"
        >
          <template v-for="item in tableColumns" :key="item">
            <el-table-column
              v-if="item.type == 'selection' || item.type == 'index'"
              :type="item.type"
              :reserve-selection="item.type == 'selection'"
              :label="item.label"
              :width="item.width"
              :fixed="item.fixed"
            >
            </el-table-column>
            <el-table-column
              v-if="item.type == 'expand'"
              :type="item.type"
              :label="item.label"
              :width="item.width"
              :fixed="item.fixed"
              v-slot="scope"
            >
              <slot :name="item.type" :row="scope.row"></slot>
            </el-table-column>
            <el-table-column
              v-if="item.prop && !item.type"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
              :sortable="item.sortable"
              :show-overflow-tooltip="true"
              :resizable="true"
              :fixed="item.fixed"
              v-slot="scope"
            >
              <slot :name="item.prop" :row="scope.row">
                <el-image
                  v-if="item.image"
                  :src="scope.row[item.prop!]"
                  :preview-src-list="[scope.row[item.prop!]]"
                  fit="cover"
                  class="table-image"
                  preview-teleported
                />
                <span v-else>
                  {{scope.row[item.prop!]}}
                </span>
              </slot>
            </el-table-column>
          </template>
          <template #empty>
            <div class="table-empty">
              <img src="@/assets/images/notData.png" alt="notData" />
              <div>暂无数据</div>
            </div>
          </template>
        </el-table>
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <el-pagination
        :currentPage="state.pageable.pageNum"
        :page-size="state.pageable.pageSize"
        :page-sizes="[10, 25, 50, 100]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="state.pageable.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Table } from './interface'

interface ProTableProps {
  columns: Partial<Table.ColumnProps>[] // 列配置项
  requestApi: (params: any) => Promise<any> // 请求表格数据的api ==> 必传
  pagination?: boolean // 是否需要分页组件 ==> 非必传（默认为true）
  initParam?: any // 初始化请求参数 ==> 非必传（默认为{}）
  border?: boolean // 表格是否显示边框 ==> 非必传（默认为true）
  stripe?: boolean // 是否带斑马纹表格 ==> 非必传（默认为false）
  toolButton?: boolean // 是否显示表格功能按钮 ==> 非必传（默认为true）
  isPageable?: boolean
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  pagination: true,
  initParam: {},
  border: true,
  stripe: false,
  toolButton: true,
  isPageable: true
})
const tableColumns = ref<Partial<Table.ColumnProps>[]>()
tableColumns.value = props.columns.map(item => {
  return {
    ...item
  }
})

const state = reactive<Table.TableStateProps>({
  // 表格数据
  tableData: [],
  // 分页数据
  pageable: {
    // 当前页数
    pageNum: 1,
    // 每页显示条数
    pageSize: 10,
    // 总条数
    total: 0
  },
  // 查询参数(只包括查询)
  searchParam: {},
  // 初始化默认的查询参数
  initSearchParam: {},
  // 总参数(包含分页和查询参数)
  totalParam: {}
})
onMounted(() => {
  getTableList()
})
const loading = ref<boolean>(false)
const pageParam = computed({
  get: () => {
    return {
      pageNum: state.pageable.pageNum,
      pageSize: state.pageable.pageSize
    }
  },
  set: (newVal: any) => {
    console.log('我是分页更新之后的值', newVal)
  }
})
const getTableList = async () => {
  try {
    // 更新查询参数
    updatedTotalParam()
    Object.assign(state.totalParam, props.initParam)
    loading.value = true
    const { data } = await props.requestApi(state.totalParam)
    loading.value = false
    state.tableData = props.isPageable ? data.datalist : data
    // 解构后台返回的分页数据(如果有分页更新分页信息)
    const { pageNum, pageSize, total } = data
    props.isPageable && updatePageable({ pageNum, pageSize, total })
  } catch (error) {
    console.log(error)
  }
}
const updatedTotalParam = () => {
  state.totalParam = {}
  let nowSearchParam: { [propName: string]: any } = {}
  // 防止手动清空输入框携带参数（可以自定义查询参数前缀）
  for (let key in state.searchParam) {
    // * 某些情况下参数为 false/0 也应该携带参数
    if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
      nowSearchParam[key] = state.searchParam[key]
    }
  }
  Object.assign(state.totalParam, nowSearchParam, props.isPageable ? pageParam.value : {})
}
const updatePageable = (resPageable: Table.Pageable) => {
  Object.assign(state.pageable, resPageable)
}
const isSelected = ref<boolean>(false)

// 获取行数据的 Key,用来优化 Table 的渲染;在使用跨页多选时,该属性是必填的
const getRowKeys = (row: { id: string }) => {
  return row.id
}
// 选中的数据列表
const selectedList = ref([])
const selectionChange = (rowArr: any) => {
  rowArr.length === 0 ? (isSelected.value = false) : (isSelected.value = true)
  selectedList.value = rowArr
}

const handleSizeChange = (val: number) => {
  state.pageable.pageNum = 1
  state.pageable.pageSize = val
  getTableList()
}

const handleCurrentChange = (val: number) => {
  state.pageable.pageNum = val
  getTableList()
}
const search = () => {
  state.pageable.pageNum = 1
  getTableList()
}
const reset = () => {
  state.pageable.pageNum = 1
  state.searchParam = {}
  // 重置搜索表单的时，如果有默认搜索参数，则重置默认的搜索参数
  Object.keys(state.initSearchParam).forEach(key => {
    state.searchParam[key] = state.initSearchParam[key]
  })
  getTableList()
}
// 当前选中的所有ids(数组)
const selectedListIds = computed((): string[] => {
  let ids: string[] = []
  selectedList.value.forEach(item => {
    ids.push(item['id'])
  })
  return ids
})

defineExpose({ search, reset, selectedListIds })
</script>
<style lang="scss" scoped>
.tableBox {
  position: relative;
  .tableContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
