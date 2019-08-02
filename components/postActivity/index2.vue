<template>
	<view>
		<view class="cu-card">
			<view class="cu-item bg-img shadow-blur margin-tb-xl" :style="[{backgroundImage:'url('+item.img+')'}]" @tap="toChild" :data-url="item.url"
				 v-for="(item,index) in list" :key="index">
				<view class="cardTitle">
					{{item.title}}
				</view>
				<view class="descrText">
					{{item.descr}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '学术讲座',
						img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
						url:'/pages/postActivity/postActivityForm?activity_type=0',
						descr:'快速浏览学校知识讲座，学科汇报'
					},
					{
						title: '科技竞赛',
						img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
						url:'/pages/postActivity/postActivityForm?activity_type=1',
						descr:'实时了解校园竞赛信息，快速报名'
					},
					{
						title: '演出抢票',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
						url:'/pages/postActivity/postActivityForm?activity_type=2',
						descr:'了解最新校园大型活动，报名抢票'
					},
					{
						title: '生活约玩',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url:'/pages/postActivity/postActivityForm?activity_type=3',
						descr:'约健身，约吃饭，校园生活约着玩'
					},
					{
						title: '其他',
						img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
						url:'/pages/postActivity/postActivityForm?activity_type=4',
						descr:''
					}
				]
			}
		},
		methods:{
			toChild(e){
				console.log(e)
				uni.navigateTo({
					url:e.currentTarget.dataset.url
				})
			}
		}
	}
</script>

<style>
.flexbox{
	display: flex;
    flex-direction: row;
    font-size: 28upx;
}
.flex-item{
	width: 50%;
}
.postBtn{
	text-align: right;
	padding: 25px 0;
}
.postBtn button{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: #FC8902;
	color: #fff;
	line-height: 80px;
	margin-right: 40px;
}
	.page {
		height: 100vh;
	}

	.cardTitle {
		color: #fff;
		padding: 90upx 60upx 20upx 60upx;
		font-size: 40upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)
	}
	.descrText{
		color: #fff;
		padding: 15upx 60upx;
		font-size: 25upx;
		font-weight: 300;
		transform: skew(-10deg, 0deg);
		position: relative;
		text-shadow: 0px 0px 6upx rgba(0, 0, 0, 0.3)		
	}
	.cardTitle::before {
		content: "";
		position: absolute;
		width: 60upx;
		height: 6upx;
		border-radius: 20upx;
		background-color: #fff;
		display: block;
		top: 60upx;
		left: 50upx;
		transform: skew(10deg, 0deg);
	}

	.cardTitle::after {
		content: "";
		position: absolute;
		width: 140upx;
		border-radius: 6upx;
		height: 24upx;
		background-color: #fff;
		display: block;
		bottom: 76upx;
		left: 90upx;
		transform: skew(10deg, 0deg);
		opacity: 0.1;
	}
</style>
