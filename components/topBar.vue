<template>
	<view style="bg-white" class="topBar"
	:style="'width: 100%;'
	+'padding-top:'+styleDetail.statusBarHeight+'px;'
	+'height:'+styleDetail.navHeight + 'px;'	
	">
		<view class="cu-bar bg-white " style="min-height:0;height: 100%;">
			<view class="action solids round" style="height:75%;padding:0 8px;">
				<text class="cuIcon-back text-gray solid-right" @click.stop="backPage" style="padding: 0 0.3em;margin: 0;"></text>
				<text class="cuIcon-homefill text-gray" @click.stop="backIndex" style="padding: 0 0.3em;margin: 0;"></text>
			</view>
			<view class="content text-bold">
				{{topBarDetail.title}}
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		props:['topBarDetail','styleDetail'],
		data(){
			return{
				marginTop:'margin-top:'+uni.getSystemInfoSync().statusBarHeight+'px;'
			}
		},
		methods:{
			backPage(){
				uni.navigateBack({
					delta:1
				})
			},
			backIndex(){
				uni.redirectTo({
					url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style>
	.topBar{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		background: #FFFFFF;
		box-sizing: content-box;
		line-height: 100%;
	}
</style>
