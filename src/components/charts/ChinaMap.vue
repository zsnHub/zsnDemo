<template>
	<div id="charts" :class="className" :style="{height:height,width:width}" />
</template>

<script>
	import echarts from 'echarts'
	import 'echarts/map/js/china.js'
	require('echarts/theme/macarons')
	require('echarts/extension/bmap/bmap')
	
	// const animationDuration = 6000
	export default {
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			width: {
				type: String,
				default: '610px'
			},
			height: {
				type: String,
				default: '470px'
			},
			location: {
				type: String,
			},
		},
		data () {
			return {
				chart:null,
				province:'',
				city:'',
				GEO_china:{
					'郑州':[113.666486,34.751305]
				},
				data: [{name:'郑州', value: 0}]
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.initChart()
			})
		},
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			this.chart.dispose()
			this.chart = null
		},
		methods:{
			convertData(data) {
				const res = [];
				for (let i = 0; i < data.length; i++) {
					let geoCoord = this.GEO_china[data[i].name];
					if (geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			},
			initChart(){
				this.chart = echarts.init(this.$el, 'macarons')
				this.chart.setOption({
					geo: {//配置地图参数
						map: "china",
						roam: false,
						zoom:1.2,
						// scaleLimit:{min:1.2,max:1.2},
						label: {
							normal: {
								show: true,
								color:'#d87a80'
							},
							emphasis: {
								show: false,
								color:'#d87a80'
							}
						},
						itemStyle: {
							normal: {
								// areaColor: "#ddfdfd",
								areaColor: "#f0f2f5",
								borderColor: "#111"
							},
							emphasis: {
								// areaColor: "rgb(18, 55, 154)"
								areaColor: "#ddfdfd"
								// areaColor: "#4cbab0"
							}
						},
						regions: [
							{
								name: "南海诸岛",
								value: 0,
								label: {
									normal: {
										show: false,
									}
								},
								itemStyle: {
									normal: {
										opacity: 0,
										label: {
											show: false,
										}
									}
								}
							}, {
								name: '河南',
								selected: true,
								itemStyle: {
									normal: {
										areaColor: "#4cbab0",
										borderColor: "#111"
									},
									emphasis: {
										areaColor: "#4cbab0"
									}
								}
							}
						]
						
					},
					series: [
						{
							type: 'map',
							zoom:1.2,
							mapType: '中国', // 自定义扩展图表类型
							coordinateSystem: 'geo',
							hoverAnimation:false,// 鼠标滑入效果
							data:this.data,
						},
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: this.convertData(this.data),
							// encode: {
							// 	value: 2
							// },
							rippleEffect: { //水波纹动画
								scale:8,
								period: 2,
								brushType: 'stroke' //波纹的绘制方式:空心或者实心fill
							},
							symbolSize: 5, //圆点大小
							showEffectOn: 'render',
							label: {
								normal: {
									formatter: '{b}',
									position: 'right',
									show: true,
									textStyle: {
										color: '#ffffff'
									}
								}
							},
							itemStyle: {
								normal: {
									color: '#fbef25',
									shadowBlur: 50
								},
							},
							zlevel: 1
						}
					]
					
				})
			}
			
		}
	}
</script>

<style lang="less" scoped>
	#charts>div canvas:hover{
		cursor: default!important;
	}
</style>
