/*
 * @Description: 键盘操作
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:44:12
 * @LastEditTime: 2022-01-12 16:28:34
 */
import { $spawn, pathVaild } from '../utils'
const { resolve } = require('path')
const nircmd = resolve(__dirname, '../../bin/nircmdc.exe')
const fs = require('fs')
const Clipboard = {
	clearClip() {
		return $spawn(nircmd, ['clipboard'])
	},
	copyText2Clip(text: string) {
		return $spawn(nircmd, ['clipboard', 'set', text])
	},
	copyFileContent2Clip(filePath: string) {
		const promise = $spawn(nircmd, ['clipboard', 'readfile', filePath])
		return pathVaild(filePath, promise)
	},
	writeFileFromClip(filePath: string) {
		//将剪贴板的内容写入一个文件(仅支持文本)
		const promise = $spawn(nircmd, ['clipboard', 'writefile', filePath])
		return pathVaild(filePath, promise)
	},
	appendFileFromClip(filePath: string) {
		//将剪贴板的内容追加到文件中。(仅支持文本)
		const promise = $spawn(nircmd, ['clipboard', 'addfile', filePath])
		return pathVaild(filePath, promise)
	},
	saveImageFromClip(imgPath: string) {
		//将剪贴板中的当前图像保存到文件中.
		const promise = $spawn(nircmd, ['clipboard', 'saveimage', imgPath])
		return pathVaild(imgPath, promise)
	},
	copyImage2Clip(imgPath: string) {
		// 将指定图像文件的内容复制到剪贴板。
		const promise = $spawn(nircmd, ['clipboard', 'copyimage', imgPath])
		return pathVaild(imgPath, promise)
	},
}

export default Clipboard
