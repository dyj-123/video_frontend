// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/commen.css'
import VideoPlayer from 'vue-video-player'
import ElementUI from 'element-ui';
// import axios from 'axios';
import ViewUI from 'view-design';
Vue.prototype.$axios = axios;
var axios = require('axios');
axios.defaults.baseURL = 'http://127.0.0.1:8081';
//引入完成之后需要挂载到vue上
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'view-design/dist/styles/iview.css';
import EleUploadVideo from "vue-ele-upload-video";
// import 'src/my-theme/index.less';

Vue.use(ViewUI);

Vue.component(EleUploadVideo.name, EleUploadVideo);
Vue.use(VideoPlayer)
Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.config.productionTip = false
// var axios = require('axios');
// axios.defaults.baseURL = 'http://10.10.22.106';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
