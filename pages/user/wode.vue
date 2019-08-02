<template>
	<view class="center">
		<view class="head" :hover-class="!login ? 'head-hover' : ''">
			<image class="headInfo" :src="login ? uerInfo.avatarUrl : require('../static/logo.png')"></image>
			<view class="headTitle">
				<text class="uerName">Hi，{{login ? uerInfo.nickName : '您未登录'}}</text>
				<text class="userState">{{state}}</text>
				<view class="circle">
			        <text>{{circleTitle}}</text>
<!-- 					<view class="circleImg" v-for="(item,index)in list" :key="index">
						<image class="circleImgCell" :src="item.img"></image>
					</view> -->
				</view>
			</view>
			<navigator url="messages/messages"><icon type="info" size="26"></icon></navigator>
		</view>
		<navigator url="details/details">
		<view class="uni-list">
			<text class="title2">我发布的</text>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @tap="openInfo">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.img"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.content}}</view>
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<navigator url="joined/joined">
		<view class="uni-list">
			<text class="title">我报名的</text>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.img"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.content}}</view>
					</view>
				</view>
			</view>
		</view>
		</navigator>
		<h2 class="foot">——May you embarce a rosy future——</h2>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: 0,
				avatarUrl: '/static/logo.png',
				uerInfo: {},
				state:"一只潜水鱼",
				list:"",
				circleTitle:"已加入的圈子:",
			}
		},
		onLoad() {
			uni.getUserInfo({
				fail: () => {
					console.log('未登录')
				},
				success: (userInfoRes) => {
					this.login=1,
					this.uerInfo=userInfoRes.userInfo
				}
			})
		},
		methods: {
			openInfo(){
				uni.navigateTo({
					url:"",
					success:"",
					fail:"",
					
				})
			}
				}
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}
	view {
		display: flex;
	}
	.center {
		flex-direction: column;
	}

	.head {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: white;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.head-hover {
		opacity: 0.8;
	}

	.headInfo {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.headTitle {
		height: 30upx;
		flex: 1;
		margin: 5upx;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}
	.circle{
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: black;
		flex-direction: row;
	}
	.circleImg{
		height: 38upx;
		width: 38upx;
		border-radius: 38upx;
	}
	.userState{
		height: 60upx;
		line-height: 60upx;
		font-size: 30upx;
		color: black;		
	}
	.userName {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: black;
	}
	.uni-list{
		background-color: #8F8F94;
		width: 750upx;
		height: 400upx;
	}
</style>

