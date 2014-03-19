		//rectangle
		var c=document.getElementById('canvas0');
		var ctx=c.getContext('2d');
		c.width=400;
		c.height=330;
		ctx.moveTo(80,0);
		ctx.lineTo(0,80);
		ctx.moveTo(0,80);
		ctx.lineTo(80,160);
		ctx.moveTo(80,160);
		ctx.lineTo(160,80);
		ctx.moveTo(160,80);
		ctx.lineTo(80,0);
		ctx.stroke();
	

	//circle
		var c1=document.getElementById('canvas1');
		var ctx1=c1.getContext('2d');
		c1.width=400;
		c1.height=330;
		ctx1.beginPath();
		ctx1.arc(200,100,40,0,2*Math.PI);
		ctx1.strokeStyle="#10CFC8";
		ctx1.stroke();
		ctx1.fillStyle="#10CFC8";
		ctx1.fill();

	