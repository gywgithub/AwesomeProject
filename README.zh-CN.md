简体中文 | [English](./README.md)

## AwesomeProject

> React Native Android 模板项目，封装了常见模块，以及使用方式

### 功能特性

- 热更新
  - 基于 Pushy 实现
- 手势密码
  - GesturePassword
- 本地存储
  - 基于MMKV实现客户端数据存储，性能比 SQLite 快30倍
- 文件读取
  - react-native-fs
- 进度条
  - react-native-progress
- 简洁版的UI库
  - Teaset-pro
- SVG
  - react-native-svg
- 图标
  - react-native-vector-icons
- 轮播图
  - react-native-swiper
- html 容器
  - react-native-htmlview
- 读取设备信息
  - react-native-device-info
- 相机
  - react-native-camera
- 录音
  - react-native-audio
- 强制更新
  - react-native-android-auto-update
- GIF 动态图
  - build.gradle add config

### 项目本地运行

需要有对应的 Android, React Native 相关环境

~~~
git clone https://github.com/gywgithub/AwesomeProject.git
cd AwesomeProject
yarn
yarn android
~~~

**注意**

`yarn android` 命令执行过程中 mmkv 会下载 github 不同仓库源下的包，如 google, facebook 等，这个过程国内用户需要配置稳定的翻墙工具才能正常运行
