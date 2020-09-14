import {get} from './request'

// 获取主页的轮播图的数据
export function getHomeMutiData(){
  return get({
    url: '/home/multidata'
  })
}