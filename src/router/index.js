// 项目路由文件
import { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// 导入loading组件
import Loading from "@/components/Loading";

// 使用lazy导入需要的组件
const Login = lazy(() => import("@/views/login/Index"));
// .....

// 编写路由规则
const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Redirect from="/" to="/login" />
            </Switch>
        </Suspense>
    );
};

// 导出路由规则
export default Routes;
