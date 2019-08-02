<template>
	<view>
		
<!-- 		<view class="details">
			<text>活动详情</text>
		</view>
		<view class="info">
			<text>我的报名信息</text>
			
		</view>
		<view class="object">
			<text>已报名对象</text>
			<navigator url="../applied/applied"><button type="primary" class="appliedPeople">查看详情</button></navigator>
		</view> -->
		<posted-detail v-bind:activityListDetail="activityListDetail1"></posted-detail>
		<view class="footer">
			<button type="primary" class="share1" open-type="share">分享</button>
			<view class="share2">
				<button type="primary" class="poster">生成活动海报</button>
				<navigator url="../createMess/createMess">
				<button type="primary" class="sentMess" >发送通知</button>
				</navigator>
				<button type="primary" class="exportInfo">导出报名信息</button>
			</view>

		</view>
	</view>
</template>

<script>
	import postedDetail from '../../../components/userHome/postedDetail.vue'
	export default {
		components:{
			'postedDetail' :postedDetail
		},
		data() {
			return {
				activityListDetail1:{
					rootNavigation:'/pages/activityDetail/showOneActivity',
					title:'为你推荐',
					numlimt:3,
					fresh:true,
					more:false,
					list:[
						{
							id:3,
							image:'/static/pic.jpg',
							type:'精英学者沙龙',
							title:'让学术检索变得简单',
							time:'2019/01/21 13:00',
							loc:'图书馆百草堂',
							club:'IEEE分会',
							detail:[
								{
									text:'1、中外文献'
								},
								{
									text:'2、xxxxxx'
								},
								{
									text:'3、yyyyyy'
								},
								{
									text:'4、zzzzzzzzzzzzz'
								}
							],
							people:{
								count:130,
								users:[
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									}
								]
							}
						}
						],
			
		}
		}
		},
		methods:{
			toAlterInfo: function() {
				uni.navigateTo({
					url: '../alterInfo/alterInfo'
					});
			}
		},
	
}
	
	
</script>

<style>
	view{
		margin-top:10upx;
	}
	.footer button{
		background: #FC8902;
	}
	.head{
		justify-content: center;
		width: 800upx;
		height: 300upx;
		
	}
	.details{
		border: 1upx solid #000000;
		height: 300upx;
	}
	.info{
		border: 1upx solid #000000;
		height: 200upx;
	}
	.object{
		border: 1upx solid #000000;
		height: 200upx;
	}
	.appliedPeople{
		width: 200upx;
		height: 60upx;
		font-size: 30upx;
		margin-left: 540upx;
		margin-top: 90upx;
		background: #FC8902;
		color: #fff;
		font-size: 30upx;

	}
	.share1{
		width: 93%;
		height: 60upx;
		font-size: 25upx;
		align-items: center;
		margin-top: 10upx;
		
	}
	.share2{
		margin-top: 20upx;
		height: 90upx;
		display: flex;
		flex-direction: row;
		padding-bottom: 15upx ;
	}
	.alterInfo{
		background: #FC8902;
		color: #fff;
		font-size: 25upx;
		width: 44%;
		height: 60upx;
	}
	.cancel{
		background-color: #FC8902;
		color: #fff;
		font-size: 25upx;
		margin-left: 2.5%;
		width: 44%;
		height: 60upx;
		
	}
	.share1{
		width: 700upx;
		height: 80upx;
		font-size: 35upx;
		align-items: center;
		justify-content: center;
		margin-top: 10upx;
		
	}
	.share2{
		margin-top: 10upx;
		margin-left: 10upx;
		width: 720upx;
		height: 100upx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.poster{
	
		justify-content: space-between;
		font-size: 30upx;
		
	}
	.sentMess{
	
		font-size: 30upx;
	}
	.exportInfo{
	
		font-size: 30upx;
	}
</style>
