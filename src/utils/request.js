import axios from 'axios'
import store from '@/store'
const service = axios.create({
	// baseURL:process.env.baseUrl,
	timeout:60000,
	"Content-Type": "application/json"
})
// 请求前
service.interceptors.request.use(
	config => {
		// 请求发送之前
		if (store.getters.token) {
			// 设置请求头
			config.headers['token'] = '123456'
		}
		return config
	},
	error => {
		// 请求错误要做的提示
		// console.log(error) // for debug
		return Promise.reject(error)
	}
)

//请求后
service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code === 0) {
			return res
		} else {
			// if(res.code === 400 || res.code === 401 || res.code === 500 || res.code ===501){
			// alert
			// }
			return Promise.reject(res || 'Error');
		}
	},
	errorResponse => {
		// alert(errorResponse.message)
		return Promise.reject(errorResponse)
	})

export default service
