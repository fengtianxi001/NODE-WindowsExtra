/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:02:10
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Mouse = {
	sendMouse(x: number, y: number) {
		//设置鼠标的位置，相对于整个屏幕
		return $spawn(nircmd, ['setcursor', x, y])
	},
	setsMousewin(x: number, y: number) {
		//设置鼠标光标相对于活动窗口左上角的位置。[X]和[Y]参数指定所需的光标位置。
		return $spawn(nircmd, ['setcursorwin', x, y])
	},
	moveMouse(x: number, y: number) {
		//相对鼠标现在的位置进行位移
		return $spawn(nircmd, ['movecursor', x, y])
	},
	mouseEvent(dir = 'right', action = 'click ') {
		return $spawn(nircmd, ['sendmouse', dir, action])
	},
	moveWheel(distance:number = 1200) {
		//将指定的鼠标事件发送到系统。操作系统的行为将与用户实际执行指定鼠标操作的行为完全相同。
		return $spawn(nircmd, ['sendmouse', 'wheel', distance])
	},
}
export default Mouse
