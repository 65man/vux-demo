// 1.0.1 导入axios
import vue from "vue";
import axios from "axios";
import qs from "qs";

// 1.0.2创建一个axios实例，自己配置
const axios = axios.create({
  // 请求的根路径
  baseURL: HTTP_BASE_URL,
  // 请求超时的时间 10秒超时
  timeout: 10 * 100
});

// 1.0.3 请求拦截器
axios.interceptors.requeset.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 1.0.4 响应拦截器
axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.resolve(error, res);
  }
);

// 1.0.5 检查状态码
function checkStatus(res) {
  // loading
  // 如果状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    return res;
  }
  // 如果状态码异常，则返回错误信息
  return {
    status: -404,
    msg: "网络异常"
  };
}

// 1.0.5 根据code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
function checkCode(res) {
  if (res.status === -404) {
    alert(res.msg);
  }
  if (res.data && !res.data.success) {
    alert(res.data.error_msg);
  }
  return res;
}

// 1.0.5 注册自定义get请求
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params }).then(res => {

    })
  });
};
