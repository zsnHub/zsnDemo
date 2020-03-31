import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Waves from './directive/waves/index.js' //水波纹自定义指令
import Util from './utils'
import './permission'
import VueAMap from 'vue-amap'

Vue.config.productionTip = false
Vue.use(Waves)
Vue.use(Util)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
	key: 'your amap key',
	plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
	// 默认高德 sdk 版本为 1.4.4
	v: '1.4.4',
	uiVersion: '1.0' // ui库版本，不配置不加载,
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
