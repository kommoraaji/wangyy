import http from './axios'

//推荐歌单
export function getsonglist(params){
  return http.get('/personalized',{
    params
  })
}

//推荐新音乐
export function newsong(){
  return http.get('/personalized/newsong')
}

//热门歌单分类
export function hotsong(){
  return http.get('/playlist/detail?id=3778678')
}

//热门搜索
export function gethotsearch(){
  return http.get('/search/hot')
}

//搜索
export function getsearch(params){
  return http.get('/search',{
    params
  })
}
