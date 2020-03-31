<template>
	<div class="wrap">
		<div class="header">
			<div style="flex: 1;text-align: left">
				<img src="../assets/images/dataLogo.png" alt="">豆豆豆芽儿-zsn
			</div>
			<div>
<!--				<i class="el-icon-time"></i>-->
				<clock dateType="date"/>
			</div>
			
		</div>
		<div class="container">
			<aside class="aside">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					:defaultActive="defaultActive"
					:router="true"
					active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>CSS</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="item in menuRouter" :key="item.index" :route="{name: item.name}" :index="item.index">{{ item
								.title}}
							</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-setting"></i>
						<span slot="title">导航3</span>
					</el-menu-item>
				
				</el-menu>
			</aside>
			<main class="main">
				<router-view/>
			</main>
		</div>
		</div>
</template>

<script>
	import {menuRouter} from '../constants/constants'
	import clock from '../components/clock'
	export default {
		name: 'index',
		components:{
			clock
		},
		data() {
			return {
				defaultActive: '1-1',
				menuRouter: menuRouter
			}
		},
		beforeMount() {
			this.$route.name
		}
	}
</script>

<style lang="less" scoped>
	.wrap {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		display: flex;
		flex-direction: column;
		flex: 1;
		flex-basis: auto;
		box-sizing: border-box;
		min-width: 0;
		height: 100%;
		
		.header {
			height: 60px;
			line-height: 60px;
			/*background: linear-gradient(#ccc, #333742);*/
			background: #333742;
			/*border: 2px solid rgba(0,90,120,.3);*/
			color: #fff;
			padding: 0 15px;
			box-sizing: border-box;
			flex-shrink: 0;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			
			img {
				height: 32px;
				width: 32px;
				vertical-align: middle;
				margin-right: 15px;
			}
		}
		
		.container {
			display: flex;
			flex-direction: row;
			flex: 1;
			flex-basis: auto;
			box-sizing: border-box;
			min-width: 0;
			height: calc(100% - 10px);
			
			.main {
				background: #f0f2f5;
				text-align: center;
				box-sizing: border-box;
				display: block;
				flex: 1;
				flex-basis: auto;
				padding: 20px;
				overflow: auto;
				height: 100%;
			}
			
			.aside {
				width: 200px;
				text-align: center;
				line-height: 200px;
				overflow: auto;
				box-sizing: border-box;
				flex-shrink: 0;
				background: #1d1f26;
				padding: 0;
			}
		}
		
	}

</style>
