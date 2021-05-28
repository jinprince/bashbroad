// 根组件

import React, { Component } from "react";
// 导入路由
import Routes from "@/router/index";

class App extends Component {
    render() {
        return (
            <>
                <Routes />
            </>
        );
    }
}

export default App;
