# React Native App Android 实现热更新

使用官网默认初始化项目 `AwesomeProject`

##### 版本记录

- 操作系统：Windows11

- React Native:  0.66.2

##### Pushy 官网

https://pushy.reactnative.cn/docs/getting-started.html

## 1. 安装

React Native 项目根目录执行命令

~~~
# 全局安装命令行工具，每台电脑只用装一次
npm i -g react-native-update-cli

# 在项目中安装热更新模块
npm i react-native-update
~~~

##### 注意

`npm i react-native-update`  命令运行安装过程卡死，切换成淘宝镜像源 `npx nrm use taobao` , 重新执行 ``npm i react-native-update``，安装过程会出现命令行无进度变更效果，不知道是安装网络卡还是怎么回事，安装时间较久，需要耐心等待

### 配置 Bundle URL

在 MainApplication 中增加如下代码, **文件位置  AwesomeProject\android\app\src\main\java\com\awesomeproject\MainApplication.java **

~~~
// ... 其它代码

// 请注意不要少了这句import
import cn.reactnative.modules.update.UpdateContext;
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    // 注意这一段在 ReactNativeHost 内部！
    @Override
    protected String getJSBundleFile() {
        return UpdateContext.getBundleUrl(MainApplication.this);
    }
    // ... 其它代码
  }
}
~~~

### 重新编译

~~~
yarn android
~~~

或

~~~
npx react-native run-android
~~~

##### 如果执行报错

如  **`Error: Cannot find module 'sane/src/common'` **

![QQ截图20211108155710](D:\Documents\_My Docs\QQ截图20211108155710.png)

执行 `yarn`  安装依赖包，安装结束后再执行 `yarn android` 命令就可以了

### 禁用 Android 的 crunch 优化

android 会在生成 apk 时自动对 png 图片进行压缩，此操作既耗时又影响增量补丁的生成。为了保证补丁能正常生成，您需要在`android/app/build.gradle`中关闭此操作

~~~
...
android {
    ...
    signingConfigs { ... }
    buildTypes {
        release {
            ...
            // 添加下面这行以禁用crunch
            crunchPngs false
        }
    }
}
...
~~~

### 登录与创建应用

首先请在[https://update.reactnative.cn](https://update.reactnative.cn/)注册帐号，然后在你的项目根目录下运行以下命令：

~~~
$ pushy login
email: <输入你的注册邮箱>
password: <输入你的密码>
~~~

这会在项目文件夹下创建一个`.update`文件，注意不要把这个文件上传到 Git 等 CVS 系统上。你可以在`.gitignore`末尾增加一行`.update`来忽略这个文件。

登录之后可以创建应用。创建安卓平台应用：

~~~
$ pushy createApp --platform android
App Name: <输入应用名字>
~~~

如果你已经在网页端或者其它地方创建过应用，也可以直接选择应用：

~~~
$ pushy selectApp --platform android
1) 鱼多多(ios)
2) 招财旺(ios)

Total 2 ios apps
Enter appId: <输入应用前面的编号>
~~~

选择或者创建过应用后，你将可以在文件夹下看到`update.json`文件，其内容类似如下形式：

~~~
{
    "ios": {
        "appId": 1,
        "appKey": "<一串随机字符串>"
    },
    "android": {
        "appId": 2,
        "appKey": "<一串随机字符串>"
    }
}
~~~

你可以安全的把`update.json`上传到 Git 等 CVS 系统上，与你的团队共享这个文件，它不包含任何敏感信息。当然，他们在使用任何功能之前，都必须首先输入`pushy login`进行登录。

至此应用的创建/选择就已经成功了。下一步，代码集成。

## 2. 代码集成

安装配置完成后，确定应用编译顺利通过, 下面进行代码集成。

### 极简快速集成 

从 v7.x 版本开始提供极简的一行式集成（老版本只能使用自定义集成方式）：

~~~
import { simpleUpdate } from 'react-native-update';

// 整个应用的根组件
class App extends Component {}

// 对根组件使用simpleUpdate方法封装后导出
export default simpleUpdate(App);
~~~

