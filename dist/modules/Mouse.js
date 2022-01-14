"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:02:10
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Mouse = {
    sendMouse: function (x, y) {
        //设置鼠标的位置，相对于整个屏幕
        return (0, utils_1.$spawn)(nircmd, ['setcursor', x, y]);
    },
    setsMousewin: function (x, y) {
        //设置鼠标光标相对于活动窗口左上角的位置。[X]和[Y]参数指定所需的光标位置。
        return (0, utils_1.$spawn)(nircmd, ['setcursorwin', x, y]);
    },
    moveMouse: function (x, y) {
        //相对鼠标现在的位置进行位移
        return (0, utils_1.$spawn)(nircmd, ['movecursor', x, y]);
    },
    mouseEvent: function (dir, action) {
        if (dir === void 0) { dir = 'right'; }
        if (action === void 0) { action = 'click '; }
        return (0, utils_1.$spawn)(nircmd, ['sendmouse', dir, action]);
    },
    moveWheel: function (distance) {
        if (distance === void 0) { distance = 1200; }
        //将指定的鼠标事件发送到系统。操作系统的行为将与用户实际执行指定鼠标操作的行为完全相同。
        return (0, utils_1.$spawn)(nircmd, ['sendmouse', 'wheel', distance]);
    },
};
exports.default = Mouse;
