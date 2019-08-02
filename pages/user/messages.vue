<template>
	<view class="">
		<view class="container">
			<topBar v-bind:topBarDetail="topBarDetail" v-bind:styleDetail = "styleDetail"></topBar>
		</view>
		<view class="padding" style="margin-top: 100upx;">
			<view class="flex flex-wrap radius shadow-warp bg-white justify-center" style="margin-top: 20upx;">
				<view class="flex flex-wrap basis-xl padding-sm radius justify-center" :class="size?'solids-bottom':'solid-bottom'" style="flex-direction: row;align-items: center; width: 80%;" v-for="(item,index) in messages.list">
					<view class="basis-xs" style="">
						<image :src="item.avatar" mode="" class=" userImage cu-avatar lg round"></image>
						<view class="" style="margin-top: 5upx;margin-left: 10upx;">
							<text>{{item.nickname}}</text>
						</view>
					</view>
					<view class="basis-xl" style="">
						<text class="padding text-black">{{item.content}}</text>
					</view>
					<view class=" basis-xl flex justify-center" style=""><text class="text-sm text-gray">{{'——'+item.createtime+'——'}}</text> </view>

				</view>
				<image src="../../static/yu.png" mode="" style="width: 60%; height:248upx ;margin: 20upx auto;"></image>
			</view>
		</view>
	</view>
	<!-- <view class="flex flex-wrap radius shadow-warp bg-white"> 
		<view class="" v-for="(item,index) in messages.list"  v-key="item.id">
			<image :src="item.clubImage" class=""></image>
			<view class="">
				{{item.sent_group_id}}
			</view>
			<view class=""> <text class="">{{item.content}}</text> </view>
			<view class="">{{'——'+item.createtime+'——'}}</view>
		</view>
	</view> -->
</template>

<script>
	import {toDate} from '../../common/utils/utils.js'
	import {getGroupById} from '../../common/api/activity.js'
	import topBar from '../../components/topBar.vue'
	import {getNotifi} from '../../common/api/activity.js'
	export default {
		components:{
			'topBar':topBar,
		},
		data() {
			return {
				topBarDetail:{
					title:'我的通知'
				},
				styleDetail :this.styleDetail,
				storage:null,
				userId:null,
				messages:{
					list:[
					]
					}
			}
		},
		onLoad() {
			this.getMessage()
		},
		methods: {
			getStor:function(storage){
				var para = {
					key : 'userInfo'
				}
				storage = uni.getStorage(para)
				console.log(storage)
				return(storage)
			},
			getMessage:function(){
				var storageRelay = new Object
				let stroage= this.getStor(storageRelay)
				stroage.then((result)=>{
					console.log(result[1])
					storageRelay.userId = result[1].data.id
					console.log(storageRelay)
					let para = {
						user_id:storageRelay.userId,
						token:this.$store.store.storeUser.state.userInfo.token
					}
					console.log(para)
					var that=this
					getNotifi(para).then((res)=>{
						console.log(res.data.data)
						var dataRelay = new Array
						dataRelay = res.data.data
						for (var i=0;i<dataRelay.length;i++){
/* 						  var dateText=new Date(parseInt(dataRelay[i].createtime) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
						  console.log(dateText)
						  dataRelay[i].createtime=dateText */
						  dataRelay[i].createtime=toDate(dataRelay[i].createtime);
						  console.log(dataRelay[i].createtime)
						  dataRelay[i].avatar = this.HELP.imgUrl(dataRelay[i].avatar)
						  
						}
						that.$data.messages.list = dataRelay
						console.log(dataRelay)
						})
				})
				
					/* for (var i=0;i<dataRelay.length;i++){
						if(dataRelay[i].sent_group_id!=null){
							let para2={
								token:this.$store.store.storeUser.state.userInfo.token,
								group_id:dataRelay[i].sent_group_id
							}
							imageRelay = getGroupById(para2).then((res)=>{
								console.log(res.data.data.logoimage)
								res.data.data.logoimage = 'https://aiteyu.imumba.com'+res.data.data.logoimage
								return (res.data.data.logoimage)
							})
							imageRelay2 = imageRelay.then((res)=>{
								return res
							})
							console.log(imageRelay2)
							}
						else{
							
						}
					} */
					
					
				
				
			}
		}
	}
</script>

<style>
	
	/* .messagesInfo{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.messagesItem{
		height: 250upx;
		border-bottom: 1 soild #8F8F94;
	}
	.clubImage{
		margin: 10upx 6%;
		height: 100upx;
		width: 100upx;
		position: relative;
		top: 30upx;
	}
	.clubName{
		font-size: 35upx;
		margin-left: 4%;
		margin-top: 10upx;

	}
	.messagesText{
		width: 73%;
		height: 150upx;
		position: relative;
		top: -140upx;
		left: 26%;
		font-size: 35upx;
	}
	.messagesTime{
		position: relative;
		top: -120upx;
		padding-left: 38%;
		font-size: 35upx;
		border-bottom:  #C9D1DE solid;
		color: #C9D1DE;
	} */
</style>
