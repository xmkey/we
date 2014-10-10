
!function($){

var imgUrl = window.location.protocol+"//"+window.location.hostname+PUBLIC+'/img/share.jpg'; 

var lineLink =window.location.protocol+"//"+window.location.host+window.location.pathname;
// console.log(imgUrl)
// console.log(lineLink)
var descContent = "11月8日北京北展剧场";  
var shareTitle = '2014腾讯WE大会 连接未来 改变世界';  
var appid = 'wxc9937e3a66af6dc8';  
  
function shareFriend() {  

    WeixinJSBridge.invoke('sendAppMessage',{  
      "img_url": imgUrl,  
      "img_width": "640",  
      "img_height": "640",  
      "link": lineLink,  
      "desc": descContent,  
      "title": shareTitle  
      }, function(res) {  
      _report('send_msg', res.err_msg);  
      })  
}
function shareTimeline() {  
    WeixinJSBridge.invoke('shareTimeline',{  
    "img_url": imgUrl,  
    "img_width": "640",  
    "img_height": "640",  
    "link": lineLink,  
    "desc": descContent,  
    "title": shareTitle  
    }, function(res) {  
    _report('timeline', res.err_msg);  
    });  
}  
function is_weixn(){  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
    } else {  
        return false;  
    }  
}  

 
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。  
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 发送给好友  
  WeixinJSBridge.on('menu:share:appmessage', function(argv){
   

   
        shareFriend();  
  });  

    // 分享到朋友圈  
    WeixinJSBridge.on('menu:share:timeline', function(argv){  
    //   var index=$(".pages .page").index($(".page-share"));

    // window.slideTo(index+1); 
    

   
        shareTimeline();  
        });  

    // 分享到微博  
    WeixinJSBridge.on('menu:share:weibo', function(argv){
    
    
        shareWeibo();  
        });  
    }, false); 

}(Zepto)