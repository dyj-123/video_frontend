import Vue from 'vue'
import Router from 'vue-router'
import videoplayer from '../pages/Videos/videoplayer.vue'

import videoListtest from '../pages/Videos/videoListtest.vue'
import VideoManange from "../pages/admin/VideoManange";
import videoList from "../pages/Videos/videoList";
import Login from "../pages/admin/Login";
import Home from "../pages/home/Home";
import videoSquare from "../pages/Videos/videoSquare";

Vue.use(Router)

export default new Router({

  routes: [
    {
      path:'/',
      redirect:'/Home',

    },

    {
      path:'/Login',
      name:'Login',
      component:Login
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
      path:'/videoSquare',
      name:'videoSquare',
      component:videoSquare
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
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    },

  ]
})
