<!--泡泡组件-->
<template>
	<div class="section" style="display:flex">
		<ChineseMap width="610px" height="470px"/>
		<div style="position: relative; flex: 1;overflow: hidden">
			<div
				v-for="(data ,i) in formatBubbleData(targetData)"
				:key="data.name" class="float-bubble"
				:style="{backgroundColor: data.color, width: `${data.radius * 2}px`, height: `${data.radius * 2}px`, left: `${data.left}px`, top: `${data.top}px` }">
				<span style="font-size: 14px">{{ data.count }}</span>
				<span v-if="data.name.length>5">{{ data.name.substr(0,5)}} <br/> {{ data.name.substring(5,data.name.length) }} </span>
				<span v-else style="font-size: 16px">{{ data.name }}</span>
			</div>
			
			<div
				v-for="(data,i) in emptyBubble"
				:key="i" class="empty-bubble"
				:style="{ left:`${data.left}px` ,top:`${data.top}px` ,width: `${data.radius * 2}px`,height: `${data.radius * 2}px`}"></div>
		</div>
	</div>
</template>

<script>
	import ChineseMap from '../charts/ChinaMap'
	
	export default {
		components: {
			ChineseMap
		},
		props: {
			targetData: {
				type: Object
			},
		},
		data() {
			return {
				emptyBubble: [
					{left: 40, top: 500, radius: 11},
					{left: 200, top: 500, radius: 11},
					{left: 50, top: 500, radius: 27},
					{left: 459, top: 500, radius: 35},
					{left: 339, top: 500, radius: 11},
					{left: 490, top: 500, radius: 11}
				]
			}
		},
		methods: {
			formatBubbleData(totalStatis) {
					const {users, schools, groups, teachers, students, parents} = totalStatis;
					return [
						{name: 'CSS', count: groups, radius: 42, color: 'rgba(254, 218, 0, 0.8)', left: 30, top: 275},
						{name: 'JS', count: schools, radius: 54, color: 'rgba(30, 173, 249, 0.8)', left: 72, top: 163},
						{name: 'VUE', count: users, radius: 62, color: 'rgba(47, 209, 198, 0.8)', left: 100, top: 245},
						{name: 'Webpack', count: teachers, radius: 73, color: 'rgba(145, 113, 222, 0.8)', left: 223, top: 90},
						{name: 'node', count: students, radius: 83, color: 'rgba(80, 193, 89, 0.8)', left: 335, top: 149},
						{name: 'ES6', count: parents, radius: 57, color: 'rgba(247, 149, 62, 0.9)', left: 343, top: 285}
					];
			}
		}
		
	}
</script>

<style lang="less" scoped>
	@import "../../style/manageReports";
	.float-bubble {
		position: absolute;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-radius: 50%;
		color: #fff;
	}
	
	.empty-bubble {
		position: absolute;
		border-radius: 50%;
		/*background-color: rgba(255, 255, 255, 0.2)*/
		background-color: rgba(192, 170, 202, 0.6)
	}
</style>
