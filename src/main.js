import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
// import '@kangc/v-md-editor/lib/theme/style/github.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import hljs from "highlight.js";
VMdEditor.use(vuepressTheme);
VMdPreview.use(vuepressTheme);
Vue.use(VMdEditor);
Vue.use(VMdPreview);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
