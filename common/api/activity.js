import request from '../utils/request'
export function getAllActivities (data) { // 获取appid
	return request(data,"Activity/getAllActivities",'GET')
}
export function getHotActivities(data){
	return request(data,"Activity/getHotActivities",'GET')
}
export function getActivity(data){
	return request(data,"Activity/getActivity",'GET')
}
export function getAllJoinedAct(data){
	return request(data,"Activity/getAllJoinedActByUserId",'GET')
}
export function getAllPubAct(data){
	return request(data,"Activity/getAllPubActByUserId","GET")
}
export function getAllAppliers(data){
	return request(data,"Activity/getAllAppliersByActId","GET")
}
export function getNotifi(data){
	return request(data,"Activity/getNotificatiosByUserId","GET")
}
export function getJoinFields(data){
	return request(data,"Activity/getJoinFields",'GET')
}
export function joinActivity(data){
	return request(data,"Activity/joinActivity",'POST')
}
export function updateJoin(data){
	return request(data,"Activity/updateJoin",'POST')
}
export function addActivity(data){
	return request(data,"Activity/addActivity",'POST')
}
export function searchActivity(data){
	return request(data,"Activity/searchActivity",'GET')
}
export function getQrPng(data){
	return request(data,"common/getQrPng",'POST')
}
export function getGroupById(data){
	return request (data,"groups/getGroupById",'POST')
}

export function getAllAppliersByActId(data){
	return request (data,"Activity/getAllAppliersByActId",'GET')
}

export function getMyJoinedInfo(data){
	return request (data,"Activity/getSingleJoinedActByUserId",'GET')
}
export function cancelJoin(data){
	return request (data,"Activity/cancelJoin",'GET')
}
export function createMess(data){
	return request (data,"Activity/createNotification","POST")
}
export function getAppliersExcel(data){
	return request(data,"Activity/getAllAppliersViaExcel","GET")
}
export function addPostByActId(data){
	return request(data,"Activity/addPostByActId","POST")
}