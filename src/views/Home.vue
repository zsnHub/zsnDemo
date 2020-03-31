<template>
	<div class="home">
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content">
					<div class="card-icon" style="background: #409EFF">
						<div class="icon-weather">
							<i class="el-icon-sunny"></i>
						</div>
						<div style="flex: 1;">
							<p class="count">8888</p>
							<p class="title">人生在世须尽欢</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content">
					<div class="card-icon" style="background: #E6A23C">
						<div class="icon-weather">
							<i class="el-icon-heavy-rain"></i>
						</div>
						<div style="flex: 1;">
							<p class="count">5555</p>
							<p class="title">莫使金樽空对月</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content">
					<div class="card-icon" style="background: #F56C6C">
						<div class="icon-weather">
							<i class="el-icon-lightning"></i>
						</div>
						<div style="flex: 1;">
							<p class="count">3333</p>
							<p class="title">花开堪折直须折</p>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content">
					<div class="card-icon" style="background: #E6A23C">
						<div class="icon-weather">
							<i class="el-icon-sunrise-1"></i>
						</div>
						<div style="flex: 1;">
							<p class="count">6666</p>
							<p class="title">莫待无花空折枝</p>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row style="margin-top: 20px">
			<el-col :span="24">
				<div class="grid-content">
					<circle-count :targetData="targetData"></circle-count>
				</div>
			</el-col>
		</el-row>
		<el-row style="margin-top: 20px" :gutter="20">
			<el-col :span="16">
				<div class="grid-content" style="padding: 20px">
					<el-table
						:data="tableData"
						border
						:header-cell-style="{background:'#eef1f6',color:'#606266'}"
						@row-click="tableHover"
						style="width: 100%">
						<el-table-column
							prop="name"
							label="姓名"
							width="180">
						</el-table-column>
						<el-table-column
							prop="old"
							label="年龄"
							width="180">
						</el-table-column>
						<el-table-column
							prop="fans"
							label="粉丝量"
							width="100">
							<template slot-scope="scope">
								{{ scope.row.fans.male + scope.row.fans.female}}
							</template>
						</el-table-column>
						<el-table-column
							prop="like"
							label="喜好">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content" style="padding: 20px">
					<div style="display: flex; justify-content: space-between; ">
						<div style="width: 100%;">
							<div
								style=" display: flex; justify-content: space-between; align-items: center; text-align: center;">
								<div style="color: #2094e8; ">
									<img :src="boy" alt='boy' style=" width: 53px ;height: 61px "/>
									<div style="font-size: 22px; padding: 10px 0 10px 0">{{_.round(targetRow.male * 100, 2) }}%</div>
									<div style=" font-size: 14px">男生</div>
								</div>
								<div style="font-size: 25px ">VS</div>
								<div style="color: #fe557a;">
									<img :src="girl" alt='boy' style="width: 69px; height: 66px "/>
									<div style=" font-size: 22px; padding: 10px 12px 10px 0;">{{ _.round(targetRow.female * 100, 2) }}%</div>
									<div style="font-size: 14px; padding-right: 12px; ">女生</div>
								</div>
							</div>
							<div class="progressBlock">
								
								<span class="progress-item" v-for="v in rangeArray" :key="v"
								      :style="{backgroundColor: (v+1<=getNumber(targetRow)) ? '#2094e8' : '#fe557a'}"></span>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import circleCount from '../components/circleCount'
	import boy from '@/assets/images/boy.png'
	import girl from '@/assets/images/girl.png'
	export default {
		name: 'home',
		components:{
			circleCount
		},
		computed: {
			rangeArray: function () {
				return this.$lo.range(80)
			}
		},
		data() {
			return {
				targetRow: {male: 0.1, female: 0.9},
				boy:boy,
				girl:girl,
				tableData:[
					{
						name:'荷夕',
						old:'保密',
						fans:{male: 700000, female: 800000},
						like:'音乐、写作、哔哔叭叭'
					},{
						name:'唐安',
						old:'保密',
						fans:{male: 600000, female: 700000},
						like:'交友、旅行、写点东西、哔哔叭叭'
					},{
						name:'大乔',
						old:'保密',
						fans:{male: 6000, female: 50000},
						like:'旅行、睡觉、刷剧、哔哔叭叭'
					},
				],
				targetData:{
					users:200,
					schools:355,
					groups:466,
					teachers:577,
					students:688,
					parents:799
				}
			}
		},
		methods:{
			getNumber(targetRow) {
				const {male} = targetRow;
				let boyNumber = this.$lo.floor(80 * male);
				return boyNumber;
			},
			tableHover(row){
				const {fans:{male,female}}=row
				this.targetRow={male:this.$lo.round(male/this.$lo.add(male, female), 2),female:this.$lo.round(female/this.$lo.add(male, female), 2)}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../style/manageReports';
	.home{
	/*background: #101b66;*/
		.card-icon{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: #fff;
			padding: 20px;
			position:relative;
			.count{
				font-size: 34px;
				font-weight: 700;
				margin: 5px 0;
			}
			.title{
				font-size: 12px;
				text-transform: uppercase;
				font-weight: 600;
				margin: 0;
			}
			.icon-weather{
				font-size: 60px;
			}
			&:before{
				display: block;
				content: '';
				height: 100%;
				width: 100%;
				position:absolute;
				top: 0;
				left: 0;
				
			}
			&:hover{
				&:before{
					background: rgba(0, 0, 0, 0.3);
				}
			
			}
		}
		
		.progressBlock {
			/*width: 316px;*/
			height: 55px;
			display: flex;
			flex-flow: column wrap;
			justify-content: space-between;
			align-content: space-between;
			
			.progress-item {
				width: 10px;
				height: 10px;
				margin-bottom: 2px;
				transition: background-color 0.5s linear;
			}
		}
	}
	
</style>
