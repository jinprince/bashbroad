// 思路：通过tabs选项卡的方式进行两种登录方式切换，需要导入antd中的tabs组件
import React, { Component } from "react";
import { Tabs } from "antd";
import { LockOutlined, ShakeOutlined } from "@ant-design/icons";
// 导入表单组件
import NormalLogin from "./NormalLogin";
import MobileLogin from "./MobileLogin";
// 导入styled
import styled from "styled-components";
const { TabPane } = Tabs;
// 样式
const Main = styled.div`
    margin: 0 auto;
    width: 400px;
    padding-top: 10%;
`;

class Index extends Component {
    render() {
        return (
            <Main>
                <Tabs defaultActiveKey="1" centered="true" size="large">
                    <TabPane
                        tab={
                            <span>
                                <LockOutlined />
                                常规登录
                            </span>
                        }
                        key="1"
                    >
                        {/* 调用常规登录的表单组件 */}
                        <NormalLogin />
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <ShakeOutlined />
                                短信登录
                            </span>
                        }
                        key="2"
                    >
                        {/* 调用手机登录的表单组件 */}
                        <MobileLogin />
                    </TabPane>
                </Tabs>
            </Main>
        );
    }
}

export default Index;
