/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:12:28
 */
import { $spawn } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')

const Mediaplay = {
	playMusic(playTime: number = 10000, audioFile: string) {
		return $spawn(nircmd, ['mediaplay', playTime, audioFile])
	},
}
export default Mediaplay
