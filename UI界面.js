"ui";

// 在relative中才能使用的属性    layout_alignBottom 是和别的部件的底部对齐   layout_alignParentTop 是和父部件的顶部对齐   layout_below  位置在部件之下
ui.layout(
        <relative bg="#3D8EC0CD" w="*" h="*" >
          <relative id="rl_top"  bg="#E6FFFFFF"    layout_alignParentTop="true"  w="*" h="108dp">
              <img id="im_app" h="72dp" w="72dp"   src="http://www.autojs.org/assets/uploads/profile/3-profileavatar.png"></img>
              <text id="tv_app" textSize="20sp" textStyle="bold"  marginLeft="5dp" layout_toRightOf="im_app" marginTop="20dp" w="auto" h="30dp" >悦读九州</text>
              <text id="tv_root" textSize="16sp"  marginLeft="5dp"  textColor="#00C7EE" layout_toRightOf="tv_app" marginTop="20dp" w="auto" h="30dp" layout_alignBaseline="tv_app"  >免root</text>
              <text id="tv_version" textSize="16sp"  marginLeft="5dp"  textColor="#d50f09"  layout_toRightOf="tv_root" marginTop="20dp" w="auto" h="30dp" layout_alignBaseline="tv_app"  >v 1.2</text>
              <text id="tv_desc" textSize="14sp"  marginLeft="5dp"  layout_below="@+id/im_app" marginTop="3dp" w="auto" h="auto" >
                  本软件仅支持安卓系统7.0以上手机使用
              </text>
            <button id="bt_unbind" marginLeft="5dp" layout_toRightOf="tv_desc" layout_alignParentBottom="true" >解绑卡密</button>
          </relative>
          <relative id="rl_bottom" bg="#E6FFFFFF"   w="*"  h="72dp"  marginTop="5dp" layout_alignParentBottom="true">
              <horizontal  id="ll_bottom" w="*" h="auto" gravity="center_horizontal">
                  <button id="bt_start" w="auto" h="40dp">启动脚本</button>
                  <button id="bt_exit" w="auto" h="40dp">退出脚本</button>
                  <button id="bt_update" w="auto" h="40dp">检测更新</button>
              </horizontal>
              <text  id="tv_dec" textSize="14sp"   layout_below="@+id/ll_bottom"  layout_centerHorizontal="true"  marginTop="2dp" w="*" h="auto" >
                 本软件永久更新维护，请大家放心使用
              </text>
              
          </relative>
        
        <ScrollView bg="#3D8EC0CD" marginTop="5dp"  layout_below="rl_top" layout_above="rl_bottom">
            <vertical>
            <relative id="rl_bindcard"  w="*" h="auto"  >
               
                <text  id="tv_1" textSize="18sp"  textStyle="bold"   marginTop="2dp" w="auto" h="auto" >激活码:</text>
                <input id="in_card" hint="输入您的验证码" w="170dp"  textSize="17sp" text="00000000000" inputType="text" layout_toRightOf="tv_1" marginLeft="3dp"> </input>
                <text id="tv_2" layout_toRightOf="in_card"    textStyle="bold"  marginLeft="3dp">到期:</text>
                <text id="tv_endtime" layout_toRightOf="tv_2" >0</text>
                <text id="tv_3" layout_toRightOf="tv_endtime" textStyle="bold" marginLeft="3dp"  >号</text>
              <text  id="tv_carddesc" textSize="14sp"   layout_below="tv_1"   marginTop="7dp" w="*" h="auto" >
                 用户激活码，只可一机一码使用，注册成功后计算到期时间，软件随机变量处理，有效预防封号，随机增加单次阅读篇数
              </text>
              
          </relative>
          <relative id="rl_config" bg="#E6FFFFFF"  w="*" h="auto"  marginTop="5dp" >
          <text  id="tv_11" textSize="18sp"  textStyle="bold"   marginTop="2dp" margin="0 15" w="auto" h="auto" >基本设置:</text>
          <text id="tv_12" layout_toRightOf="tv_11" layout_alignBottom="tv_11"  textStyle="bold" marginLeft="5dp"  >定时启动:</text>
          <input id="in_time_start" text="0"   w="30dp" layout_alignBottom="tv_11" marginLeft="5dp"  layout_toRightOf="tv_12" inputType="number" />
          <text id="tv_13" layout_toRightOf="in_time_start"  layout_alignBottom="tv_11"  textStyle="bold" marginLeft="5dp"  >结束:</text>
          <input id="in_time_end" text="7"    w="30dp" layout_alignBottom="tv_11"  layout_toRightOf="tv_13" marginLeft="5dp"   inputType="number" />
          <text id="tv_14" layout_toRightOf="in_time_end"  layout_alignBottom="tv_11"   marginLeft="5dp" textColor="#FDD835"  >（0到23）</text>
        <android.widget.Switch id="sw_wuzhangai"  layout_below="tv_11" textStyle="bold"  checked="false" text="无障碍服务(必打开):"  textStyle="bold"  textSize="18sp" ></android.widget.Switch>
        <android.widget.Switch id="sw_floaty"  marginLeft="10" layout_alignBottom="sw_wuzhangai" layout_toRightOf="sw_wuzhangai"  textStyle="bold"  checked="false" text="悬浮窗权限及弹出权限(可选):"  textStyle="bold"  textSize="18sp"  ></android.widget.Switch>
      
        <android.widget.Switch id="sw_clear"  layout_below="sw_wuzhangai" textStyle="bold"  checked="false" text="清理垃圾:"  textStyle="bold"  textSize="18sp" ></android.widget.Switch>
        <android.widget.Switch id="sw_weixin"  marginLeft="10" layout_alignBottom="sw_clear" layout_toRightOf="sw_clear"  textStyle="bold"  checked="false" text="微信登录:"  textStyle="bold"  textSize="18sp"  ></android.widget.Switch>
         

         </relative>

         <relative id="rl_relax" bg="#E6FFFFFF"  w="*" h="auto"  marginTop="5dp" >
               
         <text  id="tv_21" textSize="18sp"  textStyle="bold"   marginTop="2dp" margin="0 15" w="auto" h="auto" >深夜时段:</text>
          <text id="tv_22" layout_toRightOf="tv_21" layout_alignBottom="tv_21"  textStyle="bold" marginLeft="5dp"  >深夜开始:</text>
          <input id="in_time_start" text="1"  w="30dp" layout_alignBottom="tv_21"  marginLeft="5dp"   layout_toRightOf="tv_22" inputType="number" />
          <text id="tv_23" layout_toRightOf="in_time_start"  layout_alignBottom="tv_21"  textStyle="bold" marginLeft="5dp"  >结束:</text>
          <input id="in_time_end" text="7"  w="30dp"  layout_alignBottom="tv_21"  layout_toRightOf="tv_23" marginLeft="5dp"   inputType="number" />
          <text id="tv_24" layout_toRightOf="in_time_end"  layout_alignBottom="tv_21"   marginLeft="5dp"   textColor="#FDD835"  >（时段可选）</text>
          <text id="tv_25"   layout_below="tv_22"  marginTop="5dp"    textSize="13sp" >
              开启深夜模式,在深夜时段内暂停对应平台阅读
              </text>
           <text id="tv_26" layout_below="tv_25"  textSize="18sp"  textStyle="bold"  textColor="#FDD835"  >*重要提醒*</text>
           <text id="tv_27" layout_toRightOf="tv_26"  layout_toRightOf="tv_26"  layout_alignBottom="tv_26"   marginLeft="5dp"  >
               左右滑屏选择阅读平台及设置自动提现
           </text>
            <text id="tv_28" layout_below="tv_26"  textSize="18sp" textStyle="bold"  >选择阅读平台</text>
            <text id="tv_appnumber"  layout_alignBottom="tv_28" layout_toRightOf="tv_28">(0-44)</text>
            <text id="tv_29"  layout_alignBottom="tv_appnumber" layout_toRightOf="tv_appnumber" marginLeft="7dp">增加稳定收益平台,请联系代理或作者</text>
        </relative>
       
        <checkbox  id="cb_all" text="全选" marginLeft="16"/>
        <list id="appList" >
                        <card w="*" h="50" margin="10 5" cardCornerRadius="2dp"
                            cardElevation="1dp" foreground="?selectableItemBackground">
                            <horizontal >
                                <checkbox id="done" marginLeft="3" marginRight="3" checked="{{this.done}}" />
                                <text id="title" text="{{this.title}}" textColor="#222222" maxLines="1" marginLeft="4" marginRight="6" />
                                <text text="下载" textColor="blue" maxLines="1" marginLeft="3" marginRight="3" />
                                <text text="今日已读:" textColor="green" maxLines="1" />
                                <input id="abd" maxLines="1" text="0" textColor="green" />
                                <text text="总时长:" textColor="blue" maxLines="1" />
                                <input id="{{this.id}}" maxLines="1" text="{{this.allsum}}" />
                                <text text="分钟" textColor="blue" maxLines="1" />
                                <android.widget.Switch id="sw_app"  marginLeft="10" layout_alignBottom="sw_clear" layout_toRightOf="sw_clear"  textStyle="bold"  checked="false" text=""  textStyle="bold"  textSize="18sp"  ></android.widget.Switch>
                            </horizontal>
                        </card>
            </list>
  
               
              
            </vertical>
        </ScrollView>
    </relative>
)

//ui.webview.loadUrl("http://www.autojs.org");

var i=0
ui.bt_start.on("click", function () {
    console.log("开始脚本");
    toast("开始脚本")
    i=i+1
    threads.start(function(){
        
        engines.execScript("脚本:"+i, geteval());
    } )
  
    
})

ui.bt_exit.on("click",function(){
    ui.finish()
    
})
ui.bt_update.on("click",function(){
    toast("检测更新")
   

   engines.all().forEach(en => {
      log(en.getSource().getName())
      en.forceStop()
    
  });
   
})



function geteval(){
    isyun=1
    //var yunurl = "https://gitee.com/zhangshu345012/ceshi/raw/master/%E4%BA%91%E7%AB%AF%E6%BA%90%E7%A0%81.js"
  var yunurl="https://gitee.com/zhangshu345012/ceshi/raw/master/test1.js"

        var r = http.get(yunurl);
        log("code = " + r.statusCode);
        if(r.statusCode==200){
            let b=r.body.string()
            console.log("加载："+yunurl+"\n"+b);
            return b
        }else{
            return ""
        }
    
    
}


