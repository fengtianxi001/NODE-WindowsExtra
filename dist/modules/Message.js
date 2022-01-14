"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:15:19
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Message = {
    showMessage: function (message, title) {
        if (message === void 0) { message = ''; }
        if (title === void 0) { title = ''; }
        return (0, utils_1.$spawn)(nircmd, ['infobox', message, title]);
    },
};
exports.default = Message;
