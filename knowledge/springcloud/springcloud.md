# 想法 缘起

一个人的力量有限，我先搭建一个框架，形成一个开源联盟 ；提供代码和服务

第一步，先做基础数据 

对标 akshare ,提供代码和服务 

注册中心 学习 

# 多语言 多应用融合

[Python写的微服务如何融入Spring Cloud体系？_安科网](https://www.ancii.com/ah9zgm4dg/)

# springcloud 开源项目参考

https://github.com/chenGit1763113879QQ/jeecg-boot/tree/master

# 行情数据收集模块

- 外部接口引用模块

- 数据异步存储模块

- 数据清洗模块 

- 对外调用模块 直接jar,http,python 





# 缓存选型

本地 https://zhuanlan.zhihu.com/p/348695568 # 高性能缓存 Caffeine 原理及实战

https://zhuanlan.zhihu.com/p/109226599



### SpringBoot 缓存之 @Cacheable 详细介绍

https://blog.csdn.net/u012102536/article/details/126097079



# swagger

https://blog.csdn.net/qq118034951/article/details/124622662

springboot 集成Swagger2启动报错

Failed to start bean ‘documentationPluginsBootstrapper’; nested exception is java.lang.NullPointerException
问题描述

org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException

    1

原因分析：

Springboot2.6以后将SpringMVC 默认路径匹配策略从AntPathMatcher 更改为PathPatternParser，导致出错
————————————————
版权声明：本文为CSDN博主「甘v果」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq118034951/article/details/124622662
