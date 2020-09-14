const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // @代表src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
