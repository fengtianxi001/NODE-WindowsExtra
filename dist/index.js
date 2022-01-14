"use strict";
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 14:28:11
 * @LastEditTime: 2022-01-12 16:38:15
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Clipboard_1 = require("./modules/Clipboard");
var Computer_1 = require("./modules/Computer");
var Keyboard_1 = require("./modules/Keyboard");
var Mediaplay_1 = require("./modules/Mediaplay");
var Message_1 = require("./modules/Message");
var Mouse_1 = require("./modules/Mouse");
var Program_1 = require("./modules/Program");
var Screen_1 = require("./modules/Screen");
var Volume_1 = require("./modules/Volume");
var windowExtra = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, Clipboard_1.default), Computer_1.default), Keyboard_1.default), Mediaplay_1.default), Message_1.default), Mouse_1.default), Program_1.default), Screen_1.default), Volume_1.default);
module.exports = windowExtra;
