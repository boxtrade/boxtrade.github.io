# AXIOS 学习

## 参考文档

- [Axios API | Axios Docs](https://axios-http.com/zh/docs/api_intro)

# 常见问题

## # 火狐浏览器报错：已拦截跨源请求:同源策略禁止读取位于...的远程资源(CORS 请求不是 http)

### 方法一 更改浏览器配置

解决方法：参考 [火狐浏览器报错：已拦截跨源请求:同源策略禁止读取位于...的远程资源(CORS 请求不是 http)_咕噜oo的博客-CSDN博客_已拦截跨源请求:同源策略禁止读取位于](https://blog.csdn.net/qq_44081582/article/details/106449398) 

第一步：地址栏输入：**about:config**，回车，点击”**接受风险并继续**”后进入页面

第二步：搜索：**security.fileuri.strict_origin_policy**,并设置该项为**false**

最后，重启浏览器，就不会再报跨源错误了。

### 方法二  # JSONP及Axios

[JSONP及Axios - 木木子夕 - 博客园](https://www.cnblogs.com/lym-2022/p/16617831.html)

# 本来还想利用 他取个数据，他的跨域了，挡住了一切 ；还是老老实实在后端计算。。。
