<template>
	<div v-if="dateType === 'date'" style="padding:0 30px">{{ currentTime }}</div>
	<div v-else class="current-time">{{ currentTime }}</div>
</template>

<script>
	export default {
		props: {
			dateType: {// dateType :date 时 返回y-m-d h：m：s 否则返回h：m：s
				type: String,
				default: 'date'
			}
		},
		data() {
			return {
				currentTime: this.getTime()
			}
		},
		mounted() {
			this.timer = setInterval(() => {
				this.currentTime = this.getTime()
			}, 1000)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods: {
			getTime() {
				let today = new Date()
				let ymd = today.toISOString().slice(0, 10)
				let hms = today.toTimeString().slice(0, 8)
				return this.dateType ==='date'?`${ymd} ${hms}`: hms
			}
		}
	}
	
</script>

<style lang="less" scoped>
	div {
		font-family: monospace;
		font-size: 18px;
		color: #ffffff;
	}

</style>
