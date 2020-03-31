import _ from 'lodash'
import moment from 'moment'
import * as echarts from 'echarts'
/**
 * 格式化时间
 * @param date
 * @returns {*|string}
 */
const dateFormat = date => date && moment(date).format('YYYY-MM-DD') || date

/**
 * 暴露值给全局对象window
 * @param value
 * @param key
 * @returns {any} || string
 */

const setToWindow = (value, key) => window[`__${_.toUpper(key)}___`] = JSON.parse(JSON.stringify(value))
/**
 * 获取localStorage存储的user信息
 * @param key：字段名称
 * @returns {any}
 */
const getUserInfo=(key)=>{
	const object=JSON.parse(localStorage.getItem('user'))
	return object[key]
}

const getPercentageFormat=(tdData)=> {
	return _.isNumber(tdData) ? (tdData + '%') : tdData;
}
/*
* 格式化数据
* arr ：数组
* */
const formatOptions=(arr)=> {
	return _.map(arr, item => ({
		value: item,
		label: item
	}));
}
const  dateDiff=(Dates)=> {
	const month = new Date().getMonth() + 1
	const now = `${new Date().getFullYear()}-${month > 9 ? month : '0' + month}-${new Date().getDate()}`
	const endDates = new Date(Dates);
	const nowDates = new Date(now);
	const diff = Math.abs(endDates.getTime() - nowDates.getTime())
	const result = parseInt(diff / (1000 * 60 * 60 * 24));
	return result > 0
}
/**
 *
 * @param text
 * @returns {string}
 */
const getParenthesesStr=(text)=> {
	let result = ''
	if (!text)
		return result
	let regex = /\((.+?)\)/g;
	let options = text.match(regex)
	if (options) {
		let option = options[0]
		if (option) {
			result = option.substring(1, option.length - 1)
		}
	}
	return result
}

export const util = {
	dateFormat,
	setToWindow,
	getUserInfo,
	getPercentageFormat,
	formatOptions,
	dateDiff,
	getParenthesesStr
}

export default {
	install(Vue) {
		Vue.prototype.$lo = _
		Vue.prototype._ = _
		Vue.prototype.$util = util
		Vue.prototype.$echarts = echarts
	}
}
