<template>

	<view class="activityBox  radius shadow-warp bg-white margin-top">
		<view class="activityBox_title">
			{{activityListDetail.title}}
			<button 
				v-if="activityListDetail.fresh==true&&activityListDetail.more==false"
				v-on:click="$emit('refreshBtn')"
			>
				<image src="/static/nav2/fresh.png"></image>
				换一批
			</button>
			<button 
				v-else
				v-on:click="$emit('lookMoreBtn',activityListDetail.type)"	
				class=" text-gray"
			>
				更多<text class="lg text-gray cuIcon-right"></text>
			</button>
		</view>
		<view class="activityBox_list" v-if="activityListDetail.list.length>0">
			<view class="activityBox_listItem"
				v-if="index<activityListDetail.numlimt"
				v-for="(item,index) in activityListDetail.list"
				v-bind:key="item.id"
				>
				<navigator :url="activityListDetail.rootNavigation+'?activityid='+item.id+'&isjoin='+item.is_joined">
					<view class="flexbox">
						<view class="itemImage flexItem">
							<image :src="item.post" :onerror="errorImg01"></image>
							<view class="club" v-if="item.group_info!=undefined">{{item.group_info.name}}</view>
							<view class="club" v-else-if="item.user_id==user_id">我发布的</view>
						</view>
						<view class="itemContent flexItem">
							<view class="itemTitle">{{item.name!=null?item.name:'暂无'}}</view>
							<view class="itemTime"><text class="cuIcon-time text-pri padding-right-xs"></text>{{item.starttime_text}}</view>
							<view class="itemTime"><text class="cuIcon-location text-pri padding-right-xs"></text>{{item.address}}</view>
							<view class="itemTime">
							</view>
						</view>
					</view>
				</navigator>
				<view class="itemFooter">
						<view class="cu-avatar-group" v-if="item.avatars.length>0&&item.avatars!=-1">
							<view class="cu-avatar round sm"
								v-for="(avatarItem,index) in item.avatars" 
								v-if="avatarItem.avatar!=null&&index<6"
								:key="index"  								
								:style="[{ backgroundImage:'url(' + avatarItem.avatar + ')' }]"
							>
							</view>
							
						</view>
						<view class="cu-avatar-group" v-else>
						</view>
						<text class="yibaoming">{{item.has_people>0?item.has_people+'人已报名':'暂无报名信息'}}</text>
						<button class="radius shadow shadow-lg" v-if="item.activity_state==1" disabled="true">报名未开始</button>
						<button class="radius shadow shadow-lg" v-if="item.is_joined==false&&item.activity_state==2" @click="baoming(item)" data-activity = "item">报名</button>
						<button class="radius shadow shadow-lg" v-if="item.activity_state==3||item.activity_state==4||item.activity_state==5" disabled="true">报名已结束</button>
				</view>
			</view>
		</view>
		<uni-load-more status="noMore" v-else></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '../uni-load-more.vue'
	export default {
		props:['activityListDetail'],
		components:{
			'uni-load-more':uniLoadMore
		},
		data(){
			return{		
				errorImg01: 'this.src="' + require('../../static/pic.jpg') + '"',
				user_id:uni.getStorageSync('userInfo').user_id
			}
		},
		mouted(){
			console.log(this.$props.activityListDetail.list)
		},
		onReady(){
		},
		methods:{
			loadError(e){
				console.log(e)
				
			},
			baoming:function(item){
				if(item.user_id==this.$store.store.storeUser.state.userInfo.user_id){
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
					activityid:item.id,
					activitytype:item.type,
					activityname:item.name,
					time:item.starttime_text,
					address:item.address
				}
				console.log(item)
				this.$LinkTo({link:'报名活动',param})
				/*let param = {
					link:'海报制作',
					param:item.id
				}
				console.log(param)
				this.$LinkTo(param)*/
			},
		}
	}
</script>

<style>
.activityBox{
	width: 100%;
	background: #fff;
	margin: 10px 0;
	border-radius: 5px;
	box-shadow: 10px;
}
.borderBottomLine{
	border-bottom: 1px solid #E6E6E6;
}
.activityBox_title{
	padding: 15upx 10upx 15upx 20upx;
	margin: 0 5px;
	font-size: 28upx;
	font-weight: 600;
	color:#3e3e3e;
	border-bottom: 1px solid #E6E6E6;
}
.activityBox_title button{
	display: inline-block;
	height: 100%;
	font-size: 26upx;
	margin-top:10upx;
	line-height: 100%;
	background: #fff;
	border: none;
	float: right;
}
.activityBox_title button image{
	width: 30upx;
	height: 30upx;
	padding-right: 10upx;
}
.activityBox_title button::after{
	border: none;
}
.activityBox_listItem{
	padding-top: 30upx;
	width:95%;
	overflow: hidden;
	padding-bottom: 30upx;
}
.flexbox{
	display: flex;
	flex-direction: row;
}
.flexItem{
	width: 50%;
}
.itemImage{
	position: relative;
	margin:0 15upx ;
}
.itemImage image{
	width: 100%;
	height: 200upx;
	border-radius: 25upx;
}
.itemImage .club{
	position: absolute;
	right: 0;
	bottom: 3%;
	background: #000000;
	color: #FFFFFF;
	font-size: 30upx;
	padding:7upx 10upx;
	border-radius: 5upx;
	opacity:0.7;
	font-size: 25upx;
	border-radius: 15upx 0 25upx 0;
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
	color:#3E3E3E;
	padding:11upx 0 0 0;
}
.itemFooter button{
	
}
.itemFooter image{
	width: 50upx;
	height: 50upx;
	margin: 10upx 10upx;
	border-radius: 50upx;
}
.itemFooter .baoming{
	display: inline-block;
	width: 50upx;
	height: 50upx;
	margin: 10upx 10upx;
	position: absolute;
	border-radius: 50upx;
	background: #c9c3c3;
	color: #fff;
	font-size: 25upx;
	text-align: center;
	line-height: 50upx;
}
.itemFooter .yibaoming{
	display: inline-block;
	height: 50upx;	
	position: absolute;
	color: #8E8E8E;
	font-size: 25upx;
	text-align: center;
	line-height: 50upx;
}
.itemFooter button{
	display: inline-block;
	float: right;
	height: 50upx;
	background: #FC8902;
	font-size: 25upx;
	text-align: center;
	line-height: 50upx;
	color: #fff;
}
.itemFooter button::after{
	border: none;
}
.listIcon{
	width:35upx;
	height: 35upx;
	padding-right:10upx;
	padding-top: 10upx;
}
</style>
