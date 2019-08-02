import { baseURL,requestURL } from '@/common/utils/config'
function imgUrl(data){
	console.log(data.indexOf("https://aiteyu.imumba.com/"))
	if(data.indexOf("https://aiteyu.imumba.com/")>=0)
		return data
	if(data==undefined||data==null||data=='/uploads'|| data == '/uploads/7897'||data.equals('')||data== "https://aiteyu.imumba.com")
		data = 'https://aiteyu.imumba.com/uploads/20190523/00aa78c6346d3835900e2d00a1748cd5.png'
	else
		data = baseURL + data		
	
	return data
}	
function dateTimes(startTime) {
	//console.log(startTime)
    var s1 = new Date(startTime*1000)
	//console.log(s1)
    var s2 = new Date()
	//console.log(s2)
    var runTime = parseInt((s1.getTime() - s2.getTime()) / 1000)
    var year = Math.floor(runTime / 86400 / 365)
    runTime = runTime % (86400 * 365)
    var month = Math.floor(runTime / 86400 / 30)
    runTime = runTime % (86400 * 30)
    var day = Math.floor(runTime / 86400)
    runTime = runTime % 86400
    var hour = Math.floor(runTime / 3600)
    runTime = runTime % 3600
    var minute = Math.floor(runTime / 60)
    runTime = runTime % 60
    var second = runTime
    //console.log(year+month+day+hour+minute+second);
　　return (year==0?'':year+'年')+(month==0?'':month+'月')+(day==0?'':day+'天')+(hour==0?'':hour+'时')+(minute==0?'':minute+'分')
 
}
function typeToText(data){
	if(data==undefined||data==null)
		return
	switch(data){
		case '1':
			data =  '学术讲座'
			break
		case '2':
			data =  '科技竞赛'
			break
		case '3':
			data =  '演出抢票'
			break
		case '4':
			data =  '吃喝约玩'
			break
		default:
			data =  '其他'	
			break
	}
	console.log(data)
	return data
}
function activityStateToText(data){
	if(data==undefined||data==null)
		return
	switch(data){
		case '1':
			data =  '报名未开始'
			break
		case '2':
			data =  '报名中'
			break
		case '3':
			data =  '报名已结束'
			break
		case '4':
			data =  '活动进行中'
			break
		case '5':
			data =  '活动已结束'	
			break
		default:
			data = '发生错误'
	
	}
	return data 
}
function checkAuth(context,cb){
				var that = context;
				console.log(this.$store)
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
									//console.log(res)
									if (res.authSetting['scope.userInfo']) {
										that.$store.store.storeUser.dispatch('WeiXinLogin').then(
											function () {
												console.log(that.LoginCallBack)
												if(that.LoginCallBack!=undefined&&typeof that.LoginCallBack == "function"){
													console.log('执行登录回调')
													that.LoginCallBack(that.$store.store.storeUser.state.userInfo)
												}
													
											}
										)
										
									}
									else{
										that.$LinkTo({link:"授权页"})
									}
								}
							});
						}
						typeof cb == "function" && cb();
					}
				});
					
}
function imgUrl(data){
	if(data==undefined||data==null||data=='/uploads'|| data == '/uploads/7897')
		data = 'https://aiteyu.imumba.com/uploads/20190522/6407ee1ac88718b1d046a35a2f3eb8eb.jpg'
	else
		data = baseURL + data
	return data
}	
/*function dateTimes(times) {
	var d = new Date(times * 1000);
	var date = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + "-" + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
	var startTime = date;
	var currTime = new Date(); //当前时间 
	//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
	startTime = startTime.replace(/\-/g, "/");
	var sTime = new Date(startTime);
	var totalTime = currTime.getTime() - sTime.getTime();
	var days = parseInt(totalTime / parseInt(1000 * 60 * 60 * 24));
	totalTime = totalTime % parseInt(1000 * 60 * 60 * 24);
	var hours = parseInt(totalTime / parseInt(1000 * 60 * 60));
	totalTime = totalTime % parseInt(1000 * 60 * 60);
	var minutes = parseInt(totalTime / parseInt(1000 * 60));
	totalTime = totalTime % parseInt(1000 * 60);
	var seconds = parseInt(totalTime / parseInt(1000));
	var time = "";
	if (days >= 1) {
		time = days + "天" ;
	} else if (hours >= 1) {
		time = hours + "时";
	} else if (minutes >= 1) {
		time = minutes + "分" 
	} else {
		time = seconds + "秒";
	}
	return time;
}*/
export default{ 
	imgUrl,
	dateTimes,
	imgUrl,
	typeToText
 }