/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 18:21:56
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Screen = {
	closeScreen() {
		return $spawn(nircmd, ['monitor', 'off'])
	},
	openScreen() {
		return $spawn(nircmd, ['monitor', 'on'])
	},
	lowPowerScreen() {
		return $spawn(nircmd, ['monitor', 'low'])
	},
	saverScreen() {
		return $spawn(nircmd, ['screensaver'])
	},
	setPrimaryScreen(monitorIndex: number = 1) {
		return $spawn(nircmd, ['setprimarydisplay', monitorIndex])
	},
	setScreenBrightness(level: number, mode: number = 3) {
		const _level = level < 0 ? 0 : level > 100 ? 100 : level
		return $spawn(nircmd, ['changebrightness', _level, mode])
	},
}

export default Screen
