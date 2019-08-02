<script>
	import { baseURL,requestURL } from '@/common/utils/config'
	export default {
		data () {
			return {
			}
		},
		onLaunch: function () {
			//console.log(this)	
			this.checkAuth()
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		//请求函数封装 不需要再添加token
		methods:{
			checkAuth:function(cb){
				console.log(this)
				var that = this;
				//console.log(this.$store)
				uni.getProvider({
					service: 'oauth',
					success: function (res) {
						console.log(res.provider[0])
						if(res.provider.length>=1 && res.provider[0]!=null)
							that.$store.store.storeUser.commit('SET_PROVIDER', res.provider[0])
							if (~res.provider.indexOf('qq')) {
								uni.login({
									provider: 'qq',
									success: function (loginRes) {
									console.log(JSON.stringify(loginRes));
									}
								});
							}
							if (~res.provider.indexOf('weixin')) {
								uni.getSetting({
									success:(res)=> {
										console.log(res.authSetting['scope.userInfo'])
										if (res.authSetting['scope.userInfo']) {
											console.log('登录前')
											that.$store.store.storeUser.dispatch('WeiXinLogin')
										}
										else{
											console.log('转授权页')
											uni.navigateTo({
												url:'/pages/index/authrize'
											})
										}
									}
								});
							}
							typeof cb == "function" && cb();
					}
				});
								
			},
			loginCallBack:function(){
				var context = this
				console.log('执行登陆回调')
				console.log(context)
				console.log(context.loginCallBack)
				if(context.loginCallBack!=undefined&&typeof context.loginCallBack == "function"){
					console.log('执行登录回调')
					console.log(context.loginCallBack)
					context.loginCallBack(context.$store.store.storeUser.state.userInfo)
						context.loginCallBack=undefined
				}				
			}
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	.text-pri{
		color:#FC8902;	
	}
	.bg-pri{
		background: #FC8902;
	}
	/*每个页面公共css */
    @import "colorui/main.css";
    @import "colorui/icon.css";
	.text-pri{
		color:#FC8902;	
	}
	.bg-pri{
		background: #FC8902;
	}
</style>
