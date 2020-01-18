left = 0;
top = 0;
right = device.width;
buttom = device.height / 2;
//  点击样式
// var 头像控件 = id("iv_user_avatar").boundsInside(left, top, right, buttom).exists();
// console.log(头像控件);
// if (头像控件) {
//     var button_info = id("iv_user_avatar").boundsInside(left, top, right, buttom).findOne()
//     var xy_info = button_info.bounds()
//     click(xy_info.centerX(), xy_info.centerY());
// }




function 弹窗(){
    //签到检测，收入囊中
    sleep(300)
    if (id("mine_starlert_close").exists()) {
        console.log("我的红包关闭按钮");
        var button_info = id("mine_starlert_close").findOne()
        var xy_info = button_info.bounds()
        click(xy_info.centerX(), xy_info.centerY());
        sleep(100)
    }

    if (id("image_user_task_pop_close").exists()) {
        console.log("首页进入弹窗广告");
        var button_info = id("image_user_task_pop_close").findOne()
        var xy_info = button_info.bounds()
        click(xy_info.centerX(), xy_info.centerY());
        sleep(100)
    }
 

    



    // if (id("coin_get").exists()) { 
    //     console.log("检测到签到");
    //     id("coin_get").findOne().click()
    //     // log("检测到弹窗x")
    //     // sleep(1000)
    //     // back()
        
    // }
    // if (id("iv_close").exists()) {
    //     // id("img_close").findOne().click()
    //     log("检测到弹窗_签到提醒")
    //     sleep(1000)
    //     back()
        
    // }      
    // if (id("close_img").exists()) {
    //     // id("img_close").findOne().click()
    //     log("检测到专属红包")
    //     sleep(1000)
    //     back()
        
    // }

    // if (id("tt_video_ad_close").exists()) {
    //     console.log("找到签到的关闭按钮");
    //     var button_info = id("tt_video_ad_close").boundsInside(left, top, right, buttom).findOne()
    //     var xy_info = button_info.bounds()
    //     click(xy_info.centerX(), xy_info.centerY());
    // }



    

}


// function 初始化() {
//     console.log("++++");

//     while (true) {
//         sleep(20)
//         var 主页唯一标记 = id("image_bg").exists()
//         if (主页唯一标记) {
//             console.log("第一次找到分享按钮直接退出");

//             break
//         }
//         back()
//         sleep(1000)
//         var 主页唯一标记 = id("image_bg").exists();
//         if (主页唯一标记) {
//             break
//         }
//     }

// }

function 签到() {
    var 签到任务栏 = id("img_notsign").exists();
    console.log(签到任务栏);
    if (签到任务栏) {
        var button_info = id("img_notsign").findOne()
        var xy_info = button_info.bounds()
        click(xy_info.centerX(), xy_info.centerY());
        sleep(100 )
    }

    // 点击2次签到按钮
    // num = 0
    // while(true){
    //     num += 1 
    //     if(num>20){
    //         初始化()
    //         return
    //     }
    //     var 任务按钮 = text("任务中心").exists();
    //     console.log(任务按钮);
    //     if (任务按钮) {
    //         var button_info = text("任务中心").findOne()
    //         var xy_info = button_info.bounds()
    //         click(xy_info.centerX(), xy_info.centerY());
    //         sleep(300)
    //         var 上方任务按钮 = text("任务中心").boundsInside(left, top, right, buttom).exists();
    //         console.log(上方任务按钮);
    //         if(上方任务按钮){
    //             break
    //         }
    
    //     }
    // }

    // sleep(300)
    // var 立即签到 = desc(" 立 即 签 到").exists();
    // console.log(任务按钮);
    // if (立即签到) {
    //     console.log("开始签到操作");
    //     var button_info = desc(" 立 即 签 到").findOne()
    //     var xy_info = button_info.bounds()
    //     click(xy_info.centerX(), xy_info.centerY());
    //     sleep(300)
    // }
    // 初始化()
}

// var 分享 = id("image_red_bg_icon").exists()
// 弹窗()


// 签到看视频以后的IDtt_video_ad_close
function 初始化(){

    while(true){
        sleep(500)
        var  看点控件= text("看点").exists();
        console.log('看点控件'+看点控件);
        if(看点控件){
            var button_info = text("看点").findOne()
            var xy_info = button_info.bounds()
            click(xy_info.centerX(), xy_info.centerY());
        }
        弹窗()

        var  首页活动按钮控件= id("iv_conven").exists();
        if(首页活动按钮控件){
            log("出现。。首页的活动按钮初始化完成")
            break
        }
    }
}

// 目前签到逻辑  点2次 任务按钮

// 弹窗()
// 


签到()
// 初始化()
