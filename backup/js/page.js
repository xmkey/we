!function($){
  function preventDefault(e){
   
    e.preventDefault();
    return false;
  }
  $('.pages').parallax({
    direction: 'vertical',  // horizontal (水平翻页)
    swipeAnim: 'default',   // default (切换效果)
    drag:      true,    // 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
    loading:   false,   // 有无加载页
    indicator: false,   // 有无指示点
    arrow:     false,   // 有无指示箭头
    /*
     * 翻页后立即执行
     * {int}    index: 第几页
     * {DOMElement} element: 当前页节点
     * {String}   directation: forward(前翻)、backward(后翻)、stay(保持原页)
     */
    onchange: function(index, element, direction) {
      // console.log(index)
      $(".u-guideTop").show();
      if(index==1){
        if($(element).find(".page-back").hasClass("show")){
          $(".u-guideTop").show();
        }else{

          $(".u-guideTop").hide();
          $(".pages").on("touchmove",preventDefault);
          setTimeout(function(){


            $(".light").one("tap",function(){
              var self=this;
              var screenW=$(document.body).width(),
                  screenH=$(document.body).height();
              var scale=screenW/90>screenH/125?screenW/60:screenH/90;

              // $(this).addClass("on");
              $(this).find(".inner").css({
                "-webkit-transform":"scale("+scale+") rotate(90deg)",
                "opacity":1
              });

              setTimeout(function(){
                $(self).closest(".page").find(".page-front").addClass("hide");
                $(self).closest(".page").find(".page-back").addClass("show");
                setTimeout(function(){
                  // $(self).addClass("out");
                  $(self).find(".inner").css({
                    "-webkit-transition-duration": 1.5+"s",
                    "opacity":0
                  });
                  setTimeout(function(){
                    $(self).hide();
                    $(".pages").off("touchmove",preventDefault);
                    $(".u-guideTop").show();
                  },1500);
                },300)

              },500)
            })
          },500)
        }
      }
      if(index==$('.pages .page').length-1){
        $(".u-guideTop").hide();
      }
    },
    /*
     * 横竖屏检测
     * {String}   orientation: landscape、protrait
     */
    orientationchange: function(orientation) {
      // console.log(orientation);
    }
  });


  var slider = null;
  

    $('.popback').on('touchend', function(e) {
      $('.guest-pop').addClass("hide");
    });
  $(".guest-list li").tap(function(){
    var index=$(".guest-list li").index($(this));
    $(".guest-pop").removeClass("hide");
    if(!slider){

      slider =Swipe(document.getElementById('slider'), {
        auto: false,
        callback: function(pos) {

        }
      });
    }
    
    slider.slide(index,0)
  });
  // $(".u-guidePrev").tap(function(){
  //   slider.prev();
  // })
  // $(".u-guideNext").tap(function(){
  //   slider.next();
  // })
}(Zepto)