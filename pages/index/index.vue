<template>
	<view class="container" :style="classObj.containerMarginTop">
		<view class="bg-white flex-sub radius shadow-lg waitGif" v-if="loadingGif">
			<image 
			src="https://image.weilanwl.com/gif/loading-white.gif" 
			mode="aspectFit" 
			class="gif-white response" 
			style="height:240upx;"></image>
		</view>
		<topSearch 
			v-bind:styleDetail="styleDetail" 
			class="topSearch" 
			v-model="keyword"
			@input="inputChange"
			v-bind:buttonConfig="buttonConfig"
		>
		</topSearch>
		<view>
			<scroll-view scroll-x class="bg-white nav text-center tabNav" :style="classObj.topNavTop">
				<view class="cu-item text-bold" :class="index==TabCur?'text-line cur':''" v-for="(item,index) in footer_nav" :key="index" @tap="tabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>		
			<swiper :duration="duration" class="swiperBox" :current="TabCur" @change="changeSwiper" :style="'height:'+styleDetail.screenHeight+'px;'">
				<swiper-item class="contentItem">
					<join-activity ref="joinActivity"
						v-on:heightChange="heightChange"
						v-on:changLoadingState="changLoadingState"
					>
					</join-activity>
				</swiper-item>
				<swiper-item class="contentItem">
					<postActivity></postActivity>
				</swiper-item>
			</swiper>
		</view>			
	</view>
</template>

<script>
	import postActivity from '../../components/postActivity/index2.vue'
	import joinActivity from '../../components/joinActivity/joinActivity.vue'
	import{getHotActivities} from '../../common/api/activity.js'
	import uniLoadMore from '../../components/uni-load-more.vue'
	import topSearch from '../../components/topSearch.vue'
	export default {
		components:{
			'postActivity':postActivity,
			'joinActivity':joinActivity,
			'uni-load-more':uniLoadMore,
			'topSearch':topSearch
		},
		data() {
			return {
				//搜索
				keyword: "",
				isHidden:true,
				//样式
				styleDetail:this.styleDetail,
				classObj:{
					topNavTop:null,
					containerMarginTop:null
				},
				buttonConfig:0,
				//tabBar
				TabCur: 0,
				scrollLeft: 0,
				duration: 800,
				swiperItemHeight:null,
				marginTop:null,
				footer_nav:null,
				contentTopHeight:null,
				loadingGif:true
			}
		},
		watch:{
			'$store.store.storeUser.state.IsLogin':{
				handler:function(){
					//console.log('登录变化')		
					//console.log(this.$refs.joinActivity)
					this.$refs.joinActivity.loadHotActivity()
				}
			}
			
		},
		onLoad() {
			this.loadingGif = true
			console.log(this.styleDetail)
		},
		mounted(){	
			this.init()
		},
		computed:{
		},
		methods: {
			changLoadingState(){
				this.loadingGif = !this.loadingGif
			},
			onFocus(){
				
			},
			init(){
				this.footer_nav = this.$store.store.storeTabBar.state.footer_nav
				this.classObj.topNavTop = 'top:'+ (parseInt(this.styleDetail.statusBarHeight+this.styleDetail.navHeight))+'px;'
				this.$nextTick(function(){
					let view = uni.createSelectorQuery().select(".tabNav");
					view.boundingClientRect(data => {
						console.log(data)
					   let topHeight = parseInt(data.top)+parseInt(data.height)
					 this.classObj.containerMarginTop = 'margin-top:'+topHeight+'px;'
					}).exec();
				})
			},
			heightChange:function(){
				var that = this
				console.log('获取contentBox')
				let view = uni.createSelectorQuery().select(".contentBox0");
				console.log(view)
				view.fields({
				  size: true,
				  scrollOffset: true
				}, data => {
				  console.log("得到节点信息" + JSON.stringify(data));
				  that.swiperItemHeight = 'height:'+data.height+'px;'
				  console.log(that.swiperItemHeight)
				}).exec();				
			},
			getWidth(select){
				
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			changeSwiper(e){
				console.log(e.detail.current)
				this.TabCur = e.detail.current
			}
		},
		onReady() {
		},
		onPullDownRefresh(){
			if(this.TabCur==0)
				this.$refs.joinActivity.loadHotActivity( uni.stopPullDownRefresh)
		}
	}
</script>

<style>
	.container{
		width:100%;
		padding-bottom: 70upx;
		background: #F8F8F8;
	}
	.content {
		text-align: center;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.text-line{
		color:#FC8902;
	}
	.tabNav{
		position: fixed;
		left: 0;
		z-index: 800;
	}
	.contentItem{
		width:100%;
		height: 100%;
		overflow: scroll;
	}
	.search-keyword{
		z-index: 999;
	}
	.waitGif{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 999;
	}
</style>
