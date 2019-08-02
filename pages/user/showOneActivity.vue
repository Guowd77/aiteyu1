<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<view>
			<view class="cu-card article no-card">
				<view class="cu-item shadow paddingTop">
					<view class="content">
						<image :src="activityDetail.post"
							mode="aspectFill"
							@click="previewImage"
						 >
						 </image>
						<view class="desc">
							<view class="text-title text-black text-bold">{{activityDetail.name}}</view>
							<view class="text-sm">发布人:{{activityDetail.group_info!=undefined?activityDetail.group_info.name:'个人'}}</view>
							<view>
								<view class="cu-tag bg-red light sm round">{{activityDetail.type_text}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white marginTop">
			<view class="bg-white marginTop" v-if="activityDetail.group_info!=undefined" style="padding: 0 30upx;">
				<gongzhong-panel 
					v-bind:groupInfo="activityDetail.group_info"
				></gongzhong-panel>
			</view>	
			</view>	
			<view class="cu-list menu sm-border marginTop text-size">
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-time text-pri"></text>
						<text class="text-grey text-size">活动时间</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{activityDetail.starttime_text}}</text>
					</view>	
				</view>				
				<view class="cu-item" >
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">活动地点</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{activityDetail.address}}</text>
					</view>				
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-friend text-pri"></text>
						<text class="text-grey text-size">已报名人数</text>
					</view>
					<view class="action">
						<view class="cu-avatar-group" v-if="avatarList!=null">					
							<view class="cu-avatar round sm" v-if="index<4" v-for="(item,index) in avatarList" :style="'background-image:url('+item+');'"></view>
						</view>
						<text class="text-grey text-sm">{{activityDetail.has_people}}/{{activityDetail.max_num}}</text>
					</view>
				</view>
				<view class="cu-item" v-if="isJoin==1" >
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">我的报名信息</text>
					</view>
					<view class="hidden">
						<button 
								v-on:click="hiden"	
								class="hidenButton text-gray"
							>
								{{!hidenNumber?hidenText2:hidenText1}}
								<text v-if="!hidenNumber" class="text-grey text-sm cuIcon-unfold" ></text>
								<text v-if="hidenNumber" class="text-grey text-sm cuIcon-fold"></text>
							</button>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.name!=null">
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">姓名</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.name}}</text>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.tel!=null">
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">tel</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.tel}}</text>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.institude!=null" >
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">institude</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.institute}}</text>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.email!=null">
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">email</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.email}}</text>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.institute!=null">
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">专业</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.institute}}</text>
					</view>				
				</view>
				<view class="cu-item" v-if="hidenNumber&&myInfo.studynum!=null">
					<view class="content">
						<text class="cuIcon-location text-pri"></text>
						<text class="text-grey text-size">学号</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">{{myInfo.studynum}}</text>
					</view>				
				</view>
				
			</view>
			<view class="bg-white marginTop" style="padding-bottom: 40upx;">			
				<view class="cu-bar">
					<view class="action border-title">
						<text class="text-lg text-pri text-bold">活动内容</text>	
					</view>						
				</view>
				<view class="activityDetail_content text-grey">{{activityDetail.content}}</view>		
			</view>		
		<footer-wrap v-bind:moreDetail="moreDetail" v-on:cancelBaoming="cancelBaoming" v-on:baoming="baoming"  v-on:getExcel="getExcel"  v-on:createMess="createMess" v-on:showModal="showModal"></footer-wrap>
		<shareWrap
			v-bind:modalName="modalName"
			v-on:hideModal = "hideModal"
			v-bind:activityDetail = "activityDetail"
		></shareWrap>
	</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import footerWrap from '../../components/userHome/footerWrap.vue'
	import shareWrap from '../../components/activityDetail/shareWrap.vue'
	import gongzhongPanel from '../../components/gongzhongPanel.vue'
	import { getActivity,getMyJoinedInfo,cancelJoin,getJoinFields,getAllAppliersByActId,getAppliersExcel} from '../../common/api/activity.js'
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'uniPopup' :uniPopup,
			'footerWrap':footerWrap,
			'shareWrap':shareWrap,
			'gongzhongPanel':gongzhongPanel,
			'topBar':topBar
		},
		data() {
			return {
				hidenNumber:0,
				hidenText1:'收起',
				hidenText2:'展开',
				topBarDetail:{
					title:'活动详情'
				},
				styleDetail:this.styleDetail,
				classObj : this.classObj,
				activityid:null,
				activityDetail:null,
				join_endtime:null,
				moreDetail:{
					activity_state:null,
					leftTime:null
				},
				timer:null,
				isJoin:null,
				modalName:null,
				myInfo:null,
				user_id:null,
				avatarList:null
			}
		},
		computed:{
		},
		onReady: function (e) {
			var that = this

		},
		beforeDestroy(){
			clearInterval(this.$data.timer)
			this.$data.timer = null;
		},
		onLoad(options){
			if(!options.activityid){
				uni.navigateBack({
					delta:1
				})
			}
			else{
				this.$data.activityid = options.activityid
				this.$data.isJoin=options.isjoin
				this.loadActivity(this.getMyInfo())
			}
		},
		onShareAppMessage() {
			var that = this
			return {
			  title: that.activityDetail.name,
			  path: '/pages/activityDetail/activityid='+that.activityid
			}
		 },
		methods:{
			hiden:function(){
				this.hidenNumber=!this.hidenNumber;
			},
			hideModal(e) {
				this.modalName = null
			},
			showModal(){
				console.log(this.modalName)
				this.modalName = 'ChooseModal'
			},
			previewImage(e){
				if(this.activityDetail==null)
					return
				var that = this
				uni.previewImage({
					urls: [that.activityDetail.post],
					longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function (res) {
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						},
						fail: function (res) {
							console.log(res.errMsg);
						}    
					},
					fail:function(res){
						console.log(res)
					}
				});
			},
			loadActivity:function(cb){
				var that = this
				let para = {
					activity_id:this.activityid,
					user_id:this.$store.store.storeUser.user_id
				}
				that.$data.user_id=this.$store.store.storeUser.user_id
				getActivity (para).then((res) =>{
					console.log(res.data.data)
					var data = res.data.data
					if(data){
						data.post = this.HELP.imgUrl(data.post)
						console.log(data.type)
						data.type_text = this.HELP.typeToText(data.type)

						this.$data.activityDetail = data
						let para2 = {
							activity_id:this.activityid
						}
						getAllAppliersByActId(para2).then(res=>{
							let repData = res.data.data	
							console.log(repData)
							if(repData!=null){
								let tempArr  = []
								for(let item in repData){
									if(item>4)
										break
									console.log(item)
									tempArr.push(repData[item].avatar)
								}
								this.activityDetail.has_people=repData.length
								this.avatarList = tempArr
							}
							else {
								this.activityDetail.has_people=0
							}
						})
						this.$data.moreDetail.activity_state = data.activity_state
						typeof cb=='function' && cb()
						if(data.activity_state!='error'){
							this.moreDetail.join_endtime = data.join_endtime
							this.join_endtime = data.join_endtime
							this.moreDetail.leftTime = this.HELP.dateTimes(data.join_endtime)
							//console.log(this.HELP.dateTimes(data.join_endtime))
							this.moreDetail.id = data.id
							this.moreDetail.isJoin = that.isJoin
							this.moreDetail.max_num = data.max_num
							this.moreDetail.posterPeopleId=data.user_id
							console.log(this.moreDetail)
							//报名人数不足，倒计时
							if(data.has_people<data.max_num){
								this.timer = setInterval(this.changeTime,1000*60)							
								this.$once('hook:beforeDestroy', () => {            
									clearInterval(this.timer)
									this.timer = null
								})								
							}
							//console.log(this.$data.moreDetail)

						}
						this.$nextTick(function() {
						});
					}
				})
			},
			getMyInfo:function(){
				var that = this
				var para = {
					token:that.$store.store.storeUser.state.userInfo.token,
					user_id:that.$store.store.storeUser.state.userInfo.user_id,
					activity_id:that.activityid
				}
				var para2 = {
					token:that.$store.store.storeUser.state.userInfo.token,
					activity_id:that.activityid
				}
				that.user_id=that.$store.store.storeUser.state.userInfo.user_id
				getJoinFields(para2).then(resFields=>{
					console.log(resFields)
					getMyJoinedInfo(para).then(res=>{
						let data = res.data.data
						console.log(data)
						that.myInfo = data
						this.$data.moreDetail.pass=data.pass
					})
				})
			},
			baoming:function(){
				let param = {
					activityid:this.$data.activityid,
					activitytype:this.$data.activityDetail.type,
					activityname:this.$data.activityDetail.name,
					time:this.$data.activityDetail.starttime_text,
					address:this.$data.activityDetail.address,
					user_id:this.$store.store.storeUser.state.userInfo.user_id
				}
				this.$LinkTo({link:'修改报名信息',param})
			},
			createMess:function(){
				let param = {
					activityid:this.$data.activityid,
					activityname:this.$data.activityDetail.name,
					user_id:this.$store.store.storeUser.state.userInfo.user_id,
					identity:this.$data.activityDetail.identity
				}
				this.$LinkTo({link:'创建通知',param})
			},
			cancelBaoming:function(){
				let param = {
					token:this.$store.store.storeUser.state.userInfo.token,
					activity_id:this.$data.activityid,
					user_id:this.$store.store.storeUser.state.userInfo.user_id,
				}
				uni.showModal({
                    title: '提示',
                    content: '确定取消本次报名？',
					confirmColor:"#FC8902",
                    success: function (res) {
                    if (res.confirm) {
						console.log(param)
						cancelJoin(param).then(res=>{
							uni.showToast({
								title: res.data.msg,
								icon:'none',
								duration: 1500
							});
							setTimeout(function(){
								uni.navigateBack({
									delta:1
								})									
							},1000)
						})
                        console.log('用户点击确定');
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                    }
                });
				
				
			},
			changeTime:function(context){
				console.log('刷新时间')
				this.$data.moreDetail.leftTime = this.HELP.dateTimes(this.$data.join_endtime)
			},
			getExcel:function(){
				var that = this
				var  param=new Object()
				param = {
					token:that.$store.store.storeUser.state.userInfo.token,
					identity:this.$data.activityDetail.identity,
					activity_id:this.$data.activityid,
					user_id:this.$store.store.storeUser.state.userInfo.user_id
				}
				console.log(param)
				uni.setClipboardData({
                    data: 'https://aiteyu.imumba.com/index.php/addons/aitefish/Activity/getAllAppliersViaExcel?activity_id='+param.activity_id+'&token='+param.token+'&user_id='+param.user_id+'&identity='+param.identity, //仅为示例，并非真实的资源
                    success: function () {
						uni.showToast({
						    title: '下载地址已复制到剪切板，请打开浏览器粘贴地址',
						    icon:'none',
						    duration: 3000
						});
                    console.log('success');
					},
					});
				/* uni.downloadFile({
					header:param,
                    url: 'https://aiteyu.imumba.com/index.php/addons/aitefish/Activity/getAllAppliersViaExcel?activity_id='+param.activity_id+'&token='+param.token+'&user_id='+param.user_id+'&identity='+param.identity, //仅为示例，并非真实的资源
                    success: (res) => {
	             	console.log(res.tempFilePath)
                    if (res.statusCode === 200) {
                    console.log('下载成功');
		          	uni.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: function (resPath) {
                    var savedFilePath = resPath.savedFilePath;
		             console.log(savedFilePath)
		            uni.showToast({
		        	title: '下载成功,文件保存在'+savedFilePath,
		          	icon:'none',
		        	duration: 1500
		});
      }
    });
        }
    },
	fail:(res)=> {
		console.log(res)
	}
}); */
				},
			},
			}
