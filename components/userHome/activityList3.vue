<template>
	<view class="activityBox radius shadow-warp bg-white margin-top">
		<view class="activityBox_title">
			{{activityListDetail.title}}
			<button 
					v-on:click="hiden"	
					class=" text-gray"
				>
					{{!hidenNumber?hidenText1:hidenText2}}
					<text v-if="hidenNumber" class="lg text-gray cuIcon-unfold"></text>
					<text v-if="!hidenNumber" class="lg text-gray cuIcon-fold"></text>
				</button>
		</view>
		<view class="activityBox_list" v-if="activityListDetail.list.length>0 &&!hidenNumber ">
			<view class="activityBox_listItem borderBottomLine" v-if="index<activityListDetail.numlimt" v-for="(item,index) in activityListDetail.list" v-key="item.id">
				<navigator :url="'/pages/user/showOneActivity'+'?activityid='+item.id+'&isjoin='+is_joined" >
					<view class="flexbox">
						<view class="itemImage flexItem">
							<image :src="item.post" :onerror="errorImg01"></image>
						</view>
						<view class="itemContent flexItem">
							<view class="itemTitle text-cut">{{item.name}}</view>
							<view class="itemTime"><image class="listIcon" src="/static/nav2/time.png"></image>{{item.starttime_text}}</view>
							<view class="itemTime"><image class="listIcon" src="/static/nav2/loc.png"></image>{{item.address}}</view>
						</view>
					</view>
				</navigator>
				<view class="itemFooter">
					<view class="cu-avatar-group">
						<view class="cu-avatar round sm" v-for="(itemPeople,index) in item.people" :key="index" :style="[{ backgroundImage:'url(' + itemPeople.avatar + ')' }]"></view>
					</view>
					<text class="yibaoming" v-if="item.people!=null">{{item.people.length}}人已报名</text>
					<text class="yibaoming" v-if="item.people==null">暂无报名信息</text>
					<button v-if="item.activity_state==5" >活动结束</button>
					<button v-if="item.activity_state==1" >报名未开始</button>
					<button v-if="item.activity_state==2" >正在报名</button>
					<button v-if="item.activity_state==3" >报名结束</button>
					<button v-if="item.activity_state==4" >活动进行</button>
				</view>
			</view>
		</view>
		<uni-load-more status="noMore" v-else></uni-load-more>
	</view>
</template>

<script>
	export default {
		props:['activityListDetail'],
		data(){
			return{			
				is_joined:2,
				hidenNumber:0,
				hidenText1:'收起',
				hidenText2:'展开',
			}
			},
		methods:{
			hiden:function(){
				this.hidenNumber=!this.hidenNumber;
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
