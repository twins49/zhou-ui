const { defineConfig } = require('@vue/cli-service')

const path = require('path')

const StylelintPlugin = require('stylelint-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.ts',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('views', resolve('examples/views'))
      .set('utils', resolve('examples/utils'))
      .set('hooks', resolve('examples/hooks'))
  },
  configureWebpack: () => {
    return {
      plugins: [
        new StylelintPlugin({
          configFile: resolve('.stylelintrc.js'), // 加载配置文件
          files: ['**/*.{html,vue,css,scss}'], // 要检查的扩展名
          lintDirtyModulesOnly: false, // 仅检查有变化的文件
          fix: false, // 是否自动修复
          cache: false, // 是否缓存
          emitWarning: true, // 开发运行时抛出Warning提示
          emitErrors: true, // 开发运行时抛出Error提示
        }),
      ],
    }
  },
})
