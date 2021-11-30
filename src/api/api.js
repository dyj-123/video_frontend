import axios from 'axios'
axios.defaults.baseURL = '/api';
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
      'Content-Type': false}
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

