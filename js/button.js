let jump = false;

document.getElementById("button").onclick = function()
{
	let stopStart = false;
	let boucle1 = 0;
    if(!jump){
	document.getElementById("button").style.backgroundImage = "url('img/buttonInfo2.png')";
	if(!stopStart){
	  setInterval(function(){
		
		boucle1++;
		  
		if(boucle1 === 1){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.1)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.1)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.1)";
		}
		if(boucle1 === 2){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.2)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.2)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.2)";
		}
		if(boucle1 === 3){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.3)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.3)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.3)";
		}
		if(boucle1 === 4){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.4)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.4)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.4)";
		}
		if(boucle1 === 5){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.5)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.5)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.5)";
		}
		if(boucle1 === 6){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.6)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.6)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.6)";
		}
		if(boucle1 === 7){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.7)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.7)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.7)";
		}
		if(boucle1 === 8){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.8)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.8)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.8)";
		}
		if(boucle1 === 9){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.9)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.9)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.9)";
		}
		if(boucle1 === 10){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 1)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 1)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 1)";
			stopStart = true;
			jump = true;
		}
		
		}, 50);
	}
    }
    if(jump){
	document.getElementById("button").style.backgroundImage = "url('img/buttonInfo1.png')";
	if(!stopStart){
	  setInterval(function(){
		
		boucle1++;
		  
		if(boucle1 === 1){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.9)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.9)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.9)";
		}
		if(boucle1 === 2){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.8)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.8)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.8)";
		}
		if(boucle1 === 3){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.7)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.7)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.7)";
		}
		if(boucle1 === 4){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.6)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.6)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.6)";
		}
		if(boucle1 === 5){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.5)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.5)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.5)";
		}
		if(boucle1 === 6){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.4)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.4)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.4)";
		}
		if(boucle1 === 7){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.3)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.3)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.3)";
		}
		if(boucle1 === 8){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.2)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.2)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.2)";
		}
		if(boucle1 === 9){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0.1)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0.1)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0.1)";
		}
		if(boucle1 === 10){
			document.getElementById("boxInfo").style.borderColor = "rgba(255,255,255, 0)";
			document.getElementById("boxInfo").style.backgroundColor = "rgba(0,0,0, 0)";
			document.getElementById("textInfo").style.color = "rgba(255,255,255, 0)";
			stopStart = true;
			jump = false;
		}
		
		}, 50);
	}
    }

	
}

