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