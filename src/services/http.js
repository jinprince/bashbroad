// 对axios的封装
import axios from "axios";

// 请求拦截器
axios.interceptors.request.use((cfg) => {
    // 判断本地是否有jwt，有就带着
    let jwt = localStorage.getItem("jwt");
    if (jwt) {
        // 将jwt放到请求头中
        cfg.headers.Authorization = jwt;
    }
    return cfg;
});

// 响应拦截器
axios.interceptors.response.use((ret) => {
    // 判断
    // 有jwt的前提是必须得先有context，否则部分接口可能会报错
    if (ret.data.context && ret.data.context.jwt) {
        // 说明服务器返回了新的jwt值，替换掉本地已经存储的
        localStorage.setItem("jwt", ret.data.context.jwt);
    }

    // 简化返回值，省去了一个data
    return ret.data || ret;
});
// 导出
export default axios;
