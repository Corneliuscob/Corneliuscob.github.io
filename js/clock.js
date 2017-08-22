//sets our canvas variable
	var canvas = document.getElementById("canvas");
	// shortens the context
	var ctx = canvas.getContext("2d");
	// this allows us to findthe radius of all squares 
	var radius = canvas.height/2
	// we reset the origin value to the center
	ctx.translate(radius,radius);
	//reduce the clock radius to draw the clock well within the canvas
	radius = radius *0.90;
	//drawClock();//draws it for one instance
	//setting the time interval to draw clock
	setInterval(drawClock,1000);


	//js function to draw clock
	function drawClock(){
		drawFace(ctx,radius);
		drawNums(ctx,radius);
		drawTime(ctx,radius);
	}
		
	//js function to draw clock face
	function drawFace(){
		var grad;
		ctx.beginPath();
		ctx.arc(0,0,radius,0,2*Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();
		// creates a gradient 95 and 105% of the  original clock radius
		grad = ctx.createRadialGradient(0,0,radius*.95,0,0,radius*1.05);
		
		// create 3 color stops
		grad.addColorStop(0,'#333');
		grad.addColorStop(0.5,'white');	
		grad.addColorStop(1,'#333');
		ctx.strokeStyle = grad;
		ctx.lineWidth = radius *0.1;
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(0,0,radius*.1,0,2*Math.PI);
		ctx.fillStyle = '#333';
		ctx.fill();
	}
	function drawNums(){
		var ang;
		//set teh font to be 15% of the radius
		ctx.font = radius*.15+ "px arial";
		//setthe text alignment to the middle and center of the print positin
		ctx.textBaseline="middle";
		ctx.textAlign = "center";
		for (var num = 1; num <13; num++)
		{
			ang = num*Math.PI/6;
			//console.log(ang/Math.PI*180)
			ctx.rotate(ang);
			ctx.translate(0,-radius*.85);
			ctx.rotate(-ang);
			ctx.fillText(num.toString(),0,0);
			ctx.rotate(ang);
			ctx.translate(0,radius*.85);
			ctx.rotate(-ang);
		}
	}
	function drawTime(){
		var now = new Date();
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		// hour
		hour = hour %12;
		hour = (hour*(Math.PI)/6)+(minute*(Math.PI)/(6*60))+(second*(Math.PI)/(360*60));
		drawHand (ctx,hour,radius*.5,radius*0.07);
		console.log(hour);
		//minute
		//minute=(minute*(Math.PI)/30)+(second*(Math.PI)/(30*60));
		minute=(minute*(Math.PI)/30);
		drawHand (ctx,minute,radius*.8,radius*0.07);
		console.log(minute);
		//second
		second = ( second*(Math.PI)/30);
		drawHand (ctx,second,radius*.7,radius*0.02);
		console.log(second);
	}
	function drawHand(ctx,pos,length,width){
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = "round";
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0,-length);
		ctx.stroke();
		ctx.rotate(-pos);
	}