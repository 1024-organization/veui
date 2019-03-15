import Vue from 'vue'
import App from './App.vue'
import StudyUI from '../packages'
import '../packages/theme/index.scss'
Vue.use(StudyUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
