import React, { Component, createRef } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { withRouter } from "react-router-dom";
// 导入封装好的验证码组件
import Captcha from "@/components/Captcha";
// 导入需要的模型
import Model from "@/models/common";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};

class NormalLogin extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.ref_captcha = createRef();
    }
    // 初始化状态
    state = {
        key: "",
    };
    render() {
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "请输入用户名！",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "请输入密码！",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label="验证码">
                        <Row gutter={8}>
                            <Col span={14}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: "请输入验证码！",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                {/* 放上验证码组件 */}
                                <Captcha height="31.6" setKey={this.setKey} ref={this.ref_captcha} />
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        {/* block：让按钮与其父元素一样宽 */}
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    // 登录按钮的回调
    onFinish = (values) => {
        // 组合一下key
        values["key"] = this.state.key;
        // 需要在这里发送请求
        Model.normalLogin(values).then((ret) => {
            // 判断结果
            if (ret.errNo === 0) {
                // 没错
                message.success(ret.message, 2, () => {
                    this.props.history.push("/dashboard");
                });
                // dashboard：面板/仪表盘
                // this.props.history.push("/dashboard");
            } else {
                // 有错
                message.error(ret.errText);
                // 调用子组件（验证码组件）刷新验证码
                this.ref_captcha.current.loadCaptcha();
            }
        });
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    // 用于传递给子组件，获取子返回的key
    setKey = (key) => {
        this.setState(() => {
            return {
                key,
            };
        });
    };
}

export default withRouter(NormalLogin);
