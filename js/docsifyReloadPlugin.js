//default values
var defaultOptions = {
    reloadUrlEnable: true,
    routerMode:   window.$docsify["routerMode"],
}

// Docsify plugin functions
function plugin(hook, vm) {

    if (!defaultOptions.reloadUrlEnable) {
        return
    }
   if (defaultOptions.routerMode != 'history') {
        return
    }
    hook.afterEach(function (html) {
            <!-- 跳转页 -->
               var referrer = document.referrer;
               var url = window.location.href
               console.log(document.referrer) ;
               console.log(referrer) ;

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
                            Docsify.dom.find(selecturl).click();
                      }
                  }

                };
    })
}

// Docsify plugin options
window.$docsify["docsifyReloadPlugin"] = Object.assign(
    defaultOptions,
    window.$docsify["docsifyReloadPlugin"]
)
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
