var point=0;

function plus()
 { 
 	point=point+1;
 	console.log(point);

 }
 
 document.getElementById("start").addEventListener("click", myFunction1);

function myFunction1()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題一";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否有對活動和嗜好的興趣降低的傾向?";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變 ";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction2);
	document.getElementById("no").addEventListener("click", myFunction2);
	document.getElementById("dontknow").addEventListener("click", myFunction2);

	var W=document.getElementById("start");
	W.parentNode.removeChild(W);
}

function myFunction2()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題二";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否會重複相同問題、故事和陳述？";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "會 ";
	Y.innerHTML = "不會";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction3);
	document.getElementById("no").addEventListener("click", myFunction3);
	document.getElementById("dontknow").addEventListener("click", myFunction3);
}

function myFunction3()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題三";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否在學習如何使用工具、設備和小器具上有困難?  例如：電視、音響、冷氣機、洗衣機、熱水爐（器）、微波爐、遙控器";
	btn4.innerHTML = "----------------------------------------------------------------------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction4);
	document.getElementById("no").addEventListener("click", myFunction4);
	document.getElementById("dontknow").addEventListener("click", myFunction4);
}

function myFunction4()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題四";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否會忘記正確的月份和年份?";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction5);
	document.getElementById("no").addEventListener("click", myFunction5);
	document.getElementById("dontknow").addEventListener("click", myFunction5);
}

function myFunction5()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題五";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否在處理複雜的財物上有困難?  例如：個人或家庭的收支平衡、所得稅、繳費單";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction6);
	document.getElementById("no").addEventListener("click", myFunction6);
	document.getElementById("dontknow").addEventListener("click", myFunction6);
}

function myFunction6()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題六";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否容易忘記約會的時間？";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction7);
	document.getElementById("no").addEventListener("click", myFunction7);
	document.getElementById("dontknow").addEventListener("click", myFunction7);
}

function myFunction7()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題七";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否會忘記正確的月份和年份？";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", myFunction8);
	document.getElementById("no").addEventListener("click", myFunction8);
	document.getElementById("dontknow").addEventListener("click", myFunction8);
}
function myFunction8()
{
	var btn1 = document.createElement("div");
	var btn2 = document.createElement("div");
	var btn3 = document.createElement("div");
	var btn4 = document.createElement("div"); 
	var btn5 = document.createElement("div");  		

	var X = document.createElement("button");
	var Y = document.createElement("button");
	var Z = document.createElement("button");

	X.setAttribute('id','yes');
	X.setAttribute('type','button');
	Y.setAttribute('id','no'); 
	Z.setAttribute('id','dontknow');
	
	btn1.innerHTML = "問題八";
	btn3.innerHTML = "      ";
	btn2.innerHTML = "是否有持續性的思考和記憶方面的問題？";
	btn4.innerHTML = "-------------------------------------------------------------------------------------";

	X.innerHTML = "是，有改變";
	Y.innerHTML = "不是，沒有改變";
	Z.innerHTML = "不知道";

	btn5.appendChild(X);
	btn5.appendChild(Y);
	btn5.appendChild(Z);
	btn4.appendChild(btn5);		
	btn2.appendChild(btn4);
	btn3.appendChild(btn2);
	btn1.appendChild(btn3);
	
	var C = document.getElementById("container");
	C.appendChild(btn1);

	X.onclick=function()
	{
		C.removeChild(btn1);
		plus();
	}
	Y.onclick=function()
	{
		C.removeChild(btn1);
	}		
	Z.onclick=function()
	{
		C.removeChild(btn1);
	}

	document.getElementById("yes").addEventListener("click", showfinalgrade);
	document.getElementById("no").addEventListener("click", showfinalgrade);
	document.getElementById("dontknow").addEventListener("click", showfinalgrade);
}

function showfinalgrade() 
{
	var btn1 = document.createElement("p");
	var btn2 = document.createElement("p");
	var btn3 = document.createElement("p");


	btn1.innerHTML = "總分";
	btn2.innerHTML = point;

	if (point>=2)
	{
		btn3.innerHTML = "情況稍微嚴重，建議尋求專業醫師的協助。";
	}

	if (point==1)
	{
		btn3.innerHTML = "情況並沒有到很嚴重，但建議良好的飲食睡眠與運動習慣。";
	}

	if (point==0)
	{
		btn3.innerHTML = "狀況良好，請繼續保持良好的生活習慣！";
	}

	btn2.appendChild(btn3);
	btn1.appendChild(btn2);
	var C = document.getElementById("container");

	C.appendChild(btn1);
}