// 封装的目的：antd自带的Spin组件虽然可以实现加载中，但是其位置不居中，在显示上很不友好，为了让路由懒加载能够有很好的用户体验，建议封装Loading组件

import React, { Component } from "react";
import styled from "styled-components";
import { Spin } from "antd";

class Loading extends Component {
    render() {
        return (
            <Main>
                <Spin tip="不要急，请稍等片刻..." size="large" />
            </Main>
        );
    }
}

const Main = styled.div`
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 25% 50px;
    text-align: center;
    border-radius: 4px;
`;

export default Loading;
