"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Description: 键盘操作
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 15:44:12
 * @LastEditTime: 2022-01-12 16:28:34
 */
var utils_1 = require("../utils");
var resolve = require('path').resolve;
var nircmd = resolve(__dirname, '../../bin/nircmdc.exe');
var fs = require('fs');
var Clipboard = {
    clearClip: function () {
        return (0, utils_1.$spawn)(nircmd, ['clipboard']);
    },
    copyText2Clip: function (text) {
        return (0, utils_1.$spawn)(nircmd, ['clipboard', 'set', text]);
    },
    copyFileContent2Clip: function (filePath) {
        var promise = (0, utils_1.$spawn)(nircmd, ['clipboard', 'readfile', filePath]);
        return (0, utils_1.pathVaild)(filePath, promise);
    },
    writeFileFromClip: function (filePath) {
        //将剪贴板的内容写入一个文件(仅支持文本)
        var promise = (0, utils_1.$spawn)(nircmd, ['clipboard', 'writefile', filePath]);
        return (0, utils_1.pathVaild)(filePath, promise);
    },
    appendFileFromClip: function (filePath) {
        //将剪贴板的内容追加到文件中。(仅支持文本)
        var promise = (0, utils_1.$spawn)(nircmd, ['clipboard', 'addfile', filePath]);
        return (0, utils_1.pathVaild)(filePath, promise);
    },
    saveImageFromClip: function (imgPath) {
        //将剪贴板中的当前图像保存到文件中.
        var promise = (0, utils_1.$spawn)(nircmd, ['clipboard', 'saveimage', imgPath]);
        return (0, utils_1.pathVaild)(imgPath, promise);
    },
    copyImage2Clip: function (imgPath) {
        // 将指定图像文件的内容复制到剪贴板。
        var promise = (0, utils_1.$spawn)(nircmd, ['clipboard', 'copyimage', imgPath]);
        return (0, utils_1.pathVaild)(imgPath, promise);
    },
};
exports.default = Clipboard;
