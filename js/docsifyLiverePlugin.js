//default values 我的来必力留言系统安装代码
var defaultLivereOptions = {
    livereEnable: true,
    uid:   'MTAyMC81Nzk5Ny8zNDQ2MA==',
}

<!-- 我的来必力安装代码 -->

// Docsify plugin functions
function docsifyLiverePlugin(hook, vm) {

                if (!defaultLivereOptions.livereEnable) {
                    return
                }
               console.log(" afterEach 加载 docsifyLiverePlugin ") ;
              // load livere
              hook.afterEach(function(html) {
                  var comment = "<div id='lv-container' data-id='city' data-uid='"+defaultLivereOptions.uid
                 +"'></div>"
                  return html + comment;
              });

              hook.doneEach(function() {
                 (function(d, s) {
                     var j, e = d.getElementsByTagName(s)[0];
                     if (typeof LivereTower === 'function') { return; }
                     j = d.createElement(s);
                     j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
                     j.async = true;
                     e.parentNode.insertBefore(j, e);
                 })(document, 'script');
              });
}

// Docsify plugin options
window.$docsify["docsifyLivere"] = Object.assign(
    defaultLivereOptions,
    window.$docsify["docsifyLivere"]
)
window.$docsify.plugins = [].concat(docsifyLiverePlugin, window.$docsify.plugins)
