<template>
	<view class="footerWrap flexBox bg-white">
		<view class="shareBtn baomingText " style="width: 20%;">
			<button class="cu-btn block lg bg-white text-xsl" @click="showModal">
				<text class="cuIcon-share text-pri " ></text>
			</button>
		</view>
		<view class="baomingText" style="width: 40%;" >	
			<view class="baomingBtn">
				<button  v-if="moreDetail.posterPeopleId!==user_id&&moreDetail.pass==1"  @click="$emit('baoming')" class=" text-pri cu-btn block line-orange lg text-bold text-sm">
					修改报名信息
				</button>
				<button v-if="moreDetail.posterPeopleId==user_id"  @click="$emit('getExcel')"  class="text-pri cu-btn block line-orange lg text-bold text-sm">
					导出报名信息
				</button>
			</view>
		</view>
		<view class="baomingText" style="width: 40%;" >	
			<view class="baomingBtn">
				<button v-if="moreDetail.posterPeopleId!=user_id&&moreDetail.pass==1" @click="$emit('cancelBaoming')" class="text-pri cu-btn block line-orange lg text-bold text-sm">
					取消报名
				</button>
				<button v-if="moreDetail.pass==null&&moreDetail.posterPeopleId!=user_id"  class="text-pri cu-btn block line-orange lg text-bold text-sm">
					正在审核
				</button>
				<button v-if="moreDetail.pass==0&&moreDetail.posterPeopleId!=user_id"  class="text-pri cu-btn block line-orange lg text-bold text-sm">
					报名失败
				</button>
				<button v-if="moreDetail.posterPeopleId==user_id"  @click="$emit('createMess')" class="text-pri cu-btn block line-orange lg text-bold text-sm">
					发送通知
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{
			'uniPopup' :uniPopup,
		},
		props:['moreDetail'],
		data(){
			return{	
				user_id:null,
				
			}
		},
		mounted(){
			console.log(this.moreDetail)
			this.$data.user_id=this.$store.store.storeUser.state.userInfo.user_id
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
