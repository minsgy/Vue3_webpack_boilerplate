
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  
  entry: './main.js',
  output: {
    // 도메인 절대경로로 실행 섲렁
    publicPath: '/',
    // dist 값을 정리 후 적용합니다.
    clean: true,
  },
  module: {
    rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader',
         'postcss-loader',
       ]
     }
    ],
  },
  plugins: [
    new HtmlPlugin({
      // path.resolve 자체적으로 실행되긴합니다! 어떠한 html 파일을 사용할 건지 지정해줍니다.
      template: './index.html',
    }),
  ],
}
