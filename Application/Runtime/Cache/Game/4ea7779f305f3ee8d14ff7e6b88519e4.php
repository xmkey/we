<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="ch">
<head>
<title>WE大会</title>
<meta charset="utf-8" />
<meta name="keywords" content="WE大会" />
<meta name="description" content="WE大会" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<script type="text/javascript" src="http://tajs.qq.com/stats?sId=37756207" charset="UTF-8"></script>
<meta name="sharecontent" data-msg-img="http://www.liveapp.cn/userfiles/video/tmp/14586/541bf5545a226.jpg" data-msg-title="WE大会" data-msg-content="这里没有商业或者公司竞争,只有前沿的科学思想和最新技术，还有天马行空般的想象力。" data-msg-callBack="" data-line-img="http://www.liveapp.cn/userfiles/video/tmp/14586/541bf55b2dab0.jpg" data-line-title="WE大会" data-line-callBack=""/> 
<script type="text/javascript">
  var PUBLIC="/personal/xmkey/we/Public";
  var ROOT="/personal/xmkey/we";
  var APP="/personal/xmkey/we/index.php";
</script>  
<link rel="stylesheet" href="/personal/xmkey/we/Public/css/main.css?3">
  

</head>
<body class="app">
 
<div class="app-loading">
    <div class="loading-bubbles">
      <div class="bubble-container">
        <div class="bubble"></div>
      </div>
      <div class="bubble-container">
        <div class="bubble"></div>
      </div>
      <div class="bubble-container">
        <div class="bubble"></div>
      </div>
    </div>
  </div>

<div class="bg">
    <canvas id="starfield"  width="100%" height="100%"></canvas>
</div>
<div class="light"><div class="inner"></div></div>
<div class="motion">
<section class="pages">

