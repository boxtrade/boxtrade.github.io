//@Deprecated
// Docsify plugin functions
function docsifyTestPlugin(hook, vm) {
     console.log("触发 docsifyTestPlugin") ;
      hook.init(function() {
         console.log("init  初始化完成后调用，只调用一次，没有参数。") ;
      });

      hook.beforeEach(function(content) {
        console.log(" beforeEach 每次开始解析 Markdown 内容时调用") ;
        console.log(" ...") ;
        return content;
      });

      hook.afterEach(function(html, next) {
        console.log(" afterEach 解析成 html 后调用。") ;
        console.log(" beforeEach 和 afterEach 支持处理异步逻辑") ;
        console.log(" ...") ;
        console.log(" 异步处理完成后调用 next(html) 返回结果") ;
        next(html);
      });

      hook.doneEach(function() {
        console.log("doneEach 每次路由切换时数据全部加载完成后调用，没有参数。") ;
        console.log(" ...") ;
      });

      hook.mounted(function() {
        console.log("mounted 初始化并第一次加载完成数据后调用，只触发一次，没有参数。") ;
      });

      hook.ready(function() {
        console.log(" ready 初始化并第一次加载完成数据后调用，没有参数。") ;
      });
    }

window.$docsify.plugins = [].concat(docsifyTestPlugin, window.$docsify.plugins)
