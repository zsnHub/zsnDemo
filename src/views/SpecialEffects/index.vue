<template>
	<div class="effects">
		<div class="left dy-card">
			<div class="dy-card-header">Button水波纹效果</div>
			<div class="dy-card-body">
				<el-button v-waves type="primary">
					水波纹效果
				</el-button>
			</div>
		</div>
		<div class="center dy-card">
			<div style="padding: 5px ;">
				<paper-count :data="currentPapers" v-if="currentPapers > 0" :fontShow="false" />
			</div>
			<map-charts></map-charts>
		</div>
		<div class="right dy-card">
			<div class="dy-card-header">right</div>
		</div>
	</div>
</template>

<script>
	import PaperCount from '@/components/paperCount'
	// import ChineseMap from '@/components/charts/ChinaMap'
	import MapCharts from '@/components/charts/MapCharts'
	import waves from '@/directive/waves/index.js' // 水波纹指令
	
	export default {
		name: 'effects',
		components:{
			PaperCount,
			MapCharts
		},
		directives: {
			waves
		},
		data(){
			return{
				currentPapers:285147
			}
		}
	}
</script>

<style lang="less" scoped>
	.effects {
		display: flex;
		flex: 1;
		.center {
			flex: 1;
		}
		
		.left, .right {
			flex: 0 0 15em;
		}
		
		.left {
			order: -1;
		}
	}
</style>
