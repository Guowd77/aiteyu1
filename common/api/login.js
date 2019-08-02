import request from '../utils/request'

export function GetAppId (data) { // 获取appid
	return request(data, "/api/login/getappid",'POST')
}

export function Login (data) { // 登录
	return request(data, "/api/login/login")
}

export function Register (data) { // 注册
	return request(data, "/api/login/app_register")
}

export function ResetPwd (data) { // 重置密码
	return request(data, "/api/login/reset_password")
}

export function WeixinLogin (data) { // 微信登录
	return request(data, "Users/loginHawk",'POST')
}

export function getMyUserinfo (data) { // 当前用户信息
	return request(data, "users/getMyUserinfo",'POST')
}
export function getMyGroup (data) { // 当前用户加入的组织
	return request(data, "users/getMyGroup",'POST')
}
export function getMyNotify (data) {
	return request(data,"users/getMyNotify","post")
}