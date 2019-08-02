<template>
	<view class="flexbox">
		<view class="gongzhongImage" style="width: 17%;">
			<image :src="groupInfo.logoimage"></image>
		</view>
		<view class="gongzhongText text-grey" style="width: 52%;">
			<view style="font-size: 28upx;margin-top:10upx;" class="text-bold">{{groupInfo.name}}</view>
			<view style="margin-top:10upx;">{{groupInfo.content}}</view>
		</view>
		<view class="text-center" style="margin-top:30upx;">
			<button class="cu-btn round text-pri bg-gray"><text class="cuIcon-add"></text>关注</button>
		</view>
	</view>
</template>

<script>
	export default {
		props:['groupInfo'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.flexbox{
	display: flex;
	flex-direction: row;
	height: 120upx;
}
.gongzhongImage {
	margin: 10upx 15upx;
}
.gongzhongImage image {
	width: 105upx;
	height: 105upx;
}
.gongzhongText{
	margin: 15upx 0;
	font-size: 20upx;
}
.guanzhuBtn {
	line-height: 130upx;
}
</style>
