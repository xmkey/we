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
  var PUBLIC="/we/Public";
  var ROOT="/we";
  var APP="/we/index.php";
</script>  
<link rel="stylesheet" href="/we/Public/css/main.css?3">
  

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

 
  <section class="page page-we-06">
    <section class="page-content">
      <p class="we-font font-13" data-animation="slideToTop" data-duration="400">腾讯大学带你</p>
      <p class="we-font font-14" data-animation="slideToTop" data-delay="200" data-duration="400">抢免费门票拉！</p>
      <p class="we-font font-15" data-animation="slideToTop" data-delay="400" data-duration="500">游戏规则:</p>
      <p class="we-font font-16" data-animation="slideToTop" data-delay="450" data-duration="500">一笔连接，点亮 “W” “E” 即可参与免费</p>
      <p class="we-font font-17" data-animation="slideToTop" data-delay="500" data-duration="500">门票抽奖！</p>
      <div class="m-link">
        <div class="we-btn btn-stargame" data-animation="slideToTop" data-delay="600" data-duration="700"></div>
      </div>
      <p class="we-font font-18" data-animation="slideToTop" data-delay="800" data-duration="1000">本次WE大会的免费门票活动，不收取任何手续</p>
      <p class="we-font font-19" data-animation="slideToTop" data-delay="800" data-duration="1000">费等费用，请小伙伴们注意喔！如须购买门票</p>
      <p class="we-font font-20" data-animation="slideToTop" data-delay="800" data-duration="1000">请从官方正规渠道进入。</p>
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
<section class="page-facade guest-pop hide">
  <section class="page-content">
    <a href="javascript:void(0);" class="u-guidePrev z-move">next</a>
    <a href="javascript:void(0);" class="u-guideNext z-move">prev</a>
    <div class="outer" id="slider">
      <ul class="u_sper">
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_01.jpg" width="150px" height="150px">
          <div class="info">
            <h3>Martin Nowak</h3>
            <div class="title">人类社会行为学专家,《超级合作者》的作者,</br>哈佛大学数学与生物学教授</div>
            <div class="desc">Nowak是与著名生物学家Richard Dawkins和Edward Wilson齐名的科学巨星，是继达尔文之后为进化论作出突破性贡献的第一人。Nowak在32岁就成为了牛津大学数学生物学教授，3年后他进入普林斯顿高等研究院任教，并创建了世界第一个理论生物学项目。Nowak致力于用数学描述进化过程，他是将数学应用于生物学的先行者，在病毒动力学、癌细胞进化、空间博弈、间接互惠、演化图论、语言进化等方面皆有建树。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img1.png" width="280px"> -->
        </div>
        </li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_02.jpg" width="150px" height="150px">
          <div class="info">
            <h3>Bob Richards</h3>
            <div class="title">奇点大学联合创始人，未来学家</br>Moon Express公司首席执行官</div>
            <div class="desc">Robert (Bob) Richards博士是新锐科技高校“奇点大学”的联合创始人，同时也是一位太空企业家和未来学家。他创立的Moon Express公司正在和NASA合作一项探月计划，其研发的太空车MX-1将在2015年开启太空首航。这将结束自1972年“阿波罗登月”以来人类探月史的空白，Moon Express也将成为第一个登陆月球的私企。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img2.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_03.jpg" width="150px" height="150px">
          <div class="info">
            <h3>David Wallerstein</h3>
            <div class="title">腾讯公司高级执行副总裁，腾讯美国主席</div>
            <div class="desc">David Wallerstein先生于二零零一年加入腾讯高管团队，目前常驻于美国帕洛阿尔托。他曾在中国和日本有超过20年的工作和生活经验。David Wallerstein先生主要负责腾讯国际业务的战略推广，以及对新兴科技产业的投资。目前，他也担任Riot Games, Epic Games, ZenBanx, Whisper, Weebly 和 Quizup 的董事职务</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img3.png" width="280px"></div> -->
        </li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_04.jpg" width="150px" height="150px">
          <div class="info">
            <h3>Jose Carmena</h3>
            <div class="title">脑机接口权威专家，加州大学伯克利<br/>分校电子工程与神经科学副教授</div>
            <div class="desc">Jose Carmena是脑机接口、神经义肢等研究领域的权威专家，现在加州大学伯克利分校任电子工程和神经科学的副教授。Carmena教授曾通过在鼠类上植入脑机接口研究大脑神经回路。实验证明，人类可以用“意志”来控制类似机械手臂等其他生物机械设备。相关研究论文发表在科学界权威学术期刊《自然》杂志上。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img4.png" width="280px"></div> -->
        </li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_05.jpg" width="150px" height="150px">
          <div class="info">
            <h3>Jane Poynter</h3>
            <div class="title">World View公司联合创始人<br/>首席执行官</div>
            <div class="desc">Jane Poynter是一位太空领域的女企业家。她是World View公司的创始人和首席执行官。World View公司开创了适用于普通大众的低成本太空体验旅行，乘客只需花费75000美元就可以搭乘航天舱，在距离地球30公里在太空边缘遨游。World View首航预计在2016年升空。 目前一些私人太空公司推出的太空旅行主要是通过搭乘航天飞机，单程花费大约在20万到25万美金左右。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img5.png" width="280px"></div> -->
        </li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_06.jpg" width="150px" height="150px">
          <div class="info">
            <h3>Daniel Leithinger</h3>
            <div class="title">创新交互界面设计师<br/>MIT媒体实验室博士</div>
            <div class="desc">Daniel Leithinger是麻省理工学院媒体实验室的一名博士，他设计和研发的inFORM装置运用一种新型的交互体验，已经超越了智能手机和平板电脑触屏的交互界面。通过该装置，用户可以用手来远程感受和操控数字信息。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img6.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_07.jpg" width="150px" height="150px">
          <div class="info">
            <h3>苏运升</h3>
            <div class="title">创新智能建筑研究专家，上海同济城市</br>规划设计研究院技术开发中心主任</div>
            <div class="desc">苏运升是绿色住宅和智能建筑领域的研究专家，他创办的易托邦公司今年推出了一款太阳能零能耗的智能房屋——易茧。易茧采用3D打印高分子材料，40分钟左右即可自动完成建造，房屋内预装有水床、影音及照明系统，人们可以在内部玩游戏、看电影、小憩等。易茧提出一种新型的房屋建造方式及生活体验，将在2014年WE大会上首度向全球公布细节。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img7.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_08.jpg" width="150px">
          <div class="info">
            <h3>王俊</h3>
            <div class="title">华大基因研究院院长</div>
            <div class="desc">王俊领导的华大基因是世界上最大的基因测序公司。1999年，华大基因支持了人类基因组计划的1%，而到2012年底，华大基因的测序数据产出能力占全球一半以上。华大基因致力于用基因科技造福人类，而个人基因测序价格的逐步大众化也使得更长寿、更健康的生活成为了可能。此外，华大基因正在科研、医疗、健康及农业等领域的应用服务方面深入发展，推动个体化医疗和健康的新模式。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img8.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_09.jpg" width="150px">
          <div class="info">
            <h3>Rajinder Sodhi</h3>
            <div class="title">Lumenous Co.联合创始人兼CEO</div>
            <div class="desc">Rajinder Sodhi擅长的领域是触觉技术和人机交互。Sodhi参与研发的AIREAL是一种新型空气触觉交互技术，使用者不用穿戴任何装置就可以感受到虚拟的物品，体验动态变化的物品质感。AIREAL还具备低成本高扩展性等特点。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img9.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_10.jpg" width="150px">
          <div class="info">
            <h3>Ben Waber</h3>
            <div class="title">人类行为模型分析专家,<br/>Sociometric Solutions公司首席执行官</div>
            <div class="desc">Ben Waber是人类行为分析、群体协作和可穿戴技术领域享有国际声誉的专家，他也是Sociometric Solutions公司的联合创始人和首席执行官。作为一家社会经济学解决方案提供商，Sociometric Solutions推出了一款智能工卡产品，可以分析企业员工行为数据，给出改善企业管理和运作的方案。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img10.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_11.jpg" width="150px">
          <div class="info">
            <h3>王阳</h3>
            <div class="title">IBM全球副总裁</div>
            <div class="desc">王阳博士现任IBM全球副总裁兼中国开发中心总经理，领导海内外多地的研发团队，将在WE大会上分享IBM最新投入运行的人工智能Waston。和Google、微软的人工智能相比，Waston从硬件芯片构架就开始模拟人类神经元，它可以理解人类的自然语言，还可以通过资料产生假设，并具备不断自学习的能力。Watson已经可以通过开发者向智能终端用户提供服务，开始为一些科学家服务，主要运用于医药领域，Watson可以阅读文献、理解化学反应式和数据图表。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img11.png" width="280px"> -->
        </div></li>
        <li><div class="imgbox">
          <img data-src="/we/Public/pic/guest_img_12.jpg" width="150px">
          <div class="info">
            <h3>Tomonori Kagaya</h3>
            <div class="title">生物感知技术研究者，neurowear创始人</div>
            <div class="desc">Tomonori是一位来自日本的生物感知技术研究者，他主导的neurowear团队致力于利用生物感知技术创造新的社交工具。Tomo团队最新发布的新产品“Neuro Headphone”和”neurocam”，能通过检测人的脑电波为用户推荐音乐或者录制影片，发布后在国内外广受好评。</div>
          </div>
          <!-- <img data-src="/we/Public/pic/pop_img12.png" width="280px"> -->
        </div></li>
      </ul>
    </div>
    <a href="#" class="we-btn popback"></a>
    
  </section>
</section>
<div class="u-maskLayer m-weixinShareLayer">
  <img src="/we/Public/img/we_share.png">
  <p class="we-font font-32">合作机构：艾迪票务设计机构：pinnadesign</p>
</div>
<!-- <audio src="/we/Public/audio/bg.mp3" id="audio-bg" preload="auto" autoplay="autoplay" loop="loop" ></audio> -->
<!-- <audio src="/we/Public/audio/effect1.mp3" id="audio-effect1" preload="auto"></audio> -->
<script type="text/javascript" src="/we/Public/js/zepto.min.js"></script>

<script type="text/javascript" src="/we/Public/js/main.js"></script>
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

  
</script>


</body>
</html>