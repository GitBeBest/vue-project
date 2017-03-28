var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{
    '/api':{
      target: 'http://music.163.com',
      changeOrigin: true,
      pathRewrite :{
        '^/api': ''
      }
    }
  }
})
