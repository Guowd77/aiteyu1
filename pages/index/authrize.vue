<template>
	<!-- #ifdef MP-WEIXIN -->
    <view style="width:100%;height:100%;padding:105px 35px 0 35px;" class="bg-white">
		<view v-if="canIUse">
			<view class='header'>
				<image src='/static/logo.png'></image>
			</view>
			<view class='content'>
				<view>申请获取以下权限</view>
				<text>获得你的公开信息(昵称，头像等)</text>
			</view>
			<button class="bottom bg-pri text-white"  open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信登录</button>
			<view class="bottom">
				<text style="text-align: right;">组织号登陆</text>
			</view>
		</view>
		<view v-else>
			请升级微信版本
		</view>  
	  <!-- #endif -->
	</view>
</template>
<script>
	var _self;
	export default {
	 data(){
		return {
			canIUse: uni.canIUse('button.open-type.contact'),
			userInfo:null
		}
	 },
    onLoad:function(){
		_self = this;
    },
	methods:{
		getuserinfo : function(){
			this.$store.store.storeUser.dispatch('WeiXinLogin').then(this.callback)
		},
		callback:function(){
			uni.navigateBack({
				delta:1
			})
		}

	}
}
</script>
<style>
 /* page/zh_index/authrize.wxss */
 page{
	 background: #fff;
 }
.header {
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
}

.header image {
    width: 200rpx;
    height: 200rpx;
}

.content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
}

.content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
}

.bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
}
</style>