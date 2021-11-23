import { post } from './common';

// 根据token获取用户信息
export async function getUserByToken(config) {
	return await post(config, ':8087/get_user_by_token')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 根据token设置用户信息
export async function setUserInfo(config) {
	return await post(config, ':8087/set_user_info')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}
