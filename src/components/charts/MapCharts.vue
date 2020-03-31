<template>
	<div :class="className" :style="{height:height,width:width}" />
</template>

<script>
	import 'echarts/map/js/province/henan.js'  //引入河南省地图
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
				default: '100%'
			},
			height: {
				type: String,
				default: '500px'
			}
		},
		data () {
			return {
				chart:null,
				GEO_henan: {
					'郑州市': [113.631991,34.754152],
					'商丘市': [115.665898,34.453309],
					'荥阳市': [113.390858,34.80626],
					'开封市': [114.304821,34.805019],
					'焦作市': [113.2451,35.220728],
					'安阳市': [114.397778,36.108039],
					'洛阳市': [112.45425,34.625452],
					'平顶山市': [113.201254,33.775651],
					'鹤壁市': [114.281169,35.766183],
					'新乡市': [113.934172,35.312232],
					'濮阳市': [115.030419,35.749551],
					'许昌市': [113.827427,34.026355],
					'漯河市': [114.051015,33.577364],
					'三门峡市': [111.203655,34.778089],
					'南阳市': [112.531629,32.994865],
					'信阳市': [114.08886,32.136627],
					'周口市': [114.704631,33.633031],
					'驻马店市': [114.049739,32.98611],
					'济源市': [112.579832,35.118035],
				},
				data:[
					{name: '郑州市', value: 200.34},
					{name: '商丘市', value: 15477},
					{name: '荥阳市', value: 31686.1},
					{name: '开封市', value: 6992.6},
					{name: '焦作市', value: 44045.49},
					{name: '安阳市', value: 44045.49},
					{name: '洛阳市', value: 776.49},
					{name: '平顶山市', value: 256.49},
					{name: '鹤壁市', value: 321.49},
					{name: '新乡市', value: 123.49},
					{name: '濮阳市', value: 671.49},
					{name: '许昌市', value: 567.49},
					{name: '漯河市', value: 278.49},
					{name: '三门峡市', value: 120.49},
					{name: '南阳市', value: 435.49},
					{name: '信阳市', value: 4445.49},
					{name: '周口市', value: 100.49},
					{name: '驻马店市', value: 259.49},
					{name: '济源市', value: 390.49},
				],
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.initChart()
				this.autoHover(this.chart,8,2000)
			})
			setInterval(()=>{
				this.initChart()
			},1000*60)
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
					let geoCoord = this.GEO_henan[data[i].name];
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
				this.chart = this.$echarts.init(this.$el)
				// this.$echarts.registerMap('henan', '河南');
				this.chart.setOption({
					title: {
						text: '测试河南省地图',
						left:'center'
					},
					tooltip: {
						trigger: 'item',
						triggerOn:'none',
						alwaysShowContent:true,
						formatter: function (params) {
							// var _data = params.data;
							return `<div class='map_tips'>
									<div>${params.name}</div>
								用户总数<span>${params.data.value}</span><br>
								教师数量<span>20</span>&nbsp
								月活跃<span>30%</span><br>
								学生数量<span>40</span>&nbsp
								活跃<span>50%</span><br>
								试题总数<span>60</span>&nbsp
								试卷总数<span>70</span></div>`;
						},
						//设置 tooltip 显示样式
						extraCssText: 'text-align:left; padding-top:5px;box-shadow:0px 0px 10px yellow inset;border:1px solid yellow; width:187px;height:111px;border-radius:0;'
					},
					geo: {//配置地图参数
						map: "henan",
						show : false,
						zoom : 1.2,
						label: {
							emphasis: {
								show: false
							},
							normal: {
								show: true,
								textStyle: {
									color: 'rgba(0,0,0,0.4)'
								}
							}
						}
					},
					series: [
						{
							name: '河南省xx数据',
							type: 'map',
							mapType: '河南', // 自定义扩展图表类型
							// coordinateSystem: 'geo',
							zoom:1.1,
							itemStyle: {
								normal: {                           //默认状态
									areaColor: '#3861ce',        //地图区域的颜色
									borderColor: '#2450c8',     //区域的边框颜色
									borderWidth: 1,                     //区域的边框宽度
									opacity: 0.5,                       //图形透明度
									color:'#fff',
									label: {show: false}
								},
								emphasis: {                          //高亮状态
									areaColor: '#709cea',  //高亮时候地图显示的颜色
									borderWidth: 0  ,
									opacity: 1,//高亮时候的边框宽度
									label: {show: false}
								},
							},
							data: this.data,
						},
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data:this.convertData(this.data),
							showEffectOn: 'emphasis', //配置何时显示特效:高亮（hover）的时候显示特效。
							// hoverAnimation: true,//hover动画开启 默认：false
							rippleEffect: { //水波纹动画
								scale:8,
								period: 2,
								brushType: 'stroke' //波纹的绘制方式:空心或者实心fill
							},
							symbolSize: 5, //圆点大小
							label: {
								normal: {
									formatter: '{b}',
									position: 'bottom',
									show: true,
									textStyle: {
										color: '#ffffff'
									}
								}
							},
							itemStyle: {
								normal: {
									color: '#fbef25',
									// shadowColor: 'rgba(250, 250, 30, 1)',
									shadowBlur: 50
								},
								// emphasis: {
								// 	borderColor:'#fbef25',
								// 	borderWidth : 5,
								// 	borderType : 'solid'
								// }
							},
							zlevel: 1
						}
					]
					
				})
			},
			autoHover(mychart,num ,time){
				/**
				 *  echarts 自动轮播
				 *  @param myChart  //初始化echarts的实例
				 *  @param num      //类目数量(循环时达到最大值后，使其从0开始循环)
				 *  @param time     //轮播间隔时长
				 */
				const defaultData = {   //设置默认值
					time: 3000,
					num: 0
				};
				if(!time){
					time = defaultData.time;
				}
				if(!num){
					num = defaultData.num;
				}
				let carouselIndex=0, timeTicket = null;
				if(timeTicket) {
					clearInterval(timeTicket);
				}
				timeTicket=setInterval(()=>{
					mychart.dispatchAction({
						type: 'downplay',
						seriesIndex: [0,1],
					});
					
					mychart.dispatchAction({
						type: 'highlight',
						seriesIndex: [0,1],
						dataIndex: carouselIndex
					});
					
					mychart.dispatchAction({
						type: 'showTip',
						seriesIndex: 0,
						dataIndex: carouselIndex
					});
					carouselIndex++
					if (carouselIndex >= num) {
						carouselIndex = 0;
					}
				},time)
				//鼠标移入
				mychart.on("mouseover", (e)=> {
					if(timeTicket){
						clearInterval(timeTicket)
					}
					mychart.dispatchAction({
						type: "downplay",
						seriesIndex: [0,1],
					});
					mychart.dispatchAction({
						type: "highlight",
						seriesIndex: [0,1],
						dataIndex: e.dataIndex
					});
					mychart.dispatchAction({
						type: "showTip",
						seriesIndex: 0,
						dataIndex: e.dataIndex
					});
					
				})
				//
				// //鼠标移出恢复轮播
				mychart.on("mouseout", (e)=> {
					carouselIndex=e.dataIndex
					if(timeTicket){
						clearInterval(timeTicket)
					}
					timeTicket = setInterval(()=> {
						mychart.dispatchAction({
							type: 'downplay',
							seriesIndex: [0,1],
						});
						
						mychart.dispatchAction({
							type: 'highlight',
							seriesIndex: [0,1],
							dataIndex: carouselIndex
						});
						
						mychart.dispatchAction({
							type: 'showTip',
							seriesIndex: 0,
							dataIndex: carouselIndex
						});
						carouselIndex++;
						if (carouselIndex >= num) {
							carouselIndex = 0;
						}
					}, time);
					
					
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>

</style>
