var R=300/2, d, angle, pX, pY, qX, qY
var d, angle, pX, pY, qX, qY;
var canvas=document.getElementById("sandbox"),
context=canvas.getContext("2d"),
circle;
circle=new Path2D();
circle.arc(150,150,100,0,2*Math.PI);
context.stroke(circle);
for (var d = 0; d < 60; ++d) {
	angle=(d/60)*(2*Math.PI);
	pX=Math.cos(angle)*R;
	pX=-Math.sin(angle)*R;
	qX=0.9*pX;
	qY=0.9*pY;
	pX+=R; pY+=R;
	qX+=R; qY+=R;
alert(pX);
	line=new Path2D();
	line.moveTo(pX,pY);
	line.lineTo(qX,qY);
	context.lineWidth=1;
	context.stroke(line);

}