// 遍历本地文件夹内文件名
var FF = new Folder("/Users/chenzhongqiang/idea/work/nodejs/docsify/boxtrade.github.io/tool/js");

folder_recursive(FF);
// 文件夹遍历加判断
function folder_recursive(folderGroup) {
    // 获取文件夹所有文件与文件夹
    var files = folderGroup.getFiles();

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        // 判断当前属性是否为文件夹，如果是，则继续遍历
        if (file instanceof Folder) {
            //对每个文件夹逐个操作
            folder_recursive(file);
            continue;
        }
        // 比如对每个文件进行处理 比如查看文件名
        alert(file.fsName)
    }
}