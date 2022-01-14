"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 17:20:41
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Volume = {
    setVolume: function (value) {
        if (value === void 0) { value = 25000; }
        return (0, utils_1.$spawn)(nircmd, ['setsysvolume', value]);
    },
};
exports.default = Volume;
