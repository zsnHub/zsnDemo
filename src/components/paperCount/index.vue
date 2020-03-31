<!--数字滚动效果-->
<template>
	<div style="display: flex; justify-content: center; align-items: center; ">
		<div v-if="fontShow" style="font-size: 1.5em; margin-right: 10px " >显示数量</div>
		<div style="display: flex; justify-content: center; height: 51px" class="paper-count">
			<number-box v-for="(currentNumber, index) in sum" :key="index" :current-number="currentNumber" />
		</div>
	</div>

</template>

<script>
	import numberBox from './NumberBox'
	export default {
		props:{
			data:{
				type:Number
			},
			fontShow:{
				type:Boolean,
				default:true
			}
		},
		components:{
			numberBox
		},
		data() {
			return {
				sum:''
			}
		},
		created(){
			this.sum = this.data.toLocaleString().replace(/\d/g, '0');
		},
		
		watch:{
			data:{
				deep: true,
				handler(val) {
					this.timer = setTimeout(() => {
						this.sum = val.toLocaleString();
					}, 1000)
				}
			}
		},
		mounted() {
			this.timer = setTimeout(() => {
				const sum = this.data.toLocaleString();
				this.sum = sum
				
			}, 1 * 1000)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
	}
</script>
