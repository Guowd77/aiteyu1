<template>
	<view class="footerWrap flexBox bg-white">
		<view class="shareBtn baomingText " style="width: 20%;">
			<button class="cu-btn block lg bg-white text-xsl" @click="showModal">
				<text class="cuIcon-share text-pri " ></text>
			</button>
		</view>
		<view class="baomingText" style="width: 40%;" >	
			<view class="baomingBtn">		
				<button v-if="moreDetail.activity_state==2" class=" text-pri cu-btn block lg text-bold text-sm bg-white">
					{{moreDetail.leftTime!=undefined?'距离报名结束'+moreDetail.leftTime:'暂无信息'}}
				</button>
			</view>
		</view>
		<view class="baomingText" style="width: 40%;" >	
			<view class="baomingBtn">
				<button v-if="moreDetail.activity_state==1" disabled class="cu-btn block bg-pri lg text-white">
					报名未开始
				</button>
				<button v-if="moreDetail.activity_state==2&&moreDetail.isJoin==false" @click="$emit('baoming')" class="cu-btn block bg-pri lg text-sm text-white">
					立即报名
				</button>
				<button v-if="moreDetail.activity_state==2&&moreDetail.isJoin==true" disabled="true" class="cu-btn block bg-pri lg text-white">
					已报名
				</button>
				<button v-if="moreDetail.activity_state==3" disabled="true" class="cu-btn block bg-pri lg text-white">
					报名已结束
				</button>
				<button v-if="moreDetail.activity_state==4 " class="cu-btn block bg-pri lg text-white">
					活动进行中
				</button>
				<button v-if="moreDetail.activity_state==5 " disabled="true" class="cu-btn block bg-pri lg text-white">
					活动已结束
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['moreDetail'],
		data(){
			return{				
			}
		},
		mounted(){
			console.log(this.$props.moreDetail)
		},
		methods:{
			showModal(){
				//console.log()
				this.$emit('showModal')
			}
		}
	}
</script>

<style>
.footerWrap{
	position: fixed;
	bottom: 0;
	height: 100upx;
	width: 100%;
	border-top:1upx solid #DDD9E0;
}
.flexBox{
	display: flex;
	flex-direction: row;
}
.flexItem{
	width: 33%;
}
.baomingText{
	font-size: 30upx;
	padding: 10upx 10upx;
}
</style>
