<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topSearch 
			v-bind:styleDetail="styleDetail" 
			class="topSearch" 
			v-model="keyword"
			@input="inputChange"
			v-bind:defalutWord="defalutWord"
			v-bind:buttonConfig="buttonConfig"
		>	
		</topSearch>
		<activityList v-bind:activityListDetail="activityDetail" v-bind:isLoad="isLoad"></activityList>
	</view>
</template>

<script>
	import{ searchActivity} from '../../common/api/activity.js'
	import activityListCom from '../../components/activityDetail/activityList.vue'
	import topSearch from '../../components/topSearch.vue'
	export default {
		components:{
			'activityList':activityListCom,
			'topSearch':topSearch,
		},
		data() {
			return {
				classObj : this.classObj,
				styleDetail:this.styleDetail,
				type:null,
				page:1,
				num:5,
				activityDetail:null,
				marginTop:'margin-top:70px;',
				isLoad:true,
				noData:false,
				//传入的默认参数
				defalutWord:null,
				buttonConfig:1
			};
		},
		computed:{
			topBarDetail(){
				return {
					title:'搜索结果'
				}
			}
		},
		onLoad(options){
			if(!options.keyword||this.$store.store.storeUser.state.IsLogin==false){
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
				console.log(options)
				this.keyword = options.keyword
				this.defalutWord = options.keyword
				/*this.$data.type = options.type
				this.$data.page = 1*/
				var that = this
				that.loadActivityList(this.keyword)
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
			loadActivityList:function(keyword,cb){
				this.isLoad = !this.isLoad
				let para = {
					user_id:this.$store.store.storeUser.state.userInfo.user_id,
					page:this.$data.page,
					content:keyword,
					num:this.$data.num,
					token:this.$store.store.storeUser.state.userInfo.token
				}
				searchActivity(para).then((res)=>{
						var data = res.data.data.data||null
						console.log(data)
						if(data.length>0&&data!=null)
						{
							for(var i = 0;i<data.length;i++)
							{
								console.log(data[i].post)
								data[i].post = this.HELP.imgUrl(data[i].post)
								console.log(data[i].post)
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
