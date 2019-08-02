<template>
	<view class="topSearch bg-white" 
	:style="'width: 100%;'
	+'padding-top:'+styleDetail.statusBarHeight+'px;'
	+'height:'+styleDetail.navHeight + 'px;'
	">
		<view class="cu-bar search bg-white" 
		:style="'min-height:100%;height:'+styleDetail.headAreaHeight+'px;'
			+'margin-top:'+styleDetail.headAreaMarTop+'px;'
			+ 'width:'+styleDetail.headleftBoxW+'px;'">
			<view class="cu-avatar round" v-if="buttonConfig==0" style="background-image:url(https://aiteyu.imumba.com/uploads/20190523/00aa78c6346d3835900e2d00a1748cd5.png)" @click="profile">
				
			</view>
			<view class="" v-if="buttonConfig==1">
				<view class="cu-avatar bg-white">
					<text class="cuIcon-back text-gray" @click.stop="backPage"></text>
				</view>
			</view>			
				<view class="search-form round" :style="!isHidden?'margin-right: 5upx;':''">
					<text class="cuIcon-search"></text>
					<input 
						:adjust-position="false" 
						type="text" 
						:placeholder="defalutWord?defalutWord:defaultKeyword" 
						confirm-type="search"
						@confirm="doSearch(false)" 
						:focus="isFocus" 
						v-model="keyword" 
						@focus="focus" 
						@blur="blur"
					></input>
					<text  class="icon icon-del"  @click.stop="clear" v-if="!isHidden"
						style="padding-right:15upx;"
					>&#xe644;</text>
				
				</view>					
				<view v-if="!isHidden">
					<text class="text-sm" @click="changeHidden">取消</text>
				</view>	
		</view>

		<view class="search-keyword" @touchstart="blur" v-if="!isHidden">
			<scroll-view class="keyword-box"  scroll-y>
				<view class="keyword-block" >
					<view class="keyword-list-header">
						<view class="text-bold text-black">历史搜索</view>
						<view>
							<text @tap="oldDelete" class="cuIcon-delete text-lg"></text>
						</view>
					</view>
					<view class="keyword">
						<view v-for="key in oldKeywordList" @tap="doSearch(key)" :key="key">{{key}}</view>
					</view>
				</view>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view class="text-bold text-black">热门搜索</view>
						<view>
							<text @tap="freshKeyWord" class="cuIcon-refresh"></text>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="key in hotKeywordList" @tap="doSearch(key)" :key="key">{{key}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import{getHotActivities} from '../common/api/activity.js'
	export default{
		props:['styleDetail','topBarDetail','defalutWord','buttonConfig'],
		model: {
			prop: 'checked',
			event: 'change'
		  },
		data(){
			return{
				//样式
				rate:0.71,
				TabCur: 0,
				scrollLeft: 0,
				active: false,
				inputVal: '',
				searchName: '取消',
				isDelShow: false,
				isFocus: false,
				isHidden:true,
				defaultKeyword: '搜索活动',
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false
			}
		},
		mounted(){	
			console.log(this.$props.buttonConfig)
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
			},
			init(){
				//this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();
			},
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			profile(){
				uni.navigateTo({
					url:'/pages/user/index'
				})
			},
			//热门搜索刷新按钮
			freshKeyWord(){
				this.loadHotKeyword()
			},
			doSearch(key) {
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				this.keyword = key;
				this.saveKeyword(key); //保存为历史 
				this.$LinkTo({link:'搜索结果',param:key})
				/*uni.showToast({
					title: key,
					icon: 'none',
					duration: 2000
				});*/
			},
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			},			
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				console.log('加载热门搜索')
				var that =this
				let para = {
					token:that.$store.store.storeUser.state.userInfo.token,
					user_id:that.$store.store.storeUser.state.userInfo.user_id,
					type:0
				}
				getHotActivities(para).then(res=>{
					console.log(res)
					var data = res.data.data
					var tempArr = []
					if(data.length>0){
						for(let i=0;i<data.length;i++){
							tempArr.push(data[i].name)
						}
					}
					that.hotKeywordList = tempArr					
				})
			}, 
			changeHidden(){
				this.isHidden = true
				this.keyword = ''
				//this.rate = 0.77
			},
			focus() {
				this.init()
				this.isHidden = false
				//this.rate = 0.65
			},
			blur(){
				
			},
			clear(){
				//HM修改 收起键盘
				uni.hideKeyboard();
				this.isFocus = false
				this.keyword = ''
				this.active = false
				this.isHidden = false
				//HM修改 清空内容时候触发组件input
				//this.$emit('input', '');
				//this.$emit('search', '');//HM修改 清空内容时候不进行搜索
				
			},
			inputChange(event){
				var keyword = event.detail.value;
				this.$emit('input', keyword);
				if (this.inputVal) {
					this.isDelShow = true;
				}
			},

		},
		mounted(){
		},
		onReady(){
		}
	}
