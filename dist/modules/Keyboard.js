"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:28:38
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Keyboard = {
    sendkey: function (key, action) {
        if (key === void 0) { key = 'enter'; }
        if (action === void 0) { action = 'press'; }
        //向系统发送按键
        return (0, utils_1.$spawn)(nircmd, ['sendkey', key, action]);
    },
    sendkeypress: function (combinations) {
        if (combinations === void 0) { combinations = []; }
        return (0, utils_1.$spawn)(nircmd, __spreadArray(['sendkeypress'], combinations, true));
    },
};
exports.default = Keyboard;
