<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<scroll-view scroll-y :style="styleDetail.width+styleDetail.height">
			<view class="bannerTop bg-white">
				<image :src="imgUrl" ></image>
				<button class="cu-btn round lines-gray postBtn" @click="postBtn">上传海报</button>
			</view>
			<view class="activityForm bg-white">
				<view class="activityForm_title font-bold">
					<input type="text"  v-model="formTitle" placeholder="活动主题(必填)" focus="true"/>
				</view>
				<view class="uni-padding-wrap uni-common-mt">
					<form @submit="formSubmit" @reset="formReset">
						<view class="formBorder">
							<inputs activeName="确认发布" :inputsArray="inputsArray" :ruleSet="ruleSet" ifRule ifCode @chaildOpenEvent="openWin"
								@activeFc="activeFc" :onLoadData="onLoadData"
								submitReSet :buttonStyle="buttonStyle" :inputDebounceSet="inputDebounceSet"
								v-on:changeInputArray="changeInputArray" v-on:submitForm="submitForm"
								v-on:changeBackground="changeBackground"
								v-on:tanchuang="tanchuang"
							/>
						</view>
					</form>
				</view>
			</view>		
			<prompt ref="prompt" @onConfirm="onConfirm" @onCancel="onCancel" title="请输入自定义字段" :text="promptText"></prompt>
			<view class="cu-modal" :class="picmodalName=='Image'?'show':''" >
				<view class="cu-dialog" style="width:80%;">
					<view class="bg-img" >
						<canvas  v-show="picmodalName!=null" id="shareCanvas" :style="'width:100%;height:'+canvasDetail.height+'px;'" canvas-id="firstCanvas" @longtap="downloadPic" @error="canvasIdErrorCallback"></canvas>
			
					</view>
				</view>				
				<view class="action  text-lg" @tap="hidePicModal" style="position:absolute;top:70px;right: 10px;z-index: 999;" v-show="postDone">
						<text class="cuIcon-roundclose text-white "></text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import inputs from "../../components/QuShe-inputs/inputs.vue"
	import prompt from "../../components/prompt.vue"
	import{addActivity,getQrPng,addPostByActId} from "../../common/api/activity.js"
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'inputs':inputs,
			prompt,
			'topBar':topBar
		},
		data () {
			return {
				picmodalName:null,
				canvasDetail:{
					width:null,
					height:null
				},
				topBarDetail:{
					title:'发布活动'
				},
				styleDetail:this.styleDetail,
				classObj : this.classObj,
				formTitle:null,
				inputDebounceSet: {
					openInputDebounce: true,
					delay: 500
				},
				"buttonStyle": { //按钮样式
					"activeButton": "width:90%;background:#FC8902;color: #fff;font-size:15px;border-radius: 15upx;text-align:center;", //主按钮样式
					"changeButton": "background-color: #fff;color:#666;", //picker类型更改按钮样式
					"selectButton": "background-color: #fff;color:#666;", //picker类型选择按钮样式
					"confirmButton": "background-color: #fff;color:#666;", //picker类型弹出框中确定按钮样式
					"getcodeButton": "background-color: #fff;color:#666;" ,//获取验证码按钮样式
					"btnGroupButton":"color:#666;font-size:35upx;"
				},
				inputsArray:null,
				"inputsArray0": [
					{
						"type": "textarea",
						"title": "活动简介",
					},
					{
						"type": "picker-date",
						"title": "活动开始时间"
					},
					{
						"type": "picker-date",
						"title": "活动结束时间"
					},
					{
						"type": "input",
						"title": "活动地址"
					},
					{ // 无联动示例1
						"type": "picker-custom",
						"title": "选择活动类型",
						"itemArray": [
							[
								'学术讲座',
								'科技竞赛',
								'演出抢票',
								'生活约玩',
								'其他'
							]
						],
						"defaultValue": null,//初始数据
						"onceShowDefaultValue": true, //是否显示初始数据
					}
				],
				"inputsArray1": [
					{
						"type": "picker-date",
						"title": "抢票开始时间"
					},
					{
						"type": "picker-date",
						"title": "抢票结束时间"
					},
					{
						"type": "input",
						"title": "报名人数限制",
						"content": "请输入报名人数限制"
					},
					{
						"type": "input",
						"title": "抢票人数",
						"content": "请输入抢票人数"
					},
					{
						"segmentationTitle": "请选择报名需要填写的信息",
						"type":'btn-group',
						"titleHide":true,
						 "extraValueLimit":2,
						"extraValue":0,
						"itemArray":[
							{
								"name":'姓名',
								"check":true,
								"diolg":false
							},
							{
								"name":'学院',
								"check":false,
								"diolg":false
							},
							{
								"name":'专业',
								"check":true,
								"diolg":false
							},
							{
								"name":'邮箱',
								"check":true,
								"diolg":false
							},
							{
								"name":'学号',
								"check":true,
								"diolg":false
							},
							{
								"name":'电话',
								"check":true,
								"diolg":false
							},
							{
								"name":'添加自定义',
								"check":false,
								"diolg":true
								
							}
						]
					}
				],
				"inputsArray2": [
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
					},
					{
						"segmentationTitle": "请选择报名需要填写的信息",
						"type":'btn-group',
						"titleHide":true,
						 "extraValueLimit":2 ,
						"extraValue":0,
						"itemArray":[
							{
								"name":'姓名',
								"check":true,
								"diolg":false
							},
							{
								"name":'学院',
								"check":false,
								"diolg":false
							},
							{
								"name":'专业',
								"check":true,
								"diolg":false
							},
							{
								"name":'邮箱',
								"check":true,
								"diolg":false
							},
							{
								"name":'学号',
								"check":true,
								"diolg":false
							},
							{
								"name":'电话',
								"check":true,
								"diolg":false
							},
							{
								"name":'添加自定义',
								"check":false,
								"diolg":true
								
							}
						]
					}
				],
				"onLoadData": "data_",
				activityType:null,
				formType:0,
				formModel:[
					'content',
					'starttime',
					'endtime',
					'address',
					'type',
					'join_starttime',
					'join_endtime',
					'max_num',
					'max_pass_num',
					'join_name',     //int（0或1）//代表生成此活动的报名表时是是否需要填写姓名
					'join_institute',///int（0或1）//代表生成此活动的报名表时是否需要填写学院
					'join_speciality', //int（0或1）//代表生成此活动的报名表时是否需要填写专业
					'join_email',//int（0或1）//代表生成此活动的报名表时是否需要填写邮箱
					'join_studynum',//int（0或1）//代表生成此活动的报名表时是否需要填写学号
					'join_tel',//int（0或1）//代表生成此活动的报名表时是否需要填写电话号
					'auto_type1',//string //发布者自定义的第3个报名字段名字
					'auto_type2',//string //发布者自定义的第2个报名字段名字
					'auto_type3'//string //发布者自定义的第3个报名字段名字
				],
				imgUrl:null,
				isPostImg:false,
				activityDetail:null,
				postImgUrl:null
			}
		},
		mounted(){
		},
		watch:{
			activityType:{
				handler:function(newType){
					//console.log('更改type')
					let activityType = parseInt(this.activityType)
					if(!this.isPostImg){
						switch(activityType){
							case 0:
								//console.log('图片0')
								this.postImgUrl  = '/uploads/20190526/3598efb97ce7cf877c7f8e01e3b201bf.png'
								break
							case 1:
								//console.log('图片1')
								this.postImgUrl  = '/uploads/20190526/07901cc625ddaf43fa8a93d59b258a2f.png'
								break
							case 2:
								//console.log('图片2')
								this.postImgUrl = '/uploads/20190526/cce73143bd0ef9e8c43014beb2ebc5b4.png'
								break
							case 3:
								//console.log('图片3')
								this.postImgUrl = '/uploads/20190526/3d65b328f98c455958631c9e13c16de3.png'
								break
							case 4:
								//console.log('图片4')
								this.postImgUrl = '/uploads/20190526/07901cc625ddaf43fa8a93d59b258a2f.png'
								break							
						}
					}
					this.imgUrl = this.HELP.imgUrl(this.postImgUrl)
				},							
				immediate: true
			}
		},
		computed:{
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.activity_type); //打印出上个页面传递的参数。
			if(!option.activity_type){
				uni.showToast({
					title: '页面加载失败',
					success:function(){
						uni.navigateBack({
							delta:1
						})
					}
				})
			}
			else{
				 //打印出上个页面传递的参数。
				this.$data.activityType = option.activity_type
				//console.log(this.$data.activityType)
				this.$data.inputsArray0[this.$data.inputsArray0.length-1].defaultValue = this.$data.activityType
				if(this.$data.activityType==0||this.$data.activityType==1||this.$data.activityType==3||this.$data.activityType==4){				
					this.$data.inputsArray = this.$data.inputsArray0.concat(this.$data.inputsArray2)
					console.log(this.$data.inputsArray0)
					this.$data.formType = 2
				}					
				if(this.$data.activityType==2){		
					
					this.$data.inputsArray = this.$data.inputsArray0.concat(this.$data.inputsArray1)	
					this.$data.formType = 1
				}
					
			}
		},
		methods: {
			unploadPost(){
				var that = this
				that.picmodalName = 'Image'
				let para = {
					scene:that.activityDetail.id,//最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
					page:'pages/activityDetail/showOneActivity',//必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
					//width:number//二维码的宽度，单位 px，最小 280px，最大 1280px
					//auto_color:boolean//自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
					//line_color:Object//auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
					is_hyaline:true//是否需要透明底色，为 true 时，生成透明底色的小程序
				}
				getQrPng(para).then(qrdata => {
					//console.log(qrdata)
					qrdata = that.HELP.imgUrl(qrdata.data.data.qrcode)
					//console.log(qrdata)
					that.$nextTick(function(){
						//console.log(addRes.data.data.post)
						uni.showLoading({
							title:'图片生成中'
						})
						const context = uni.createCanvasContext('firstCanvas',that)	
						let p2 = uni.getImageInfo({
							src:that.imgUrl
						})	
						let p3 = uni.getImageInfo({
							src:'https://aiteyu.imumba.com/uploads/20190523/7f1862ee21ea78b4710aaaa081233a9e.png'
						})
						let p4 = uni.getImageInfo({
							src:qrdata
						})					//conosle.log(p2)
						Promise.all([p2,p3,p4]).then(res=>{
							console.log(res)
							console.log(res[0][1])
							let screenWidth = parseInt(uni.getSystemInfoSync().screenWidth*0.8)
							let rate = screenWidth/res[0][1].width
							let pic0W = screenWidth												
							let pic0H = res[0][1].height*rate
							that.canvasDetail.height = pic0H														
							let screenHeight = that.canvasDetail.height	
							let x = 0
							let y = 0
							context.drawImage(res[0][1].path,x,y,pic0W,pic0H)
							x = 30
							y = 100
							let textW = context.measureText('活动名称：'+ that.activityDetail.name);
							if(textW.width<=screenWidth-x){
								y = y + 20
								context.fillText('活动名称：'+that.activityDetail.name,x,y);										
							}
							else{									
								var i = 0
								var str = '活动名称：'+that.activityDetail.name
								let len = str.length
								console.log(len)
								while(i<len){
									let j 
									for(j= 1;j<str.length;j++,i++)
									{
										textW = context.measureText(str.substring(0,j))
										if(textW.width>=screenWidth-40){
											break
										}	
																											
									}
									//console.log('j='+j)
									//console.log()
									if(j<str.length){
										y = y + 20
										context.fillText(str.substring(0,j-1),x,y);
										str = str.substring(j-1,str.length-1)	
										console.log('截取后：'+str)
										if(str.length==1){
											y = y + 20
											context.fillText(str,x,y);
											break
										}
																	
									}																																
									else{
										y = y + 20
										context.fillText(str,x,y);
										break
									}
															
								}
							}
							y = y + 20
							context.fillText('活动时间：'+that.activityDetail.starttime_text,x,y);
							y = y + 20
							context.fillText('活动地点：'+that.activityDetail.address,x,y);
							context.stroke()
							context.draw(false)
							setTimeout(function(){
								that.canvasToTempFilePath()
							},500)
							uni.hideLoading()												
						})
					})										
				})				
			},
			canvasToTempFilePath(){
				var that = this
							uni.canvasToTempFilePath({
								x: 0,
								y: 0,
								canvasId: 'firstCanvas',
								fileType:'jpg',
								success: function(saveRes) {
									console.log(saveRes.tempFilePath)
									let data = {
										'token':uni.getStorageSync('token')
									}
									uni.uploadFile({
										url:'https://aiteyu.imumba.com/index.php/addons/aitefish/common/upload', //仅为示例，非真实的接口地址
										filePath: saveRes.tempFilePath,
										name: 'files',
										formData: data,
										success: (uploadFileRes) => {
											let uploadFileResData = JSON.parse(uploadFileRes.data)
											console.log(uploadFileRes)
											console.log(uploadFileResData)
											if(uploadFileRes.statusCode=='200'){
												let para = {
													activity_id:that.activityDetail.id,
													post:uploadFileResData.data.url,
													user_id:that.$store.store.storeUser.state.userInfo.user_id
												}
												addPostByActId(para).then(res=>{
													console.log(res)
													if(res.data.msg == "添加/修改成功"){
														uni.showToast({
															title:'发布成功',
															duration: 2000,
															success:function() {
																setTimeout(function(){
																	uni.redirectTo({
																		url:'/pages/activityDetail/showOneActivity?activityid='+that.activityDetail.id
																	})}
																,2000)
																			
															}
														})														
													}

												})
														
											}
										}
									});
								 },
								fail:function(res){
									console.log(res)
								}
							},this)				
			},
			caculateRate(val1,val2){
				for(var i = 1;i>0;i=i-0.05){
					if(val1*i<val2)
						return i
				}	
			},
			postBtn(){
				//this.$LinkTo({link:'海报制作'})
				var that = this
				console.log(uni.getStorageInfoSync('token'))
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
							let data = {
								'token':uni.getStorageSync('token')
							}
							console.log(data)
							//this.imgList = this.imgList.concat(res.tempFilePaths)
								uni.uploadFile({
									url:'https://aiteyu.imumba.com/index.php/addons/aitefish/common/upload', //仅为示例，非真实的接口地址
									filePath: res.tempFilePaths[0],
									name: 'files',
									formData: data,
									success: (uploadFileRes) => {
										let data = JSON.parse(uploadFileRes.data)
										console.log(data)
										that.imgUrl = res.tempFilePaths
										that.postImgUrl = data.data.url
										console.log(that.postImgUrl)
										that.isPostImg = true
										console.log(data)
										if(data.msg=='上传成功'){
											//uni.setStorageSync('tempUrl',that.HELP.imgUrl(data.data.url))
											 uni.showToast({
												title: '上传成功',
												duration: 2000
											  })

										}
									}
								});
					}
				});
			},
			changeBackground(id){
				console.log(id)
				if(id!=undefined){
					this.$data.inputsArray[this.$data.inputsArray.length-1].itemArray[id].check = !this.$data.inputsArray[this.$data.inputsArray.length-1].itemArray[id].check
				}
			},
			tanchuang(){
				this.$refs.prompt.show();
			},
			onConfirm:function(e){
				console.log(e);
				this.$refs.prompt.hide()
				var temp = {
					"name":e,
					"check":true,
					"diolg":false
				}
				if(this.formType==1){
					console.log(this.inputsArray1[this.inputsArray1.length-1].extraValue)
					if(this.inputsArray1[this.inputsArray1.length-1].extraValue<=this.inputsArray1[this.inputsArray1.length-1].extraValueLimit){
						this.inputsArray1[this.inputsArray1.length-1].itemArray.splice(this.inputsArray1[this.inputsArray1.length-1].itemArray.length-1, 0, temp)
						this.$data.inputsArray = this.$data.inputsArray0.concat(this.$data.inputsArray1)						
						if(this.inputsArray1[this.inputsArray1.length-1].extraValue==this.inputsArray1[this.inputsArray1.length-1].extraValueLimit){
							console.log('最后一个')
							uni.showToast({
								title:'无法继续添加',
								icon:'none',
								duration:2000
							})							
						}
						else{
							console.log('相加')
							this.inputsArray1[this.inputsArray1.length-1].extraValue++
						}
						console.log(this.inputsArray1[this.inputsArray1.length-1].extraValue)
					}
					else{
						uni.showToast({
							title:'无法继续添加',
							icon:'none'
						})
					}

				}
				if(this.formType==2){
					console.log(this.inputsArray2[this.inputsArray2.length-1].extraValue)
					if(this.inputsArray2[this.inputsArray2.length-1].extraValue<=this.inputsArray2[this.inputsArray2.length-1].extraValueLimit){
						this.inputsArray2[this.inputsArray2.length-1].itemArray.splice(this.inputsArray2[this.inputsArray2.length-1].itemArray.length-1, 0, temp)
						this.$data.inputsArray = this.$data.inputsArray0.concat(this.$data.inputsArray2)
						console.log(this.inputsArray2[this.inputsArray2.length-1].extraValue)
						if(this.inputsArray2[this.inputsArray2.length-1].extraValue==this.inputsArray2[this.inputsArray2.length-1].extraValueLimit){
							uni.showToast({
								title:'无法继续添加',
								icon:'none',
								duration:2000
							})							
						}
						else{
							this.inputsArray2[this.inputsArray2.length-1].extraValue++
						}
					}
					else{
						uni.showToast({
							title:'无法继续添加'
						})
					}
				}
				
			},
			onCancel:function(){
				this.$refs.prompt.hide();
				this.$refs.prompt.cost = '';
			},
			submitForm(){				
			},
			changeInputArray:function(data){
				var that = this
				if(data.data.value==undefined)
					return
				let res = data.data.value[0]
				console.log(res)
				if(res==undefined)
					return
				this.activityType = res;
				this.inputsArray0[this.$data.inputsArray0.length-1].defaultValue = [res]
				if(res == '0'||res=='1'||res=='3'||res=='4'){
					if(this.$data.formType==2)
						return 
					else{
							//console.log('a')
							this.$data.formType = 2
							//console.log(this.$data.inputsArray0[this.$data.inputsArray0.length-1].defaultValue)
							this.inputsArray = this.inputsArray0.concat(this.inputsArray2)
							//console.log(this.$data.inputsArray)
					}
				}
				if(res=='2'){
					if(this.$data.formType==1)
						return 
					else{
						//console.log('b')
						this.$data.formType = 1					
						this.$data.inputsArray = this.$data.inputsArray0.concat(this.$data.inputsArray1)
						//console.log(this.$data.inputsArray)
					}
				}
			},
			openWin(value) {
				//打开规则或协议页
				//若有一个以上的rule，则根据value打开规则页面
				console.log(value);
			},
			submitData(){

				this.$emit('activeFc')
			},
			activeFc(res) {
				console.log(res)				
				if(this.$data.formTitle==null||this.$data.formTitle==undefined){
					uni.showToast({
						title: '标题',
						icon:'none',
						duration: 2000
					});
					return
				}
				if(this.$data.imgUrl==null||this.$data.imgUrl==undefined){
					uni.showToast({
						title: '请上传海报',
						icon:'none',
						duration: 2000
					});
					return
				}
				var count = 0;
				for(let v in res){
					if(this.$data.formModel[count] =='type')
					{
						res[this.$data.formModel[count]] = res[v].result[0]
					}
					else
						res[this.$data.formModel[count]] = res[v]
					count++
					delete res[v]
				}					
				count = this.formType!=1?count+1:count				
				console.log(res)
				var btnForm
				if(this.formType==1){
					btnForm = this.inputsArray1[this.inputsArray1.length-1].itemArray
					//console.log(btnForm)
				}
				else{
					btnForm = this.inputsArray2[this.inputsArray2.length-1].itemArray
					//console.log(btnForm)
				}
				for(let i = 0 ;i<btnForm.length-1;i++){
					if(btnForm[i].check==true){
						if(this.$data.formModel[count]=='auto_type1'||this.$data.formModel[count]=='auto_type2'||this.$data.formModel[count]=='auto_type3'){
							//console.log(btnForm[i].name)
							res[this.$data.formModel[count]]=btnForm[i].name
						}							
						else
							res[this.$data.formModel[count]]=1
					}
					else{
						res[this.$data.formModel[count]]=0
					}
					count++
				}
				var reg = /^\d{1,}$/
				if (!reg.test(res.max_num)) {
					uni.showToast({
						title: '报名人数只能输入数字',
						icon:'none',
						duration: 2000
					});
					return
				}
				
				res.name = this.$data.formTitle
				res.user_id = this.$store.store.storeUser.state.userInfo.user_id
				res.identity = 0
				console.log(res)
				switch(res.type){
					case"学术讲座":
						res.type = 1
						break
						break
					case"科技竞赛":
						res.type = 2
						break
						break
					case"演出抢票":
						res.type = 3
						break
						break
					case"生活约玩":
						res.type = 4
						break
						break
					case "其他":
						res.type = 5
						break
				}
				res.post = this.imgUrl
				var that = this
				if(!this.isPostImg){
					uni.showModal({
						title: '提示',
						content: '未上传海报将由默认海报自动生成',
						success: function (rep) {
							if (rep.confirm) {
								console.log('用户点击确定');
								res.post = that.postImgUrl
								console.log(res)
								addActivity(res).then(addRes=>{
									//console.log(addRes)
									if(addRes.data.code==1&&addRes.data.msg=='发布成功'){
										that.activityDetail = addRes.data.data
										let data =addRes.data.data
										that.unploadPost(data)
										/*uni.showToast({
											title:'发布成功',
											duration: 2000,
											success:function() {
												setTimeout(function(){
													uni.navigateTo({
														url:'/pages/activityDetail/showOneActivity?activityid='+data.id
													})}
												,2000)

											}
										})*/
									}
								})								
							} else if (rep.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
				else{
					res.post = that.postImgUrl
					addActivity(res).then(addRes=>{
						console.log(addRes)
						if(addRes.data.code==1&&addRes.data.msg=='发布成功'){
							let data =addRes.data.data
							uni.showToast({
								title:'发布成功',
								duration: 2000,
								success:function() {
									setTimeout(function(){
										uni.navigateTo({
											url:'/pages/activityDetail/showOneActivity?activityid='+data.id
										})}
									,2000)

								}
							})
						}
					})					
				}
				//this.$LinkTo({link:'选择图片'})
			},
			openTest() {
				uni.navigateTo({
					url: '../test/test'
				})
			}
		}
	}
</script>

<style>
.container{
	width: 100%;
}
.bannerTop{
	width: 100%;
	text-align: center;
	margin: 20px 10 0px 10px;
}
.bannerTop image{
	width: 95%;
	border-radius: 3%;
}
.activityForm{
	padding: 0 2%;
}
.activityForm_title{
	border-bottom:1px solid #CAD2DF;
	padding:8px 0px;
}
.activityForm_title text{
	margin-left: 10%;
}
.uni-form-item .title{
}
.uni-form-item view{
	display: inline-block;
	height: 100%;
	margin: 0;
	padding: 0;
	line-height: 100%;
}
.uni-form-item input{
	display: inline-block;
	border-bottom:1px solid #CAD2DF;
	margin-left: 10px;
	overflow: visible;
}
.uni-form-item radio{
	margin-left: 10px;
}
.uni-btn-v button{
	width:100%;
	background:#FC8902;
	color: #fff;
	border-radius: 0;
}
.formBorder{
	padding:20upx;
}
.postBtn{
	position: absolute;
	right: 10px;
	top:10px;
}
</style>
