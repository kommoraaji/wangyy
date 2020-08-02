import http from './axios'

//推荐歌单
export function getsonglist(){
  return http.get('/personalized')
}

//推荐新音乐
export function newsong(){
  return http.get('/personalized/newsong')
}

//热门歌单分类
export function hotsong(){
  return http.get('/top/playlist')
}

//热门搜索
export function gethotsearch(){
  return http.get('/search/hot')
}

//搜索
export function getsearch(data){
  return http.get('/search',data)
}
