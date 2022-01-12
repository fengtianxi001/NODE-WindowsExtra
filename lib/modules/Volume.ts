/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:20:41
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Volume = {
	setVolume(value:number = 25000) {
		return $spawn(nircmd, ['setsysvolume', value])
	},
}
export default Volume
