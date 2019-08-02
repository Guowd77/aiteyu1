const appid ='wxf29a7b5758ce03a0'
const baseURL = 'https://aiteyu.imumba.com'  // 图标地址
const requestURL = 'https://aiteyu.imumba.com/index.php/addons/aitefish/' // ajax请求地址
//去发布页面额按钮信息
function getStyleDetail(){
	let styleDetail = {}
	var systemDetail = uni.getSystemInfoSync()
	styleDetail.statusBarHeight = parseInt(systemDetail.statusBarHeight)
	//console.log(systemDetail)
	styleDetail.headAreaHeight = systemDetail.pixelRatio * 35 / systemDetail.pixelRatio
	styleDetail.screenHeight = systemDetail.screenHeight
	if (systemDetail.system.substring(0, 3) == "iOS") {
		styleDetail.navHeight = systemDetail.pixelRatio * 40 / systemDetail.pixelRatio
        styleDetail.headAreaMarTop = systemDetail.pixelRatio * 0.5 / systemDetail.pixelRatio;
        styleDetail.headleftBoxW = systemDetail.windowWidth - systemDetail.pixelRatio * 100 / systemDetail.pixelRatio;
        styleDetail.headRightBoxW = systemDetail.pixelRatio * 100 / systemDetail.pixelRatio;
        styleDetail.containersHeight = systemDetail.windowHeight - (systemDetail.statusBarHeight + systemDetail.pixelRatio * 40 /systemDetail.pixelRatio);

	}
	else{
        styleDetail.navHeight = systemDetail.pixelRatio * 45 / systemDetail.pixelRatio;
        styleDetail.headAreaMarTop = systemDetail.pixelRatio * 2.5 / systemDetail.pixelRatio;
        styleDetail.headleftBoxW =  systemDetail.windowWidth - systemDetail.pixelRatio * 110 / systemDetail.pixelRatio;
        styleDetail.headRightBoxW =systemDetail.pixelRatio * 110 / systemDetail.pixelRatio;
        styleDetail.containersHeight =systemDetail.windowHeight -  (systemDetail.statusBarHeight +systemDetail.pixelRatio * 45 /systemDetail.pixelRatio);	
	}
	//console.log(styleDetail)
	return styleDetail
}
var styleDetail = getStyleDetail()
console.log(styleDetail)
var classObj = {
	containerMarginTop :'margin-top:'+(parseInt(styleDetail.navHeight+styleDetail.statusBarHeight))+'px;'
}
const postActivityBtn = {
	btnDetail1:[
		{
			styleName:'buttonBox_left',
			iconUrl:'',
			url:'/pages/postActivity/postActivityForm?activity_type=0',
			btnText:'学术讲座',
			content:'快速浏览学校知识讲座，学科汇报'
		},	
		{
			styleName:'buttonBox_right',
			iconUrl:'',
			url:'/pages/postActivity/postActivityForm?activity_type=1',
			btnText:'科技竞赛',
			content:'实时了解校园竞赛信息，快速报名'
		}				
	],
	btnDetail2:[
		{
			styleName:'buttonBox_left',
			iconUrl:'',
			url:'/pages/postActivity/postActivityForm?activity_type=2',
			btnText:'演出抢票',
			content:'了解最新校园大型活动，报名抢票'
		},	
		{
			styleName:'buttonBox_right',
			iconUrl:'',
			url:'/pages/postActivity/postActivityForm?activity_type=3',
			btnText:'生活约玩',
			content:'约健身，约吃饭，校园生活约着玩'
			}				
		]
}
const tabBarConfig = [

      { "current":0,
        "pagePath": "/pages/index/index",
        "iconPath": "/imgs/home.png",
        "selectedIconPath": "/imgs/home_on.png",
        "text": "主页"
      },
      {
        "current": 0,
        "pagePath": "/pages/news/news",
        "iconPath": "/imgs/message.png",
        "selectedIconPath": "/imgs/message_on.png",
        "text": "资讯"

      },
      {
        "current": 0,
        "pagePath": "/pages/category/category",
        "iconPath": "/imgs/category.png",
        "selectedIconPath": "/imgs/category_on.png",
        "text": "分类"
      },
      {
        "current": 0,
        "pagePath": "/pages/buy/buy",
        "iconPath": "/imgs/buy.png",
        "selectedIconPath": "/imgs/buy_on.png",
        "text": "购物"
      }

]
export { 
	appid, baseURL, requestURL,postActivityBtn,styleDetail,classObj
}