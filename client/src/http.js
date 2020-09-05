import axios from "axios"
import { Loading, Message } from "element-ui"
import router from './router'
let loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "拼命加载中...",
    background: "rgba(0,0,0,.6)",
  })
}
function endLoading() {
  loading.close()
}
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    startLoading()

    // 配置token过期
    if(localStorage.eletoken){
      // 设置统一的请求头
      config.headers.Authorization = localStorage.getItem('eletoken');
      
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    endLoading()
    return response
  },
  (error) => {
    // 错误提醒
    endLoading()
    Message.error(error.response.data.msg)
    // 获取错误状态码，判断token是否过期
    const {status} = error.response;
    if( status == 401 ){
      Message.error("token失效，请重新登录")
      localStorage.removeItem('eletoken');
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default axios
