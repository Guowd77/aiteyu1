<template>
	<view class="formBorder">
		<inputs :inputsArray="inputsArray" :ruleSet="ruleSet" ifRule ifCode @chaildOpenEvent="openWin"
		 @activeFc="activeFc" :onLoadData="onLoadData" animationType="rotate3d-fade" :animationDuration=".1"
		 submitReSet :buttonStyle="buttonStyle" :inputDebounceSet="inputDebounceSet"/>
	</view>
</template>

<script>
	import inputs from "../QuShe-inputs/inputs.vue";
	export default {
		components:{
			'inputs':inputs
		},
		data() {
			return {
				inputDebounceSet: {
					openInputDebounce: true,
					delay: 500
				},
				"buttonStyle": { //按钮样式
					"activeButton": "background-color: #fff;color:#666;", //主按钮样式
					"changeButton": "background-color: #fff;color:#666;", //picker类型更改按钮样式
					"selectButton": "background-color: #fff;color:#666;", //picker类型选择按钮样式
					"confirmButton": "background-color: #fff;color:#666;", //picker类型弹出框中确定按钮样式
					"getcodeButton": "background-color: #fff;color:#666;" //获取验证码按钮样式
				},
				"inputsArray": [
					{
						"type": "picker-date",
						"title": "报名开始时间"
					},
					{
						"type": "picker-date",
						"title": "报名结束时间"
					},
					{
						"type": "input",
						"title": "报名人数限制"
					}
				],
				"ruleSet": {
					"color": "#c0ebd7",
					"checkbox_color": "#c0ebd7",
					"itemArray": [{
						"name": "某规则",
						"value": "aa"
					}],
				},
				"onLoadData": "data_",
			}
		},
		methods: {
			openWin(value) {
				//打开规则或协议页
				//若有一个以上的rule，则根据value打开规则页面
				console.log(value);
			},
			activeFc(res) {
				uni.showToast({
					title: "获取输入成功"
				})
				console.log(JSON.stringify(res));
			},
			openTest() {
				uni.navigateTo({
					url: '../test/test'
				})
			}
		},
		components: {
			inputs
		}
	}
</script>

<style>
.formBorder{
	border: 1px solid #CAD2DF;
	margin:20upx;
	border-radius: 15upx;
}
</style>
