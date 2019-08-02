<template>
	<view class="">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<view class=" radius shadow-warp bg-white margin-top padding" style="margin-top: 120upx;">
			<view class="cu-form-group ">
				<view class="title">选择收信人:</view>
				<radio-group class="block" @change="RadioChange">
					<view class="cu-form-group" style="border: none;">
						<view class="title text-df"><text class="text-sm">所有报名者</text></view>
						<radio class='orange' style="transform:scale(0.6)" :class="radio==0?'checked':''" :checked="radio==0?true:false" value=0></radio>
					</view>
					<view class="cu-form-group" style="border: none;">
						<view class="title text-df"><text class="text-sm">通过审核的报名者</text></view>
						<radio class='orange' style="transform:scale(0.6)" :class="radio==1?'checked':''" :checked="radio==1?true:false" value=1></radio>
					</view>
				
				</radio-group>
				<!-- <picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'点击选择'}}
					</view>
				</picker> -->
			</view>
			<view class="activityBox_list">
				<view class="activityBox_listItem ">
					<view class="cu-form-group padding" :class="size?'solids':'solid'">
						<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="输入通知文本"></textarea>
					</view>	
					<view class="itemFooter">
						<button @tap="sentMess()">发送</button>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import {createMess} from '../../../common/api/activity.js'
	import topBar from '../../../components/topBar.vue'
	export default {
		components:{
			'uniPopup' :uniPopup,
			'topBar':topBar
		},
		data() {
			return {
				radio: 0,
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
				topBarDetail:{
					title:'活动详情'
				},
				styleDetail:this.styleDetail,
				picker: ['所有报名者','通过审核的报名者'],
				activityDetail:null,
				messText:null,
				receivers:null,
				index:-1
			}
		},
		onLoad(options) {
			console.log(options)
			this.$data.activityDetail = options
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
				console.log(this.radio)
				this.$data.receivers = e.detail.value
			},
			PickerChange:function(e) {
				this.index = e.detail.value
				this.$data.receivers = e.detail.value
			},
			textareaAInput:function(e){
				this.$data.messText=e.target.value
			},
			sentMess:function(){
				let para={
					token:this.$store.store.storeUser.state.userInfo.token,
					identity:this.$data.activityDetail.identity,
					content:this.$data.messText,
					activity_id:this.$data.activityDetail.activityid,
					user_id:this.$store.store.storeUser.state.userInfo.user_id,
					receivers:this.$data.receivers
					
				}
				console.log(para)
				createMess(para).then(res=>{
					let data = res.data
					if(data.code==1&&data.msg=='添加通知成功'){
						uni.showToast({
							icon:"success",
							title: '发送通知成功',
							duration: 2000,
						})
					}
					else{
						uni.showToast({
							icon:"success",
							title: '报名失败',
							duration: 2000
						});
					}
					setTimeout(function(){
						uni.navigateBack({
							delta:1
						})									
					},1000)
					
				})
			}
		}
	}
</script>

<style>
	.activityBox{
		width: 100%;
		background: #fff;
		margin: 10px 0;
		border-radius: 5px;
		box-shadow: 10px;
	}
	.borderBottomLine{
		border-bottom: 1px solid #E6E6E6;
	}
	.activityBox_title{
		padding: 20upx 10upx 20upx 20upx;
		margin: 0 5px;
		font-size: 28upx;
		font-weight: 600;
		color:#3e3e3e;
		border-bottom: 1px solid #E6E6E6;
	}
	.activityBox_title button{
		display: inline-block;
		height: 100%;
		font-size: 26upx;
		margin-top:10upx;
		line-height: 100%;
		background: #fff;
		border: none;
		float: right;
	}
	.activityBox_title button image{
		width: 30upx;
		height: 30upx;
		padding-right: 10upx;
	}
	.activityBox_title button::after{
		border: none;
	}
	.activityBox_listItem{
		padding-top: 30upx;
		width:95%;
		overflow: hidden;
		padding-bottom: 30upx;
	}
	.flexbox{
		display: flex;
		flex-direction: row;
	}
	.flexItem{
		width: 50%;
	}
	.itemImage{
		position: relative;
		margin:0 15upx ;
	}
	.itemImage image{
		width: 100%;
		height: 200upx;
		border-radius: 25upx;
	}
	.itemImage .club{
		position: absolute;
		right: 0;
		bottom: 3%;
		background: #000000;
		color: #FFFFFF;
		font-size: 30upx;
		padding:7upx 10upx;
		border-radius: 5upx;
		opacity:0.7;
		font-size: 25upx;
		border-radius: 15upx 0 25upx 0;
	}
	.itemContent{
		padding:0 15upx;
	}
	.itemTitle{
		font-size: 30upx;
		font-weight: 900;
	}
	.itemTime{
		font-size: 25upx;
		color:#3E3E3E;
		padding:11upx 0 0 0;
	}
	.itemFooter button{
		
	}
	.itemFooter image{
		width: 50upx;
		height: 50upx;
		margin: 10upx 10upx;
		border-radius: 50upx;
	}
	.itemFooter .baoming{
		display: inline-block;
		width: 50upx;
		height: 50upx;
		margin: 10upx 10upx;
		position: absolute;
		border-radius: 50upx;
		background: #c9c3c3;
		color: #fff;
		font-size: 25upx;
		text-align: center;
		line-height: 50upx;
	}
	.itemFooter .yibaoming{
		display: inline-block;
		height: 50upx;
		
		position: absolute;
		color: #8E8E8E;
		font-size: 25upx;
		text-align: center;
		line-height: 50upx;
	}
	.itemFooter button{
		display: inline-block;
		float: right;
		height: 50upx;
		background: #FC8902;
		font-size: 25upx;
		text-align: center;
		line-height: 50upx;
		color: #fff;
	}
	.itemFooter button::after{
		border: none;
	}
	.listIcon{
		width:25upx;
		height: 25upx;
		padding-right:10upx;
		padding-top: 10upx;
	}
</style>
