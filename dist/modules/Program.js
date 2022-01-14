"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 18:05:24
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Program = {
    runProgram: function (program) {
        //创建文件/文件夹的快捷方式。
        return (0, utils_1.$spawn)(nircmd, ['elevate', program]);
    },
};
exports.default = Program;
