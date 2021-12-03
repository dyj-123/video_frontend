import axios from 'axios'
axios.defaults.baseURL = '/api';
//获取个人的所有视频
export function getPersonalVideo(curPage,pageSize) {
  return axios.get('/v1/personal/getAllVideo',
    {params:{
        'curPage':curPage, 'pageSize':pageSize
      }
    });
}
//获取所有视频
export function getAllVideo(curPage,pageSize) {
  return axios.get('/v1/getAllVideo',
    {params:{
        'curPage':curPage, 'pageSize':pageSize
      }
    });
}
// 通过视频标题获取视频
export function getVideoByTitle(title,curPage,pageSize){
  return axios.get('/v1/getVideoByTitle',
    {params:{
        'title':title,
        'curPage':curPage,
        'pageSize':pageSize,
      }
    });
}
// 通过视频标题获取个人视频
export function getPersonalVideoByTitle(title,curPage,pageSize){//有title则相当于按title查询个人视频，没有则返回个人的所有视频
  return axios.get('/v1/personal/getVideoByTitle',
    {params:{
        'title':title,
        'curPage':curPage,
        'pageSize':pageSize,
      }
    });
}
// 通过视频id获取视频
export function getVideoById(Id){
  return axios.get('/v1/getVideoById',
    {params:{
        'id':Id
      }
    });
}
export function deleteVideo(videoId){
  return axios.get('/v1/deleteVideo',
    {
      params:{
        'videoId':videoId
      }
    })
}

export function editVideo(params){
  return axios.post('/v1/editVideoInfo',params,{ headers: {
      'Content-Type': 'multipart/form-data'}
  })
}
export function editPicture(params){
  return axios.post('/v1/editPicture',params,{ headers: {
      'Content-Type': false}
  })
}
export function uploadVideoToServer(params){
  return axios.post('/v1/uploadVideo',params,{ headers: {
      'Content-Type': 'multipart/form-data'}
  })
}

export function getTypeList(){
  return axios.get('/v1/getTypeList')
}

export function getVideoByType(title,typeId,curPage,pageSize){//如果前端没有title则相当于按type查询，有title则相当于按title查询
  return axios.get('/v1/getVideoByType',{
    params:{
      'title':title,
      'typeId':typeId,
      'curPage':curPage,
      'pageSize':pageSize
    }
  })
}
export function login(params){
  return axios.post('/v1/login',params)
}

export function logout(){
  return axios.get('https://oauth.shu.edu.cn/oauth/logout', {params:{
    retUrl:"http://127.0.0.1:8080"
    }})
}

export function getTagList(){
  return axios.get('/v1/public/getTagList');
}

export function getPublishedVideo(title,tag,curPage,pageSize){
  return axios.get('/v1/public/getPublishedVideo',{
    params:{
      'title':title,
      'tag':tag,
      'curPage':curPage,
      'pageSize':pageSize
    }
  })
}
