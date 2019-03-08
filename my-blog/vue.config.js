module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist2', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
  devServer: {
    open: false,//运行自动打开浏览器
    host: '192.168.0.15',//访问域名
    port: 8081,//端口号
    https: false,
    hotOnly: false,
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:8090/blog/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