此方式默认在 App 启动，以及从后台切换到前台时触发更新检查，弹出提示的内容也固定。如需自定义触发时机，以及修改界面提示等，请参考下面的自定义集成方式。

### 自定义集成

...

## 3. 发布热更新 

### 发布原生基准版本

APP 名称密码

- Awesome

- 123456abc

首先参考[文档-打包 APK](https://reactnative.cn/docs/signed-apk-android)设置签名，然后在 android 文件夹下运行./gradlew assembleRelease或./gradlew aR，你就可以在android/app/build/outputs/apk/release/app-release.apk中找到你的应用包。

### 设置签名

你可以用`keytool`命令生成一个私有密钥。在 Windows 上`keytool`命令放在 JDK 的 bin 目录中（比如`C:\Program Files\Java\jdkx.x.x_x\bin`），你可能需要在命令行中先进入那个目录才能执行此命令。

```jsx
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 1000
```

执行命令后会需要命令行需要输入如下

密钥库口令：123456abc

您的名字与姓氏是什么：sabo

您的组织单位名称是什么： (直接回车)

您的组织名称是什么：(直接回车)

您所在的城市或区域名称是什么：(直接回车)

您所在的省/市/自治区名称是什么：(直接回车)

该单位的双字母国家/地区代码是什么：(直接回车)

验证是否正确，如果正确 , 输入 y 然后回车

##### 报错 

keytool 错误: java.io.FileNotFoundException: my-release-key.keystore (拒绝访问。)

~~~
CN=sabo, OU=cbf, O=cbf, L=beijing, ST=dongcheng, C=zh是否正确?
  [否]:  y

正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 1,000 天):
         CN=sabo, OU=cbf, O=cbf, L=beijing, ST=dongcheng, C=zh
[正在存储my-release-key.keystore]
keytool 错误: java.io.FileNotFoundException: my-release-key.keystore (拒绝访问。)
java.io.FileNotFoundException: my-release-key.keystore (拒绝访问。)
        at java.io.FileOutputStream.open0(Native Method)
        at java.io.FileOutputStream.open(FileOutputStream.java:270)
        at java.io.FileOutputStream.<init>(FileOutputStream.java:213)
        at java.io.FileOutputStream.<init>(FileOutputStream.java:101)
        at sun.security.tools.keytool.Main.doCommands(Main.java:1194)
        at sun.security.tools.keytool.Main.run(Main.java:366)
        at sun.security.tools.keytool.Main.main(Main.java:359)

C:\Program Files\Java\jdk1.8.0_211\bin>
~~~

使用 Windos终端(管理员) 进入指定目录，重新执行命令,权限问题就解决了

~~~
PS C:\Program Files\Java\jdk1.8.0_211\bin> keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 1000
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:  sabo
您的组织单位名称是什么?
  [Unknown]:
您的组织名称是什么?
  [Unknown]:
您所在的城市或区域名称是什么?
  [Unknown]:
您所在的省/市/自治区名称是什么?
  [Unknown]:
该单位的双字母国家/地区代码是什么?
  [Unknown]:
CN=sabo, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown是否正确?
  [否]:  y

正在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 1,000 天):
         CN=sabo, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown
[正在存储my-release-key.keystore]
PS C:\Program Files\Java\jdk1.8.0_211\bin>
~~~

这条命令会要求你输入密钥库（keystore）和对应密钥的密码，然后设置一些发行相关的信息。最后它会生成一个叫做`my-release-key.keystore`的密钥库文件。

在运行上面这条语句之后，密钥库里应该已经生成了一个单独的密钥，有效期为 10000 天。--alias 参数后面的别名是你将来为应用签名时所需要用到的，所以记得记录这个别名。

 alias 别名   `my-key-alias`

**注意：请记得妥善地保管好你的密钥库文件，一般不要上传到版本库或者其它的地方。**

### 设置 gradle 变量

https://reactnative.cn/docs/signed-apk-android

把`my-release-key.keystore`文件放到你工程中的`android/app`文件夹下。

> my-release-key.keystore  文件在  C:\Program Files\Java\jdk1.8.0_211\bin 目录下

在项目目录 `/android/gradle.properties` (项目配置，只对所在项目有效)。如果没有 `gradle.properties` 文件需手动创建。添加如下代码（注意把其中的 `****` 替换为相应的密码）

