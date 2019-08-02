import Vue from 'vue'
import Vuex from 'vuex'
import { Login, WeixinLogin } from '../api/login'
Vue.use(Vuex)
//用户登录信息

function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
	}
}
const storeUser = new Vuex.Store({
	state: {		
		userInfo: {},
		provider:null,
		IsLogin:false,
		
	},
	mutations: {
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = Object.assign({}, state.userInfo, userInfo) 
		},
		SET_PROVIDER: (state, data) => {
			state.provider = Object.assign({}, state.provider, data) 
		},
		SET_ISLOGIN: (state, data) => {
			state.IsLogin = data 
		}
	},
	actions: {
		userLogin ({ commit }, info) {
			return new Promise((resolve, reject) => {
				Login(info).then(res => {
					if (res.data.status) {
						
					} else {
						resolve(false)
					}
				}).catch(err => { reject(err) })
			})
		},
		WeiXinLogin ({ commit, state},loginCallBack) {
			uni.showLoading()	
			console.log('store')		
			//console.log(state)
			//console.log(loginCallBack)
			let provider = state.provider||null					
				uni.login({
					provider: provider,
					success: rst => {
						console.log(rst)
						uni.getUserInfo({
							provider: 'weixin',
							success: info => {
								console.log(info)
								let params = {
									rawData:info.rawData,
									code:rst.code||''
								}
								WeixinLogin(params).then(result => {
									uni.hideLoading()
									console.log(result)
									if (result.data.code) {
										var data = result.data.data	
										uni.setStorageSync('userInfo', data.user)
										uni.setStorageSync('token', data.user.token)					
										commit('SET_USERINFO', data.user)
										commit('SET_ISLOGIN', true)																				
										uni.showToast({
											icon:"success",
											title: '登录成功',
											duration: 2000
										});
										console.log('执行回调')
										//if(typeof loginCallBack=='function')
											//loginCallBack()
									} else {
										uni.showToast({
											icon:"fail",
											title: '登录失败',
											duration: 2000
										});
												
									}
											
											
								})
							}
						})
					}
				})			
		},
		logout ({ state }) {
			uni.showModal({
				title: '',
				content: '确认退出登录吗?',
				success: res => {
					if (res.confirm) {
						
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}
				}
			})
		}
	}
})
//tabBar信息
const storeTabBar = new Vuex.Store({
		state:{
		footer_nav:[
			{
				name:'去报名',
				name_code:'publish',
				icon:'',
				size:'big',
				
			},
			{
				name:'去发布',
				name_code:'my',
				icon:'',
				size:'small',
				width:'42%'
			},
			
		],
		now_page_index:1,
	},
	mutations:{
		change_nav_list(state,data){
			state.footer_nav = data;
		},
		change_page(state,index){
			state.now_page_index = index;
		}
	},
	actions:{
	}
})
const store = {
	'storeUser':storeUser,
	'storeTabBar':storeTabBar
}
export default{
	store
}