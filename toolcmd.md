# git

```shell
git remote set-url origin  git@github.com:boxtrade/docsify_sample.git
```

# docsify

```shell
# 本地启动 脚本 
docsify serve docs
```

# js

```js
# 本地启动 脚本 
docsify serve docs
```

**String对象的方法**

**方法一: indexOf()   (推荐)**

```js
var str = "123"
 console.log(str.indexOf("2") != -1); // true
```

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。

# docsify

## gitTalk

参考 https://zhuanlan.zhihu.com/p/81270400

```js
const gitalk = new Gitalk({
    // 这个需要在github上申请一个OAuth application
    clientID: 'fb8d2e2a61f769485c8b',   // GitHub Application Client ID
    clientSecret: 'f038d906cc7d4d1f4961b2be48602fa06c9f072f',   // GitHub Application Client Secret
    repo: 'developer-note', // //存储你评论 issue 的 Github 仓库名
    owner: 'BrucePhoebus',
    admin: ['BrucePhoebus'],    // 这个仓库的管理员
    distractionFreeMode: true,  // 是否添加全屏遮罩
    id: window.location.pathname    // 页面的唯一标识，gitalk 会根据这个标识自动创建的issue的标签,我们使用页面的相对路径作为标识
})
// 监听URL中hash的变化，如果发现换了一个MD文件，那么刷新页面，解决整个网站使用一个gitalk评论issues的问题。
window.onhashchange = function (event) {
    if (event.newURL.split('?')[0] !== event.oldURL.split('?')[0]) {
        location.reload()
    }
}
```

## livere

参考 

```js
// window.livereOptions = {
  //   refer: location.pathname.replace(CONFIG.root, '').replace('index.html', '')
  // };
```

### docsify url 中存在 # 号，不符合url规则，导致插件识别path 错误

https://github.com/docsifyjs/docsify/issues/720

