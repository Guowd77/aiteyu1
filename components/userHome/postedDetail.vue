<template>
	<view class="activityBox">
		<view class="activityBox_list">
			<view class="activityBox_listItem"  v-for="(item,index) in activityListDetail.list" v-key="item.id">
				<view class="flexbox">
					<view class="itemImage">
						<image :src="item.image" class="image"></image>
						<view class="itemTitle">{{'【'+item.type+'】'+item.title}}</view>						
						<view class="club">{{item.club}}</view>
					</view>
					<view class="itemDetail">
						<text class="itemDetailTitle">活动详情</text>
						<view class="itemDetailBody">
						    <view class="itemIcon1"><image class="listIcon" src="/static/nav2/time.png"></image>{{'——'+item.time+'——'}}</view>
						    <view class="itemIcon2"><image class="listIcon" src="/static/nav2/loc.png"></image>{{'——'+item.loc+'——'}}</view>
						    <text class="itemDetailText" v-for="(itemDetail,index) in item.detail" >
						    	{{itemDetail.text}}					
							</text>
						</view>
					</view>
					<view class="myJoined">
						<text class="myJoinedTitle">报名须知</text>
						<view class="myJoinedBody">
							<view class="need">Need</view>
						    <view class="myJoinedItem"><image class="listIcon" src="/static/joinedDetail/name.png"></image>{{'姓名'}}</view>
						    <view class="myJoinedItem"><image class="listIcon" src="/static/joinedDetail/number.png"></image>{{'学号'}}</view>
						    <view class="myJoinedItem"><image class="listIcon" src="/static/joinedDetail/tell.png"></image>{{'电话'}}</view>
						    <view class="myJoinedItem"><image class="listIcon" src="/static/joinedDetail/email.png"></image>{{'邮箱'}}</view>
						</view>
					</view>
				</view>
				<text class="itemFooterTitle">已报名对象</text>
				<view class="itemFooter">
					<image :src="itemPeople.image" v-if="index<3" v-for="(itemPeople,index) in item.people.users"></image>
					<image src="../../static/pic.jpg"></image>
					<image src="../../static/nav2/circle.png"></image>
					<text>{{item.people.count}}</text>
					<button @click="toAppliedPeople">查看详情</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['activityListDetail'],
		data(){
			return{				
			}
		},
		methods:{
			toAppliedPeople:function(){
				uni.navigateTo({
					url: '../applied/applied',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.itemImage{
		margin-top:5upx ;
	}
	.image{
		position: relative;
		width: 89.3%;
		height: 350upx;
		margin-left:5.35%;
		border-radius: 10upx;
	}
	.itemTitle{
		position: absolute;
		top: 240upx;
		left: 5.35%;
		height: 50upx;
		font-size: 28upx;
		background-color: #FC8902;
		color: #FFFFFF;
		display:inline;
		border-radius: 10upx;
	}
	.club{
		position: absolute;
		right: 5.35%;
		top: 300upx;
		height: 50upx;
		font-size: 28upx;
		background-color: #FC8902;
		color: #FFFFFF;
		display:inline;
		border-radius: 10upx;
	}
	.itemDetail{
		margin-top: 25upx;
		border: solid #C9D1DE;
		width: 89.3%;
		margin-left:5.35%;
		height: 400upx;
		
	}
	.itemDetailTitle{
		position: absolute;
		top: 375upx;
		left: 5.35%;
		background-color:  #C9D1DE;
		font-size: 30upx;
		height: 50upx;
		border-radius: 10upx;
	}
	.itemDetailBody{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-content: flex-start;
		margin-left: 5%;
		margin-top: 25upx;
	}
	.itemIcon2{
		margin-bottom: 20upx;
	}
	.listIcon{
		height: 45upx;
		width: 45upx;
	}
	.myJoinedTitle{
		position: absolute;
		top: 815upx;
		left: 5.35%; 
		background-color:  #C9D1DE;
		font-size: 30upx;
		height: 50upx;
		border-radius: 10upx;
	}
	.myJoined{
		margin-top: 30upx;
		border: solid #C9D1DE;
		width: 89.3%;
		margin-left:5.35%;
		height: 200upx;
	}
	.myJoinedBody{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
		margin-left: 10%;
		margin-top: 30upx;
	}
	.myJoinedItem{
		flex-basis: 40%;
		height: 50upx;
		margin-right: 5%;
	}
	.itemFooter{
		margin-top: 40upx;
		border: solid #C9D1DE;
		width: 89.3%;
		margin-left:5.35%;
		height: 100upx;
		padding-top:20upx ;
	}
	.itemFooterTitle{
		position: absolute;
		top: 1060upx;
		left: 5.35%; 
		background-color:  #C9D1DE;
		font-size: 30upx;
		height: 50upx;
		border-radius: 10upx;
	}
	.itemFooter image{
		width: 50upx;
		height: 50upx;
		margin: 10upx 10upx;
		border-radius: 50upx;
	}
	.itemFooter text{
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

	.itemFooter button{
		display: inline-block;
		float: right;
		height: 50upx;
		margin: 10upx 10upx;
		background: #FC8902;
		color: #fff;
		font-size: 25upx;
		text-align: center;
		line-height: 50upx;
	}
	.itemFooter button::after{
		border: none;
	}
	.need{
		width: 100%;
		margin-top: -10upx;
	}

</style>
