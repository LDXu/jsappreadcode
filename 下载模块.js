//   参数1 url apk的下载地址
//   参数2 app_name  下载的应用名称



// var url = 'http://apk.fuzhifutech.com/fzf-agent-release-09-18-1.0.9.apk';
// var url = 'https://jnwork.oss-cn-beijing.aliyuncs.com/app/%E5%BE%AE%E5%8D%9A_9.7.2.1.apk';
var url = 'http://apk.fuzhifutech.com/fzf-user--08-12-v1.1.9.apk';
var app_name = "哈哈"
filePath = download(url, app_name)
// install_app(filePath)
function download(url, name) {
    app_name2 = name
    // 获取APP的名字
    // 在每个空格字符处进行分解。
    file_name_url = url.split("/");
    file_name = file_name_url[file_name_url.length - 1]
    console.log('写入APP的名字是---->' + file_name);
    // 设置APP的路径
    file_path_root = files.getSdcardPath()

    filePath = file_path_root + "/" + file_name


    importClass('java.io.FileOutputStream');
    importClass('java.io.IOException');
    importClass('java.io.InputStream');
    importClass('java.net.MalformedURLException');
    importClass('java.net.URL');
    importClass('java.net.URLConnection');
    importClass('java.util.ArrayList');

    var url = new URL(url);
    var conn = url.openConnection(); //URLConnection
    var inStream = conn.getInputStream(); //InputStream
    var fs = new FileOutputStream(filePath); //FileOutputStream
    var connLength = conn.getContentLength(); //int
    var buffer = util.java.array('byte', 1024); //byte[]
    var byteSum = 0; //总共读取的文件大小
    var byteRead; //每次读取的byte数
    log('要下载的文件大小=');
    log(connLength);
    var threadId = threads.start(function () {

        while (1) {
            var 当前写入的文件大小 = byteSum;
            var progress = (当前写入的文件大小 / connLength) * 100;
            if (progress > 0.1) {
                var progress = parseInt(progress).toString() + '%';
                ui.run(function () {
                    console.log("progress--->", progress);
                    toast(name + "下载进度" + progress)
                    // w.progressNum.setText(progress);
                });
                if (当前写入的文件大小 >= connLength) {
                    break;
                }
            }
            sleep(1000);
        }
    });
    while ((byteRead = inStream.read(buffer)) != -1) {
        byteSum += byteRead;
        //当前时间
        currentTime = java.lang.System.currentTimeMillis();
        fs.write(buffer, 0, byteRead); //读取
    }
    threadId && threadId.isAlive() && threadId.interrupt();
    toastLog('下载完成');
    //   w.close()
    //   sleep(1000)
    //   return filePath
    install_app(filePath)

}

function install_app(filePath) {
    ////--------------安装--------------////
    //  读取 apk
    app.viewFile(filePath)
    for (let i = 0; i < 50; i++) {
        // is_first = textMatches(/(始.*|.*终.*|.*允.*|.*许)/).findOne(1000);
        toast("检测中....")
        is_first = text("始终允许").findOne(1000)
        if (is_first) {
            toast("检测第一次安装")
            is_first.click()
            toast("安装初始化已完成1")
            break
        }
        is_install = text("安装").findOne(1000)
        if (is_install) {
            toast("安装初始化已完成2")
            // is_install.click()
            break
        }
        is_open = text("打开").findOne(1000)
        if (is_open) {
            toast("无需安装")
            return
        }
    }
    is_install = text("安装").findOne(10000)
    is_install.click()
    for (let i = 0; i < 20; i++) {
        toast("安装中...")
        is_open = text("打开").findOne(1000)
        if (is_open) {
            toast("安装完成")
            break
        }
    }
}






// is_first = textMatches(/(始.*|.*终.*|.*允.*|.*许)/).findOne(1000);
// console.log(is_first);

// is_install = text("安装").findOne(1000)
// console.log(is_install);