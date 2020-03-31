import Vue from "vue"
import VueRouter from "vue-router"
import index from '../views/index.vue'
import{menuRouter} from '../constants/constants'

Vue.use(VueRouter)
const routes = [
		{
			path: '/',
			// redirect: {name: 'index'},
			component:index,
			children: menuRouter
		},
		{
			path: '/login',
			name: 'login',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ '../views/login')
		}
	]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