[issues](https://github.com/docsifyjs/docsify/issues/720)

## [routerMode](https://docsify.js.org/#/zh-cn/configuration?id=routermode)

- 类型: `String`
- 默认: `hash`

```
window.$docsify = {
  routerMode: 'history', // default: 'hash'
};
```

## 用于高亮字展示 解释

# [简单词汇表](https://github.com/stijn-dejongh/docsify-glossary#docsify-glossary-sd-development-fork)

# docsify-glossary: SD Development Fork

## vega_docsify 用于展示各种图形 树形图 蜡烛图

# [Vega in docsify  ](https://github.com/chenGit1763113879QQ/vega_docsifyhttps://github.com/chenGit1763113879QQ/vega_docsify)

[Docsify](https://docsify.js.org/) is a powerful and easy-to-use documentation site generator. You can quickly publish your documentation on github, ...

https://blog.csdn.net/UbuntuTouch/article/details/106664886

https://zhuanlan.zhihu.com/p/234762889

## 广告位

[docsify-plugin-ethicalads - A docsify.js plugin for rendering ad placements from EthicalAds](https://jhildenbiddle.github.io/docsify-plugin-ethicalads/#/?id=demo)

函数式

# [docsify-latex](https://scruel.github.io/docsify-latex/#/?id=docsify-latex)

## [方法四：客户端JS代码跳转](https://link.zhihu.com/?target=http%3A//www.aliyun01.com/%3Fp%3D5140)

```html
<script language="javascript" type="text/javascript">
window.location.href="http://www.aliyun01.com";
</script>
```

**自定义背景**

目前的背景是随机生成的渐变色，我们自定义背景色或者背景图。在文档末尾用添加图片的 Markdown 语法设置背景。

```markdown
<!-- 网站图标 -->
![logo](_media/icon.jpg)

# docsify <small>3.5</small>

> 一个神奇的文档网站生成器。

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

[GitHub](https://github.com/docsifyjs/docsify/)

<!-- 背景图片 -->
![](_media/玩家.png)

<!-- 背景色 -->
![color](#f0f0f0)

————————————————
版权声明：本文为CSDN博主「Baret-H」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_45173404/article/details/122683872
```

# handling redirects

view-source:https://upbeat-noyce-f5634d.netlify.app/tutorials/hello-ml5?id=demo

[view-source](view-source:https://upbeat-noyce-f5634d.netlify.app/tutorials/hello-ml5?id=demo)

## 工具分类索引

**[常用文档](https://tool.oschina.net/apidocs)**

- [JDK6中文文档](https://tool.oschina.net/apidocs/apidoc?api=jdk-zh)
- [JDK7英文文档](https://tool.oschina.net/apidocs/apidoc?api=jdk_7u4)
- [Android文档](https://tool.oschina.net/apidocs/apidoc?api=android/reference)
- [JavaEE6.0文档](https://tool.oschina.net/apidocs/apidoc?api=javaEE6)
- [Spring3文档](https://tool.oschina.net/apidocs/apidoc?api=Spring-3.1.1)
- [Scala文档](https://tool.oschina.net/apidocs/apidoc?api=scala-docs-2.9.2)
- [jQuery参考](https://tool.oschina.net/apidocs/apidoc?api=jquery)
- [PHP中文文档](https://tool.oschina.net/apidocs/apidoc?api=php-zh)
- [MySQL5.5手册](https://tool.oschina.net/apidocs/apidoc?api=mysql-5.5-en)
- [C++参考手册](https://tool.oschina.net/apidocs/apidoc?api=cpp%2Fen%2Fcpp.html)
- [更多(120+)...](https://tool.oschina.net/apidocs)

**[常用对照表](https://tool.oschina.net/commons)**

- [HTTP Mime-type](https://tool.oschina.net/commons)
- [HTML转义字符](https://tool.oschina.net/commons?type=2)
- [RGB颜色参考](https://tool.oschina.net/commons?type=3)
- [ASCII对照表](https://tool.oschina.net/commons?type=4)
- [HTTP状态码详解](https://tool.oschina.net/commons?type=5)
- [Java运算符对照](https://tool.oschina.net/commons?type=6)
- [C语言运算符对照](https://tool.oschina.net/commons?type=6#c_)
- [PHP运算符对照](https://tool.oschina.net/commons?type=6#php_)
- [Python运算符对照](https://tool.oschina.net/commons?type=6#python_)
- [TCP/UDP端口参考](https://tool.oschina.net/commons?type=7)
- [网页字体参考](https://tool.oschina.net/commons?type=8)

**[代码处理](https://tool.oschina.net/#)**

- [代码着色/高亮](https://tool.oschina.net/highlight)
- [代码对比/归并](https://tool.oschina.net/diff)
- [XML代码格式化](https://tool.oschina.net/codeformat/xml)
- [CSS代码格式化](https://tool.oschina.net/codeformat/css)
- [JSON代码格式化](https://tool.oschina.net/codeformat/json)
- [JS代码格式化](https://tool.oschina.net/codeformat/js)
- [Java代码格式化](https://tool.oschina.net/codeformat/java)
- [SQL代码格式化](https://tool.oschina.net/codeformat/sql)
- [LESS编译器](https://tool.oschina.net/less)
- [MarkDown编译器](https://tool.oschina.net/markdown)
- [MathML编辑](https://tool.oschina.net/mathml)

**[Html|Js|Css工具](https://tool.oschina.net/#)**

- [JS在线编辑(RunJS)](http://runjs.cn)
- [JS代码压缩](https://tool.oschina.net/jscompress)
- [CSS代码压缩](https://tool.oschina.net/jscompress)
- [HTML代码压缩](https://tool.oschina.net/jscompress?type=2)
- [多JS文件合并压缩](https://tool.oschina.net/jscompress?type=3)
- [HTML/UBB转换](https://tool.oschina.net/ubb)
- [CSV转HTML表格](https://tool.oschina.net/csv2tb)
- [jQuery分页插件](https://tool.oschina.net/jquery)
- [jQuery语法着色](https://tool.oschina.net/jquery?type=2)
- [jQuery对话框插件](https://tool.oschina.net/jquery?type=3)
- [jQuery提示插件](https://tool.oschina.net/jquery?type=4)

**[加密/转码工具](https://tool.oschina.net/#)**

- [[新]生成htpasswd](https://tool.oschina.net/htpasswd)
- [BASE64编码解码](https://tool.oschina.net/encrypt?type=3)
- [加密/解密](https://tool.oschina.net/encrypt)
- [散列/哈希](https://tool.oschina.net/encrypt?type=2)
- [图片转BASE64编码](https://tool.oschina.net/encrypt?type=4)
- [进制转换](https://tool.oschina.net/hexconvert)
- [Native转UTF-8](https://tool.oschina.net/encode?type=2)
- [Native转ASCII](https://tool.oschina.net/encode?type=3)
- [URL转码](https://tool.oschina.net/encode?type=4)
- [生成QrCode](https://tool.oschina.net/qr)
- [QrCode解码](https://tool.oschina.net/qr?type=2)

**[其他实用工具](https://tool.oschina.net/#)**

- [正则表达式测试](https://tool.oschina.net/regex)
- [代码对比/归并](https://tool.oschina.net/diff)
- [Postgresql9.1文档](https://tool.oschina.net/apidocs/apidoc?api=postgresql9.1)
- [Rails文档](https://tool.oschina.net/apidocs/apidoc?api=rails)
- [Hibernate文档](https://tool.oschina.net/apidocs/apidoc?api=hibernate-4.1.4)
- [Struts文档](https://tool.oschina.net/apidocs/apidoc?api=struts-2.3.4)
- [jQuery插件演示](https://tool.oschina.net/jquery)
- [JS/CSS编辑测试](http://runjs.cn)
- [代码格式化](https://tool.oschina.net/codeformat)
- [文档大全](https://tool.oschina.net/apidocs)
- [JS/CSS压缩](https://tool.oschina.net/jscompress)