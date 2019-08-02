<template>
	<view class="container" :style="classObj.containerMarginTop">
		<topBar 
			v-bind:topBarDetail="topBarDetail" 
			v-bind:styleDetail="styleDetail"
		></topBar>
		<scroll-view
			scroll-y
		>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>		
		</scroll-view>
		<picList v-for="item in picList" v-bind:picListItem="item" v-bind:key="item"></picList>
	</view>
</template>

<script>
	import picList from '../../components/postActivity/picList.vue'
	import topBar from '../../components/topBar.vue'
	export default {
		components:{
			'picList':picList,
			'topBar':topBar
		},
    data() {
			return {
				imgList:[],
				topBarDetail:{
					title:'海报制作'
				},
				styleDetail:this.styleDetail,
				classObj : this.classObj,
				activityid:null,
				picList:[
					{
						title:'学术讲座',
						images:[
							{
								url:'/static/pic.jpg',
								checked:false
							},
							{
								url:'/static/pic.jpg',
								checked:false
							},
							{
								url:'/static/pic.jpg',
								checked:false
							}
						]
					}
				]
			}
		},
		onLoad(options){
		},
		methods:{
			ChooseImage() {
				var that = this
				console.log(uni.getStorageInfoSync('token'))
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
							let data = {
								'token':uni.getStorageSync('token')
							}
							console.log(data)
							//this.imgList = this.imgList.concat(res.tempFilePaths)
								uni.uploadFile({
									url: ' https://aiteyu.imumba.com/index.php/addons/aitefish/common/upload', //仅为示例，非真实的接口地址
									filePath: res.tempFilePaths[0],
									name: 'files',
									formData: data,
									success: (uploadFileRes) => {
										let data = JSON.parse(uploadFileRes.data)
										console.log(data)
										if(data.msg=='上传成功'){
											uni.setStorageSync('tempUrl',that.HELP.imgUrl(data.data.url))
											 uni.showToast({
												title: '上传成功',
												duration: 2000,
												success:function(){
												  setTimeout(function () {
													//要延时执行的代码
													uni.navigateBack({
														delta:1
													})
												  }, 2000) //延迟时间
												}
											  })

										}
									}
								});
						if (this.imgList.length != 0) {
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '是否确定删除？',
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		}
  }
</script>

<style>
	.container{
		width: 100%;
	}
</style>
