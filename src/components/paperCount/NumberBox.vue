<template>
	<section>
		<div v-if="currentNumber === ','" class="comma">,</div>
		<div v-else class="number-column">
			<div class="numbers-elevator currentNumber " :class="`ele-${currentNumber}`">
				<div v-for="number in nuberArray" class="number-cell" :key="number">
									{{ number }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props:{
			currentNumber:{
				type:String
			}
		},
		data() {
			return {
				nuberArray:[0,1,2,3,4,5,6,7,8,9],
			}
		},
		
	}
</script>

<style lang="less" scoped>
	@import '../../style/rollingNumber.less';
</style>
