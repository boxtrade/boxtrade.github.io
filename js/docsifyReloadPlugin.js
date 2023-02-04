//@Deprecated
//default values
var defaultReloadOptions = {
    reloadUrlEnable: true,
    routerMode:   window.$docsify["routerMode"],
}

// Docsify plugin functions
function docsifyReloadPlugin(hook, vm) {

     console.log("触发 docsifyReloadPlugin") ;
     console.dir(vm);
     console.dir(hook);


    if (!defaultReloadOptions.reloadUrlEnable) {
        return
    }
   if (defaultReloadOptions.routerMode != 'history') {
        return
    }
    hook.ready(function () {
           console.log("触发 docsifyReloadPlugin hook.ready") ;
            <!-- 跳转页 -->
               var referrer = sessionStorage.getItem("referrerNewurl");
               //清除 sessionStorage
               sessionStorage.removeItem('referrerNewurl');
               var url = window.location.href
               console.log("当前地址 ："+ url) ;
               console.log("referrer : "+ referrer) ;
              <!--  有上个url    -->
                if (referrer) {
                    <!--  不是当前页面    -->
                  if(url != referrer){
                          <!--  不是404页面    -->
                      if(referrer.indexOf("404.html") == -1){
                            var spath = referrer.substring(window.location.origin.length);
                            var selecturl = "a[href=\'"+spath+"\']";
                            console.log("模拟跳转");
                            console.log(selecturl);
                            // 目前利用404 html 链接可以跳转，但是如果第一层 打开这个网站，可能要刷新一次 ；浏览器支持的种类没有适配；火狐 谷歌 已经测试 todo
                            Docsify.dom.find(selecturl).click();
                      }else{
                        console.log("未跳转："+ referrer);
                      }

                  }else{
                     console.log("当前页面不跳转：referrer ：！"+ referrer);
                  }

                }else{
                   console.log("未跳转：referrer 为空！");
                };

    })
}

// Docsify plugin options
window.$docsify["docsifyReloadPlugin"] = Object.assign(
    defaultReloadOptions,
    window.$docsify["docsifyReloadPlugin"]
)
window.$docsify.plugins = [].concat(docsifyReloadPlugin, window.$docsify.plugins)