<!--  <section class="page page-we-02 page-home">
    <section class="page-content ">
      <h1 class="we-logo" data-animation="slideToTop" data-delay="0" data-duration="400"></h1>
      <p class="we-font font-06" data-animation="slideToTop" data-delay="200" data-duration="400">2014</p>
      <p class="we-font font-07" data-animation="slideToTop" data-delay="400" data-duration="400">Nothing but the Future</p>
       <p class="we-font font-101" data-animation="zoom2" data-delay="800" data-duration="400">连接未来</p>
       
       <p class="we-font font-04" data-animation="slideToTop" data-delay="1000" data-duration="800"  data-function="ease-out">马化腾</p>
      <p class="we-font font-05" data-animation="slideToTop" data-delay="1000" data-duration="800"  data-function="ease-out">腾讯公司首席执行官兼董事会主席</p>
      
    </section>
    
    
 </section> 
  <section class="page page-we-03 page-time">
    <section class="page-content">
      <p class="we-font font-09" data-animation="zoom" data-duration="400">11月8日</p>
      <p class="we-font font-10" data-animation="zoom" data-delay="200" data-duration="400">北京•北展剧场</p>
      <div class="we-icon icon-clock clock-01" data-animation="zoom" data-delay="500" data-duration="500"><i></i></div>
      <p class="we-font font-11" data-animation="zoom" data-delay="700" data-duration="500">12:00 入场</p>
      <div class="we-icon icon-clock clock-02" data-animation="zoom" data-delay="1000" data-duration="700"><i></i></div>
      <p class="we-font font-12" data-animation="zoom" data-delay="1200" data-duration="700">13:00 - 18:00  12场未来演讲</p>
    </section>
  </section>
  <section class="page page-we-04">
    <section class="page-content">
      <h3 class="we-font guest-title" data-animation="fadeInToBottom" data-duration="1000">为未来而来的他们</h3>
      <ul class="guest-list">
        <li class="list-item" data-animation="slideToRight" data-delay="200" data-duration="400"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_01.jpg" alt="Martin Nowak"></span><span class="item-name">Martin Nowak</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="200" data-duration="400"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_02.jpg" alt="Bob Richards"></span><span class="item-name">Bob Richards</span></li>
        <li class="list-item" data-animation="slideToRight" data-delay="400" data-duration="600"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_03.jpg" alt="David Wallerstein"></span><span class="item-name">David Wallerstein</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="400" data-duration="600"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_04.jpg" alt="Jose Carmena"></span><span class="item-name">Jose Carmena</span></li>
        <li class="list-item" data-animation="slideToRight" data-delay="600" data-duration="800"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_05.jpg" alt="Jane Poynter"></span><span class="item-name">Jane Poynter</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="600" data-duration="800"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_06.jpg" alt="Daniel Leithinger"></span><span class="item-name">Daniel Leithinger</span></li>
      </ul>
    </section>
  </section>
  <section class="page page-we-05">
    <section class="page-content">
      <h3 class="we-font guest-title" data-animation="fadeInToBottom" data-duration="1000">为未来而来的他们</h3>
      <ul class="guest-list">
        <li class="list-item" data-animation="slideToRight" data-delay="200" data-duration="400"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_07.jpg" alt="苏运升"></span><span class="item-name">苏运升</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="200" data-duration="400"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_08.jpg" alt="王俊"></span><span class="item-name">王俊</span></li>
        <li class="list-item" data-animation="slideToRight" data-delay="400" data-duration="600"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_09.jpg" alt="Rajinder Sodhi"></span><span class="item-name">Rajinder Sodhi</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="400" data-duration="600"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_10.jpg" alt="Ben Waber"></span><span class="item-name">Ben Waber</span></li>
        <li class="list-item" data-animation="slideToRight" data-delay="600" data-duration="800"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_11.jpg" alt="王阳"></span><span class="item-name">王阳</span></li>
        <li class="list-item" data-animation="slideToLeft" data-delay="600" data-duration="800"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_12.jpg" alt="Tomonori Kagaya"></span><span class="item-name">Tomonori Kagaya</span></li>
      </ul>
    </section>
  </section> -->
  <section class="page page-we-06">
    <section class="page-content">
      <p class="we-font font-13" data-animation="slideToTop" data-duration="400">腾讯大学邀您来抢</p>
      <p class="we-font font-14" data-animation="slideToTop" data-delay="200" data-duration="400">we大会免费门票，限量20张！</p>
      <p class="we-font font-15" data-animation="slideToTop" data-delay="400" data-duration="500">游戏规则:</p>
      <p class="we-font font-16" data-animation="slideToTop" data-delay="450" data-duration="500">一笔连接，点亮 “W” “E” 即可参与免费</p>
      <p class="we-font font-17" data-animation="slideToTop" data-delay="500" data-duration="500">门票抽奖！</p>
      <div class="m-link">
        <div class="we-btn btn-stargame" data-animation="slideToTop" data-delay="600" data-duration="700"></div>
      </div>
      <p class="we-font font-20" data-animation="slideToTop" data-delay="800" data-duration="800" id="jsKnowMore">了解we大会&gt;</p>
      <p class="we-font font-18" data-animation="slideToTop" data-delay="800" data-duration="1000">小伙伴注意了： </p>
      <p class="we-font font-19" data-animation="slideToTop" data-delay="800" data-duration="1000">本次we大会免费门票活动，不收取任何手续费等费用</p>
    </section>
  </section>
  <section class="page page-we-07 page-game" >
    <section class="page-content game-content ">
      <p class="we-font font-empty" data-animation="followSlide" data-duration="400"><!-- <span class="we-font font-21">TIME</span> --><span class="timebox">TIME<span class="time-doing">00:00</span></span><span class="we-font font-22" id="change-game"><span></span>太难，换一个 试试？</span></p>
      <div class="we-funcs" data-animation="followSlide" data-delay="200" data-duration="600">
        <a href="#" class="we-func logo-w "></a><a href="#" class="we-func logo-e"></a>
      </div>
      <div class="we-funcs funcs2" data-animation="followSlide" data-delay="400" data-duration="600">
        <div class="game-container" id="game-container" data-width="300" data-height="300"></div>
        
      </div>
     
      <p class="we-font font-23 skip-game"  data-animation="followSlide" data-delay="500" data-duration="800"><span></span>你已经获得了抽奖资格！跳过游戏></p>
    </section>
    <section class="page-content share-content " >
      <h3 class="result-title" data-animation="followSlide" data-duration="400"><span id="gametime"></span>秒！</h3>
      <p class="we-font font-24" data-animation="followSlide" data-delay="200" data-duration="400">恭喜你！可以参加抽奖啦！</p>
      <p class="we-font font-25" data-animation="followSlide" data-delay="400" data-duration="500">请输入个人信息，以便中奖后有专人联系哦。</p>
      <div class="we-form" data-animation="followSlide" data-delay="500" data-duration="600">
        <p class="form-item">
          <label for="username" class="we-font font-26">姓名</label><input type="text" name="" id="username">
        </p>
        <p class="form-item">
          <label for="tel" class="we-font font-27">电话</label><input type="tel" name="" id="tel">
        </p>
      </div>
      <div class="we-btn btn-share" data-animation="slideToTop" data-delay="600" data-duration="700"></div>
      <p class="we-font font-28" data-animation="slideToTop" data-delay="700" data-duration="800">请关注“腾讯大学“官方微信号，我们将在X月X日公布中 奖信息，届时您也可以回复”WE“查看。</p>
      
    </section>
  </section>
  <!-- <section class="page page-we-last" >
    <section class="page-content">
      <a href="http://www.lebroadway.cc/?ad=wx-we2014" class="link-buy">
      <h1 class="we-logo" data-animation="followSlide" data-duration="400"></h1>
      <p class="we-font font-06" data-animation="followSlide" data-delay="200" data-duration="400">2014</p>
      <div class="fade-el">
      <p class="we-font font-29" data-animation="followSlide" data-delay="400" data-duration="700">即刻触摸未来世界</p>
      </div>
      <div class="we-cont cont-hand" data-animation="followSlide" data-delay="600" data-duration="700">
        <i class="we-icon icon-hand" ></i>
        <p class="we-font font-104">马上点击购票</p>
      </div>
      <p class="we-font font-30" data-animation="followSlide" data-delay="800" data-duration="700">艾迪票务乐百汇为本次大会指定合作伙伴 </p>
      </a>
     
      <p class="we-font font-31" data-animation="followSlide" data-delay="1000" data-duration="700">设计机构：pinnadesign</p>
      <a href="tel:18680359618"  class="link-design">18680359618</a>
      
    </section>
  </section> -->
