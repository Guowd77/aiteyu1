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
							mode="aspectFit"
							@click="previewImage"
							style="width: 340rpx;"
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
			<view class="bg-white marginTop" v-if="activityDetail.group_info!=undefined" style="padding: 0 30upx;">
				<gongzhong-panel 
					v-bind:groupInfo="activityDetail.group_info"
				></gongzhong-panel>
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
			</view>
			<view class="bg-white marginTop" style="padding-bottom: 40upx;">			
				<view class="cu-bar">
					<view class="action border-title">
						<text class="text-lg text-pri text-bold">活动内容</text>	
					</view>						
				</view>
				<view class="activityDetail_content text-grey">{{activityDetail.content}}</view>		
			</view>		
			<view class="bg-white marginTop" style="padding-bottom: 40upx;">			
				<view class="cu-bar">
					<view class="action border-title">
						<text class="text-lg text-pri text-bold">同类活动推荐</text>	
					</view>						
				</view>
				<scroll-view scroll-x style="white-space: nowrap;">
							<view class="bg-img basis-sm" v-for="(item,index) in hotActivityList" :key="index" style="display: inline-block;width: 150px;">
								<navigator :url="'/pages/activityDetail/showOneActivity?activityid='+item.id">
									<view class="cu-card case" :class="isCard?'no-card':''">
										<view class="cu-item shadow">
											<view class="image">
												<image :src="item.post"
												 style="width: 100%;height: 180px;"></image>
												<view class="cu-tag bg-pri text-white">热门</view>
												<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.name}}</text></view>
											</view>
											<view class="cu-list menu-avatar">
												<view class="text-grey text-cut" style="display: block;">{{item.name}}</view>
												<view class="text-grey text-sm" style="display: block;">{{item.has_people}}人已报名</view>
												<view class="cu-progress round">
													<view class="bg-pri text-black" :style="[{ width:item.loading?item.loading:''}]"></view>
													<text>{{item.loading}}</text>
												</view>
											</view>
										</view>
									</view>
								</navigator>
							</view>
				</scroll-view>	
			</view>	
			<!--
			* <view class="topImage">
				<image :src="activityDetail.post"></image>
			</view>
			<view class="activityDetail_title">
				<text>{{activityDetail.name}}</text>
			</view>
			<view class="activityDetail_topLine">
				<view class="activityDetail">
					<view class="itemContent">
						<view class="itemTime"><image class="listIcon" src="/static/nav2/time2.png"></image>{{activityDetail.starttime_text}}</view>
						<view class="itemTime"><image class="listIcon" src="/static/nav2/loc2.png"></image>{{activityDetail.address==''?'暂无地址':activityDetail.address}}</view>
					</view>
					<view class="itemFooter">
						<image src="../../static/pic.jpg"></image>
						<image src="../../static/nav2/circle.png"></image>
						<text class="baoming">{{activityDetail.has_people}}</text>
						<text class="yibaoming">已报名</text>
					</view>
				</view>
			</view>

			<view class="activityDetail_topLine">
				<view class="activityDetail">
					<gongzhong-panel></gongzhong-panel>
				</view>
			</view>
			<view class="activityDetail_topLine">
				<view class="activityDetail">
					<view class="activityDetail_content">{{activityDetail.content}}</view>
				</view>
			</view>
			<view class="activityDetail_topLine">
			</view>
			* -->
		</view>
		<footer-wrap v-bind:moreDetail="moreDetail" v-on:baoming="baoming" v-on:showModal="showModal"></footer-wrap>
		<shareWrap
			v-bind:modalName="modalName"
			v-on:hideModal = "hideModal"
			v-bind:activityDetail = "activityDetail"
		></shareWrap>
	</view>
</template>

<script>
	import footerWrap from '../../components/activityDetail/footerWrap.vue'
	import shareWrap from '../../components/activityDetail/shareWrap.vue'
	import gongzhongPanel from '../../components/gongzhongPanel.vue'
	import { getActivity,getHotActivities,getAllAppliersByActId } from '../../common/api/activity.js'
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'footerWrap':footerWrap,
			'shareWrap':shareWrap,
			'gongzhongPanel':gongzhongPanel,
			'topBar':topBar
		},
		data() {
			return {
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
				hotActivityList:null,
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
				this.activityid = options.activityid
				this.loadActivity(this.loadHotActivity)
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
				getActivity (para).then((res) =>{
					//console.log(res.data.data)
					var data = res.data.data
					if(data){
						data.post = this.HELP.imgUrl(data.post)
						console.log(data.post)
						//console.log(data.type)
						data.type_text = this.HELP.typeToText(data.type)
						this.$data.activityDetail = data
						//
						let para2 = {
							activity_id:this.activityid
						}
						getAllAppliersByActId(para2).then(res=>{
							console.log(res)
							
							let repData = res.data.data					
							if(repData!=null&&repData!=-1){
								let tempArr  = []
								for(let item in repData){
									if(item>4)
										break
									console.log(item)
									tempArr.push(repData[item].avatar)
								}
								this.avatarList = tempArr
							}
						})
						this.$data.moreDetail.activity_state = data.activity_state
						if(data.group_info!=undefined){
							data.group_info.logoimage = this.HELP.imgUrl(data.group_info.logoimage)
						}
						typeof cb=='function' && cb()
						if(data.activity_state==2){
							this.moreDetail.join_endtime = data.join_endtime
							this.join_endtime = data.join_endtime
							this.moreDetail.leftTime = this.HELP.dateTimes(data.join_endtime)
							//console.log(this.HELP.dateTimes(data.join_endtime))
							this.moreDetail.id = data.id
							this.moreDetail.isJoin = data.is_joined
							this.moreDetail.has_people = data.has_people
							this.moreDetail.max_num = data.max_num
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
			loadHotActivity:function(){
				var that = this
				var para = {
					token:that.$store.store.storeUser.state.userInfo.token,
					user_id:that.$store.store.storeUser.state.userInfo.user_id,
					type:that.activityDetail.type
				}
				getHotActivities(para).then(res=>{
					let data = res.data.data
					if(data!=null && data.length>0){
						for(let j = 0;j<data.length;j++){
							data[j].post = that.HELP.imgUrl(data[j].post)
							data[j].loading = (data[j].has_people/data[j].max_num*100).toFixed(2)+'%'
						}							
						that.hotActivityList = data
					}
				})
			},
			baoming:function(){
				if(this.activityDetail.user_id==this.$store.store.storeUser.state.userInfo.user_id){
					uni.showToast({
						title:'不能报名自己发布的活动',
						icon:'none',
						duration:2000,
						success:function(){
							
						}
					})
					return
				}
				let param = {
					activityid:this.$data.activityid,
					activitytype:this.$data.activityDetail.type,
					activityname:this.$data.activityDetail.name,
					time:this.$data.activityDetail.starttime_text,
					address:this.$data.activityDetail.address
				}
				this.$LinkTo({link:'报名活动',param})
			},
			changeTime:function(context){
				console.log('刷新时间')
				this.$data.moreDetail.leftTime = this.HELP.dateTimes(this.$data.join_endtime)
			}
		}
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
</style>
