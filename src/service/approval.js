import { post } from './common';
import { WORKFLOW_REQUEST_PORT } from "../common/constants";

// 
export async function getAllClass(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_all_class`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}


export async function getAllProcess(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_all_process`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function getProcessById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_process_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

export async function getTemplateById(config) {
	return await post(config, ':8086/get_template_by_id')
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 提交工单
export async function addWorkOrder(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/add_work_order`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}


// 获取我发起的工单列表
export async function getMyStartWorkOrderByUid(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_my_start_work_order_by_uid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取抄送我的工单列表
export async function getCopyMeWorkOrderByUid(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_copy_me_work_order_by_uid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取已办的工单列表
export async function getDoneWorkOrderByUid(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_done_work_order_by_uid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取待办的工单列表
export async function getWaitDoneWorkOrderByUid(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_wait_done_work_order_by_uid`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 获取工单详情
export async function getWorkOrderById(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/get_work_order_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}

// 待办中审批工单
export async function approvalWorkOrder(config) {
	return await post(config, `${WORKFLOW_REQUEST_PORT}/approval_work_order`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}
