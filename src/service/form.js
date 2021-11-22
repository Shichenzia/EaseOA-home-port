import { post } from './common';
import { FORM_REQUEST_PORT } from "../common/constants";


export async function getTemplateById(config) {
	return await post(config, `${FORM_REQUEST_PORT}/get_template_by_id`)
		.then(reslut => [null, reslut])
		.catch(error => [error]);
}