export namespace Table {
  export type TypeProp = "index" | "selection" | "expand"

  export type FixedProp = "left" | "right"

  export interface ColumnProps {
    type: TypeProp // index | selection | expand（特殊类型）
    prop: string // 单元格数据（非特殊类型必填）
    label: string // 单元格标题（非特殊类型必填）
    width: number | string // 列宽
    isShow: boolean // 是否显示
    sortable: boolean // 是否可排序（静态排序）
    fixed: FixedProp // 固定列
    tag: boolean // 是否是标签展示
    image: boolean // 是否是图片展示
    search?: boolean
  }
  export interface Pageable {
    pageNum: number
    pageSize: number
    total: number
  }
  export interface TableStateProps {
    tableData: any[]
    pageable: Pageable
    searchParam: {
      [key: string]: any
    }
    initSearchParam: {
      [key: string]: any
    }
    totalParam: {
      [key: string]: any
    }
    icon?: {
      [key: string]: any
    }
  }
}
