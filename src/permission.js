import router from './router'
// import store from './store'

router.beforeEach ((to, from, next)=>{
	const hasToken = window.localStorage.getItem('zsnToken');
		if(hasToken){
			if(to.path ==='/login') {
				next({ path: '/' })
			}else{
				next()
			}
		}else{
			if(to.path !== '/login'){
				next({ path: '/login' })
			}else{
				next()
			}
		}
	
})
