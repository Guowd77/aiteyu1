<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<view class="imageBox">
			<image src="/static/success.png"></image>
		</view>
		<view class="btnBox">
			<button @click="shareBtn">分享</button>
			<button @click="lookBtn">查看</button>
		</view>
	</view>
</template>

<script>
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'topBar':topBar
		},
	 data(){
		return {
			styleDetail:this.styleDetail,
			classObj : this.classObj,
			topBarDetail:{
				title:'报名成功'
			},			
			infoId:null,
			activityId:null
		}
	 },
    onLoad:function(options){
		console.log(options)
		if(!options.id||!options.activityid){
			uni.showToast({
				title:'加载失败',
				duration:2000,
				success:function() {
					setTimeOut(function(){
						uni.navigateBack({
							delta:1
						})
					},2000)
				}
			})
		}
		else
			this.infoId = options.id
			this.activityId = options.activityid
			
    },
	methods:{
		shareBtn(){
		},
		lookBtn(){
			uni.navigateTo({
				url:'/pages/activityDetail/showOneActivity?activityid='+this.activityId
			})
		}
	}
}
</script>

<style>
page{
	background: #fff;
}
.container{
	width: 100%;
}
.container .imageBox image{
	display: block;
	width: 300upx;
	height: 300upx;
	margin: 15upx auto;
}
.btnBox button{
	width: 300upx;
	height: 100upx;
	background: #FC8902;
	color: #fff;
	margin-top:30upx;
}
</style>
