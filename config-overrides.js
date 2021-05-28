// 自己定义关于webpack的配置，该配置文件会被customize-cra react-app-rewired合并掉react项目自身带的webpack的配置
// 配置信息可以参考：https://www.npmjs.com/package/customize-cra
const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // 在webpack中禁用eslint
    disableEsLint(),

    // 添加webpack别名
    addWebpackAlias({
        // 添加路径对@符号的支持
        ["@"]: path.resolve("./src"),
    })
);