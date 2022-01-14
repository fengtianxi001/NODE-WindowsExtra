"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 16:08:06
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Computer = {
    lockComputer: function () {
        //锁定电脑，锁定后启动电脑需要输入密码
        return (0, utils_1.$spawn)(nircmd, ['lockws']);
    },
    standbyComputer: function (isForce) {
        if (isForce === void 0) { isForce = false; }
        //关闭计算机并将其置于“待机”模式。如果指定了force参数，系统将被迫进入待机模式，而无需请求所有应用程序的许可。
        var args = isForce ? ['standby'] : ['standby', 'force'];
        return (0, utils_1.$spawn)(nircmd, args);
    },
    sleepComputer: function (isForce) {
        if (isForce === void 0) { isForce = false; }
        //关闭计算机并将其置于“睡眠”模式。如果指定了force参数，系统将被迫进入待机模式，而无需请求所有应用程序的许可。
        var args = isForce ? ['hibernate'] : ['hibernate', 'force'];
        return (0, utils_1.$spawn)(nircmd, args);
    },
    rebootComputer: function (seconds) {
        if (seconds === void 0) { seconds = 0; }
        //重启电脑
        return (0, utils_1.$spawn)(nircmd, ['initshutdown', "'\u5373\u5C06\u5728".concat(seconds, "\u79D2\u540E\u91CD\u542F\u7CFB\u7EDF'"), seconds, 'reboot']);
    },
    closeComputer: function (seconds, isForce) {
        if (seconds === void 0) { seconds = 3; }
        if (isForce === void 0) { isForce = false; }
        //系统关机
        var args = isForce
            ? ['initshutdown', "'\u5373\u5C06\u5728".concat(seconds, "\u79D2\u5173\u95ED\u7CFB\u7EDF'")]
            : ['initshutdown', "'\u5373\u5C06\u5728".concat(seconds, "\u79D2\u5173\u95ED\u7CFB\u7EDF'"), 'force'];
        return (0, utils_1.$spawn)(nircmd, args);
    },
};
exports.default = Computer;
