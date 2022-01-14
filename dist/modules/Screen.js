"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:49:07
 * @LastEditTime: 2022-01-11 18:21:56
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var Screen = {
    closeScreen: function () {
        return (0, utils_1.$spawn)(nircmd, ['monitor', 'off']);
    },
    openScreen: function () {
        return (0, utils_1.$spawn)(nircmd, ['monitor', 'on']);
    },
    lowPowerScreen: function () {
        return (0, utils_1.$spawn)(nircmd, ['monitor', 'low']);
    },
    saverScreen: function () {
        return (0, utils_1.$spawn)(nircmd, ['screensaver']);
    },
    setPrimaryScreen: function (monitorIndex) {
        if (monitorIndex === void 0) { monitorIndex = 1; }
        return (0, utils_1.$spawn)(nircmd, ['setprimarydisplay', monitorIndex]);
    },
    setScreenBrightness: function (level, mode) {
        if (mode === void 0) { mode = 3; }
        var _level = level < 0 ? 0 : level > 100 ? 100 : level;
        return (0, utils_1.$spawn)(nircmd, ['changebrightness', _level, mode]);
    },
};
exports.default = Screen;
