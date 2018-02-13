
function Clock(){


//Объявляем переменные
var R=300/2, d, angle, pX, pY, qX, qY
var d, angle, pX, pY, qX, qY, sX, sY, ssX, ssY, mX, mY, mmX, mmY;
var date=new Date(), hours, minutes, seconds;
hours=date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();

//Рисуем Оружность циферблата
var canvas=document.getElementById("sandbox"),
context=canvas.getContext("2d"),
circle, line, lineS, lineM, lineH;
context.clearRect(0,0,300,300);
circle=new Path2D();
circle.arc(150,150,R,0,2*Math.PI);
context.stroke(circle);
//Рисуем шкалу циферблата
for (var d = 0; d < 60; ++d) {
	//вычисление начала и конца отрезков
	angle=(d/60)*(2*Math.PI);
	pX=Math.cos(angle)*R;
	pY=-Math.sin(angle)*R;
	qX=0.9*pX;
	qY=0.9*pY;
	pX+=R; pY+=R;
	qX+=R; qY+=R;
	//рисование отрезков
	line=new Path2D();
	line.moveTo(pX,pY);
	line.lineTo(qX,qY);
	context.lineWidth=1;
	context.stroke(line);
}
//Создание секундной стрелки
var secondsAngle=(seconds/60)*(2*Math.PI);
secondsAngle=Math.PI/2-secondsAngle;
sX=Math.cos(secondsAngle)*R;
sY=-Math.sin(secondsAngle)*R;
ssX=0.05*sX;
ssY=0.05*sY;
sX+=R; sY+=R;
ssX+=R; ssY+=R;
lineS=new Path2D();
lineS.moveTo(sX,sY);
lineS.lineTo(ssX,ssY);
context.strokeStyle="red";
context.lineWidth=1;
context.stroke(lineS);
//Создание минутной стрелки
var minutesAngle=(minutes/60)*(2*Math.PI);
minutesAngle=Math.PI/2-minutesAngle;
mX=Math.cos(minutesAngle)*R*0.8;
mY=-Math.sin(minutesAngle)*R*0.8;
mmX=0.05*mX;
mmY=0.05*mY;
mX+=R; mY+=R;
mmX+=R; mmY+=R;
lineM=new Path2D();
lineM.moveTo(mX,mY);
lineM.lineTo(mmX,mmY);
context.strokeStyle="black";
context.lineWidth=3;
context.stroke(lineM);
//Создание часовой стрелки
var hoursAngle=((hours%12)/12)*(2*Math.PI);
hoursAngle=Math.PI/2-hoursAngle;
hX=Math.cos(hoursAngle)*R*0.6;
hY=-Math.sin(hoursAngle)*R*0.6;
hhX=0.05*hX;
hhY=0.05*hY;
hX+=R; hY+=R;
hhX+=R; hhY+=R;
lineH=new Path2D();
lineH.moveTo(hX,hY);
lineH.lineTo(hhX,hhY);
context.lineWidth=5;
context.stroke(lineH);
context.lineWidth=1;

}
//функция перерисовывающая часы каждую секунду.
function drawWatch(){
	Clock();
	setTimeout(drawWatch,1000);
}

drawWatch();