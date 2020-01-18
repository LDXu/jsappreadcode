auto();
//  被包含的名称
app_name = "刷宝"
//  正则
reg = "/\d{4}/ig"

contet = ""
packname = ""
code = ""
//--------------------------*******************--------------------------//
var thread = threads.start(function () {
    events.observeNotification();
    events.onNotification(function (notification) {
        printNotification(notification);
    });
    toast("监听中，请在日志中查看记录的通知及其内容");
    function printNotification(notification) {
        log("应用包名: " + notification.getPackageName())
        log("通知文本: " + notification.getText());
        log("通知优先级: " + notification.priority);
        log("通知目录: " + notification.category);
        log("通知时间: " + new Date(notification.when));
        log("通知数: " + notification.number);
        log("通知摘要: " + notification.tickerText);
        contet = notification.getText()
        packname = notification.getPackageName()
    }
});

num = 0
while (true) {
    num +=1 
    if(num > 50){
        toast("监听时长1分钟,接受短信失败,退出自动登录")
        console.log("监听时长1分钟,接受短信失败,退出自动登录"); 
        thread.interrupt();
    } 
    log("短信监听中...");
    sleep(2000);
    // 微信调试
    if(contet.search(app_name)!=-1){
    // 线上业务    
    // if(contet.search(app_name)!=-1 && packname == "com.cps.android.mms"){
        console.log("找到对应的短信");
        code =contet.match(/\d{4}/ig)[0]
        toast("停止监听")
        console.log("停止监听");
        thread.interrupt();
        break
    } 

}
toast("接受的验证码是:"+code)
console.log("接受的验证码是:"+code);
