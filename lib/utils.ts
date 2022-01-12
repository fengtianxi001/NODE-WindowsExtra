/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 14:33:53
 * @LastEditTime: 2022-01-12 16:26:19
 */
const { exec, spawn } = require('child_process')
const fs = require('fs')
const iconv = require('iconv-lite')

export function $exec(command: string) {
	return new Promise((resolve, reject) => {
		const result: string[] = []
		const options = {
			encoding: 'binary',
		}
		const ls = exec(command, options)
		ls.stdout.on('data', (data: string) => result.push(iconv.decode(new Buffer(data, 'binary'), 'cp936')))
		ls.on('close', () => resolve(result))
		ls.stderr.on('data', (error: any) => reject(error))
	})
}

export function $spawn(command: string, args: Array<string|number>) {
	return new Promise((resolve, reject) => {
		const result: string[] = []
		const ls = spawn(command, args)
		ls.stdout.on('data', (data: string) => result.push(iconv.decode(new Buffer(data, 'binary'), 'cp936')))
		ls.on('close', () => resolve(result))
		ls.stderr.on('data', (error: any) => reject(error))
	})
}

export function pathVaild(filePath:string,promise:Promise<unknown>) {
	const error = {
		code: 400,
		msg: '文件不存在',
	}
	return new Promise((res, rej) => {
		if (!fs.existsSync(filePath)) {
			rej(error)
		} else {
			promise.then(() => {
				res(true)
			})
		}
	})
}