/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 16:08:06
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Computer = {
	lockComputer() {
		//锁定电脑，锁定后启动电脑需要输入密码
		return $spawn(nircmd, ['lockws'])
	},
	standbyComputer(isForce: boolean = false) {
		//关闭计算机并将其置于“待机”模式。如果指定了force参数，系统将被迫进入待机模式，而无需请求所有应用程序的许可。
		const args = isForce ? ['standby'] : ['standby', 'force']
		return $spawn(nircmd, args)
	},
	sleepComputer(isForce: boolean = false) {
		//关闭计算机并将其置于“睡眠”模式。如果指定了force参数，系统将被迫进入待机模式，而无需请求所有应用程序的许可。
		const args = isForce ? ['hibernate'] : ['hibernate', 'force']
		return $spawn(nircmd, args)
	},
	rebootComputer(seconds: number = 0) {
		//重启电脑
		return $spawn(nircmd, ['initshutdown', `'即将在${seconds}秒后重启系统'`, seconds, 'reboot'])
	},
	closeComputer(seconds = 3, isForce: boolean = false) {
		//系统关机
		const args = isForce
			? ['initshutdown', `'即将在${seconds}秒关闭系统'`]
			: ['initshutdown', `'即将在${seconds}秒关闭系统'`, 'force']
		return $spawn(nircmd, args)
	},
}

export default Computer
