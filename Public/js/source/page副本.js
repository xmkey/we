!function($){
  window.page=function(){
  function preventDefault(e){
    
    e.preventDefault();
    return false;
  }
  window.isHome=false;
  var homeIndex=$(".pages .page").index($(".page-home"));
  if(homeIndex==0){
    $(".pages").on("touchmove",preventDefault);
    $(".light").show();
    $(".u-guideTop").hide();
    window.isHome=true;
  }

  $(".light").on("touchend",function(){
    var audio_effect1=document.getElementById('audio-effect1');

    if(audio_effect1){
      audio_effect1.play();
    }
   
    var self=this;
    var screenW=$(document.body).width(),
        screenH=$(document.body).height();
    var scale=screenW/90>screenH/125?screenW/60:screenH/90;

    // $(this).addClass("on");
    $(this).find(".inner").css({
      "-webkit-transform":"scale("+scale+") rotate(90deg)",
      "opacity":1
    });
    $('.page-back [data-animation]').css({
      '-webkit-animation':'none',
      'opacity':0
    })
    var homeIndex=$(".pages .page").index($(".page-home"));
    var timeIndex=$(".pages .page").index($(".page-time"));
    // window.curPage=timeIndex;

    // $(".pages").css({"-webkit-transition-duration":"0","transition-duration":"0"})
    setTimeout(function(){
      // $(self).closest(".page").find(".page-front").addClass("hide");
      // $(self).closest(".page").find(".page-back").addClass("show");
      // window.curPage=timeIndex;
      var pageHeight  = $(window).height(); 
      $(".pages").css({'-webkit-transform': 'matrix(1, 0, 0, 1, 0, -' + pageHeight*timeIndex + ')'});
      $(".pages").css({"-webkit-transition-duration":"400ms","transition-duration":"400ms"})
      
      
      setTimeout(function(){
        // $(self).addClass("out");
        $(self).find(".inner").css({
          "-webkit-transition-duration": 1.5+"s",
          "opacity":0
        });
        setTimeout(function(){
          window.slideTo(timeIndex);
        },1000)
        setTimeout(function(){
          $(self).hide();

          $(self).find(".inner").css({
            "-webkit-transform":"scale(1) rotate(0deg)",
            "-webkit-transition-duration":"0.5s"
          });
          $(".pages").off("touchmove",preventDefault);
          $("body").off("touchmove",preventDefault);
          $(".u-guideTop").show();
          $('.page-back [data-animation]').each(function(index, element){
                var $element    = $(element),
                    $animation  = $element.attr('data-animation'),
                    $duration   = $element.attr('data-duration') || 500,
                    $timfunc    = $element.attr('data-timing-function') || 'ease',
                    $delay      = $element.attr('data-delay') ?  $element.attr('data-delay') : 0;
                $element.css({
                  'display': 'block',
                  '-webkit-animation-name': $animation,
                  '-webkit-animation-duration': $duration + 'ms',
                  '-webkit-animation-timing-function': 'ease',
                  '-webkit-animation-timing-function': $timfunc,
                  '-webkit-animation-delay': $delay + 'ms',
                  '-webkit-animation-fill-mode': 'both'
                })
          });
          
        },1500);
      },400)

    },500)
  })
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
      if(index==homeIndex){
        if($(element).find(".page-home").hasClass("current")){
          $(".u-guideTop").show();
        }else{
          $(".light").show();
          $(".u-guideTop").hide();
          $(".pages").on("touchmove",preventDefault);
          $("body").on("touchmove",preventDefault);

          // setTimeout(function(){


            // $(".light").one("click",function(){
            //   var self=this;
            //   var screenW=$(document.body).width(),
            //       screenH=$(document.body).height();
            //   var scale=screenW/90>screenH/125?screenW/60:screenH/90;

            //   // $(this).addClass("on");
            //   $(this).find(".inner").css({
            //     "-webkit-transform":"scale("+scale+") rotate(90deg)",
            //     "opacity":1
            //   });
            //   $('.page-back [data-animation]').css({
            //     '-webkit-animation':'none',
            //     'opacity':0
            //   })
            //   setTimeout(function(){
            //     $(self).closest(".page").find(".page-front").addClass("hide");
            //     $(self).closest(".page").find(".page-back").addClass("show");
            //     setTimeout(function(){
            //       // $(self).addClass("out");
            //       $(self).find(".inner").css({
            //         "-webkit-transition-duration": 1.5+"s",
            //         "opacity":0
            //       });
            //       setTimeout(function(){
            //         $(self).hide();
            //         $(".pages").off("touchmove",preventDefault);
            //         $(".u-guideTop").show();
            //         $('.page-back [data-animation]').each(function(index, element){
            //               var $element    = $(element),
            //                   $animation  = $element.attr('data-animation'),
            //                   $duration   = $element.attr('data-duration') || 500,
            //                   $timfunc    = $element.attr('data-timing-function') || 'ease',
            //                   $delay      = $element.attr('data-delay') ?  $element.attr('data-delay') : 0;
            //               $element.css({
            //                 'display': 'block',
            //                 '-webkit-animation-name': $animation,
            //                 '-webkit-animation-duration': $duration + 'ms',
            //                 '-webkit-animation-timing-function': 'ease',
            //                 '-webkit-animation-timing-function': $timfunc,
            //                 '-webkit-animation-delay': $delay + 'ms',
            //                 '-webkit-animation-fill-mode': 'both'
            //               })
            //         });
                    
            //       },1500);
            //     },300)

            //   },500)
            // })
          // },500)
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
  slider =Swipe(document.getElementById('slider'), {
      auto: false,
      callback: function(pos) {
        
      }
    });
  
    $('.popback').tap(function(e) {
      $('.guest-pop').addClass("hide");
    });
  $(".guest-list li").tap(function(){
    // alert(1)

    var index=$(".guest-list li").index($(this));
    $(".guest-pop").removeClass("hide");

    // if(!slider){
      
    //   slider =Swipe(document.getElementById('slider'), {
    //     auto: false,
    //     callback: function(pos) {
          
    //     }
    //   });
    // }
    
    slider.slide(index,0)
  });
  $(".u-guidePrev").tap(function(){
    slider.prev();
  })
  $(".u-guideNext").tap(function(){
    slider.next();
  })
  }

}(Zepto)