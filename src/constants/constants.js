const menuRouter=[
	{
		path: '',
		name: 'home',
		component: () => import('../views/Home.vue'),
		index:"1-1",
		title:'Home'
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		index:"1-2",
		title:'About'
	},{
		path: '/effects',
		name: 'effects',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/SpecialEffects'),
		index:"1-3",
		title:'Effects'
	},
]
export {menuRouter}
