function Swipe(a,b){"use strict";function c(){o=r.children,p=new Array(o.length),q=a.getBoundingClientRect().width||a.offsetWidth,r.style.width=o.length*q+"px";for(var b=o.length;b--;){var c=o[b];c.style.width=q+"px",c.setAttribute("data-index",b),n.transitions&&(c.style.left=b*-q+"px",g(b,s>b?-q:b>s?q:0,0))}n.transitions||(r.style.left=s*-q+"px"),a.style.visibility="visible"}function d(){s?f(s-1):b.continuous&&f(o.length-1)}function e(){s<o.length-1?f(s+1):b.continuous&&f(0)}function f(a,c){if(s!=a){if(c=void 0!=c?c:t,n.transitions){for(var d=Math.abs(s-a)-1,e=Math.abs(s-a)/(s-a);d--;)g((a>s?a:s)-d-1,q*e,0);g(s,q*e,c),g(a,0,c)}else i(s*-q,a*-q,c);s=a,m(b.callback&&b.callback(s,o[s]))}}function g(a,b,c){h(a,b,c),p[a]=b}function h(a,b,c){var d=o[a],e=d&&d.style;e&&(e.webkitTransitionDuration=e.MozTransitionDuration=e.msTransitionDuration=e.OTransitionDuration=e.transitionDuration=c+"ms",e.webkitTransform="translate("+b+"px,0)translateZ(0)",e.msTransform=e.MozTransform=e.OTransform="translateX("+b+"px)")}function i(a,c,d){if(!d)return void(r.style.left=c+"px");var e=+new Date,f=setInterval(function(){var g=+new Date-e;return g>d?(r.style.left=c+"px",w&&j(),b.transitionEnd&&b.transitionEnd.call(event,s,o[s]),void clearInterval(f)):void(r.style.left=(c-a)*(Math.floor(g/d*100)/100)+a+"px")},4)}function j(){u=setTimeout(e,w)}function k(){w=0,clearTimeout(u)}var l=function(){},m=function(a){setTimeout(a||l,0)},n={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(a){var b=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var c in b)if(void 0!==a.style[b[c]])return!0;return!1}(document.createElement("swipe"))};if(a){var o,p,q,r=a.children[0];b=b||{};var s=parseInt(b.startSlide,10)||0,t=b.speed||300;b.continuous=b.continuous?b.continuous:!0;var u,v,w=b.auto||0,x={},y={},z={handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":m(this.end(a));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":m(this.transitionEnd(a));break;case"resize":m(c.call())}b.stopPropagation&&a.stopPropagation()},start:function(a){var b=a.touches[0];x={x:b.pageX,y:b.pageY,time:+new Date},v=void 0,y={},r.addEventListener("touchmove",this,!1),r.addEventListener("touchend",this,!1)},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){b.disableScroll&&a.preventDefault();var c=a.touches[0];y={x:c.pageX-x.x,y:c.pageY-x.y},"undefined"==typeof v&&(v=!!(v||Math.abs(y.x)<Math.abs(y.y))),v||(a.preventDefault(),k(),y.x=y.x/(!s&&y.x>0||s==o.length-1&&y.x<0?Math.abs(y.x)/q+1:1),h(s-1,y.x+p[s-1],0),h(s,y.x+p[s],0),h(s+1,y.x+p[s+1],0))}},end:function(){var a=+new Date-x.time,c=Number(a)<250&&Math.abs(y.x)>20||Math.abs(y.x)>q/2,d=!s&&y.x>0||s==o.length-1&&y.x<0,e=y.x<0;v||(c&&!d?(e?(g(s-1,-q,0),g(s,p[s]-q,t),g(s+1,p[s+1]-q,t),s+=1):(g(s+1,q,0),g(s,p[s]+q,t),g(s-1,p[s-1]+q,t),s+=-1),b.callback&&b.callback(s,o[s])):(g(s-1,-q,t),g(s,0,t),g(s+1,q,t))),r.removeEventListener("touchmove",z,!1),r.removeEventListener("touchend",z,!1)},transitionEnd:function(a){parseInt(a.target.getAttribute("data-index"),10)==s&&(w&&j(),b.transitionEnd&&b.transitionEnd.call(a,s,o[s]))}};return c(),w&&j(),n.addEventListener?(n.touch&&r.addEventListener("touchstart",z,!1),n.transitions&&(r.addEventListener("webkitTransitionEnd",z,!1),r.addEventListener("msTransitionEnd",z,!1),r.addEventListener("oTransitionEnd",z,!1),r.addEventListener("otransitionend",z,!1),r.addEventListener("transitionend",z,!1)),window.addEventListener("resize",z,!1)):window.onresize=function(){c()},{setup:function(){c()},slide:function(a,b){f(a,b)},prev:function(){k(),d()},next:function(){k(),e()},getPos:function(){return s},kill:function(){k(),r.style.width="auto",r.style.left=0;for(var a=o.length;a--;){var b=o[a];b.style.width="100%",b.style.left=0,n.transitions&&h(a,0,0)}n.addEventListener?(r.removeEventListener("touchstart",z,!1),r.removeEventListener("webkitTransitionEnd",z,!1),r.removeEventListener("msTransitionEnd",z,!1),r.removeEventListener("oTransitionEnd",z,!1),r.removeEventListener("otransitionend",z,!1),r.removeEventListener("transitionend",z,!1),window.removeEventListener("resize",z,!1)):window.onresize=null}}}}if(function(){var a,b,c,d=!1,e="animation",f=prefix="-webkit-",g=["Webkit","Moz","O","ms","Khtml"];$(function(){var a=document.body;if(void 0!==a.style.animationName&&(d=!0),d===!1)for(var b=0;b<g.length;b++)if(void 0!==a.style[g[b]+"AnimationName"]){prefix=g[b],e=prefix+"Animation",f="-"+prefix.toLowerCase()+"-",d=!0;break}}),a=function(a){return $("<style>").attr({"class":"keyframe-style",id:a.id,type:"text/css"}).appendTo("head")},$.keyframe={getVendorPrefix:function(){return f},isSupported:function(){return d},generate:function(b){var c,d,g,h,i,j;h=b.name||"",g="@"+f+"keyframes "+h+" {";for(j in b)if("name"!==j){g+=j+" {";for(i in b[j])g+=i+":"+b[j][i]+";";g+="}"}g+="}",d=$("style#"+b.name),d.length>0?(d.html(g),c=$("*").filter(function(){this.style[""+e+"Name"]===h}),c.each(function(){var a,b;a=$(this),b=a.data("keyframeOptions"),a.resetKeyframe(function(){a.playKeyframe(b)})})):a({id:h}).append(g)},define:function(a){if(!a.length)return this.generate(a);for(var b=0;b<a.length;b++){var c=a[b];this.generate(c)}}},b="animation-play-state",c="running",$.fn.resetKeyframe=function(a){$(this).css(f+b,c).css(f+"animation","none");a&&setTimeout(a,1)},$.fn.pauseKeyframe=function(){$(this).css(f+b,"paused")},$.fn.resumeKeyframe=function(){return $(this).css(f+b,c)},$.fn.playKeyframe=function(a,d){var e,g,h,i,j,k;if("string"==typeof a){var l=a.trim().split(" ");a={name:l[0],duration:parseInt(l[1]),timingFunction:l[2],delay:parseInt(l[3]),repeat:l[4],direction:l[5],fillMode:l[6],complete:d}}a=$.extend({duration:0,timingFunction:"ease",delay:0,repeat:1,direction:"normal",fillMode:"forwards",complete:d},a),i=a.duration,h=a.delay,k=a.repeat,e=""+a.name+" "+i+"ms "+a.timingFunction+" "+h+"ms "+k+" "+a.direction+" "+a.fillMode,d=a.complete,g=f+"animation",j=["webkit","moz","MS","o",""];var m=function(a,b,c){var d,e,f;for(e=0,f=[];e<j.length;)j[e]||(b=b.toLowerCase()),d=j[e]+b,a.off(d).on(d,c),f.push(e++)};return this.each(function(){var h=$(this).addClass("boostKeyframe").css(f+b,c).css(g,e).data("keyframeOptions",a);d&&(m(h,"AnimationIteration",d),m(h,"AnimationEnd",d))}),this},a({id:"boost-keyframe"}).append(" .boostKeyframe{"+f+"transform:scale3d(1,1,1);}")}.call(this),window.curPage=0,"undefined"==typeof Zepto)throw new Error("Parallax.js's script requires Zepto");!function(a){function b(){x.loading?a(".wrapper").append('<div class="parallax-loading"><i class="ui-loading ui-loading-white"></i></div>'):A=!1,y=0,q="stay",r=v.length,s=a(window).width(),t=a(window).height(),w=a("[data-animation]");for(var b=0;r>b;b++)a(v[b]).attr("data-id",b+1);u.addClass(x.direction).addClass(x.swipeAnim),v.css({width:s+"px",height:t+"px"}),"horizontal"===x.direction?u.css("width",s*v.length):u.css("height",t*v.length),"cover"===x.swipeAnim&&(u.css({width:s,height:t}),v[0].style.display="block"),x.loading||(a(v[y]).addClass("current"),x.onchange(y,v[y],q),j())}function c(a){return A=window.movePrevent,A===!0?(event.preventDefault(),!1):(z=!0,m="horizontal"===x.direction?a.pageX:a.pageY,"default"===x.swipeAnim&&(u.addClass("drag"),p=u.css("-webkit-transform").replace("matrix(","").replace(")","").split(","),p=parseInt("horizontal"===x.direction?p[4]:p[5])),"cover"===x.swipeAnim&&x.drag&&v.addClass("drag"),void(o=1))}function d(a){if(A=window.movePrevent,A!==!0){if(A===!0||z===!1)return event.preventDefault(),!1;event.preventDefault(),n="horizontal"===x.direction?a.pageX:a.pageY,h(),x.drag&&!i()&&f(),o=2}}function e(b){return A===!0||2!==o?!1:(z=!1,n="horizontal"===x.direction?b.pageX:b.pageY,"default"!==x.swipeAnim||i()?"cover"!==x.swipeAnim||i()||(Math.abs(n-m)<=50&&n>=m&&x.drag?(g(y,"keep-backward"),q="stay"):Math.abs(n-m)<=50&&m>n&&x.drag?(g(y,"keep-forward"),q="stay"):Math.abs(n-m)>50&&n>=m&&x.drag?(g(y-1,"backward"),q="backward"):Math.abs(n-m)>50&&m>n&&x.drag?(g(y+1,"forward"),q="forward"):Math.abs(n-m)>50&&n>=m&&!x.drag?(g(y-1,"backward"),q="backward"):Math.abs(n-m)>50&&m>n&&!x.drag&&(g(y+1,"forward"),q="forward")):(u.removeClass("drag"),Math.abs(n-m)<=50?(g(y),q="stay"):n>=m?(g(y-1),q="backward"):m>n&&(g(y+1),q="forward")),x.indicator&&a(a(".parallax-h-indicator ul li, .parallax-v-indicator ul li").removeClass("current").get(y)).addClass("current"),o=3,void 0)}function f(){if("default"===x.swipeAnim){var b=p+n-m;"horizontal"===x.direction?u.css("-webkit-transform","matrix(1, 0, 0, 1, "+b+", 0)"):u.css("-webkit-transform","matrix(1, 0, 0, 1, 0, "+b+")")}else if("cover"===x.swipeAnim){var b=n-m,c=a(v[y-1]),d=a(v[y+1]);a(v).css({"z-index":0}),"horizontal"===x.direction&&n>=m?c.css({"z-index":2,display:"block","-webkit-transform":"translateX("+(b-s)+"px)"}):"horizontal"===x.direction&&m>n?d.css({"z-index":2,display:"block","-webkit-transform":"translateX("+(s+b)+"px)"}):"vertical"===x.direction&&n>=m?c.css({"z-index":2,display:"block","-webkit-transform":"translateY("+(b-t)+"px)"}):"vertical"===x.direction&&m>n&&d.css({"z-index":2,display:"block","-webkit-transform":"translateY("+(t+b)+"px)"})}}function g(b,c){if(y=b,window.curPage=y,"default"===x.swipeAnim){var d=0;d="horizontal"===x.direction?b*-s:b*-t,u.css("horizontal"===x.direction?{"-webkit-transform":"matrix(1, 0, 0, 1, "+d+", 0)"}:{"-webkit-transform":"matrix(1, 0, 0, 1, 0, "+d+")"})}else"cover"===x.swipeAnim&&("keep-backward"===c&&x.drag?(v.removeClass("drag"),a(v[y-1]).css("horizontal"===x.direction?{"-webkit-transform":"translateX(-100%)"}:{"-webkit-transform":"translateY(-100%)"})):"keep-forward"===c&&x.drag?(v.removeClass("drag"),a(v[y+1]).css("horizontal"===x.direction?{"-webkit-transform":"translateX(100%)"}:{"-webkit-transform":"translateY(100%)"})):"forward"===c&&x.drag?(v.removeClass("drag"),a(v[y-1]).addClass("back"),v[y].style.webkitTransform="translate(0, 0)"):"backward"===c&&x.drag?(v.removeClass("drag"),a(v[y+1]).addClass("back"),v[y].style.webkitTransform="translate(0, 0)"):"forward"!==c||x.drag?"backward"!==c||x.drag||(u.addClass("animate"),a(v[y+1]).addClass("back"),a(v[y]).addClass("front").show()):(u.addClass("animate"),a(v[y-1]).addClass("back"),a(v[y]).addClass("front").show()));A=!0,window.movePrevent=!0,setTimeout(function(){A=!1,window.movePrevent=!1},300)}function h(){"horizontal"===x.direction?n>=m?u.removeClass("forward").addClass("backward"):m>n&&u.removeClass("backward").addClass("forward"):n>=m?u.removeClass("forward").addClass("backward"):m>n&&u.removeClass("backward").addClass("forward")}function i(){if("horizontal"===x.direction){if(n>=m&&0===y||m>=n&&y===r-1)return!0}else if(n>=m&&0===y||m>=n&&y===r-1)return!0;return!1}function j(){w.css({"-webkit-animation":"none",display:"none"}),a(".current [data-animation]").each(function(b,c){var d=a(c),e=d.attr("data-animation"),f=d.attr("data-duration")||500,g=d.attr("data-timing-function")||"ease",h=d.attr("data-delay")?d.attr("data-delay"):0;"followSlide"===e&&("horizontal"===x.direction&&"forward"===q?e="followSlideToLeft":"horizontal"===x.direction&&"backward"===q?e="followSlideToRight":"vertical"===x.direction&&"forward"===q?e="followSlideToTop":"vertical"===x.direction&&"backward"===q&&(e="followSlideToBottom")),d.css({display:"block","-webkit-animation-name":e,"-webkit-animation-duration":f+"ms","-webkit-animation-timing-function":"ease","-webkit-animation-timing-function":g,"-webkit-animation-delay":h+"ms","-webkit-animation-fill-mode":"both"})})}var k=a("body").width(),l=a("body").height();a.keyframe.define([{name:"slideToTop","0%":{"-webkit-transform":"translate3d(0, "+l+"px, 0)"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0)"}}]),a.keyframe.define([{name:"slideToBottom","0%":{"-webkit-transform":"translate3d(0, -"+l+"px, 0)"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0)"}}]),a.keyframe.define([{name:"slideToLeft","0%":{"-webkit-transform":"translate3d( "+k+"px,0px, 0)"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0)"}}]),a.keyframe.define([{name:"slideToRight","0%":{"-webkit-transform":"translate3d( -"+k+"px,0px, 0)"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0)"}}]),a.keyframe.define([{name:"followSlideToBottom","0%":{"-webkit-transform":"translate3d(0, -"+l+"px, 0)"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0)"}}]),a.keyframe.define([{name:"followSlideToTop","0%":{"-webkit-transform":"translate3d(0, "+l+"px, 0);"},"100%":{"-webkit-transform":"translate3d(0, 0px, 0);"}}]);var m,n,o,p,q,r,s,t,u,v,w,x,y=window.curPage,z=!1,A=!0;a.fn.parallax=function(c){return x=a.extend({},a.fn.parallax.defaults,c),this.each(function(){u=a(this),v=u.find(".page"),b()})},a.fn.parallax.defaults={direction:"vertical",swipeAnim:"default",drag:!0,loading:!1,indicator:!1,arrow:!1,onchange:function(){},orientationchange:function(){}},a(document).on("touchstart",".page",function(b){a(b.target).parent().hasClass("game-container")||c(b.changedTouches[0])}).on("touchmove",".page",function(b){a(b.target).parent().hasClass("game-container")||d(b.changedTouches[0])}).on("touchend",".page",function(b){a(b.target).parent().hasClass("game-container")||e(b.changedTouches[0])}).on("webkitAnimationEnd webkitTransitionEnd",".pages",function(){"stay"!==q&&(setTimeout(function(){a(".back").hide().removeClass("back"),a(".front").show().removeClass("front"),u.removeClass("forward backward animate")},10),a(v.removeClass("current").get(y)).addClass("current"),x.onchange(y,v[y],q),j())}),a(".page *").on("webkitAnimationEnd",function(){event.stopPropagation()}),a(window).on("load",function(){if(x.loading&&(a(".parallax-loading").remove(),A=!1,a(v[y]).addClass("current"),x.onchange(y,v[y],q),j()),x.indicator){A=!1;var b="horizontal"===x.direction?"parallax-h-indicator":"parallax-v-indicator";a(".wrapper").append("<div class="+b+"></div>");for(var c="<ul>",d=1;r>=d;d++)c+=1===d?'<li class="current"></li>':"<li></li>";c+="</ul>",a("."+b).append(c)}x.arrow&&(v.append('<span class="parallax-arrow"></span>'),a(v[r-1]).find(".parallax-arrow").remove())}),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){(180===window.orientation||0===window.orientation)&&x.orientationchange("portrait"),(90===window.orientation||-90===window.orientation)&&x.orientationchange("landscape")},!1),window.slideTo=function(b){var c=a(window).height();y=b,q="forward",a(".pages").css({"-webkit-transition-duration":"0ms","transition-duration":"0ms"}),a(".pages").css({"-webkit-transform":"matrix(1, 0, 0, 1, 0, -"+c*b+")"}),a(v.removeClass("current").get(y)).addClass("current"),j(),setTimeout(function(){a(".pages").css({"-webkit-transition-duration":"400ms","transition-duration":"400ms"})},300)},window.moveTo=function(b){y=b;var c=a(window).height();a(".pages").css({"-webkit-transform":"matrix(1, 0, 0, 1, 0, -"+c*b+")"})}}(Zepto),(window.jQuery||window.Zepto)&&!function(a){a.fn.Swipe=function(b){return this.each(function(){a(this).data("Swipe",new Swipe(a(this)[0],b))})}}(window.jQuery||window.Zepto),!function(a){window.page=function(){a(".pages").parallax({direction:"vertical",swipeAnim:"default",drag:!0,loading:!1,indicator:!1,arrow:!1,onchange:function(b){a(".u-guideTop").show(),a(".voice-cont").show(),b==a(".pages .page").length-1&&a(".u-guideTop").hide(),b==a(".pages .page").index(a(".page-game"))&&a(".voice-cont").hide()}});var b=null;b=Swipe(document.getElementById("slider"),{auto:!1,callback:function(){}}),a(".popback").tap(function(){a(".guest-pop").addClass("hide")}),a(".guest-list li").tap(function(){var c=a(".guest-list li").index(a(this));a(".guest-pop").removeClass("hide"),b.slide(c,0)}),a(".u-guidePrev").tap(function(){b.prev()}),a(".u-guideNext").tap(function(){b.next()})}}(Zepto),!function(a){function b(b){var c=a(".pages .page").index(a(".page.current")),d=a(".pages .page").index(a(".page-game"));if(c!=d){var e=b.accelerationIncludingGravity,f=3*Math.round(e.x),g=3*-Math.round(e.y);if(Math.abs(i-f)>4){var h="translateX("+f+"px)";a(".motion").css({"-webkit-transform":h}),i=f,j=g}}}function c(a){return document.getElementById(a)}function d(){var a=document.documentElement.clientWidth,b=document.documentElement.clientHeight;return Array(a,b)}function e(){for(var a=0;q>a;a++)z[a]=new Array(5),z[a][0]=Math.random()*r*2-2*t,z[a][1]=Math.random()*s*2-2*u,z[a][2]=Math.round(Math.random()*v),z[a][3]=0,z[a][4]=0;var b=c("starfield");b.width=r,b.height=s,m=b.getContext("2d"),m.fillStyle="rgba(0,0,0,0)",m.strokeStyle="rgb(255,255,255)"}function f(){C=A-t,D=B-u,m.clearRect(0,0,r,s);for(var a=0;q>a;a++)p=!0,k=z[a][3],l=z[a][4],z[a][0]+=C>>4,z[a][0]>t<<1&&(z[a][0]-=r<<1,p=!1),z[a][0]<-t<<1&&(z[a][0]+=r<<1,p=!1),z[a][1]+=D>>4,z[a][1]>u<<1&&(z[a][1]-=s<<1,p=!1),z[a][1]<-u<<1&&(z[a][1]+=s<<1,p=!1),z[a][2]-=y,z[a][2]>v&&(z[a][2]-=v,p=!1),z[a][2]<0&&(z[a][2]+=v,p=!1),z[a][3]=t+z[a][0]/z[a][2]*x,z[a][4]=u+z[a][1]/z[a][2]*x,k>0&&r>k&&l>0&&s>l&&p&&(m.lineWidth=2*(1-w*z[a][2]),m.beginPath(),m.moveTo(k,l),m.lineTo(z[a][3],z[a][4]),m.stroke(),m.closePath());n=setTimeout(function(){f()},E)}function g(){h(),f()}function h(){r=parseInt(-1!=o.indexOf("w=")?o.substring(o.indexOf("w=")+2,-1!=o.substring(o.indexOf("w=")+2,o.length).indexOf("&")?o.indexOf("w=")+2+o.substring(o.indexOf("w=")+2,o.length).indexOf("&"):o.length):d()[0]),s=parseInt(-1!=o.indexOf("h=")?o.substring(o.indexOf("h=")+2,-1!=o.substring(o.indexOf("h=")+2,o.length).indexOf("&")?o.indexOf("h=")+2+o.substring(o.indexOf("h=")+2,o.length).indexOf("&"):o.length):d()[1]),t=Math.round(r/2),u=Math.round(s/2),v=(r+s)/2,w=1/v,A=t,B=u,e()}var i=0,j=0;window.DeviceMotionEvent&&window.addEventListener("devicemotion",b,!1);var k,l,m,n,o=document.location.href,p=!0,q=parseInt(-1!=o.indexOf("n=")?o.substring(o.indexOf("n=")+2,-1!=o.substring(o.indexOf("n=")+2,o.length).indexOf("&")?o.indexOf("n=")+2+o.substring(o.indexOf("n=")+2,o.length).indexOf("&"):o.length):512),q=100,r=0,s=0,t=0,u=0,v=0,w=0,x=256,y=7,z=new Array(q),A=0,B=0,C=0,D=0,E=30;window.bg_start=function(){a.os.ios&&parseInt(a.os.version)<7||a.os.android&&parseInt(a.os.version)<4||g();var b=new Audio(PUBLIC+"/audio/bg.mp3");isAudioFirst=!0,b&&(b.loop=!0,b.play(),a(document).on("touchstart",function(){isAudioFirst&&b.play(),isAudioFirst=!1}),a(".voice-cont").tap(function(){var c=a(this).find(".icon-voice");c.hasClass("stop")?(b.play(),c.removeClass("stop")):(b.pause(),c.addClass("stop"))}))}}(Zepto),window.gamedata={},!function(a){function b(a){return a.preventDefault(),!1}function c(b,c,d){this.container=a(b),this.callback=d||function(){},this.canvas=document.createElement("canvas"),this.canvas.width=a(b).data("width"),this.canvas.height=a(b).data("height"),this.canvas2=document.createElement("canvas"),this.canvas2.width=a(b).data("width"),this.canvas2.height=a(b).data("height"),a(this.canvas).appendTo(b),a(this.canvas2).appendTo(b),this.canvas.getContext&&(this.ctx=this.canvas.getContext("2d"),this.ctx2=this.canvas2.getContext("2d")),this.line=c,this.init()}function d(){this.interval=null,this.time=0,this.timeformat="00:00"}function e(a,b){"point"==a?q&&(q=!1,l.start()):"success"==a?f():"fail"==a&&(b.addClass("shake"),setTimeout(function(){b.removeClass("shake")},1e3))}function f(){if(p.addClass("success_"+i),"w"==i)a(".logo-w").addClass("on"),setTimeout(function(){p.css({"-webkit-transition":"all .5s"})},1500),setTimeout(function(){i="e",m.clear(),p.css({"-webkit-transition":"0s"}),p.removeClass("success_w"),m.reset(o[h])},700);else if("e"==i){a(".logo-e").addClass("on");var b=l.end();a("#gametime").html(b.time),window.gamedata.time=b,setTimeout(function(){a(".game-content").addClass("hide"),a(".share-content").addClass("show")},700)}}function g(b,c){var d=parseInt(a("#gametime").html()),e=-1;j.gametime&&(e=j.gametime);var f=e>d||-1==e?d:e;postData={name:b,tel:c,gametime:f},j.userid&&(postData.userid=j.userid);var g={expires:200,path:"/"};a.fn.cookie("name",b,g),a.fn.cookie("tel",c,g),a.fn.cookie("gametime",f,g),a.post(APP+"/Game/data/",postData,function(b){var b=JSON.parse(b);a.fn.cookie("userid",b.userid,200),j.userid=b.userid,a.fn.cookie("province",b.province,200),a.fn.cookie("city",b.city,200)})}var h=0,i="w",j={},k=!1,l=null,m=null,n=[[{from:{x:150,y:200},to:{x:150,y:130}},{from:{x:150,y:130},to:{x:250,y:50}},{from:{x:250,y:50},to:{x:250,y:130}},{from:{x:250,y:130},to:{x:150,y:50}},{from:{x:150,y:50},to:{x:150,y:130}},{from:{x:150,y:130},to:{x:250,y:130}},{from:{x:250,y:130},to:{x:250,y:200}},{from:{x:250,y:200},to:{x:200,y:260}},{from:{x:200,y:260},to:{x:150,y:200}},{from:{x:150,y:200},to:{x:100,y:260}},{from:{x:100,y:260},to:{x:50,y:200}},{from:{x:50,y:200},to:{x:50,y:130}},{from:{x:50,y:130},to:{x:50,y:50}},{from:{x:50,y:50},to:{x:150,y:130}},{from:{x:150,y:130},to:{x:50,y:130}},{from:{x:50,y:130},to:{x:150,y:50}}],[{from:{x:150,y:50},to:{x:150,y:130}},{from:{x:150,y:130},to:{x:50,y:50}},{from:{x:50,y:50},to:{x:50,y:130}},{from:{x:50,y:130},to:{x:50,y:200}},{from:{x:50,y:200},to:{x:100,y:260}},{from:{x:100,y:260},to:{x:150,y:200}},{from:{x:150,y:200},to:{x:150,y:130}},{from:{x:150,y:130},to:{x:250,y:50}},{from:{x:250,y:50},to:{x:250,y:130}},{from:{x:250,y:130},to:{x:250,y:200}},{from:{x:250,y:200},to:{x:200,y:260}},{from:{x:200,y:260},to:{x:150,y:200}}]],o=[[{from:{x:250,y:250},to:{x:150,y:250}},{from:{x:150,y:250},to:{x:250,y:150}},{from:{x:250,y:150},to:{x:150,y:150}},{from:{x:150,y:150},to:{x:150,y:250}},{from:{x:150,y:250},to:{x:50,y:250}},{from:{x:50,y:250},to:{x:150,y:150}},{from:{x:150,y:150},to:{x:250,y:50}},{from:{x:250,y:50},to:{x:150,y:50}},{from:{x:150,y:50},to:{x:150,y:150}},{from:{x:150,y:150},to:{x:50,y:150}},{from:{x:50,y:150},to:{x:150,y:50}},{from:{x:150,y:50},to:{x:50,y:50}},{from:{x:50,y:50},to:{x:50,y:150}},{from:{x:50,y:150},to:{x:50,y:250}}],[{from:{x:250,y:250},to:{x:150,y:250}},{from:{x:150,y:250},to:{x:250,y:150}},{from:{x:250,y:150},to:{x:150,y:150}},{from:{x:150,y:150},to:{x:250,y:50}},{from:{x:250,y:50},to:{x:150,y:50}},{from:{x:150,y:50},to:{x:50,y:50}},{from:{x:50,y:50},to:{x:50,y:150}},{from:{x:50,y:150},to:{x:50,y:250}},{from:{x:50,y:250},to:{x:150,y:250}}]];String.prototype.isMobile=function(){return/^1[234567890]\d{9}$/.test(this)};var p=a("#game-container");d.prototype={start:function(){var a=this;this.interval=setInterval(function(){a.time+=1,a._progress(a.time)},1e3)},_progress:function(b){var c=10>b%60?"0"+b%60:b%60,d=parseInt(b/60)<10?"0"+parseInt(b/60):parseInt(b/60);this.timeformat=d+":"+c,a(".time-doing").html(this.timeformat)},end:function(){return clearInterval(this.interval),{format:this.timeformat,time:this.time}}},c.prototype={init:function(){this.reset(this.line),this._bind()},reset:function(a){var b=this.ctx;this.line=a,this.clear(),this.points=this._getPoints(),b.beginPath(),this.lineArr=[],this.nextArr=[],this.offset=this.container.offset(),this.isStart=!1;for(var c=0;c<a.length;c++)a[c].check=0,b.moveTo(a[c].from.x,a[c].from.y),b.lineTo(a[c].to.x,a[c].to.y);b.lineWidth=2,b.strokeStyle="#6e7fc5",b.stroke()},clear:function(){var b=this.ctx;a(this.canvas).removeClass("show"),a(this.canvas2).removeClass("show"),b.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height),this.container.find(".game-point").remove()},_getPoints:function(){for(var b={},c=this.line,d=this,e=0;e<c.length;e++){var f=c[e].from.x,g=c[e].from.y,h=c[e].to.x,i=c[e].to.y,j=200;if(!b[f+","+g]){var k=a("<div class='game-point'></div").appendTo(this.container);k.data("x",f),k.data("y",g),k.css({left:f,top:g}),b[f+","+g]=k}if(!b[h+","+i]){var k=a("<div class='game-point'></div").appendTo(this.container);k.data("x",h),k.data("y",i),k.css({left:h,top:i}),b[h+","+i]=k}setTimeout(function(){a(d.canvas).addClass("show"),a(d.canvas2).addClass("show"),d.container.find(".game-point").addClass("show")},j)}return b},_bind:function(){var b=this;a(document).on("touchstart",function(c){a(c.target).parent().hasClass("game-container")?(window.movePrevent=!0,b._onstart(c,b)):window.movePrevent=!1}),a(document).on("touchmove",function(c){a(c.target).parent().hasClass("game-container")?(window.movePrevent=!0,b._onmove(c,b)):window.movePrevent=!1}),a(document).on("touchend",function(c){a(c.target).parent().hasClass("game-container")&&b._onend(c,b),window.movePrevent=!1})},_onstart:function(b,c){if(c.lineArr=[],a(b.target).hasClass("game-point")){c.lineArr.push(a(b.target)),c.nextArr=[],c.isStart=!0;var d=parseInt(a(b.target).data("x")),e=parseInt(a(b.target).data("y"));a(b.target).addClass("on"),c.callback("point",a(b.target));for(var f=0;f<c.line.length;f++)c.line[f].from.x==d&&c.line[f].from.y==e&&c.nextArr.push({x:c.line[f].to.x,y:c.line[f].to.y,pos:f}),c.line[f].to.x==d&&c.line[f].to.y==e&&c.nextArr.push({x:c.line[f].from.x,y:c.line[f].from.y,pos:f})}},_onmove:function(b,c){if(c.lineArr.length){var d=c.ctx2,e=b.touches[0].pageX,f=b.touches[0].pageY;d.clearRect(0,0,c.canvas2.width,c.canvas2.height);var g=document.elementFromPoint(e,f);if(a(g).hasClass("game-point"))for(var h=parseInt(a(g).data("x")),i=parseInt(a(g).data("y")),j=0;j<c.nextArr.length;j++)if(h==c.nextArr[j].x&&i==c.nextArr[j].y){c.lineArr.push(a(g));var k=c.nextArr[j].pos;c.line[k].check=1,a(g).addClass("on"),c.callback("point",a(g)),c.nextArr=[];for(var l=0;l<c.line.length;l++)c.line[l].from.x==h&&c.line[l].from.y==i&&0==c.line[l].check&&c.nextArr.push({x:c.line[l].to.x,y:c.line[l].to.y,pos:l}),c.line[l].to.x==h&&c.line[l].to.y==i&&0==c.line[l].check&&c.nextArr.push({x:c.line[l].from.x,y:c.line[l].from.y,pos:l});break}d.beginPath(),d.moveTo(parseInt(c.lineArr[0].data("x")),parseInt(c.lineArr[0].data("y")));for(var j=1;j<c.lineArr.length;j++){var h=parseInt(c.lineArr[j].data("x")),i=parseInt(c.lineArr[j].data("y"));d.lineTo(h,i)}d.lineTo(e-a(c.container).offset().left,f-a(c.container).offset().top),d.lineWidth=2,d.strokeStyle="#d08800",d.stroke()}b.preventDefault()},_onend:function(c,d){d.nextArr=[];for(var e=0,f=0;f<d.line.length;f++)e+=d.line[f].check;e==d.line.length?(d.callback("success",d.container),d._success(),d.isStart=!1):(d.isStart&&(d.callback("fail",d.container),d._fail()),d.isStart=!1),a(".pages").off("touchmove",b)},_fail:function(){for(var a=this,b=0;b<a.line.length;b++)a.line[b].check=0;a.container.find(".game-point").removeClass("on"),a.ctx2.clearRect(0,0,a.canvas2.width,a.canvas2.height)},_success:function(){}};var q=!0;a("#change-game span").tap(function(){h=(h+1)%2,m.reset("w"==i?n[h]:o[h])}),a(".btn-share").tap(function(){a("input").blur();var b=a("#username").val(),c=a("#tel").val();b?c?c.isMobile()?(a(".m-weixinShareLayer").addClass("show"),g(b,c)):alert("请正确填写电话"):alert("请填写电话"):alert("请填写姓名")}),a(".m-weixinShareLayer").tap(function(){j.userid&&a(".m-weixinShareLayer").removeClass("show")}),a(".skip-game").tap(function(){a(".game-content").addClass("hide"),a(".share-content").addClass("show")}),a(".btn-stargame").tap(function(){a(".voice-cont").hide(),window.slideTo(a(".pages .page").index(".page-game"))}),window.gamestart=function(){parseInt(a("#gametime").html());a.fn.cookie("userid")&&(j.userid=a.fn.cookie("userid"),j.name=a.fn.cookie("name"),j.tel=a.fn.cookie("tel"),a("#username").val(j.name),a("#tel").val(j.tel),a(".skip-game").addClass("show"),j.gametime=parseInt(a.fn.cookie("gametime")),window.gamedata.time=j.gametime,a("#gametime").html(j.gametime),k=!0),l=new d,m=new c(p,n[h],e)}}(Zepto),!function(a){function b(){var b=a(".pages .page").index(a(".page.current")),c=a(".pages .page").index(a(".page-game"));d.descContent="11月8日北京北展剧场",b==c&&window.gamedata.time.time&&(d.descContent="我在we大会使用"+window.gamedata.time.time+"秒连线获得了抽取门票的资格，你也来试试！"),WeixinJSBridge.invoke("sendAppMessage",{img_url:d.imgUrl,img_width:"640",img_height:"640",link:d.lineLink,desc:d.descContent,title:d.shareTitle},function(a){_report("send_msg",a.err_msg)})}function c(){var b=a(".pages .page").index(a(".page.current")),c=a(".pages .page").index(a(".page-game"));d.descContent="11月8日北京北展剧场",b==c&&window.gamedata.time.time&&(d.descContent="我在we大会使用"+window.gamedata.time.time+"秒连线获得了抽取门票的资格，你也来试试！"),WeixinJSBridge.invoke("shareTimeline",{img_url:d.imgUrl,img_width:"640",img_height:"640",link:d.lineLink,desc:d.descContent,title:d.shareTitle},function(a){_report("timeline",a.err_msg)})}var d={imgUrl:window.location.protocol+"//"+window.location.hostname+PUBLIC+"/img/share.jpg",lineLink:window.location.protocol+"//"+window.location.host+window.location.pathname,descContent:"11月8日北京北展剧场",shareTitle:"2014腾讯WE大会 连接未来 改变世界",appid:"wxc9937e3a66af6dc8"};document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.on("menu:share:appmessage",function(){b()}),WeixinJSBridge.on("menu:share:timeline",function(){c()}),WeixinJSBridge.on("menu:share:weibo",function(){shareWeibo()})},!1)}(Zepto);