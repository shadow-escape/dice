const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    runtimeCompiler: true,
    transpileDependencies: true,
    publicPath: '/dice/',
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                isCustomElement: tag => ['x-g'].includes(tag)
            }))
    }
})
