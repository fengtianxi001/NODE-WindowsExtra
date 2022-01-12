/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 14:28:11
 * @LastEditTime: 2022-01-12 16:38:15
 */

import clipboard from './modules/Clipboard'
import computer from './modules/Computer'
import keyboard from './modules/Keyboard'
import mediaplay from './modules/Mediaplay'
import message from './modules/Message'
import mouse from './modules/Mouse'
import program from './modules/Program'
import screen from './modules/Screen'
import volume from './modules/Volume'

const windowExtra = {
	...clipboard,
	...computer,
	...keyboard,
	...mediaplay,
	...message,
	...mouse,
	...program,
	...screen,
	...volume,
}

module.exports = windowExtra
