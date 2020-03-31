<template>
	<div class="login">
		<div class="content">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="账号" prop="user">
					<el-input v-model="ruleForm.user" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
<!--				<el-form-item label="年龄" prop="age">-->
<!--					<el-input v-model.number="ruleForm.age"></el-input>-->
<!--				</el-form-item>-->
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import bg_img from '../../assets/images/bg-night.jpg'
	
	export default {
		data() {
			// var checkAge = (rule, value, callback) => {
			// 	if (!value) {
			// 		return callback(new Error('年龄不能为空'));
			// 	}
			// 	setTimeout(() => {
			// 		if (!Number.isInteger(value)) {
			// 			callback(new Error('请输入数字值'));
			// 		} else {
			// 			if (value < 18) {
			// 				callback(new Error('必须年满18岁'));
			// 			} else {
			// 				callback();
			// 			}
			// 		}
			// 	}, 1000);
			// };
			const validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码！'));
				}else {
					callback();
				}
			};
			const validateUser =(rule, value, callback)=>{
				if (!value) {
					callback(new Error('账号不能为空！'));
				}else {
							callback();
						}
			}
			// var validatePass2 = (rule, value, callback) => {
			// 	if (value === '') {
			// 		callback(new Error('请再次输入密码'));
			// 	} else if (value !== this.ruleForm.pass) {
			// 		callback(new Error('两次输入密码不一致!'));
			// 	} else {
			// 		callback();
			// 	}
			// };
			return {
				bg_img: bg_img,
				ruleForm: {
					user: '',
					pass: '',
				},
				rules: {
					pass: [
						{validator: validatePass, trigger: 'blur'}
					],
					user: [
						{validator: validateUser, trigger: 'blur'}
					],
					// age: [
					// 	{validator: checkAge, trigger: 'blur'}
					// ]
				}
			}
		},
		methods: {
			submitForm(formName) {
				console.log('22222',this.$refs[formName]);
				this.$refs[formName].validate((valid) => {
					console.log('11111', valid);
					if (valid) {
						console.log('hhhahahh');
						window.localStorage.setItem('zsnToken',this.ruleForm)
						this.$router.push({path: '/',});
					
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
			resetForm(formName) {
				this.$refs[formName].resetFields()
			}
		}
	}
</script>

<style lang="less" scoped>
	.login {
		padding: 110px 0;
		height: 100%;
		width: 100%;
		background: url('../../assets/images/bg-night.jpg') no-repeat;
		
		.content {
			width: 400px;
			margin: 0 auto;
		}
	}
</style>
