import {get} from './request'

// 获取主页的轮播图的数据
export function getHomeMutiData(){
  return get({
    url: '/home/multidata'
  })
}
// 获取首页商品数据
export function getHomeData(config){
  return get({
    url: '/home/data',
    params: {
      type: config.type,
      page: config.page
    }
  })
}