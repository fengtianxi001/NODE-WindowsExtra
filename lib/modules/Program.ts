/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 18:05:24
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')


const Program = {
	runProgram(program: string) {
		//创建文件/文件夹的快捷方式。
		return $spawn(nircmd, ['elevate', program])
	},
}
export default Program