~~~
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=123456abc
MYAPP_RELEASE_KEY_PASSWORD=123456abc
~~~

### 把签名配置加入到项目的 gradle 配置中

编辑项目目录下的`android/app/build.gradle`，添加如下的签名配置：

~~~
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
~~~

### 生成发行 APK 包

~~~
$ cd android
$ ./gradlew assembleRelease
~~~

> `cd android`表示进入 android 目录（如果你已经在 android 目录中了那就不用输入了）。`./gradlew assembleRelease`在 macOS、Linux 或是 windows 的 PowerShell 环境中表示执行当前目录下的名为 gradlew 的脚本文件，且其运行参数为 assembleRelease，注意这个`./`不可省略；而在 windows 的传统 CMD 命令行下则需要去掉`./`。

生成的 APK 文件位于`android/app/build/outputs/apk/release/app-release.apk`，它已经可以用来发布了。

**注意：第一次发布时间比较久，后面的发布会快很多**

生成 apk 包后， **项目根目录** 运行如下命令

~~~
$ pushy uploadApk android/app/build/outputs/apk/release/app-release.apk
~~~

出现如下提示，查看 Pushy 应用列表页面如果原生包列表有内容，表示基准版本上传成功

~~~
...
已成功上传apk原生包（id: 49524）
...
~~~

此 apk 的`versionName`字段(位于`android/app/build.gralde`中)会被记录为原生版本号`packageVersion`。

随后你可以选择往应用市场发布这个版本，也可以先往设备上直接安装这个 apk 文件以进行测试。

如果后续需要再次打包（例如修改原生代码或配置），请先**更改版本号**，并再次`uploadApk`到服务器端记录，否则后续生成的相同版本的原生包会由于[编译时间戳不一致而`无法获取热更新`](https://pushy.reactnative.cn/docs/faq.html#热更新报错：热更新已暂停，原因：buildtime-mismatch。)。

> 注意：如果你在上传之前就运行了新的原生版本，由于服务器端没有记录，会暂停其更新数小时。可删除原先安装的 app 再重新安装以清空暂停设置。在上传之后安装的客户端不会受此影响。

### 发布热更新版本

你可以尝试修改一行代码(譬如将版本一修改为版本二)，然后使用`pushy bundle --platform android`命令来生成新的热更新版本。

**项目根目录** 运行如下命令

~~~
$ pushy bundle --platform android
Bundling with React Native version:  0.22.2
<各种进度输出>
Bundled saved to: build/output/android.1459850548545.ppk
Would you like to publish it?(Y/N)
~~~

如果想要立即上传，此时输入 Y。当然，你也可以在将来使用`pushy publish --platform android build/output/android.1459850548545.ppk`来上传刚才打包好的热更新包。

~~~
  Uploading [========================================================] 100% 0.0s
Enter version name: <输入热更新版本名字，如1.0.0-rc>
Enter description: <输入热更新版本描述>
Enter meta info: {"ok":1}
Ok.
Would you like to bind packages to this version?(Y/N)
~~~

此时版本已经提交到 pushy 服务，但用户暂时看不到此更新，你需要先将特定的原生包版本绑定到此热更新版本上。

此时输入 Y 立即绑定，你也可以在将来使用`pushy update --platform <ios|android>`来对已上传的热更包和原生包进行绑定。除此以外，你还可以在网页端操作，简单的将对应的原生包版本拖到需要的热更新版本下即可。

~~~
┌────────────┬──────────────────────────────────────┐
│ Package Id │               Version                │
├────────────┼──────────────────────────────────────┤
│   46272    │ 2.0(normal)                          │
├────────────┼──────────────────────────────────────┤
│   45577    │ 1.0(normal)                          │
└────────────┴──────────────────────────────────────┘
共 2 个包
输入原生包 id: 46272
~~~

版本绑定完毕后，服务器会在几秒内生成差量补丁，客户端就可以获取到更新了。

后续要继续发布新的热更新，只需反复执行`pushy bundle`命令即可。

恭喜你，至此为止，你已经完成了植入代码热更新的全部工作。