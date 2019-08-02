<template>
	<view class="container" :style="marginTop">
		<HMsearch></HMsearch>
	</view>
</template>

<script>
	import HMsearch from '../../components/HM-search.vue'
	export default {
		components:{
			'HMsearch':HMsearch
		},
		data() {
			return {
				marginTop:'margin-top:'+uni.getSystemInfoSync().statusBarHeight+'px;'
			}
		},
		computed:{
		
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.container{
	}

</style>
