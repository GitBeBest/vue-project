module.exports = {
  NODE_ENV: '"production"',
  proxyTable:{
      '/api':{
          target: 'http://music.163.com',
          changeOrigin: true,
          pathRewrite :{
              '^/api': ''
          }
      }
  }
}
