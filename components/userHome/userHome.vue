<template>
	<view class="userHome">
		<view class=" radius bg-gradual-orange">
			<view class="head radius margin-top">
				<image :src="login ? userInfo.avatar :require('../../static/logo.png')" mode="" class="userImage cu-avatar xl round"></image>
				<view class="userName text-lg padding">
					<text class="text-white ">{{login ? userInfo.nickname :'您未登陆'}}</text>
				</view>
			</view>
			<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="response" style="height:100upx;mix-blend-mode:screen; margin-bottom: -6upx;"></image>
		</view>
		<view class="flex bg-white">
			<view class="flex-sub  padding-sm margin-xs radius">
				<text class="myCircle lg text-orange text-sl cuIcon-favorfill"></text>
				<text class="text-df padding" style="margin-left: 10upx;" @tap="toMyGroup">我的圈子</text>
			</view>
			<view class="flex-sub  padding-sm margin-xs radius" :class="size?'solids-left':'solid-left'">
				<text class="myCircle lg text-orange text-sl cuIcon-notificationfill"></text>
				<text class="text-df padding" style="margin-left: 10upx;"  @tap="toMessages">我的通知</text>
			</view>
		</view>
		<!-- <view class="circle">
				<view class="userName  text-df">
					<text class="text-black text-bold">我的圈子：</text>
				</view>
				<view class="padding circleImage">
					<view class="cu-avatar-group">
						<view class="cu-avatar round " 
						v-if="(index<(Object.getOwnPropertyNames(myGroup).length-1))&&(index<3)"
						v-for="(itemGroup,index) in myGroup" :key="index" :style="[{ backgroundImage:'url(' + itemGroup.group.logoimage + ')' }]"></view>
					</view>
				</view>
			</view>
			<navigator url="../user/messages"><image class="messages" src="../../static/message.png"></image></navigator> -->
		<view class="mainWrap">
		<!-- <view style="width: 92%;margin: 0 auto;">
			<activityList2 v-for="(item,index) in activityListDetail1" v-bind:activityListDetail="item"
				v-if="index!=0"
				:key="index"
			></activityList2>
		</view> -->
		<activityList2  v-bind:activityListDetail="activityListDetail1"
		></activityList2>
		<activityList3  v-bind:activityListDetail="activityListDetail2"
		></activityList3>
		</view>
<!-- 		<h2 class="footText">——END——</h2> -->
	</view>
</template>

