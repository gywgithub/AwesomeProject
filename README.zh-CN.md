简体中文 | [English](./README.md)

## AwesomeProject

> React Native 模板项目， 封装了常见模块，以及使用方式

### 功能特性

- 热更新
  - 基于 Pushy 实现
- 手势密码
  - GesturePassword
- 本地存储
  - 基于MMKV实现客户端数据存储，性能比 SQLite 快30倍

### 项目本地运行

~~~
git clone https://github.com/gywgithub/AwesomeProject.git
cd AwesomeProject
yarn
yarn android
~~~

**注意**

`yarn android` 命令执行过程中 mmkv 会下载 github 不同仓库源下的包，如 google, facebook 等，这个过程国内用户需要配置稳定的翻墙工具才能正常运行
