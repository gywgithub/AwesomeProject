## React Native MMKV 在 Android 项目中使用

### MMKV

React Native 最快的键/值存储。

- **MMKV**是微信开发的一个高效、小型的移动键值存储框架。更多信息请参见[腾讯/MMKV](https://github.com/Tencent/MMKV)
- **react-native-mmkv**是一个库，允许您在 React Native 应用程序中轻松使用**MMKV**。它提供了对原生 C++ 库的快速和直接绑定，可通过简单的 JS API 访问这些库。

官网： https://github.com/mrousavy/react-native-mmkv

### 安装

~~~
 yarn add react-native-mmkv
~~~

or

~~~
npm install react-native-mmkv
~~~

##### 手动配置

在 `MainApplication.java` 中添加 `// Add` 标记行

~~~
import com.reactnativemmkv.MmkvModulePackage; // Add
import com.facebook.react.bridge.JSIModulePackage; // Add

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return new PackageList(this).getPackages();
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        // Add this method here!
        @Override
        protected JSIModulePackage getJSIModulePackage() {
          return new MmkvModulePackage();
        }
      };

  // ...
~~~



### 项目中引入

~~~
import { MMKV } from 'react-native-mmkv'

// --- 以下代码不能在远程 debbuger 模式下运行 ---
const storage = new MMKV()
storage.set('user.name', 'Marc')
storage.set('user.age', 21)
const username = storage.getString('user.name') // 'Marc'
const age = storage.getNumber('user.age') // 21
~~~

### 运行

安装好 `mmkv` 后，执行 `yarn android` 命令启动项目，第一次运行项目构建过程比较慢，需要耐心等待。


### 如果 `yarn android` 运行失败

如 `react-native-mmkv:downloadxxx FAILED` 的错误一般是网络不稳定，下载对应包访问超时导致，可以更换一个更稳定，响应速度更快的站点尝试；

如果对应的包链接  (eg. https://github.com/react-native-community/boost-for-react-native/releases/download/v1.63.0-0/boost_1_63_0.tar.gz)  可以直接在浏览器下载，可以正常下载的情况下，也可以多次执行 `yarn android` 命令进行重试，有时候也可以成功运行，这种情况有个前提，就是每次报错都是新的包下载异常，而不是已经安装过的或者只有一个包一直下载失败。


重试 `yarn android ` 命令也不能解决问题的情况下，在 `android` 目录下执行 `./gradlew clean` 以及清理 `node_modules` 目录，重新执行 `yarn` 和 `yarn android` 命令；

如果还不行,  删除 `/android` 和 `/android/app` 中的 `build` 文件夹，然后再执行  `yarn android`  

~~~
PS D:\code\visitapp-rn> yarn android
yarn run v1.22.17
$ react-native run-android
info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 1168 file(s) to forward-jetify. Using 16 workers...
info JS server already running.
info Installing the app...
WARNING:: Please remove usages of `jcenter()` Maven repository from your build scripts and migrate your build to other Maven repositories.
This repository is deprecated and it will be shut down in the future.
See http://developer.android.com/r/tools/jcenter-end-of-service for more information.
Currently detected usages in: project ':react-native-camera', project ':react-native-mmkv', project ':react-native-pager-view', ...

> Task :react-native-mmkv:downloadBoost
Download https://github.com/react-native-community/boost-for-react-native/releases/download/v1.63.0-0/boost_1_63_0.tar.gz

> Task :react-native-mmkv:downloadBoost FAILED
170 actionable tasks: 4 executed, 166 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':react-native-mmkv:downloadBoost'.
> javax.net.ssl.SSLException: Read timed out

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 58s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':react-native-mmkv:downloadBoost'.
> javax.net.ssl.SSLException: Read timed out

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 58s

    at makeError (D:\code\visitapp-rn\node_modules\execa\index.js:174:9)
    at D:\code\visitapp-rn\node_modules\execa\index.js:278:16
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async runOnAllDevices (D:\code\visitapp-rn\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:106:5)
    at async Command.handleAction (D:\code\visitapp-rn\node_modules\@react-native-community\cli\build\index.js:192:9)
info Run CLI with --verbose flag for more details.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
~~~



### 注意

mmkv 不能在 react-native-debugger 中运行，会出现如下错误 

`Failed to create a new MMKV instance, the native initializer function does not exist. Is the native MMKV library correctly installed? Make sure to disable any remote debugger (e.g. Chrome) to use JSI!`

![mmkv-01](D:\Documents\Work Docs\mmkv-01.png)