</script>

<style>
.container{
	margin:0 auto ;
	width: 100%;
	background: #F8F8F8;
	padding-bottom: 50upx;
}
.text-size{
	font-size: 25upx;
}
.paddingTop{
	padding:10px 0 ;
}
.topImage image{
	display: block;
	width:92%;
	height: 350upx;
	margin: 15upx auto;
	border-radius: 30upx;
}
.activityDetail_title{
	font-size:35upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
}
.activityDetail{
	width:100%;
	margin:15upx 0 20upx 45upx;
}
.activityDetail_topLine{
	border-top:1px solid #C9D1DE;
}
.itemContent{
	padding:0 15upx;
}
.itemTitle{
	font-size: 30upx;
	font-weight: 900;
}
.itemTime{
	font-size: 25upx;
	padding:11upx 0 0 0;
}
.listIcon{
	width:25upx;
	height: 25upx;
	padding-right:10upx;
	padding-top: 10upx;
}
.itemFooter{
	margin-top: 10upx;
}
.itemFooter image{
	width: 35upx;
	height: 35upx;
	margin: 10upx 10upx;
	border-radius: 35upx;
}
.itemFooter .baoming{
	display: inline-block;
	width: 35upx;
	height: 35upx;
	margin: 10upx 10upx;
	position: absolute;
	border-radius: 50upx;
	background: #c9c3c3;
	color: #fff;
	font-size: 25upx;
	text-align: center;
	line-height: 35upx;
}
.itemFooter .yibaoming{
	display: inline-block;
	width: 100upx;
	height: 35upx;
	margin: 10upx 10upx;
	margin-left: 60upx;
	position: absolute;
	color: #DCDBDB;
	font-size: 25upx;
	text-align: center;
	line-height: 35upx;
}
.activityDetail_content{
	width: 100%;
	padding: 15upx 30upx;
	font-size: 28upx;
}
scroll-view{
	overflow: scroll;
}
.marginTop{
	margin-top: 5px;
}
.hot-wrap{
	overflow: scroll;
	height: 300px;
}
.hot-wrap-item{
	width: 33%;
}
.hidenButton{
	display: inline-block;
	height: 100%;
	font-size: 26upx;
	margin-top:10upx;
	line-height: 100%;
	background: #FFFFFF;
	
	float: right;
}
.hidenButton::after{
  border: none;
}
</style>
