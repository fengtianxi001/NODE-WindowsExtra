"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathVaild = exports.$spawn = exports.$exec = void 0;
/*
 * @Description:
 * @Autor: 肛肠科冯主任
 * @Date: 2022-01-11 14:33:53
 * @LastEditTime: 2022-01-12 16:26:19
 */
var _a = require('child_process'), exec = _a.exec, spawn = _a.spawn;
var fs = require('fs');
var iconv = require('iconv-lite');
function $exec(command) {
    return new Promise(function (resolve, reject) {
        var result = [];
        var options = {
            encoding: 'binary',
        };
        var ls = exec(command, options);
        ls.stdout.on('data', function (data) { return result.push(iconv.decode(new Buffer(data, 'binary'), 'cp936')); });
        ls.on('close', function () { return resolve(result); });
        ls.stderr.on('data', function (error) { return reject(error); });
    });
}
exports.$exec = $exec;
function $spawn(command, args) {
    return new Promise(function (resolve, reject) {
        var result = [];
        var ls = spawn(command, args);
        ls.stdout.on('data', function (data) { return result.push(iconv.decode(new Buffer(data, 'binary'), 'cp936')); });
        ls.on('close', function () { return resolve(result); });
        ls.stderr.on('data', function (error) { return reject(error); });
    });
}
exports.$spawn = $spawn;
function pathVaild(filePath, promise) {
    var error = {
        code: 400,
        msg: '文件不存在',
    };
    return new Promise(function (res, rej) {
        if (!fs.existsSync(filePath)) {
            rej(error);
        }
        else {
            promise.then(function () {
                res(true);
            });
        }
    });
}
exports.pathVaild = pathVaild;
