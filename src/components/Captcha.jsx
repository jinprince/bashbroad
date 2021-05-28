// 验证码在项目中一般会重复的使用，为了降低代码重复率，建议封装
// 请注意：axios后续需要结合拦截器进行封装
// 问题：此处的axios是用封装前的还是封装后的？
// 镜像问题：此处的请求地址是用封装前的还是封装后的？
// 俩个问题的答案都是一样的：封装前的，目的是让封装的组件具备更好的可移植性（后续可能还有其它的项目也需要用到这个封装的组件，到时候只需要直接复制过去，即插即用）
// 服务端返回三个数据：
// sensitive：对用户输入的验证码内容大小写是否敏感
// key：与验证码对应的验证标识，在验证用户输入的时候需要回传给服务器
// img：验证码对应的base64格式字符串，与正常的路径一样使用，将其给img标签的src属性即可

import React, { Component } from "react";
import axios from "axios";

class Captcha extends Component {
    // 状态初始化
    state = {
        img: "",
    };

    render() {
        return (
            <div>
                {/* 接收来自父组件的高度指定 */}
                <img src={this.state.img} alt="captcha" height={this.props.height} onClick={this.loadCaptcha} />
            </div>
        );
    }

    // 发起网络请求
    componentDidMount() {
        this.loadCaptcha();
    }

    // 获取验证码
    loadCaptcha = () => {
        axios.get("https://reactapi.iynn.cn/captcha/api/math").then((ret) => {
            // 将验证码赋值给img属性
            this.setState(() => {
                return { img: ret.img };
            });
            // 把key给父组件（调用验证码的那个组件）
            // 父组件在调用该验证码组件的时候应当传递一个属性，约定属性名为setKey，该属性对应的是一个方法，接受一个形参，形参就是key
            this.props.setKey(ret.key);
        });
    };
}

export default Captcha;
