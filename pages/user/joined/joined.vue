<template>
	<view class="">
		<view class="container">
			<topBar v-bind:topBarDetail="topBarDetail" v-bind:styleDetail = "styleDetail"></topBar>
			<user-profile></user-profile>
		</view>
		<view class="myGroup padding">
			<view class="flex flex-wrap radius shadow-warp bg-white" style="margin-top: 20upx;">
				<view class="basis-xl margin-xs padding-sm radius justify-center" v-for="(item,index) in myGroup">
					<image :src="item.group.logoimage" mode="" class="userImage cu-avatar lg round"></image>
					<text class="text-lg padding text-black">{{'——'+item.group.name}}</text>
				</view>
				<image src="../../../static/yu.png" mode="" style="width: 60%; height:248upx;margin: 20upx auto;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {getMyGroup} from '../../../common/api/login.js'
	import topBar from '../../../components/topBar.vue'
	export default {
		components:{
			'topBar':topBar,
		},
		data() {
			return {
				myGroup:null,
				topBarDetail:{
					title:'我的圈子'
				},
				styleDetail :this.styleDetail
				
			}
		},
		onLoad() {
			this.getInfo()
		},
		methods:{
			getInfo:function(){
				let para = {
					token:this.$store.store.storeUser.state.userInfo.token
				}
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
			}
		}
	}
</script>

<style>
	.myGroup{
		margin-top:100upx ;
	}
</style>
