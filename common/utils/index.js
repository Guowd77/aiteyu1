import store from '../store'
export default {
	gotoLogin:()=>{
		return new Promise((resolve, reject) => {
			if (store.state.userInfo.id) {
				resolve(true)
			} else {
				uni.showModal({
					title: '',
					content: '请您先登录',
					success: res => {
			
					}
				})
				resolve(false)
			}
		})
	},
	//导航跳转
	LinkTo: (item) => {
		switch (item.link) {
			case "主页1":
				uni.navigateTo({
					url:'/pages/index/index'
				});
				break;
			case "主页2":
				uni.navigateTo({
					url:'/pages/index/index2'
				});
				break;
			case "搜索页":
				uni.navigateTo({
					url:'/pages/index/searchForm'
				});
				break;
			case "授权页":
				uni.navigateTo({
					url:'/pages/index/authrize'
				});
				break;
			case "海报制作":
					uni.navigateTo({
						url:'/pages/postActivity/choosePic'
					});
				break;
			case "分类活动列表页":
				if(item.param!=undefined && item.param != null){
					uni.navigateTo({
						url:'/pages/activityDetail/activityListType?type='+item.param
					});
				}
				else{
					uni.navigateTo({
						url:'/pages/activityDetail/activityListType'
					});
				}
		
				break;
			case "搜索结果":
				if(item.param!=undefined && item.param != null){
					uni.navigateTo({
						url:'/pages/activityDetail/searchResult?keyword='+item.param
					});
				}
				else{
					uni.navigateTo({
						url:'/pages/activityDetail/activityListType'
					});
				}
		
				break;
			case "报名成功":
				if(item.param!=undefined && item.param != null){
					uni.navigateTo({
						url:'/pages/activityDetail/successInfo?id='+item.param
					});
				}		
				break;
			case "报名活动":
				var str = '/pages/activityDetail/joinActivity?'
				if(item.param!=undefined && item.param != null){
					for(let key in item.param)
						str = str + key + '=' + item.param[key]+'&'
				}
				uni.navigateTo({
					url:str
				});
				break;
			case "修改报名信息":
				var str = '/pages/user/alterJoinedInfo?'
				if(item.param!=undefined && item.param != null){
					for(let key in item.param)
						str = str + key + '=' + item.param[key]+'&'
				}
				uni.navigateTo({
					url:str
				});
				break;
			case "创建通知":
				var str = '/pages/user/createMess/createMess?'
				if(item.param!=undefined && item.param != null){
					for(let key in item.param)
						str = str + key + '=' + item.param[key]+'&'
				}
				uni.navigateTo({
					url:str
				});
				break;
		}	
	},
	//防止按钮多次执行
	throttle: (fn, gapTime) => {
		if (gapTime == null || gapTime == undefined) {
			gapTime = 2000
		}
		let _lastTime = null
		return function() {
			let _nowTime = +new Date()
			if (_nowTime - _lastTime > gapTime || !_lastTime) {
				fn.apply(this, arguments) //将this和参数传给原函数
				_lastTime = _nowTime
			}
		}
	},
	sleep:(numberMillis)=> {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
		return;
	    }
	}

}
