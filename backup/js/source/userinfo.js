!function($){
 	
    $("#loginout").tap(function(){
    	
    	$.fn.cookie('openid', null);
      	$.fn.cookie('userinfo', null);
    })
}(Zepto)