</script>
<style>
.topSearch{
	position: fixed;
	top: 0;
	left: 0;
	color: #a2a2a2;
	background: #fff;
	z-index: 900;
	box-sizing: content-box;
}
.content-box{
	width: 100%;
	display: flex;
	align-items: center;
}
.content-box input{
	background: #F1F2F4;
	font-size: 27upx;
	border-radius: 15upx;
	height: 28px;
	width: 60%;
	padding: 3px 0px;
	text-align: center;
}
.content-box image{
	width: 40upx;
	height: 40upx;
}
@font-face {font-family:"iconfont";src:url('data:application/x-font-woff;charset=utf-8;base64,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');}
.cancleBtn{
	font-size:35upx;
	color: #fff;
}
.icon {
	font-family: iconfont;
	font-size: 32upx;
	font-style: normal;
	color: #999;
}
	.search-keyword {width:100%;background-color:rgb(242,242,242);z-index: 995;}
	.keyword-list-box {height:calc(100vh - 55px);padding-top:5px;border-radius:10px 10px 0 0;background-color:#fff;}
	.keyword-entry-tap {background-color:#eee;}
	.keyword-entry {width:94%;height:40px;margin:0 3%;font-size:15px;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1px #e7e7e7;}
	.keyword-entry image {width:30px;height:30px;}
	.keyword-entry .keyword-text,.keyword-entry .keyword-img {height:40px;display:flex;align-items:center;}
	.keyword-entry .keyword-text {width:90%;}
	.keyword-entry .keyword-img {width:10%;justify-content:center;}
	.keyword-box {height:calc(100vh - 55px);background-color:#fff;}
	.keyword-box .keyword-block {padding:5px 0;}
	.keyword-box .keyword-block .keyword-list-header {width:94%;padding:5px 3%;font-size:13.5px;color:#333;display:flex;justify-content:space-between;}
	.keyword-box .keyword-block .keyword-list-header image {width:20px;height:20px;}
	.keyword-box .keyword-block .keyword {width:94%;padding:3px 3%;display:flex;flex-flow:wrap;justify-content:flex-start;}
	.keyword-box .keyword-block .hide-hot-tis {display:flex;justify-content:center;font-size:14px;color:#6b6b6b;}
	.keyword-box .keyword-block .keyword>view {display:flex;justify-content:center;align-items:center;border-radius:30px;padding:0 10px;margin:5px 10px 5px 0;height:30px;font-size:14px;background-color:rgb(242,242,242);color:#6b6b6b;}
.serach-form2{
	background-color:#f5f5f5;
	line-height:64rpx;
	height:64rpx;
	font-size:24rpx;
	color:var(--black);
	-webkit-box-flex:1;
	-webkit-flex:1;
	-ms-flex:1;
	flex:1;
	display:-webkit-box;
	display:-webkit-flex;
	display:-ms-flexbox;
	display:flex;
	-webkit-box-align:center;
	-webkit-align-items:center;
	-ms-flex-align:center;
	align-items:center;
	margin:0 30rpx;

}
</style>
