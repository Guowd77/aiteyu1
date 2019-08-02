<template>
	<view class="container">
		<topBar v-bind:topBarDetail="topBarDetail" v-bind:styleDetail = "styleDetail"></topBar>
		<user-profile ref="userProfile"></user-profile>
	</view>
</template>

<script>
	import topBar from '../../components/topBar.vue'
	import userProfile from '../../components/userHome/userHome.vue'
	export default{
		components:{
			'topBar':topBar,
			'userProfile':userProfile
		},
		onPullDownRefresh() {
        console.log('refresh');
        this.$refs.userProfile.loadUser( uni.stopPullDownRefresh)
    },
		data(){
			return {
				topBarDetail:{
					title:'个人中心'
				},
				styleDetail :this.styleDetail
			}
		}
	}
</script>

<style>
	.container{
	}
</style>
