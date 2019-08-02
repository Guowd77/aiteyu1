<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<view>
			<view class="formTitle bg-white">
				{{activityDetail.activityname}}
			</view>
			<view class="formDetail bg-white" style="padding-bottom: 15upx;">
				<view><text class="cuIcon-time text-pri padding-right-xs"></text>{{activityDetail.time}}</view>
				<view><text class="cuIcon-location text-pri padding-right-xs"></text>{{activityDetail.address}}</view>
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
			<view class="subBtn bg-white">
				<button @click="submitForm">
					提交
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import baseinput from '../../components/base-input.vue'
	import {getJoinFields,joinActivity} from '../../common/api/activity.js'
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
			ruleFun(item,val){
				switch(item){
					case 'name':
						if(val==undefined||val.toString().length<2||val.toString().length>8)
							return {
								msg:'请正确填写姓名',
								isPost:false
							}
						if(val.toString().length>=2&&val.toString().length<=8)
							return {
								isPost:true
							}
					case 'email':
					  var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
						if(val==undefined||!reg.test(val)){
							return {
								msg:'请正确填写邮箱',
								isPost:false
						    }
						}
						else{
							return {
								isPost:true
							}
						}
					case 'tel':
					  var reg = /^1[3456789]\d{9}$/
						if(val==undefined||!reg.test(val)){
							return {
								msg:'请正确填写手机号码',
								isPost:false
						    }
						}
						else{
							return {
								isPost:true
							}
						}
					case 'institute':
						if(val==undefined||val.toString().length<2||val.toString().length>20)
							return {
								msg:'请正确填写学院名称',
								isPost:false
							}
						if(val.toString().length>=2&&val.toString().length<=20)
							return {
								isPost:true
							}
					case 'speciality':
						if(val==undefined||val.toString().length<2||val.toString().length>20)
							return {
								msg:'请正确填写专业名称',
								isPost:false
							}
						if(val.toString().length>=2&&val.toString().length<=20)
							return {
								isPost:true
							}	
					case 'studynum':
						if(val==undefined||val.toString().length<2||val.toString().length>20)
							return {
								msg:'请正确填写学号',
								isPost:false
							}
						if(val.toString().length>=2&&val.toString().length<=20)
							return {
								isPost:true
							}	
					default:
						let i 
						for(i =0;i<this.formFieldsText.length;i++){
							if(this.formFieldsText[i].key==item)
								break
						}
						if(item.indexOf('auto_type')>=0){
							if(val==undefined||val.toString().length<2)
								return {
									msg:'请正确填写'+this.formFieldsText[i].placeHolder,
									isPost:false
								}
							if(val.toString().length>=2&&val.toString().length<=50)
								return {
									isPost:true
								}								
						}
				}
			},
			submitForm:function(){
				console.log(this.$data.formModel)
				//this.$LinkTo({link:'报名成功页'})
				var model = this.$data.formModel
				var isPost = true
				var msg = ''
				for(let key in this.formModel){
					let tempVal = this.ruleFun(key,this.formModel[key])
					//console.log(key + ':'+this.formModel[key])
					//console.log(tempVal)
					if(tempVal.isPost==false){
						msg = tempVal.msg
						isPost = tempVal.isPost
					}						
				}
				if(isPost){
					model.activity_id = this.$data.activityDetail.activityid
					model.user_id = this.$store.store.storeUser.state.userInfo.user_id
					model.identity=0
					var that = this
					joinActivity(model).then(res=>{
						let data = res.data
						if(data.code==1&&data.msg=='报名成功！'){
							uni.showToast({
								icon:"success",
								title: '报名成功',
								duration: 2000,
								success:function(){
									setTimeout(function(){
										uni.navigateTo({
											url:'/pages/activityDetail/successInfo?id='+data.data.join_info.id+'&activityid='+data.data.join_info.activity_id
										})										
									},2000)
								}
							});
						}
						else{
							uni.showToast({
								icon:"success",
								title: '报名失败',
								duration: 2000
							});
						}
					})
				}
				else{
					uni.showToast({
						title:msg,
						icon:'none'
					})
					return
				}
			},
			loadJoinFields:function(){
				let para = {
					activity_id:this.$data.activityDetail.activityid
				}
				getJoinFields(para).then(res =>{
					//console.log(res.data.data)
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
					if((key == 'auto_type1'||key == 'auto_type2'|| key == 'auto_type3')&&(formFields[key]!=undefined&&formFields[key]!=null&&formFields[key]!="")){
						//console.log(key)
						temp = this.itemToText(formFields[key])
						//console.log(temp)
						temp.key = key
						arr1.push(temp)
						arr2[key]=''
					}
						
					else{
						if(formFields[key]==1&&key!='rest_modify_time'&&key!='admin_id'){
							console.log(key)
							temp = this.itemToText(key)
							
							temp.key = key
							arr1.push(temp)
							arr2[key]=''
						}							
					}
				
				}
				this.$data.formFieldsText = arr1
				//console.log(this.$data.formFieldsText)
				this.$data.formModel = arr2
			},
			itemToText:function(text){
				switch(text){
					case 'name':
						return {
								iconUrl:'add',
								placeHolder:'姓名'
							}
					case 'email':
						return {
								iconUrl:'mail',
								placeHolder:'邮箱'
							}
					case 'studynum':
						return {
								iconUrl:'card',
								placeHolder:'学号'
							}
					case 'institute':
						return {
								iconUrl:'/static/form/no.png',
								placeHolder:'学院'
							}
					case 'speciality':
						return {
								iconUrl:'',
								placeHolder:'专业'
							}
					case 'tel':
						return {
								iconUrl:'mobile',
								placeHolder:'联系电话'
							}
					case '地址':
						return {
								iconUrl:'location',
								placeHolder:'地址'
							}
					case '地区':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'地区'
							}
					case '简历':
						return {
								iconUrl:'file',
								placeHolder:'简历'
							}
					case '团队':
						return {
								iconUrl:'/static/form/loc.png',
								placeHolder:'团队'
							}
					default:
						return {
								iconUrl:'selection',
								placeHolder:text
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
	padding: 15upx 0;
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