<script>
	import topBar from '../../components/topBar.vue'
	import {getAllAppliers} from '../../common/api/activity.js'
	import {getAllPubAct} from '../../common/api/activity.js'
	import {getAllJoinedAct} from '../../common/api/activity.js'
	import {getMyGroup} from '../../common/api/login.js'
	import {getMyUserinfo} from '../../common/api/login.js'
	import activityList2 from './activityList2.vue'
	import activityList3 from './activityList3.vue'
	export default {
		components:{
			'activityList2':activityList2,
			'activityList3':activityList3
		},
		data(){
			return {
				userId:null,
				login:0,
				userInfo:null,
				activityListDetail1:{
					rootNavigation:'/pages/activityDetail/showOneActivity',
					title:'我报名的',
					numlimt:10,
					fresh:true,
					more:false,
					list:[
						{
							id:3,
							image:'/static/pic.jpg',
							type:'精英学者沙龙',
							title:'让学术检索变得简单',
							time:'2019/01/21 13:00',
							loc:'图书馆百草堂',
							club:'IEEE分会',
							people:{
								count:130,
								users:[
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									}
								]
							}
						},
						{
							image:'/static/pic.jpg',
							type:'精英学者沙龙',
							title:'让学术检索变得简单',
							time:'2019/01/21 13:00',
							loc:'图书馆百草堂',
							club:'IEEE分会',
							people:{
								count:130,
								users:[
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									}
								]
							}
						}
					]
				},
				activityListDetail2:{
					rootNavigation:'/pages/activityDetail/showOneActivity',
					title:'我发布的',
					numlimt:10,
					type:1,
					fresh:false,
					more:true,
					list:[
						{
							id:3,
							image:'/static/pic.jpg',
							type:'精英学者沙龙',
							title:'让学术检索变得简单',
							time:'2019/01/21 13:00',
							loc:'图书馆百草堂',
							club:'IEEE分会',
							people:{
								count:130,
								users:[
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									}
								]
							}
						},
						{
							image:'/static/pic.jpg',
							type:'精英学者沙龙',
							title:'让学术检索变得简单',
							time:'2019/01/21 13:00',
							loc:'图书馆百草堂',
							club:'IEEE分会',
							people:{
								count:130,
								users:[
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									},
									{
										image:'/static/pic.jpg'
									}
								]
							}
						}
					]
				},
				myGroup:{
/* 					[
						{
							logoimage:'../../static/logo.png'
						},
						{
							logoimage:'../../static/logo.png'
						},
												{
							logoimage:'../../static/logo.png'
						},
					] */
				}
			}
		},
		mounted(){
			console.log('加载')			
			this.loadUser()	
		},
		methods:{
			loadUser:function(){
				let para = {
					token:this.$store.store.storeUser.state.userInfo.token
				}
				
				getMyUserinfo(para).then((res)=>{
					this.$data.login=1
					this.$data.userInfo=res.data.data
					console.log(res.data.data)
					let para = {
						token:this.$store.store.storeUser.state.userInfo.token
					}
					let userIdRe = {
						user_id:res.data.data.id
					}
					let paraSecond={
						token:this.$store.store.storeUser.state.userInfo.token,
						user_id:res.data.data.id
					}
					let paraThird={
						token:this.$store.store.storeUser.state.userInfo.token,
						user_id:res.data.data.id,
						identity:0
					}
					getAllJoinedAct(paraSecond).then((resActiv)=>{
						console.log(resActiv.data.data)
						var that = this
						var dataRelay = resActiv.data.data
						var data = new Object()
						var dataFinal=new Object()
						var dataFinal2=new Object()
						var dataFinal3=new Array()
						for(var i = 0;i<dataRelay.length;i++)
						{
							data[i] = dataRelay[i]
							data[i].publishactivity.post = this.HELP.imgUrl(data[i].publishactivity.post)
						}
						for(var j=0 ; j<dataRelay.length ; j++){
							let paraFour={
								token:this.$store.store.storeUser.state.userInfo.token,
								activity_id:data[j].activity_id,
							}
							let dataFinalRelay = data[j]
							dataFinal[j] =  getAllAppliers(paraFour).then((resAppliers)=>{
								var dataRelayAppliers = {
									people :resAppliers.data.data
								}
								dataFinal={
									...dataFinalRelay,
									...dataRelayAppliers
								}
								return(dataFinal)
								
							})
						}
						console.log(Object.getOwnPropertyNames(dataFinal).length)
						for(var i = 0; i<Object.getOwnPropertyNames(dataFinal).length ; i++)
						{
							dataFinal[i].then((result)=>{
								dataFinal2 = result
								dataFinal3.push(dataFinal2)
								return (dataFinal3)
							})
						}
						console.log(dataFinal3)
						that.activityListDetail1.list = dataFinal3
					})
					
					
					
					getAllPubAct(paraThird).then((resActiv)=>{
						console.log(resActiv.data.data)
						var that = this
						var dataRelay = resActiv.data.data
						var data = new Object()
						var dataFinal=new Object()
						var dataFinal2=new Object()
						var dataFinal3=new Array()
						for(var i = 0;i<dataRelay.length;i++)
						{
							data[i] = dataRelay[i]
							data[i].post = this.HELP.imgUrl(data[i].post)
						}
						for(var j=0 ; j<dataRelay.length ; j++){
							let paraFour={
								token:this.$store.store.storeUser.state.userInfo.token,
								activity_id:data[j].id,
							}
							let dataFinalRelay = data[j]
							dataFinal[j] =  getAllAppliers(paraFour).then((resAppliers)=>{
								var dataRelayAppliers = {
									people :resAppliers.data.data
								}
								dataFinal={
									...dataFinalRelay,
									...dataRelayAppliers
								}
								return(dataFinal)
								
							})
						}
						console.log(Object.getOwnPropertyNames(dataFinal).length)
						for(var i = 0; i<Object.getOwnPropertyNames(dataFinal).length ; i++)
						{
							dataFinal[i].then((result)=>{
								dataFinal2 = result
								dataFinal3.push(dataFinal2)
								return (dataFinal3)
							})
						}
						console.log(dataFinal3)
						that.activityListDetail2.list = dataFinal3
					})
					
					
					
					/* getAllPubAct(paraThird).then((resActiv)=>{
						var that =this
						var dataRelay = resActiv.data.data
						var data = new Array()
						var dataFinal=new Object()
						var dataFinal2=new Object()
						var dataFinal3=new Array()
						for(var i = 0;i<dataRelay.length;i++)
						{
							data[i] = dataRelay[i]
							console.log(data[i])
							data[i].post = this.HELP.imgUrl(data[i].post)
						}
						for(var j=0 ; j<dataRelay.length ; j++){
							let paraFour={
								token:this.$store.store.storeUser.state.userInfo.token,
								activity_id:data[j].id,
							}
							
							let dataFinalRelay = data[j]
							dataFinal[j] =  getAllAppliers(paraFour).then((resAppliers)=>{
								var dataRelayAppliers = {
									people :resAppliers.data.data
								}
								dataFinal={
									...dataFinalRelay,
									...dataRelayAppliers
								}
								console.log(dataFinal)
								return(dataFinal)
							})
						}
						console.log(Object.getOwnPropertyNames(dataFinal).length)
						for(var i = 0; i<Object.getOwnPropertyNames(dataFinal).length ; i++)
						{
							dataFinal[i].then((result)=>{
								dataFinal2 = result
								dataFinal3.push(dataFinal2)
								return (dataFinal3)
							})
						}
						
						console.log(dataFinal3)
						that.activityListDetail2.list = data
					}) */
					getMyGroup(para).then((resMyGroup)=>{
						var dataGroup = new Object
						dataGroup= resMyGroup.data.data
						var GroupLength = Object.getOwnPropertyNames(resMyGroup.data.data).length
						for(var i = 0;i<GroupLength-1;i++)
						{
							dataGroup[i].group.logoimage= this.HELP.imgUrl(dataGroup[i].group.logoimage)
						}
						console.log(dataGroup)
						this.$data.myGroup = dataGroup
					
					})
					
				})
			},
			toMyGroup:function(){
				uni.navigateTo({
					url: '../../pages/user/joined/joined',
					});
			},
			toMessages:function(){
				uni.navigateTo({
					url: '../../pages/user/messages',
					});
			}
		}
	}
	
</script>

<style>
	.userHome{
		margin-top:100upx

	}
	.head{
		width: 89.3%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.userImage{
		flex: 1;
		margin-top: 100upx;

	}
	.userName{
	}

	.myCircle{
		padding-left: 20%;
	}
	.circleImage{

	}
	.messages{
	}
	.mainWrap{
		width:90%;
		margin: 0 auto;
	}
	.footText{
		display: flex;
		justify-content: center;
		height: 40upx;
		font-size: 35upx;
	}
	.itemFooter{
		position: relative;
		top: -55upx;
		left: 53%;
	}
	.itemFooter image{
		width: 50upx;
		height: 50upx;
		margin: 10upx 10upx;
		border-radius: 25upx;
	}
/* 	.itemFooter text{
		display: inline-block;
		width: 70upx;
		height: 70upx;
		margin: 10upx 10upx;
		position: absolute;
		border-radius: 50upx;
		background: #c9c3c3;
		color: #fff;
		font-size: 25upx;
		text-align: center;
		line-height: 50upx;
	} */
	
</style>
