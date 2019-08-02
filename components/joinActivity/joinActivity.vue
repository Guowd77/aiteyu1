<template>
	<view class="mainWrap" id="mainWrap">
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'"  :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#FC8902">
			<swiper-item v-for="(item,index) in activityListDetail[0].list" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<navigator 
						:url="activityListDetail[0].rootNavigation+'?activityid='+item.id"
						style="width:100%;height:100%;"
					>
						<image :src="item.post.src" mode="aspectFill" v-if="item.post.type=='image'"></image>
					</navigator>
				</view>
			</swiper-item>
		</swiper>
		<view style="width: 92%;margin: 0 auto;">
			<activityList v-for="(item,index) in activityListDetail" v-bind:activityListDetail="item"
				v-on:lookMoreBtn="lookMoreBtn"
				v-if="index!=0"
				:key="index"
			></activityList>
		</view>
	</view>
</template>

<script>
	import{getHotActivities} from '../../common/api/activity.js'
	import activityList from './activityList.vue'
	export default {
		components:{
			'activityList':activityList
		},
		data(){
			return {
				errorImg01: 'this.src="' + require('../../static/pic.jpg') + '"',
				activityListDetail:[
					{
						title:'为你推荐',
						numlimt:3,
						rootNavigation:'/pages/activityDetail/showOneActivity',
						fresh:true,
						more:false,
						list:null				
					},
					{
						title:'学术讲座',
						numlimt:3,
						type:1,
						rootNavigation:'/pages/activityDetail/showOneActivity',
						fresh:false,
						more:true,
						list:null				
					},
					{
						title:'科技竞赛',
						numlimt:3,
						type:2,
						rootNavigation:'/pages/activityDetail/showOneActivity',
						fresh:false,
						more:true,
						list:null				
					},
					{
						title:'演出抢票',
						numlimt:3,
						type:3,
						rootNavigation:'/pages/activityDetail/showOneActivity',
						fresh:false,
						more:true,
						list:null				
					},
					{
						title:'生活约玩',
						numlimt:3,
						type:4,
						rootNavigation:'/pages/activityDetail/showOneActivity',
						fresh:false,
						more:true,
						list:null				
					}
				],
				cardCur: 0,
				dotStyle: false,
				towerStart: 0,
				direction: '',
				loadAllData:false,
				promiseArray:[],
				activityDetail0List:null,
				isLoading:true
			}
		},
		mounted(){
			//console.log('加载')		
			if(this.$store.store.storeUser.state.IsLogin==true){
				this.loadHotActivity()
			}
				
		},
		watch:{
			isLoading:{
				handler:function(){
					this.$emit('changLoadingState')
				}
			}
		},
		onReady() {		
			//console.log('onReady')
		},
		methods:{
			showOneActivity(e){
				console.log(e)
			},
			loadHotActivity:function(cb){
				if(!this.$store.store.storeUser.state.IsLogin)
				{
					return
				}
				var that = this
				var promiserArr = []
				for(let i = 0; i <= 4; i++){
					//console.log(i)
					var para = {
						token:that.$store.store.storeUser.state.userInfo.token,
						user_id:that.$store.store.storeUser.state.userInfo.user_id,
						type:i==0?undefined:i
					}
					//console.log(para)
					let p1 = getHotActivities(para)
					promiserArr.push(p1)
										
				}				
				//console.log(promiserArr)
				var that = this
				Promise.all(promiserArr).then(res=>{
					//console.log('结束')
					//console.log(res)
					for(let i = 0;i<res.length;i++){					
						let data = res[i].data.data
						if(data!=null&&data.length>0){
							for(let j = 0;j<data.length;j++){
								data[j].post = that.HELP.imgUrl(data[j].post)
								if(i==0){
									data[j].post = {
										id:j,
										type:'image',
										src:data[j].post
									}
									//console.log(data[j].post)
								}
							}							
						}
						that.activityListDetail[i].list = data						
					}
					//console.log(that.activityListDetail)
					//console.log('数据加载完成')
					
					that.isLoading = false
					typeof cb=='function'&&cb()
					//console.log(that.isLoading)
				})
			},
			refreshBtn:function(){
				this.loadHotActivity()
			},
			lookMoreBtn:function(type){
				console.log(type)
				this.$LinkTo({link:"分类活动列表页",param:type})
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			}
		}
	}
</script>

<style>
.mainWrap{
	width:100%;
	margin: 0 auto;
}
</style>
