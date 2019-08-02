<template>
	<view class="picListBox">
		<view >
			{{picListItem.title}}
		</view>
		<view class="flexBox imgListBox">
			<view v-for="item in picListItem.images" class="flexItem">
				<image :src="item.url" ></image>
				<view class="checkedPic" v-if="item.checked"> <icon type="success" size="24" color="red"/></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['picListItem'],
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	.picListBox{
		width: 100%;
	}
	.imgListBox{
		width: 100%;
		margin: 3% 5%;
	}
	.flexBox{
		display: flex;
		flex-direction:row;
	}
	.flexItem{
		width: 30%;
		position: relative;
	}
	.flexItem image{
		width: 90%;
		padding: 8%;
		height: 220upx;
	}
	.checkedPic{
		position: absolute;
		right: 0;
		top:0;
	}
</style>
