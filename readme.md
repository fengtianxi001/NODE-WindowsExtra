# 🚀 window-extra

 <div>
    <img src="https://img.shields.io/github/languages/top/fengtianxi001/Node-Window-Extra">
    <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
    <img src="https://img.shields.io/github/issues/fengtianxi001/Node-Window-Extra">
    <img src="https://img.shields.io/github/forks/fengtianxi001/Node-Window-Extra">
    <img src="https://img.shields.io/github/stars/fengtianxi001/Node-Window-Extra">
  </div>


## 1. Installation

```shell
npm i window-extra
```

## 2. Usage

```javascript
const windowExtra = require("window-extra")
```


## 3. API



<hr>

### lockComputer
*锁定电脑,锁定后启动电脑需要输入密码*

```javacript
windowExtra.lockComputer()
```
<hr>

### standbyComputer
*关闭计算机并将其置于待机模式*

- `isForce` \<boolean\> 
	+ `false`, 默认
	+ `true`, 系统将被迫进入待机模式，而无需请求所有应用程序的许可。


```javascript
windowExtra.standbyComputer()
windowExtra.standbyComputer(true)
```
<hr>

### sleepComputer
*关闭计算机并将其置于睡眠模式*

- `isForce` \<boolean\> 
	+ `false`, 默认
	+ `true`, 系统将被迫进入待机模式，而无需请求所有应用程序的许可。


```javascript
windowExtra.sleepComputer()
windowExtra.sleepComputer(true)
```

<hr>

### rebootComputer
*重启电脑*

- `seconds` \<number\>
	+ 默认 `0`
	+ `seconds`秒后进入睡眠

```javascript
windowExtra.rebootComputer(10)
```
<hr>

### closeComputer
*关机*

- `seconds`  \<number\>
	+ 默认 `0`
	+ `seconds`秒后关机

```javascript
windowExtra.closeComputer(10)
```
<hr>

### clearClip
*清空剪贴板*

```javascript
windowExtra.clearClip()
```
<hr>


### copyText2Clip
*将指定的文本设置到剪贴板中*

- `text` \<string\> 
	+ 要复制到剪切板的文本

```javascript
windowExtra.copyText2Clip("fengtianxi001")
```
<hr>


### copyFileContent2Clip
*将指定文本文件的内容设置到剪贴板*

- `filePath` \<string\> 
	+ 文本文件的路径

```javascript
windowExtra.copyFileContent2Clip("c:\\temp\\test.txt")
```
<hr>

### writeFileFromClip
*将剪贴板的内容写入一个文件(仅支持文本)*

- `filePath` \<string\> 
	+ 文本文件的路径

```javascript
windowExtra.writeFileFromClip("c:\\temp\\test.txt")
```
<hr>

### appendFileFromClip
*将剪贴板的内容追加到文件中。(仅支持文本)*

- `filePath` \<string\> 
	+ 文本文件的路径

```javascript
windowExtra.appendFileFromClip("c:\\temp\\test.txt")
```
<hr>

### saveImageFromClip
*将剪贴板中的当前图像保存到文件中*

- `imgPath` \<string\> 
	+ 图像的保存路径

```javascript
windowExtra.saveImageFromClip("c:\\temp\\test.png")
```
<hr>

### copyImage2Clip
*将指定图像复制到剪贴板。*

- `imgPath` \<string\> 
	+ 图像的路径

```javascript
windowExtra.copyImage2Clip("c:\\temp\\test.png")
```
<hr>

### sendMouse
*设置鼠标光标相对于屏幕的左上角的位置*

- `x`  \<number\>
	+ 鼠标的横坐标 
- `y` \<number\>
	+ 鼠标的纵坐标

```javascript
windowExtra.sendMouse(100,100)
```
<hr>

### setsMousewin
*设置鼠标光标相对于活动窗口左上角的位置*

- `x` \<number\>
	+ 鼠标的横坐标 
- `y` \<number\>
	+ 鼠标的纵坐标

```javascript
windowExtra.setsMousewin(100,100)
```
<hr>

### moveMouse
*设置鼠标光标相对与现在的位置的位置*

- `x` \<number\>
	+ 鼠标的横坐标 
- `y` \<number\>
	+ 鼠标的纵坐标

```javascript
windowExtra.moveMouse(100,100)
```
<hr>

### moveMouse
*滚动鼠标滚轮*

- `distance` \<number\>
	+ 默认`1200`
	+ 滚轮的滚动距离
	+ 在标准鼠标下`distance` 需要是120的倍数

```javascript
windowExtra.moveMouse(2400)
```

<hr>

### setVolume
*设置系统音量*

- `value` \<number\>
	+ 默认`25000` 
	+ 静音：`0` 最大音量：`65535 `

```javascript
windowExtra.setVolume(65000)
```
<hr>

### playMusic
*播放音频*

- `playTime` <\number\> \<unit: millisecond\>
	+ 默认`10000` 
	+ 音频的播放时长

- `audioFile` \<string\>
	+ 音频文件的路径

```javascript
windowExtra.playMusic(10000,"c:\\temp\\1.mp3")
```
<hr>

### showMessage
*消息通知*

- `message`\<string\>
	+ 默认 `""`
	+ 通知的消息内容

- `title`\<string\>
	* 默认 `""`
	+ 通知的标题内容
	
```javascript
windowExtra.showMessage("hello word","notify")
```
<hr>

### sendkey
*模拟单个按键的操作*

- `key`  \<string\>
	+ 默认 `enter` 
	+ 按键名称
	
- `active` \<enum\>\<string\>
	+  `["down"|"up"|"press"]`

```javascript
windowExtra.sendkey("a","press") 
windowExtra.sendkey("shift","down") 
windowExtra.sendkey("f10","press") 
windowExtra.sendkey("0x2e","press")
```
<hr>

### runProgram
*执行程序*

- `program` \<string\>
	+ 执行程序的路径

```javascript
windowExtra.runProgram("c:\\program files\\my software\\abc.exe" ) 
```

<hr>



### closeScreen
*关闭屏幕*

```javascript
windowExtra.closeScreen() 
```
<hr>

### openScreen
*打开屏幕*

```javascript
windowExtra.openScreen() 
```
<hr>

### lowPowerScreen
*将显示器设置为低功耗状态*

```javascript
windowExtra.lowPowerScreen() 
```
<hr>


### saverScreen
*启动默认屏幕保护程序(没设置屏保,无效)*

```javascript
windowExtra.saverScreen() 
```
<hr>


### setPrimaryScreen
*设置主屏幕，仅适用于具有多个屏幕的系统*

- `monitorIndex` \<number\>
	+ 屏幕序号


```javascript
windowExtra.setPrimaryScreen(1) 
```
<hr>

### setScreenBrightness
*调整屏幕亮度*

- `level` \<number\>
	+ 最大值 100 ,非常亮
	+ 最小值 0 ,非常暗

- `mode` \<number\>
	+ 1, 调整外接电源使用环境下的亮度
	+ 2, 调整电池使用环境下的亮度
	+ 3, 二者同时更改

```javascript
windowExtra.setScreenBrightness(50,1) 
```
