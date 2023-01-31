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

## [routerMode](https://docsify.js.org/#/zh-cn/configuration?id=routermode)

- 类型: `String`
- 默认: `hash`

```
window.$docsify = {
  routerMode: 'history', // default: 'hash'
};
```