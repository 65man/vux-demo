// 1.0.1 导入axios
import axios from "axios";


// 1.0.2创建一个axios实例，自己配置
const axios = axios.create({
  // 请求的根路径
  baseURL: HTTP_BASE_URL,
  // 请求超时的时间 10秒超时
  timeout: 10 * 100
});

// 1.0.3 请求拦截器
// 1.0.4 响应拦截器
// 1.0.5 封装一个发送请求的函数
