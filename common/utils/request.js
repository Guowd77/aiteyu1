import store from '../store'
import { requestURL } from './config'

function Request(data, url, method) {
	//console.log(data)
	var headers = method == 'POST'?{'content-type': 'application/x-www-form-urlencoded'}:{};
	if(url != 'Users/loginHawk'){
		data.token = uni.getStorageSync('token')||''
	}
	return new Promise((resolve, reject) => {
		uni.showLoading()		
		uni.request({
			url: requestURL + url+'?username='+data.username+'&password='+data.password,
			method:method,
			header: headers,
			success: (res) => {
				uni.hideLoading()
				console.log(res)
				var data = res.data.data
				if(res.data.code==1||res.data.msg=='此活动暂无报名信息'){
					resolve(res,data)
				}
				else if(res.data.msg=='查无此报名信息！'){
					resolve(res,data)
				}
				else{
					uni.showToast({
						title: res.data.msg || '加载失败',
						icon:'none',
						mask: false,
						duration: 1500
					});
				}

			},
			fail: err => {
				uni.hideLoading()
				console.log('err')
				reject(err)
			}
		})
	}).catch(err => console.log(err))
}


export default function(data, url, method) {
	return Request(data, url, method)
}