/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:28:38
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Keyboard = {
	sendkey(key = 'enter', action = 'press') {
		//向系统发送按键
		return $spawn(nircmd, ['sendkey', key, action])
	},
	sendkeypress(combinations = []) {
		return $spawn(nircmd, ['sendkeypress', ...combinations])
	},
}

export default Keyboard
