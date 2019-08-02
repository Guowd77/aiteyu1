<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<view>
			<view class="formTitle">
				{{activityDetail.activityname}}
			</view>
			<view class="formDetail">
				<view><image src="../../static/form/time.png"></image>{{activityDetail.time}}</view>
				<view><image src="../../static/form/loc.png"></image>{{activityDetail.address}}</view>
			</view>
			<view class="formContent">
				<base-input 
					v-bind:formItem="item"  
					v-for="(item,index) in formFieldsText"
					v-bind:value="formModel[item.key]"
					@input="handleUpdate(item.key, $event)"
					v-bind:key="index"
					>
				>
				</base-input>
			</view>	
			<view class="subBtn">
				<button @click="submitForm">
					提交
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import baseinput from '../../components/base-input.vue'
	import {getJoinFields,updateJoin} from '../../common/api/activity.js'
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'base-input':baseinput,
			'topBar':topBar
		},
		data() {
			return {
				styleDetail:this.styleDetail,
				classObj : this.classObj,
				topBarDetail:{
					title:'活动报名'
				},
				activityDetail:null,
				formModel:null,
				formFields:null,
				formFieldsText:null,
				msg:null
			}
		},
		computed:{
		},
		onLoad(options) {
			console.log(options)
			if(!options.activityid){
				uni.navigateBack({
					delta:1
				})
			}
			else{
				this.$data.activityDetail = options
				this.loadJoinFields()
			}
		},
		methods: {
			handleUpdate(key, value) {
			   this.$data.formModel[key] = value
			},
			submitForm:function(){
				console.log(this.$data.formModel)
				//this.$LinkTo({link:'报名成功页'})
				var model = this.$data.formModel
				var isPost = true
				var msg = ''
				if(model.name!=undefined&&model.name.toString().length<2){
					msg = '请正确填写姓名'
					isPost = false
				}
				if(model.studynum!=undefined&&model.studynum.toString().length<2){
					msg = '请正确填写学号'
					isPost = false
				}
				if(model.institute!=undefined&&model.institute.toString().length<2){
					msg = '请正确填写institute'
					isPost = false
				}
				if(model.speciality!=undefined&&model.speciality.toString().length<2){
					msg = '请正确填写特长'
					isPost = false
				}
				if(model.auto_type1!=undefined&&model.auto_type1.toString().length<2){
					msg = '请正确填写11'
					isPost = false
				}
				if(model.auto_type2!=undefined&&model.auto_type2.toString().length<2){
					msg = '请正确填写22'
					isPost = false
				}
				if(model.auto_type3!=undefined&&model.auto_type3.toString().length<2){
					msg = '请正确填写32'
					isPost = false
				}
				if(isPost){
					model.activity_id = this.$data.activityDetail.activityid
					model.user_id = this.$data.activityDetail.user_id
					var that = this
					console.log(model)
					updateJoin(model).then(res=>{
						let data = res.data
						console.log(data)
						if(data.code==1&&data.msg=='修改报名信息成功！'){
							uni.showToast({
								icon:"success",
								title: '修改报名成功',
								duration: 2000,
								success:function(){
									setTimeout(function(){
										uni.navigateBack({
											delta:1
										})									
									},1000)
								}
							});
						}
						else{
							setTimeout(function(){
								uni.navigateBack({
									delta:1
								})									
							},1000)
							uni.showToast({
								icon:"success",
								title: '修改报名失败',
								duration: 2000
							});
						}
						setTimeout(function(){
							uni.navigateBack({
								delta:1
							})									
						},1000)
					})
				}
				else{
					uni.showToast({
						title:msg
					})
					setTimeout(function(){
						uni.navigateBack({
							delta:1
						})									
					},1000)
					return
				}
			},
			loadJoinFields:function(){
				let para = {
					activity_id:this.$data.activityDetail.activityid
				}
				getJoinFields(para).then(res =>{
					console.log(res.data.data)
					if(res.data.code == 1){
						this.$data.formFields = res.data.data
						this.formFieldsToText(this.$data.formFields)
					}
				})
			},
			formFieldsToText:function(formFields){
				var arr1 = []
				var arr2 = {}
				for(let key in formFields){
					let temp;
					if((key == 'auto_type1'||key == 'auto_type2'|| key == 'auto_type3')&&(formFields[key]!=undefined&&formFields[key]!=null)){
						console.log(key)
						temp = this.itemToText(formFields[key])
						console.log(temp)
						temp.key = key
						arr1.push(temp)
						arr2[key]=''
					}
						
					else{
						if(formFields[key]==1&&key!='rest_modify_time'){
							console.log(key)
							temp = this.itemToText(key)
							temp.key = key
							arr1.push(temp)
							arr2[key]=''
						}							
					}
				
				}
				this.$data.formFieldsText = arr1
				this.$data.formModel = arr2
			},
			itemToText:function(text){
				switch(text){
					case 'name':
						return {
								iconUrl:'/static/form/name.png',
								placeHolder:'姓名'
							}
					case 'email':
						return {
								iconUrl:'/static/form/mail.png',
								placeHolder:'邮箱'
							}
					case 'studynum':
						return {
								iconUrl:'/static/form/no.png',
								placeHolder:'学号'
							}
					case 'institute':
						return {
								iconUrl:'/static/form/no.png',
								placeHolder:'学院'
							}
					case 'speciality':
						return {
								iconUrl:'/static/form/topic.png',
								placeHolder:'特长'
							}
					case 'tel':
						return {
								iconUrl:'/static/form/tel.png',
								placeHolder:'联系电话'
							}
					case '地址':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'地址'
							}
					case '地区':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'地区'
							}
					case '简历':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'简历'
							}
					case '团队':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'团队'
							}
					default:
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'通用'
							}
				

				}
			}
		}
		
	}
</script>

<style>
.container{
	margin:0 auto ;
	width: 100%;
	padding-bottom: 50upx;
}	
page{
	background: #fff;
}	
.formTitle{
	text-align: center;
	font-size: 35upx;
	padding: 20upx 0;
}
.formDetail view{
	display: inline-block;
	padding: 0 15upx;
}
.formDetail view image{
	width: 30upx;
	height: 30upx;
	margin-right: 15upx;
}
.formDetail{
	font-size: 29upx;
	text-align: center;
}
.formContent{
	margin-top: 20upx;
}
.subBtn{
	position: absolute;
	width: 100%;
	bottom:50upx;
}
.subBtn button{
	width:90%;
	margin: 0 auto;
	background: #FC8902;
	color: #fff;
}
.subBtn button::after{
	border: none;
}
</style>
