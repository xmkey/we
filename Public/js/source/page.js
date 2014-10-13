!function($){
  window.page=function(){
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
    onchange: function(index, element, direction) {
      $(".u-guideTop").show();
      $(".voice-cont").show();
      if(index==$('.pages .page').length-1){
        $(".u-guideTop").hide();
      }
      if(index==$('.pages .page').index($('.page-game'))){
        $(".voice-cont").hide();
      }
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
    var index=$(".guest-list li").index($(this));
    $(".guest-pop").removeClass("hide");
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