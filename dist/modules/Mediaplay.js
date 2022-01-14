"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:12:28
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Mediaplay = {
    playMusic: function (playTime, audioFile) {
        if (playTime === void 0) { playTime = 10000; }
        return (0, utils_1.$spawn)(nircmd, ['mediaplay', playTime, audioFile]);
    },
};
exports.default = Mediaplay;
