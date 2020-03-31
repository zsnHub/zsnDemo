<template>
  <div class="about">
	  <el-amap
		  :plugin="plugin"
		  :center="center"
		  :zoom="zoom"
		  class="amap-demo">
		  <el-amap-marker v-for="marker in markers"
		                  :position="marker.position"
		                  :key="marker.id"
		                  :events="marker.events"
		                  :icon="'/static/police.png'">
		  </el-amap-marker>
		  <el-amap-info-window v-if="window"
		                       :position="window.position"
		                       :visible="window.visible"
		                       :content="window.content"
		                       :offset="window.offset">
		  </el-amap-info-window>
	  </el-amap>
	  
  </div>
</template>
<script>
	// import BarChart from '@/components/charts/BarCharts'
	export default {
		// components:{
		// 	BarChart
		// },
		data() {
			return {
				// zoom: 12,
				// center: [121.59996, 31.197646],
				// amapManager: AMapManager,
				// events: {
				// 	init(o) {
				// 		let marker = new AMap.Marker({
				// 			position: [121.59996, 31.197646]
				// 		});
				//
				// 		marker.setMap(o);
				// 	}
				// }
				
				
				zoom: 12,
				center: [113.883107, 22.590993],
// 数据储存
				pointMarker:[],
				markers: [],
				windows: [],
				window: '',
				plugin: [{
					pName: 'ToolBar',
					events: {
						init (instance) {
							// console.log(instance)
						}
					}
				}]
				
			};
		},
		
		methods: {
			add() {
				let o = this.amapManager.getMap();
				let marker = new AMap.Marker({
					position: [121.59996, 31.177646]
				});
				
				marker.setMap(o);
			},
			
			point () {
				let markers = []
				let windows = []
				let that = this
				this.pointMarker.forEach((item, index) => {
					markers.push({
						position: [item.lng, item.lat],
						icon: item.icon,
						events: {
							click () {
								that.windows.forEach(window => {
									window.visible = false
								})
								that.window = that.windows[index]
								that.$nextTick(() => {
									that.window.visible = true
								})
							}
						}
					})
					windows.push({
						position: [item.lng, item.lat],
						content: '<div class="windows-text">' + '<div class="text-map">' +
							'<p>' + '烟感报警-方形测试' + '</p>' +
							'报警状态：' + item.status + '<br>' +
							'报警时间：' + item.time + '<br>' +
							'联系人：' + item.linkman + '<br>' +
							'联系电话：' + item.phone + '<br>' +
							'设备名称：' + item.equipment + '<br>' +
							'烟感环境温度：' + item.temp + '<br>' +
							'发现地址：' + item.site + '<br>' + '<div class="bottom">' +
							'<button onclick="getVideo()">' + '查看视频' + '</button>' + '</div>' + '</div>' + '</div>',
						offset: [5, -15],
						visible: false
					})
				})
				//  加窗体
				this.markers = markers
				// 加弹窗
				this.windows = windows
			}
		}
	}
</script>
<style lang="less" scoped>
	.amap-demo{
		width: 100%;
		height: 500px;
	}

</style>