</div>
</section><a href="javascript:void(0);" class="u-guideTop z-move"></a>
<div class="voice-cont"><div class="icon-voice"></div></div>

<footer class="app-footer">
</footer>
<section class="page-facade guest-pop game-pop hide">
  <section class="page-content">
    <div class="outer" id="slider">
      <ul class="u_sper">
        <li>
          <section class="page-content ">
            <h1 class="pop-logo"></h1>
            <p class="pop-font pop-font-01">2014</p>
            <p class="pop-font pop-font-02">Nothing but the Future</p>
            <p class="pop-font pop-font-03"> 11月8日 北京•北展剧场</p>
            <div class="we-icon icon-clock clock-03" data-animation="zoom" data-delay="500" data-duration="500" style="display:block"><i></i></div>
            <p class="pop-font pop-font-04"> 13：00-18：00 12场关乎未来的演讲</p>
            <p class="pop-font pop-font-05">12场关乎未来的演讲</p>
            <!-- <p class="pop-font pop-font-06">大数据、外太空探索、创新3D交互设备、</p>
            <p class="pop-font pop-font-07">脑机接口，人工智能，基因技术… … </p> -->
            <p class="pop-font pop-font-08">门票</p>
            <p class="pop-font pop-font-09">599元、999元、1999元、2999元、9999元</p>
          </section>
        </li>
        <li>
          <section class="page-content">
            <ol class="pop-guest-list">
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_01.jpg" alt="Martin Nowak"></span><span class="item-name">Martin Nowak</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_02.jpg" alt="Bob Richards"></span><span class="item-name">Bob Richards</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_03.jpg" alt="David Wallerstein"></span><span class="item-name">David Wallerstein</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_04.jpg" alt="Jose Carmena"></span><span class="item-name">Jose Carmena</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_05.jpg" alt="Jane Poynter"></span><span class="item-name">Jane Poynter</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_06.jpg" alt="Daniel Leithinger"></span><span class="item-name">Daniel Leithinger</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_07.jpg" alt="苏运升"></span><span class="item-name">苏运升</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_08.jpg" alt="王俊"></span><span class="item-name">王俊</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_09.jpg" alt="Rajinder Sodhi"></span><span class="item-name">Rajinder Sodhi</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_10.jpg" alt="Ben Waber"></span><span class="item-name">Ben Waber</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_11.jpg" alt="王阳"></span><span class="item-name">王阳</span></li>
              <li class="list-item"><span class="item-img"><img data-src="/personal/xmkey/we/Public/pic/guest_img_12.jpg" alt="Tomonori Kagaya"></span><span class="item-name">Tomonori Kagaya</span></li>
            </ol>
          </section>
        </li>
      </ul>
    </div>
    <a href="#" class="pop-btn pop-close"></a>
    <div class="pop-dots">
      <span class="dot on"></span><span class="dot"></span>
    </div>
  </section>
</section>
<div class="u-maskLayer m-weixinShareLayer">
  <img src="/personal/xmkey/we/Public/img/we_share.png">
  <p class="we-font font-32">合作机构：艾迪票务设计机构：pinnadesign</p>
</div>
<!-- <audio src="/personal/xmkey/we/Public/audio/bg.mp3" id="audio-bg" preload="auto" autoplay="autoplay" loop="loop" ></audio> -->
<!-- <audio src="/personal/xmkey/we/Public/audio/effect1.mp3" id="audio-effect1" preload="auto"></audio> -->
<script type="text/javascript" src="/personal/xmkey/we/Public/js/zepto.min.js"></script>

<script type="text/javascript" src="/personal/xmkey/we/Public/js/main.js"></script>
<script type="text/javascript">

  function loadImage(url, callback) {
    var img = new Image();
     img.src = url;
     img.onload = function(){ //图片下载完毕时异步调用callback函数。
       callback.call(img);   // 将callback函数this指针切换为img。
     };
  }
  
  var images=[
    PUBLIC+'/img/bg.jpg',
    PUBLIC+'/img/we_sprite@2x.png',
    PUBLIC+'/img/pop_sprite@2x.png',
  ];
  var count=0;
  for(var i=0;i<images.length;i++){
   loadImage(images[i], function(img) {
       count++;
       if(count==images.length){
          $(".app").addClass("ready");
           window.page();
           window.gamestart();
           setTimeout(function(){
              window.bg_start();
           },500)
           $("img[data-src]").each(function(index,el){
            $(el).attr("src",$(el).attr("data-src"));
           })
         
         
       }
   });
  }

  function showPop(){
    $('.game-pop').removeClass('hide');
  }
  
  $('#jsKnowMore').on('tap',function(){
    showPop();
  });

</script>


</body>
</html>