window.gamedata={};
!function($){
	var gameindex=1,
 		gamestep="w",
 		city=null,
 		data={},
 		isJoin=false,
 		gametime=0,
 		gametimer=null,
 		gameLine=null;

 	var line_w=[
 	
	[
		{
			from:{
				x:150,
				y:200
			},
			to:{
				x:150,
				y:130
			}
			
		},
		{
			from:{
				x:150,
				y:130
			},
			to:{
				x:250,
				y:50
			}
			
		},{
			from:{
				x:250,
				y:50
			},
			to:{
				x:250,
				y:130
			}
			
		},{
			from:{
				x:250,
				y:130
			},
			to:{
				x:150,
				y:50
			}
		},{
			from:{
				x:150,
				y:50
			},
			to:{
				x:150,
				y:130
			}
		},{
			from:{
				x:150,
				y:130
			},
			to:{
				x:250,
				y:130
			}
		},{
			from:{
				x:250,
				y:130
			},
			to:{
				x:250,
				y:200
			}
		},{
			from:{
				x:250,
				y:200
			},
			to:{
				x:200,
				y:260
			}
		},{
			from:{
				x:200,
				y:260
			},
			to:{
				x:150,
				y:200
			}
		},{
			from:{
				x:150,
				y:200
			},
			to:{
				x:100,
				y:260
			}
		},{
			from:{
				x:100,
				y:260
			},
			to:{
				x:50,
				y:200
			}
		},{
			from:{
				x:50,
				y:200
			},
			to:{
				x:50,
				y:130
			}
		},{
			from:{
				x:50,
				y:130
			},
			to:{
				x:50,
				y:50
			}
		},{
			from:{
				x:50,
				y:50
			},
			to:{
				x:150,
				y:130
			}
		},{
			from:{
				x:150,
				y:130
			},
			to:{
				x:50,
				y:130
			}
		},{
			from:{
				x:50,
				y:130
			},
			to:{
				x:150,
				y:50
			}
		}
	],
	[
		{
			from:{
				x:150,
				y:50
			},
			to:{
				x:150,
				y:130
			}
		},{
			from:{
				x:150,
				y:130
			},
			to:{
				x:50,
				y:50
			}
		},{
			from:{
				x:50,
				y:50
			},
			to:{
				x:50,
				y:130
			}
		},{
			from:{
				x:50,
				y:130
			},
			to:{
				x:50,
				y:200
			}
		},{
			from:{
				x:50,
				y:200
			},
			to:{
				x:100,
				y:260
			}
		},{
			from:{
				x:100,
				y:260
			},
			to:{
				x:150,
				y:200
			}
		},{
			from:{
				x:150,
				y:200
			},
			to:{
				x:150,
				y:130
			}
		},{
			from:{
				x:150,
				y:130
			},
			to:{
				x:250,
				y:50
			}
		},{
			from:{
				x:250,
				y:50
			},
			to:{
				x:250,
				y:130
			}
		},{
			from:{
				x:250,
				y:130
			},
			to:{
				x:250,
				y:200
			}
		},{
			from:{
				x:250,
				y:200
			},
			to:{
				x:200,
				y:260
			}
		},{
			from:{
				x:200,
				y:260
			},
			to:{
				x:150,
				y:200
			}
		}
	]

	];
	var line_e=[
 	[
	 	{
	 		from:{
	 			x:250,
	 			y:250
	 		},
	 		to:{
	 			x:150,
	 			y:250
	 		}
	 	},
	 	{
	 		from:{
	 			x:150,
	 			y:250
	 		},
	 		to:{
	 			x:250,
	 			y:150
	 		}
	 	},
	 	{
	 		from:{
	 			x:250,
	 			y:150
	 		},
	 		to:{
	 			x:150,
	 			y:150
	 		}
	 	},
	 	{
	 		from:{
	 			x:150,
	 			y:150
	 		},
	 		to:{
	 			x:150,
	 			y:250
	 		}
	 	},
	 	{
	 		from:{
	 			x:150,
	 			y:250
	 		},
	 		to:{
	 			x:50,
	 			y:250
	 		}
	 	},
	 	{
	 		from:{
	 			x:50,
	 			y:250
	 		},
	 		to:{
	 			x:150,
	 			y:150
	 		}
	 	},
	 	{
	 		from:{
	 			x:150,
	 			y:150
	 		},
	 		to:{
	 			x:250,
	 			y:50
	 		}
	 	},
	 	{
	 		from:{
	 			x:250,
	 			y:50
	 		},
	 		to:{
	 			x:150,
	 			y:50
	 		}
	 	},{
	 		from:{
	 			x:150,
	 			y:50
	 		},
	 		to:{
	 			x:150,
	 			y:150
	 		}
	 	},{
	 		from:{
	 			x:150,
	 			y:150
	 		},
	 		to:{
	 			x:50,
	 			y:150
	 		}
	 	},{
	 		from:{
	 			x:50,
	 			y:150
	 		},
	 		to:{
	 			x:150,
	 			y:50
	 		}
	 	},{
	 		from:{
	 			x:150,
	 			y:50
	 		},
	 		to:{
	 			x:50,
	 			y:50
	 		}
	 	},{
	 		from:{
	 			x:50,
	 			y:50
	 		},
	 		to:{
	 			x:50,
	 			y:150
	 		}
	 	},{
	 		from:{
	 			x:50,
	 			y:150
	 		},
	 		to:{
	 			x:50,
	 			y:250
	 		}
	 	}
	],
	[
		{
			from:{
				x:250,
				y:250
			},
			to:{
				x:150,
				y:250
			}
			
		},
		{
			from:{
				x:150,
				y:250
			},
			to:{
				x:250,
				y:150
			}
			
		},
		{
			from:{
				x:250,
				y:150
			},
			to:{
				x:150,
				y:150
			}
			
		},
		{
			from:{
				x:150,
				y:150
			},
			to:{
				x:250,
				y:50
			}
			
		},
		{
			from:{
				x:250,
				y:50
			},
			to:{
				x:150,
				y:50
			}
			
		},
		{
			from:{
				x:150,
				y:50
			},
			to:{
				x:50,
				y:50
			}
			
		},
		{
			from:{
				x:50,
				y:50
			},
			to:{
				x:50,
				y:150
			}
			
		},
		{
			from:{
				x:50,
				y:150
			},
			to:{
				x:50,
				y:250
			}
			
		},{
			from:{
				x:50,
				y:250
			},
			to:{
				x:150,
				y:250
			}
			
		}

		
	]

	];
	// var audio_effect1=new Audio(PUBLIC+"/audio/effect2.wav");
	// audio_effect1.load();
	String.prototype.isMobile = function() {
		return ( /^1[234567890]\d{9}$/.test(this));
	}
	function preventDefault(e){
   
	    e.preventDefault();
	    return false;
	  }
	var gameContainer=$("#game-container");
 	function gameline(container,line,callback){
 		this.container = $(container);
 		this.callback=callback||function(){};
 		this.canvas=document.createElement("canvas");
 		this.canvas.width=$(container).data("width");
 		this.canvas.height=$(container).data("height");
 		this.canvas2=document.createElement("canvas");
 		this.canvas2.width=$(container).data("width");
 		this.canvas2.height=$(container).data("height");
 		$(this.canvas).appendTo(container);
 		$(this.canvas2).appendTo(container);
 		if (this.canvas.getContext) {
		    this.ctx = this.canvas.getContext('2d');
		    this.ctx2 = this.canvas2.getContext('2d');
		}
 		this.line=line;

 		this.init();
 	}
 	function timer(){
 		this.interval=null;
 		this.time=0;
 		this.timeformat="00:00";
 		
 	}
 	timer.prototype={
 		start:function(){
 			var self=this;
 			this.interval=setInterval(function(){
 				self.time+=1;
 				self._progress(self.time);
 			},1000);
 		},
 		_progress:function(time){
 			var s=time%60<10?"0"+time%60:time%60;
 			var m=parseInt(time/60)<10?"0"+parseInt(time/60):parseInt(time/60);
 			
 			this.timeformat=m+":"+s;
 			$(".time-doing").html(this.timeformat);
 			
 		},
 		end:function(){
 			clearInterval(this.interval);
 			return {format:this.timeformat,time:this.time};
 		}
 	}

 	
 	gameline.prototype={
 		init:function(){
 			this.reset(this.line);
			this._bind();
 		},
 		reset:function(line){
 			var ctx=this.ctx;
 			// var line=this.line;
 			this.line=line;
 			this.clear();
 			this.points=this._getPoints();
 			ctx.beginPath();
 			this.lineArr=[];
 			this.nextArr=[];
 			this.offset=this.container.offset();
 			this.isStart=false;
 			for(var i=0;i<line.length;i++){
 				line[i].check=0;
 				ctx.moveTo(line[i].from.x, line[i].from.y);
				ctx.lineTo(line[i].to.x, line[i].to.y);
 			}
			ctx.lineWidth = 2.0; // 设置线宽
			ctx.strokeStyle = "#6e7fc5"; // 设置线的颜色
			ctx.stroke();
 		},
 		clear:function(){
 			var ctx=this.ctx;
 			$(this.canvas).removeClass("show");
 			$(this.canvas2).removeClass("show");
 			ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
 			this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height);
 			this.container.find(".game-point").remove();
 		},
 		_getPoints:function(){
 			var points={};
 			var line=this.line;
 			var self=this;
 			for(var i=0;i<line.length;i++){
 				var x1=line[i].from.x,
 				    y1=line[i].from.y,
 				    x2=line[i].to.x,
 				    y2=line[i].to.y;
 				var delay=200;
 				if(!points[x1+","+y1]){
 					
 					var item=$("<div class='game-point'></div").appendTo(this.container);

 					item.data("x",x1);
 					item.data("y",y1);
 					item.css({
 						left:x1,
 						top:y1
 						// "-webkit-animation-delay":Math.random()*delay+"ms"
 					});
 
 					// console.log(Math.random()*300+"ms")
 					// setTimeout((function(item,self){
 					// 	return function(){
 							
 					// 		item.addClass("show");
 					// 	}
 						
 					// })(item,this),100)


 					points[x1+","+y1]=item;
 				}
 				if(!points[x2+","+y2]){
 					
 					var item=$("<div class='game-point'></div").appendTo(this.container);
 					item.data("x",x2);
 					item.data("y",y2);
 					item.css({
 						left:x2,
 						top:y2
 						
 					})
 					
 					
 					points[x2+","+y2]=item;
 				}
 				setTimeout(function(){
 					$(self.canvas).addClass("show");
 					$(self.canvas2).addClass("show");
 					self.container.find(".game-point").addClass("show");
 				},delay)
 				
 			}
 			
 			return points;
 		},
 		_bind:function(){
 			var self=this;
 			$(document).on("touchstart",function(e){
 				
 				if($(e.target).parent().hasClass("game-container")){

 					window.movePrevent=true;

 					self._onstart(e,self)
 					
 				}else{
 					window.movePrevent=false;
 					
 				}
 			});
 			// this.container.on("mousedown",this.onstart);
 			$(document).on("touchmove",function(e){
 				
 				if($(e.target).parent().hasClass("game-container")){
 					window.movePrevent=true;
 					self._onmove(e,self)
 					// $(".pages").on("touchmove",preventDefault);
 					
 					
 					// console.log(e)
 				}else{
 					window.movePrevent=false;
 					// $(".pages").on("touchmove",preventDefault);
 				}
 					
 			});
 			// this.container.on("mousemove",this.onmove);
 			$(document).on("touchend",function(e){
 				if($(e.target).parent().hasClass("game-container"))
 				self._onend(e,self)
 				window.movePrevent=false;
 			});
 			// this.container.on("mouseup",this.onend);
 		},
 		_onstart:function(e,self){
 			self.lineArr=[];

 			if($(e.target).hasClass("game-point")){
	 			self.lineArr.push($(e.target));
	 			self.nextArr=[];

	 			self.isStart=true;
	 			var x=parseInt($(e.target).data("x"));
	 			var y=parseInt($(e.target).data("y"));
	 			$(e.target).addClass("on");
				self.callback("point",$(e.target));
	 			for(var i=0;i<self.line.length;i++){
	 				if(self.line[i].from.x==x&&self.line[i].from.y==y){
	 					self.nextArr.push({x:self.line[i].to.x,y:self.line[i].to.y,pos:i});
	 					
	 				}
	 				if(self.line[i].to.x==x&&self.line[i].to.y==y){
	 					self.nextArr.push({x:self.line[i].from.x,y:self.line[i].from.y,pos:i})
	 				}

	 			}
 			}
 			
 		},
 		_onmove:function(e,self){

 			if(self.lineArr.length){
	 			var ctx=self.ctx2;
	 			var touchX=e.touches[0].pageX;
				var touchY=e.touches[0].pageY;
	 			
	 			ctx.clearRect(0,0,self.canvas2.width,self.canvas2.height);
	 			var target=document.elementFromPoint(touchX, touchY);  
	 			
	 			if($(target).hasClass("game-point")){
	 				
	 				var x=parseInt($(target).data("x"));
	 				var y=parseInt($(target).data("y"));
	 				
	 				for(var i=0;i<self.nextArr.length;i++){

	 					if(x==self.nextArr[i].x&&y==self.nextArr[i].y){

	 						self.lineArr.push($(target));
	 						var pos=self.nextArr[i].pos;
	 						
	 						self.line[pos].check=1;
	 						
	 						$(target).addClass("on");
	 						// audio_effect1.pause();
	 						// audio_effect1.play();
	 						self.callback("point",$(target));
	 						self.nextArr=[];
	 						

	 						for(var j=0;j<self.line.length;j++){

				 				if(self.line[j].from.x==x&&self.line[j].from.y==y&&self.line[j].check==0){
				 					
				 					self.nextArr.push({x:self.line[j].to.x,y:self.line[j].to.y,pos:j});
				 					
				 				}
				 				if(self.line[j].to.x==x&&self.line[j].to.y==y&&self.line[j].check==0){
				 					
				 					self.nextArr.push({x:self.line[j].from.x,y:self.line[j].from.y,pos:j});
				 					
				 				}
				 			}
				 			// self.line[pos].check=1;
	 						break;
	 					}
	 				}
	 				
	 			}
				ctx.beginPath();
				
	 			ctx.moveTo(parseInt(self.lineArr[0].data("x")),parseInt(self.lineArr[0].data("y")));
	 			for(var i=1;i<self.lineArr.length;i++){

	 				var x=parseInt(self.lineArr[i].data("x"));
	 				var y=parseInt(self.lineArr[i].data("y"));
	 				ctx.lineTo(x,y);
	 			}

	 			ctx.lineTo(touchX-$(self.container).offset().left,touchY-$(self.container).offset().top);
	 			ctx.lineWidth = 2.0; // 设置线宽
				ctx.strokeStyle = "#d08800"; // 设置线的颜色
				ctx.stroke();
 			}
 			// $(".pages").on("touchmove",preventDefault);
 			e.preventDefault();
 		},
 		_onend:function(e,self){
 			self.nextArr=[];
 			var pass=0;
 			// console.log(self.line[i].check)
 			for(var i=0;i<self.line.length;i++){
 				
 				pass+=self.line[i].check;
 			}
 			
 			if(pass==self.line.length){
 				self.callback("success",self.container);
 				self._success();
 				self.isStart=false;
 			}else{
 				

 				if(self.isStart){
 					self.callback("fail",self.container);
 					self._fail();
 				}

 				self.isStart=false;
 			}
 			$(".pages").off("touchmove",preventDefault);
 		},
 		_fail:function(){
 			var self=this;
 			for(var i=0;i<self.line.length;i++){
 				self.line[i].check=0;
 			}
 			self.container.find(".game-point").removeClass("on");
 			self.ctx2.clearRect(0,0,self.canvas2.width,self.canvas2.height);
 		},
 		_success:function(){

 		}
 	}


 	
 	var isFirst=true;
 	

 	function handleLine(type,element){
 		if(type=="point"){
 			if(isFirst){
 				isFirst=false;
 				gametimer.start();
 			}
 			// console.log(element)
 		}else if(type=="success"){
 			
 			

 			gamesuccess();
 		}else if(type=="fail"){
 			element.addClass("shake");
 			// gamesuccess(totaltime);
 			setTimeout(function(){
 				
 				element.removeClass("shake");
 			},1000);

 		}
 	}
 	function gamesuccess(){
 		gameContainer.addClass("success_"+gamestep);
 		if(gamestep=="w"){
	 		$(".logo-w").addClass("on");
	 		setTimeout(function(){
	 			gameContainer.css({
	 				"-webkit-transition":"all .5s"
	 			})
	 		},1500)
	 		setTimeout(function(){
	 			// gameindex=0;
	 			gamestep="e";
	 			gameLine.clear();
	 			gameContainer.css({
	 				"-webkit-transition":"0s"
	 			})
	 			gameContainer.removeClass("success_w");
	 			
	 			gameLine.reset(line_e[gameindex])

	 		},700)
 		}else if(gamestep=="e"){
 			$(".logo-e").addClass("on");
 			var totaltime=gametimer.end();
 			$("#gametime").html(totaltime.time);
 			// window.gamedata.time=totaltime;
 			window.gamedata.time=totaltime;
	 		setTimeout(function(){
	 			
	 			$(".game-content").addClass("hide");
	 			$(".share-content").addClass("show");

	 		},700)
 		}
 	}
 	$("#change-game span").tap(function(){
 		gameindex=(gameindex+1)%2;
 		if(gamestep=="w"){
 			gameLine.reset(line_w[gameindex])
 		}else{
 			gameLine.reset(line_e[gameindex])
 		}
 			
 	});
 	$(".btn-share").tap(function(){
 		$("input").blur();
 		var name=$("#username").val();
 		var tel=$("#tel").val();
 		if(!name){
 			alert("请填写姓名");
 		}else if(!tel){
 			alert("请填写电话");
 		}else if(!tel.isMobile()){
 			alert("请正确填写电话");
 		}
 		else{
 			$(".m-weixinShareLayer").addClass("show");
 			datasubmit(name,tel);
 		}
 		
 	});
 	
 	$(".m-weixinShareLayer").tap(function(){

 		if(data.userid){
 			$(".m-weixinShareLayer").removeClass("show");
 		}
 		
 	})
 	function datasubmit(name,tel){
 		var time1=parseInt($("#gametime").html());
 		var time2=-1;
 		if(data.gametime){
 			time2=data.gametime;
 		}
 		var gametime=((time2>time1)||time2==-1)?time1:time2;

 		postData={
 			name:name,
 			tel:tel,
 			gametime:gametime
 		}
 		if(data.userid){
 			postData.userid=data.userid;
 		}
 		var option={ expires: 200 ,path: '/'};
 		$.fn.cookie("name",name,option);
 		$.fn.cookie("tel",tel,option);
 		$.fn.cookie("gametime",gametime,option);
 		$.post(APP+'/Game/data/',postData,function(result){
 			var result=JSON.parse(result);
 			var option={ expires: 200 ,path: '/'};
 			$.fn.cookie("userid",result.userid,200);
 			data.userid=result.userid;
 			$.fn.cookie("province",result.province,200);
 			$.fn.cookie("city",result.city,200);
 		});
 		
 	}
    function showPosition(position){
        $.getJSON('http://api.map.baidu.com/geocoder/v2/?ak=71709218d45a706b9c7e3abc2f037b23&callback=?&location='+position.coords.latitude+','+position.coords.longitude+'&output=json&pois=1', function(res){
                //addressComponent => {city: "广州市", district: "天河区", province: "广东省", street: "广州大道", street_number: "中922号-之101-128"} 
                city=res.result.addressComponent.city;
               
        });
    }
    $(".skip-game").tap(function(){
    	$(".game-content").addClass("hide");
	 	$(".share-content").addClass("show");
    });
    $(".btn-stargame").tap(function(){
    	$(".voice-cont").hide();
    	window.slideTo($(".pages .page").index(".page-game"));
    })
 	window.gamestart=function(){
 		
 		// if (navigator.geolocation){
 		// 	navigator.geolocation.getCurrentPosition(showPosition);
 		// }
 		var time=parseInt($("#gametime").html())
 		
 		if($.fn.cookie('userid')){
 			data.userid=$.fn.cookie('userid');
 			data.name=$.fn.cookie('name');
 			data.tel=$.fn.cookie('tel');
 			
 			$("#username").val(data.name);
 			$("#tel").val(data.tel);
 			$(".skip-game").addClass("show");

 			// data.city=$.fn.cookie('city');
 			data.gametime=parseInt($.fn.cookie('gametime'));
 			window.gamedata.time=data.gametime;
 			
 			$("#gametime").html(data.gametime);
 			isJoin=true;
 		}
 		gametimer=new timer();
 		gameLine=new gameline(gameContainer,line_w[gameindex],handleLine);

 	}
}(Zepto)