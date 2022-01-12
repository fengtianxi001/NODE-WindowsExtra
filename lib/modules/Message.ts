/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:15:19
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Message = {
	showMessage(message: string = '', title: string = '') {
		return $spawn(nircmd, ['infobox', message, title])
	},
}
export default Message
