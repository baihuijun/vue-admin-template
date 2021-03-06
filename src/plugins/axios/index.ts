import Axios from './Axios'
const http = new Axios({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true
})

export default http
