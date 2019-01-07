/**
 * instruction: 对axios请求拦截;
 * Created by yhc800 on 2018/10/24 0024.
 */
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_API, // 需要在config/ dev.env.js 和 prod_env.js
  timeout: 30 * 1000 // 请求超时 30s
});
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// http 请求拦截
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
