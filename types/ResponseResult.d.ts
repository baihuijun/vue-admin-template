interface ResponseResult<T> {
  [x: string]: { access_token: any }
  data: any
  code: number
  msg: string
  result: T
}
