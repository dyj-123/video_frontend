import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import videoplayer from '../pages/Videos/videoplayer.vue'
// import videoplayertest from '@/components/videoplayertest'
import videoListtest from '../pages/Videos/videoListtest.vue'
import VideoManange from "../pages/admin/VideoManange";
import videoList from "../pages/Videos/videoList";
// import videomanagetest from "../pages/admin/videomanagetest";
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/videoplayer',
      name: 'videoplayer',
      component: videoplayer
    },

    // {
    //   path: '/videoplayertest',
    //   name: 'videoplayertest',
    //   component: videoplayertest
    // },
    {
      path: '/videoListtest',
      name: 'videoListtest',
      component: videoListtest
    },
    {
      path: '/videoListtest',
      name: 'videoListtest',
      component: videoListtest
    },
    {
      path:'/VideoManage',
      name:'VideoManage',
      component:VideoManange
    },
    {
      path:'/videoList',
      name:'videoList',
      component:videoList
    }
  ]
})
