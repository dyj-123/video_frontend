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
export function getPersonalVideoByTitle(title,curPage,pageSize){
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

export function getVideoByType(title,typeId,curPage,pageSize){
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

