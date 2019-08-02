<template>
	<view class="head">
		<text class="title">已报名人数</text>
		<view class="" >
			{{sb}}
		</view>
	</view>

</template>

<script>
	import request from '@/common/utils/request.js'
	export default {
		data() {
			return {
				sb: ''
			}
		},
		methods: {

		}
	}
</script>

<style>
	view{
		display: flex;
	}
	.head{
		height: 400upx;
		border: 1upx solid #000000;
	}
</style>
