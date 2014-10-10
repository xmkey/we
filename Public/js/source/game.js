!function($){
 	var line=[
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
	];
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
 	gameline.prototype={
 		init:function(){
 			this.reset(this.line);
			this._bind();
 		},
 		reset:function(line){
 			var ctx=this.ctx;
 			// var line=this.line;
 			this.line=line;
 			ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
 			this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height);
 			this.container.find(".game-point").remove();
 			this.points=this._getPoints();
 			ctx.beginPath();
 			this.lineArr=[];
 			this.nextArr=[];
 			this.offset=this.container.offset();
 			for(var i=0;i<line.length;i++){
 				line[i].check=0;
 				ctx.moveTo(line[i].from.x, line[i].from.y);
				ctx.lineTo(line[i].to.x, line[i].to.y);
 			}
			ctx.lineWidth = 2.0; // 设置线宽
			ctx.strokeStyle = "#6e7fc5"; // 设置线的颜色
			ctx.stroke();
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
 						// "-webkit-animation-delay":Math.random()*delay+"ms"
 					})
 					
 					// item.addClass("show");
 					// setTimeout((function(item){
 					// 	return function(){
 					// 		item.addClass("show");
 					// 		// item.css({
		 			// 		// 	"-webkit-transition":"all .5s"
		 			// 		// });
 					// 	}
 						
 					// })(item),200)
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

	 						self.line[self.nextArr[i].pos].check=1;
	 						self.nextArr=[];

	 						for(var j=0;j<self.line.length;j++){
				 				if(self.line[j].from.x==x&&self.line[j].from.y==y&&self.line[j].check==0){
				 					self.nextArr.push({x:self.line[j].to.x,y:self.line[j].to.y,pos:j});
				 					$(target).addClass("on");
				 					self.callback("point",$(target));
				 				}
				 				if(self.line[j].to.x==x&&self.line[j].to.y==y&&self.line[j].check==0){
				 					self.nextArr.push({x:self.line[j].from.x,y:self.line[j].from.y,pos:j});
				 					$(target).addClass("on");
				 					self.callback("point",$(target));
				 				}
				 			}
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
				ctx.strokeStyle = "#fff"; // 设置线的颜色
				ctx.stroke();
 			}
 			e.preventDefault();
 		},
 		_onend:function(e,self){
 			self.nextArr=[];
 			var pass=0;
 			for(var i=0;i<self.line.length;i++){
 				pass+=self.line[i].check;
 			}
 			if(pass==self.line.length){
 				self.callback("success",self.container);
 				self._success();
 			}else{
 				self.callback("fail",self.container);
 				self._fail();
 			}

 			
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
 	var gameLine=new gameline(gameContainer,line,handleLine);

 	function handleLine(type,element){
 		if(type=="point"){
 			// console.log(element)
 		}else if(type=="success"){
 			console.log("success")
 		}else if(type=="fail"){
 			element.addClass("shake");
 			setTimeout(function(){
 				console.log(element)
 				element.removeClass("shake");
 			},1000);

 		}
 	}
}(Zepto)