

!function($){
 var sharedata={

  imgUrl : window.location.protocol+"//"+window.location.hostname+PUBLIC+'/img/share.jpg',

  lineLink : window.location.protocol+"//"+window.location.host+window.location.pathname,

  descContent : "11月8日北京北展剧场",
  shareTitle : '2014腾讯WE大会 连接未来 改变世界',
  appid : 'wxc9937e3a66af6dc8'
}

  
function shareFriend() { 
  
  var curindex=$(".pages .page").index($(".page.current"));
  var gameindex=$(".pages .page").index($(".page-game"));
  sharedata.descContent="11月8日北京北展剧场";
  if(curindex==gameindex&&window.gamedata.time.time){
    sharedata.descContent="我在we大会使用"+window.gamedata.time.time+"秒连线获得了抽取门票的资格，你也来试试！";
  }
 
  if(ISGAME){
    sharedata.descContent="10月14日至15日，20张免费门票限时抢";
    sharedata.shareTitle="腾讯大学邀你免费参加WE大会";
  }
 
    WeixinJSBridge.invoke('sendAppMessage',{  
      "img_url": sharedata.imgUrl,  
      "img_width": "640",  
      "img_height": "640",  
      "link": sharedata.lineLink,  
      "desc": sharedata.descContent,  
      "title": sharedata.shareTitle  
      }, function(res) {  
      _report('send_msg', res.err_msg);  
      })  
}
function shareTimeline() { 
  var curindex=$(".pages .page").index($(".page.current"));
  var gameindex=$(".pages .page").index($(".page-game"));
  sharedata.descContent="11月8日北京北展剧场";
  if(curindex==gameindex&&window.gamedata.time.time){
    sharedata.descContent="我在we大会使用"+window.gamedata.time.time+"秒连线获得了抽取门票的资格，你也来试试！";
  }
  if(ISGAME){
    sharedata.descContent="10月14日至15日，20张免费门票限时抢";
    sharedata.shareTitle="腾讯大学邀你免费参加WE大会，20张免费门票限时抢";
  }
    WeixinJSBridge.invoke('shareTimeline',{  
    "img_url": sharedata.imgUrl,  
    "img_width": "640",  
    "img_height": "640",  
    "link": sharedata.lineLink,  
    "desc": sharedata.descContent,  
    "title": sharedata.shareTitle  
    }, function(res) {  
    _report('timeline', res.err_msg);  
    });  
}  
function is_weixn(){  
  var curindex=$(".pages .page").index($(".page.current"));
  var gameindex=$(".pages .page").index($(".page-game"));
  sharedata.descContent="11月8日北京北展剧场";
  if(curindex==gameindex&&window.gamedata.time){
    sharedata.descContent="我在we大会使用"+window.gamedata.time+"秒连线获得了抽取门票的资格，你也来试试！";
  }
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