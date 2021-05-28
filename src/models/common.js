// common模型：将公共的请求数据处理及请求操作写在这里
import req from "@/services/http";
import { NORMAL_LOGIN, MOBILE_LOGIN } from "@/config/url";

// 做请求方法
const model = {
    // 常规登录方法
    normalLogin(obj) {
        return req.post(NORMAL_LOGIN, obj);
    },
    // .....
};

// 导出模型
export default model;
