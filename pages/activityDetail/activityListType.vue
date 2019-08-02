<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<activityList v-bind:activityListDetail="activityDetail" v-bind:isLoad="isLoad"></activityList>
	</view>
</template>

<script>
	import{ getAllActivities} from '../../common/api/activity.js'
	import activityListCom from '../../components/activityDetail/activityList.vue'
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'activityList':activityListCom,
			'topBar':topBar
		},
		data() {
			return {
				styleDetail:this.styleDetail,
				classObj : this.classObj,
				type:null,
				page:1,
				num:5,
				activityDetail:null,
				marginTop:'margin-top:70px;',
				isLoad:true,
				noData:false
			};
		},
		computed:{
			topBarDetail(){
				return {
					title:this.HELP.typeToText(this.type)
				}
			}
		},
		onLoad(options){
			if(!options.type||this.$store.store.storeUser.state.IsLogin==false){
				uni.showToast({
					title: '加载错误',
					mask: false,
					duration: 1000,
					complete:function(){
						uni.navigateBack({
							delta: 1
						});
					}
				});
			}
			else{
				this.$data.type = options.type
				this.$data.page = 1
				var that = this
				that.loadActivityList(options.type)
			}
			
		},
		onPullDownRefresh(){	
		},
		onReachBottom(){
			console.log('触发')
			//var that = this
			if(this.noData==false)
				this.loadActivityList(this.$data.type)	
		},
		methods:{
			loadActivityList:function(type,cb){
				this.isLoad = !this.isLoad
				let para = {
					user_id:this.$store.store.storeUser.state.userInfo.user_id,
					page:this.$data.page,
					type:type,
					num:this.$data.num,
					token:this.$store.store.storeUser.state.userInfo.token
				}
				getAllActivities(para).then((res)=>{
						var data = res.data.data.data
						if(data.length>0)
						{
							
							for(var i = 0;i<data.length;i++)
							{

								//console.log(data[i].post)
								data[i].post = this.HELP.imgUrl(data[i].post)
								//console.log(data[i].post)
							}
							console.log(data)
							this.$data.activityDetail = this.$data.page >1 ?this.$data.activityDetail.concat(data):data
							this.$data.page++;							
						}
						else{
							this.noData = true
						}
						this.isLoad = !this.isLoad
						typeof cb == 'function' && cb();
					}
					
				)
				
			}
		}
	}
</script>

<style>
.container{
	width: 100%;
}
</style>
