<template>
	<view>
		<view class="cu-modal bottom-modal share-warp" @tap="$emit('hideModal')" :class="modalName=='ChooseModal'?'show':''">
			<view class="cu-dialog" >
				<view class="cu-bar bg-white solid-bottom">
					<view class="action text-pri">分享到</view>									
				</view>
				<view class="grid col-2 padding-sm bg-white" >
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn lg block bg-white" 
						 :data-value="item.value"
						  :open-type="item.openType"
						  @tap.stop="chooseCheckbox"> 
							<image :src="item.src" class="shareIcon"></image>
							<text >{{item.text}}</text>
						</button>
					</view>
				</view>
				<view class="cu-bar bg-white text-center solid-top" @tap.stop="hideShareModal">
					<text class="action text-pri" >取消</text>									
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="picmodalName=='Image'?'show':''" >
			<view class="cu-dialog" style="width:80%;">
				<view class="bg-img" >
					<canvas  v-show="picmodalName!=null" id="shareCanvas" :style="'width:100%;height:'+canvasDetail.height+'px;'" canvas-id="firstCanvas" @longtap="downloadPic" @error="canvasIdErrorCallback"></canvas>
		
				</view>

				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left text-pri" @tap.stop="downloadPic"><text class="cuIcon-down"></text>保存到相册</view>
				</view>
			</view>				
			<view class="action  text-lg" @tap="hidePicModal" style="position:absolute;top:70px;right: 10px;z-index: 999;" v-show="postDone">
					<text class="cuIcon-roundclose text-white "></text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getQrPng } from '../../common/api/activity.js'
	export default{
		props:['modalName','activityDetail'],
		data(){
			return{
				checkbox: [{
					value: 0,
					src:'/static/weixin.png',
					text:'微信好友',
					openType:'share',
					
				}, {
					value: 1,
					src:'/static/friends.png',
					text:'朋友圈',
					openType:''
				}],
				picmodalName:null,
				canvasDetail:{
					width:null,
					height:null
				},
				postDone:false
			}
		},
		onReady(){			
		},
		methods:{
			canvasIdErrorCallback: function (e) {
				console.error(e.detail.errMsg)
			},
			downloadPic(){
				console.log('download')
				var that = this
				uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  canvasId: 'firstCanvas',
				  success: function(res) {
					console.log(res.tempFilePath)
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function () {
								console.log('save success')
								
									uni.showToast({
										title:'下载成功',
										duration: 2000,
										complete:function() {
											that.hidePicModal()
										}
									})
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
			hideShareModal(){
				this.$emit('hideModal')
			},
			hidePicModal(){
				this.picmodalName = null
				//this.hideShareModal()
			},
			chooseCheckbox(e){
				console.log(e.currentTarget.dataset.value)
				var data = e.currentTarget.dataset.value
				this.$emit('hideModal')
				var that = this
				switch(data){
					case 0:
						console.log('朋友')
						uni.showShareMenu({
							title: that.$props.activityDetail.name,
							path: '/pages/activityDetail/showOneActivity?activityid='+that.$props.activityDetail.id,
							imageUrl:that.$props.activityDetail.post,
							success:function(){
								uni.hideShareMenu({
									success:function(){
										that.$emit('hideModal')
									}
								})
								
							}
						})
						break;
					case 1:
						console.log('朋友圈')
						that.picmodalName = 'Image'
						let para = {
							scene:that.$props.activityDetail.id,//最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
							page:'pages/activityDetail/showOneActivity',//必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
							//width:number//二维码的宽度，单位 px，最小 280px，最大 1280px
							//auto_color:boolean//自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调，默认 false
							//line_color:Object//auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示
							is_hyaline:true//是否需要透明底色，为 true 时，生成透明底色的小程序
						}
						getQrPng(para).then(data => {
							console.log(data)
							data = that.HELP.imgUrl(data.data.data.qrcode)
							console.log(data)
							that.$nextTick(function(){
								uni.showLoading({
									title:'图片生成中'
								})
								const context = uni.createCanvasContext('firstCanvas',that)	
								let p1 = uni.getImageInfo({
									src:uni.getStorageSync('userInfo').avatar
								})	
								let p2 = uni.getImageInfo({
									src:that.$props.activityDetail.post
								})	
								let p3 = uni.getImageInfo({
									src:'https://aiteyu.imumba.com/uploads/20190523/7f1862ee21ea78b4710aaaa081233a9e.png'
								})
								let p4 = uni.getImageInfo({
									src:data
								})
								Promise.all([p1,p2,p3,p4]).then(res=>{
									console.log(res)
									//that.canvasDetail.width = res[1][1].width/3
									//uni.showLoading()
									let screenWidth = parseInt(uni.getSystemInfoSync().screenWidth*0.8)
									let rate = that.caculateRate(res[1][1].width,screenWidth).toFixed(2)
									let pic2W = res[1][1].width*rate
									let pic2H = res[1][1].height*rate
									let pic1W = res[0][1].width/3
									let pic1H = res[0][1].height/3
									let pic3W = res[2][1].width
									let pic3H = res[2][1].height			
									let pic4W = res[3][1].width/6
									let pic4H = res[3][1].height/6
									that.canvasDetail.height = pic1H+pic2H+pic3H+pic4H+ 100															
									let screenHeight = that.canvasDetail.height							
									//绘制背景色
									context.fillStyle = "#FFFFFF"
									context.fillRect(0,0,screenWidth,screenHeight)	

									let x = screenWidth - pic3W-15
									let y = 10 
									//绘制logo
									context.drawImage(res[2][1].path,x,y,pic3W,pic3H)
									//绘制头像
									x = 20
									y = y+pic3H/2+2
									context.drawImage(res[0][1].path,x,y,pic1W,pic1H)
									//绘制名字
									context.fillStyle = "#000000"
									context.font = "bold 18px  '微软雅黑'";
									x = x + pic1W+8
									y = y + pic1H*0.6
									context.fillText(uni.getStorageSync('userInfo').nickname,x,y);
									let textW = context.measureText(uni.getStorageSync('userInfo').nickname); // TextMetrics object
									console.log(textW)
									x = x+textW.width+5
									y = y
									context.font = "18px  '微软雅黑'";
									context.fillText('邀请你参加',x,y);
									//绘制海报
									x = parseInt((screenWidth-pic2W)/2)
									y = 20 + parseInt(pic1H)+20
									context.drawImage(res[1][1].path,x,y,pic2W,pic2H)
									x = 20
									y = y + pic2H 
									context.font = "14px  '微软雅黑'";
									textW = context.measureText('活动名称：'+that.activityDetail.name);
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
									x = parseInt((screenWidth-pic4W)/2)
									y = y+5
									context.drawImage(res[3][1].path,x,y,pic4W,pic4H)
									context.font = "12px  '微软雅黑'";
									textW = context.measureText('长按查看详情').width
									console.log(textW)
									x = parseInt((screenWidth-textW)/2)
									console.log(x)
									y = y + 10 + pic4H
									
									context.fillText('长按查看详情',x,y);
									context.stroke()
									context.draw()
									uni.hideLoading()
									that.postDone = true
								})
						})
							
					})

				}
			},	
			createSharePic(){
				/*let para = {
					scene:that.$props.activityDetail.id,//最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式）
					page:'pages/activityDetail/showOneActivity',//必须是已经发布的小程序存在的页面（否则报错），例如 pages/index/index, 根路径前不要填加 /,不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面
					is_hyaline:true//是否需要透明底色，为 true 时，生成透明底色的小程序
				}
				getQrPng(para).then(res=>{
					console.log(res)
				})*/
				var that = this
				uni.getImageInfo({
					src: that.activityDetail.post,
					success: (image) =>{
						console.log(image.width);
						console.log(image.height);					
				
					}
				});
			}
		}
		
		
	}
</script>

<style>
	.shareIcon{
		width: 80upx;
		height: 80upx;
		display: block;
		margin-right: 10upx;
	}
</style>
