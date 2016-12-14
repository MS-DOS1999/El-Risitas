// FREE VAR
var curve = 0;
var counterP1 = 0;

//VAR TIMER EVENT
var b1EndP1 = false, b2EndP1 = false, b3EndP1 = true, b4EndP1 = true, b5EndP1 = true,
b6EndP1 = true, b7EndP1 = true, b8EndP1 = true, b9EndP1 = true, b10EndP1 = true,
b11EndP1 = true, b12EndP1 = true, b13EndP1 = true, b14EndP1 = true, b15EndP1 = true,
b16EndP1 = true, b17EndP1 = true, b18EndP1 = true, b19EndP1 = true, b20EndP1 = true;

var b1EndP2 = true, b2EndP2 = true, b3EndP2 = true, b4EndP2 = true, b5EndP2 = true,
b6EndP2 = true, b7EndP2 = true, b8EndP2 = true, b9EndP2 = true, b10EndP2 = true,
b11EndP2 = true, b12EndP2 = true, b13EndP2 = true, b14EndP2 = true, b15EndP2 = true,
b16EndP2 = true, b17EndP2 = true, b18EndP2 = true, b19EndP2 = true, b20EndP2 = true;

var b1EndP3 = true, b2EndP3 = true, b3EndP3 = true, b4EndP3 = true, b5EndP3 = true,
b6EndP3 = true, b7EndP3 = true, b8EndP3 = true, b9EndP3 = true, b10EndP3 = true,
b11EndP3 = true, b12EndP3 = true, b13EndP3 = true, b14EndP3 = true, b15EndP3 = true,
b16EndP3 = true, b17EndP3 = true, b18EndP3 = true, b19EndP3 = true, b20EndP3 = true;

var b1EndP4 = true, b2EndP4 = true, b3EndP4 = true, b4EndP4 = true, b5EndP4 = true,
b6EndP4 = true, b7EndP4 = true, b8EndP4 = true, b9EndP4 = true, b10EndP4 = true,
b11EndP4 = true, b12EndP4 = true, b13EndP4 = true, b14EndP4 = true, b15EndP4 = true,
b16EndP4 = true, b17EndP4 = true, b18EndP4 = true, b19EndP4 = true, b20EndP4 = true;

// Déclaration des variables
var joueur = new Image(), background = new Image(),
bloc1 = new Image(), bloc2 = new Image(), bloc3 = new Image(),
bloc4 = new Image(), bloc5 = new Image(), bloc6 = new Image(),
bloc7 = new Image(), bloc8 = new Image(), bloc9 = new Image(),
bloc10 = new Image(), bloc11 = new Image(), bloc12 = new Image(),
bloc13 = new Image(), bloc14 = new Image(), bloc15 = new Image(),
bloc16 = new Image(), bloc17 = new Image(), bloc18 = new Image(),
bloc19 = new Image(), bloc20 = new Image(),
lifeBar = new Image();

var lifeCounter = 3;

var sndLevel = new Audio("sound/Whirlwind.mp3");
var levelmusic = 1;


//link images to var
joueur.src = "img/heart.png";
background.src = "img/background.png";
lifeBar.src = "img/jauge_remplie.png";
bloc1.src = "img/skull.png";
bloc2.src = "img/skull.png";
bloc3.src = "img/rayonH.png";
bloc4.src ="img/rayon.png";
bloc5.src = "img/arrowup.png";
bloc6.src = "img/arrowup.png";
bloc7.src = "img/arrowup.png";
bloc8.src = "img/skull.png";
bloc9.src = "img/rayonH.png";
bloc10.src = "img/rayonH.png";
bloc11.src = "img/rayon.png";
bloc12.src = "img/rayon.png";
bloc13.src = "img/arrowright.png";
bloc14.src = "img/arrowright.png";
bloc15.src = "img/arrowdown.png";
bloc16.src = "img/arrowdown.png";
bloc17.src = "img/arrowdown.png";
bloc18.src = "img/arrowdown.png";
bloc19.src = "img/skull.png";
bloc20.src = "img/skull.png";

window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");

	// Déclaration des variables objets

	var b1 = {}, b2 = {}, b3 = {}, b4 = {}, b5 = {}, b6 = {}, b7 = {}, b8 = {}, b9 = {}, b10 = {},
	b11 = {}, b12 = {}, b13 = {}, b14 = {}, b15 = {}, b16 = {}, b17 = {}, b18 = {}, b19 = {}, b20 = {},
	lB = {};

  var W = 512;
	var H = 256;
	var mouseX;
	var mouseY;
	var p1 = {};

    init();

    function init() {

			canvas.width = W;
			canvas.height = H;


			p1.h = joueur.height;
			p1.w = joueur.width;
			p1.x = (W - p1.w) / 2;
			p1.y = (H - p1.h) / 2;

			b1.h = bloc1.height;
			b1.w = bloc1.width;
			b1.y = 0;
			b1.x = -bloc1.width;

			b2.h = bloc2.height;
			b2.w = bloc2.width;
			b2.y = 0;
			b2.x = 512;

			b3.h = bloc3.height;
			b3.w = bloc3.width;
			b3.y = 256 / 3;
			b3.x = -bloc3.width;

			b4.h = bloc4.height;
			b4.w = bloc4.width;
			b4.y = 256;
			b4.x = 512 / 3;

			b5.h = bloc5.height;
			b5.w = bloc5.width;
			b5.y = 256;
			b5.x = 104;

			b6.h = bloc6.height;
			b6.w = bloc6.width;
			b6.y = 256;
			b6.x = 256;

			b7.h = bloc7.height;
			b7.w = bloc7.width;
			b7.y = 256;
			b7.x = 408;

			b8.h = bloc8.height;
			b8.w = bloc8.width;
			b8.y = 256;
			b8.x = -bloc8.width;

			b9.h = bloc9.height;
			b9.w = bloc9.width;
			b9.y = 0;
			b9.x = -bloc9.width;

			b10.h = bloc10.height;
			b10.w = bloc10.width;
			b10.y = (256 / 3) * 2;
			b10.x = -bloc10.width;

			b11.h = bloc11.height;
			b11.w = bloc11.width;
			b11.y = -(bloc11.height);
			b11.x = (512 / 3) * 2;

			b12.h = bloc12.height;
			b12.w = bloc12.width;
			b12.y = -(bloc12.height);
			b12.x = 0;

			b13.h = bloc13.height;
			b13.w = bloc13.width;
			b13.y = 256 / 3;
			b13.x = -bloc13.width;

			b14.h = bloc14.height;
			b14.w = bloc14.width;
			b14.y = (256 / 3) * 2;
			b14.x = -bloc14.width;

			b15.h = bloc15.height;
			b15.w = bloc15.width;
			b15.y = -(bloc15.height);
			b15.x = 51;

			b16.h = bloc16.height;
			b16.w = bloc16.width;
			b16.y = -(bloc16.height);
			b16.x = 461;

			b17.h = bloc17.height;
			b17.w = bloc17.width;
			b17.y = -(bloc17.height);
			b17.x = 205;

			b18.h = bloc18.height;
			b18.w = bloc18.width;
			b18.y = -(bloc17.height);
			b18.x = 411;

			b19.h = bloc19.height;
			b19.w = bloc19.width;
			b19.y = 200;
			b19.x = -(bloc19.width);

			b20.h = bloc20.height;
			b20.w = bloc20.width;
			b20.y = 256;
			b20.x = 512;
			// Je déterminerai les positions et les placements
			// initiaux de chaque bloc au moment où je trouverai
			// leur image ou quand je ferais leurs dessins en pixelArt

			lB.h = lifeBar.height;
			lB.w = lifeBar.width;
			lB.y = 10;
			lB.x = 10;

			mouseY = p1.y;
			mouseX = p1.x;
      setInterval(main, 10);
			canvas.addEventListener("mousemove", souris, false);
			document.body.style.cursor = 'none';

    }
    function main() {
	    
		sndLevel.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
		}, false);

		if(lifeCounter === 2){
			lifeBar.src = "img/jauge_demi1.png";
		}
		if(lifeCounter === 1){
			lifeBar.src = "img/jauge_demi2.png";
		}

		if(!b1EndP1 && !b2EndP1){
			if(levelmusic === 1){
				sndLevel.play();
				levelmusic = 0;
			}
			b1.x += 2;
			b1.y += 1;
			b2.x -= 2;
			b2.y += 1;
			if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256)){
				b1.x = 0;
				b1.y = -b1.width;
				b2.x = 512;
				b2.y = 0;
				b1EndP1 = true;
				b2EndP1 = true;
				b3EndP1 = false;
			}
		}

		if(!b3EndP1){
			b3.x += 10;
			if(b3.x > 530){
				b3.x = -bloc3.width;
				b3EndP1 = true;
				b12EndP1 = false;
			}
		}

		if(!b12EndP1){
			b12.y += 5;
			if(b12.y > 270){
				b12.y = -bloc12.height;
				b12EndP1 = true;
				b11EndP1 = false;
			}
		}

		if(!b11EndP1){
			b11.y += 5;
			if(b11.y > 270){
				b11.y = -bloc11.height;
				b11EndP1 = true;
				b4EndP1 = false;
			}
		}

		if(!b4EndP1){
			b4.y -= 5;
			if(b4.y < -30){
				b4.y = 256;
				b4EndP1 = true;
				b20EndP1 = false;
			}
		}

		if(!b20EndP1){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b20.x -= 2;
			b20.y -= 1 + (10 * Math.sin(curve));
			if(b20.y < 0 || b20.x < 0){
				b20.y = 256;
				b20.x = 512;
				b20EndP1 = true;
				b15EndP1 = false;
				b18EndP1 = false;
			}
		}

		if(!b15EndP1 && !b18EndP1){
			b15.y += 2;
			b18.y += 2;
			if(b15.y > 270 || b18.y > 270){
				b15.y = -bloc15.height;
				b18.y = -bloc18.height;
				b15EndP1 = true;
				b18EndP1 = true;
				b17EndP1 = false;
				b16EndP1 = false;
			}
		}

		if(!b16EndP1 && !b17EndP1){
			b16.y += 2;
			b17.y += 2;
			if(b16.y > 270 || b17.y > 270){
				b16.y = -bloc16.height;
				b17.y = -bloc17.height;
				b16EndP1 = true;
				b17EndP1 = true;
				b5EndP1 = false;
				b6EndP1 = false;
				b7EndP1 = false;
			}
		}

		if(!b5EndP1 && !b6EndP1 && !b7EndP1){
			b5.y -= 2;
			b6.y -= 2;
			b7.y -= 2;
			if(b5.y < 0 || b6.y < 0 || b7.y < 0){
				b5.y = 256;
				b6.y = 256;
				b7.y = 256;
				b5EndP1 = true;
				b6EndP1 = true;
				b7EndP1 = true;
				b10EndP1 = false;
			}
		}

		if(!b10EndP1){
			b10.x += 10;
			if(b10.x > 512){
				b10.y = 256;
				b10EndP1 = true;
				b9EndP1 = false;
			}
		}

		if(!b9EndP1){
			b9.x += 10;
			if(b9.x > 512){
				b9.y = 256;
				b9EndP1 = true;
				b19EndP1 = false;
			}
		}

		if(!b19EndP1){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b19.x += 2;
			b19.y += 10 * Math.sin(curve);
			if(b19.x > 512){
				b19.y = 200;
				b19.x = -(bloc19.width);
				b19EndP1 = true;
				b8EndP1 = false;
				b13EndP1 = false;
				b14EndP1 = false;
			}
		}

		if(!b8EndP1 && !b13EndP1 && !b14EndP1){
			b8.x += 2;
			b8.y -= 1;
			b13.x += 2;
			b14.x += 2;
			if(( b8.x > 512 || b8.y < 0 ) || b13.x > 512 || b14.x > 512){
				b8.x = -bloc8.width;
				b8.y = 256;
				b13.x = -bloc13.width;
				b14.x = -bloc14.width;
				b8EndP1 = true;
				b13EndP1 = true;
				b14EndP1 = true;
				b6EndP2 = false;
				b13EndP2 = false;
				b14EndP2 = false;
			}
		}

		if(!b6EndP2 && !b13EndP2 && !b14EndP2){
			b6.y -= 2;
			b13.x += 2;
			b14.x += 2;
			if(b13.x > 512 || b14.x > 512){
				b6.y = 256;
				b13.x = -bloc13.width;
				b14.x = -bloc14.width;
				b6EndP2 = true;
				b13EndP2 = true;
				b14EndP2 = true;
				b4EndP2 = false;
				b5EndP2 = false;
				b7EndP2 = false;
			}
		}

		if(!b4EndP2 && !b5EndP2 && !b7EndP2){
			b4.y -= 5;
			b5.y -= 2;
			b7.y -= 2;
			if(b5.y < 0 || b7.y < 0){
				b4.y = 256;
				b5.y = 256;
				b7.y = 256;
				b4EndP2 = true;
				b5EndP2 = true;
				b7EndP2 = true;
				b1EndP2 = false;
				b3EndP2 = false;
				b8EndP2 = false;
			}
		}

		if(!b1EndP2 && !b3EndP2 && !b8EndP2){
			b1.x += 2;
			b1.y += 1;
			b3.x += 10;
			b8.x += 2;
			b8.y -= 1;
			if((b1.x > 512 || b1.y > 256) && b3.x > 530 && ( b8.x > 512 || b8.y < 0 )){
				b1.x = 0;
				b1.y = -b1.width;
				b3.x = -bloc3.width;
				b8.x = -bloc8.width;
				b8.y = 256;
				b1EndP2 = true;
				b3EndP2 = true;
				b8EndP2 = true;
				b11EndP2 = false;
				b12EndP2 = false;
				b20EndP2 = false;
			}
		}

		if(!b11EndP2 && !b12EndP2 && !b20EndP2){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b11.y += 5;
			b12.y += 5;
			b20.x -= 2;
			b20.y -= 1 + (10 * Math.sin(curve));
			if(b11.y > 270 && b12.y > 270 && ( b20.y < 0 || b20.x < 0 )){
				b11.y = -bloc11.height;
				b12.y = -bloc12.height;
				b20.y = 256;
				b20.x = 512;
				b11EndP2 = true;
				b12EndP2 = true;
				b20EndP2 = true;
				b15EndP2 = false;
				b16EndP2 = false;
				b17EndP2 = false;
				b18EndP2 = false;
				b19EndP2 = false;
			}
		}

		if(!b15EndP2 && !b16EndP2 && !b17EndP2 && !b18EndP2 && !b19EndP2){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b15.y += 2;
			b16.y += 2;
			b17.y += 2;
			b18.y += 2;
			b19.x += 2;
			b19.y += 10 * Math.sin(curve);
			if(b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
				b15.y = -bloc15.height;
				b16.y = -bloc16.height;
				b17.y = -bloc17.height;
				b18.y = -bloc18.height;
				b19.y = 200;
				b19.x = -(bloc19.width);
				b15EndP2 = true;
				b16EndP2 = true;
				b17EndP2 = true;
				b18EndP2 = true;
				b19EndP2 = true;
				b1EndP3 = false;
				b2EndP3 = false;
				b3EndP3 = false;
				b4EndP3 = false;
				b8EndP3 = false;
				b20EndP3 = false;
			}
		}

		if(!b1EndP3 && !b2EndP3 && !b3EndP3 && !b4EndP3 && !b8EndP3 && !b20EndP3){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b1.x += 2;
			b1.y += 1;
			b2.x -= 2;
			b2.y += 1;
			b3.x += 10;
			b4.y -= 5;
			b8.x += 2;
			b8.y -= 1;
			b20.x -= 2;
			b20.y -= 1 + (10 * Math.sin(curve));
			if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && b3.x > 530 && b4.y < -30 && ( b8.x > 512 || b8.y < 0 ) && (b20.y < 0 || b20.x < 0)){
				b1.x = 0;
				b1.y = -b1.width;
				b2.x = 512;
				b2.y = 0;
				b3.x = -bloc3.width;
				b4.y = 256;
				b8.x = -bloc8.width;
				b8.y = 256;
				b20.y = 256;
				b20.x = 512;
				b1EndP3 = true;
				b2EndP3 = true;
				b3EndP3 = true;
				b4EndP3 = true;
				b8EndP3 = true;
				b20EndP3 = true;
				b9EndP3 = false;
				b10EndP3 = false;
				b11EndP3 = false;
				b12EndP3 = false;
			}
		}

		if(!b9EndP3 && !b10EndP3 && !b11EndP3 && !b12EndP3){
			b9.x += 10;
			b10.x += 10;
			b11.y += 5;
			b12.y += 5;
			if(b9.x > 512 && b10.x > 512 && b11.y > 270 && b12.y > 270){
				b9.y = 256;
				b10.y = 256;
				b11.y = -bloc11.height;
				b12.y = -bloc12.height;
				b9EndP3 = true;
				b10EndP3 = true;
				b11EndP3 = true;
				b12EndP3 = true;
				b5EndP3 = false;
				b6EndP3 = false;
				b7EndP3 = false;
				b15EndP3 = false;
				b16EndP3 = false;
				b17EndP3 = false;
				b18EndP3 = false;
				b19EndP3 = false;
			}
		}

		if(!b5EndP3 && !b6EndP3 && !b7EndP3 && !b15EndP3 && !b16EndP3 && !b17EndP3 && !b18EndP3 && !b19EndP3){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b5.y -= 2;
			b6.y -= 2;
			b7.y -= 2;
			b15.y += 2;
			b16.y += 2;
			b17.y += 2;
			b18.y += 2;
			b19.x += 2;
			b19.y += 10 * Math.sin(curve);
			if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
				b5.y = 256;
				b6.y = 256;
				b7.y = 256;
				b15.y = -bloc15.height;
				b16.y = -bloc16.height;
				b17.y = -bloc17.height;
				b18.y = -bloc18.height;
				b19.y = 200;
				b19.x = -(bloc19.width);
				b5EndP3 = true;
				b6EndP3 = true;
				b7EndP3 = true;
				b15EndP3 = true;
				b16EndP3 = true;
				b17EndP3 = true;
				b18EndP3 = true;
				b19EndP3 = true;
				b5EndP4 = false;
				b6EndP4 = false;
				b7EndP4 = false;
				b9EndP4 = false;
				b10EndP4 = false;
				b13EndP4 = false;
				b14EndP4 = false;
				b15EndP4 = false;
				b16EndP4 = false;
				b17EndP4 = false;
				b18EndP4 = false;
			}
		}

		if(!b5EndP4 && !b6EndP4 && !b7EndP4 && !b9EndP4 && !b10EndP4 && !b13EndP4 && !b14EndP4 && !b15EndP4 && !b16EndP4 && !b17EndP4 && !b18EndP4){
			b5.y -= 2;
			b6.y -= 2;
			b7.y -= 2;
			b9.x += 10;
			b10.x += 10;
			b13.x += 2;
			b14.x += 2;
			b15.y += 2;
			b16.y += 2;
			b17.y += 2;
			b18.y += 2;
			if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b9.x > 512 && b10.x > 512 && b13.x > 512 && b14.x > 512 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270){
				b5.y = 256;
				b6.y = 256;
				b7.y = 256;
				b9.y = 256;
				b10.y = 256;
				b13.x = -bloc13.width;
				b14.x = -bloc14.width;
				b15.y = -bloc15.height;
				b16.y = -bloc16.height;
				b17.y = -bloc17.height;
				b18.y = -bloc18.height;
				b5EndP4 = true;
				b6EndP4 = true;
				b7EndP4 = true;
				b9EndP4 = true;
				b10EndP4 = true;
				b13EndP4 = true;
				b14EndP4 = true;
				b15EndP4 = true;
				b16EndP4 = true;
				b17EndP4 = true;
				b18EndP4 = true;
				b1EndP4 = false;
				b2EndP4 = false;
				b8EndP4 = false;
				b11EndP4 = false;
				b12EndP4 = false;
				b20EndP4 = false;
			}
		}

		if(!b1EndP4 && !b2EndP4 && !b8EndP4 && !b11EndP4 && !b12EndP4 && !b20EndP4){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b1.x += 2;
			b1.y += 1;
			b2.x -= 2;
			b2.y += 1;
			b8.x += 2;
			b8.y -= 1;
			b11.y += 5;
			b12.y += 5;
			b20.x -= 2;
			b20.y -= 1 + (10 * Math.sin(curve));
			if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && ( b8.x > 512 || b8.y < 0 ) && b11.y > 270 && b12.y > 270 && (b20.y < 0 || b20.x < 0)){
				b1.x = 0;
				b1.y = -b1.width;
				b2.x = 512;
				b2.y = 0;
				b8.x = -bloc8.width;
				b8.y = 256;
				b11.y = -bloc11.height;
				b12.y = -bloc12.height;
				b20.y = 256;
				b20.x = 512;
				b1EndP4 = true;
				b2EndP4 = true;
				b8EndP4 = true;
				b11EndP4 = true;
				b12EndP4 = true;
				b20EndP4 = true;
				b3EndP4 = false;
				b4EndP4 = false;
				b19EndP4 = false;
			}
		}

		if(!b3EndP4 && !b4EndP4 && !b19EndP4){
			curve += 0.5;
			if(curve > 180) curve = 0;
			b3.x += 10;
			b4.y -= 5;
			b19.x += 2;
			b19.y += 10 * Math.sin(curve);
			if(b3.x > 530 && b4.y < -30 && b19.x > 512){
				b3.x = -bloc3.width;
				b4.y = 256;
				b19.y = 200;
				b19.x = -(bloc19.width);
				b3EndP4 = true;
				b4EndP4 = true;
				b19EndP4 = true;
			}
		}

		if (collisions(b1,p1)) {
				lifeCounter -= 1;
				b1.w = 0;
				b1.h = 0;

		}
		if (collisions(b2,p1)) {
				lifeCounter -= 1;
				b2.w = 0;
				b2.h = 0;

		}
		if (collisions(b3,p1)) {
				lifeCounter -= 1;
				b3.w = 0;
				b3.h = 0;

		}
		if (collisions(b4,p1)) {
				lifeCounter -= 1;
				b4.w = 0;
				b4.h = 0;

		}
		if (collisions(b5,p1)) {
				lifeCounter -= 1;
				b5.w = 0;
				b5.h = 0;

		}
		if (collisions(b6,p1)) {
				lifeCounter -= 1;
				b6.w = 0;
				b6.h = 0;

		}
		if (collisions(b7,p1)) {
				lifeCounter -= 1;
				b7.w = 0;
				b7.h = 0;

		}
		if (collisions(b8,p1)) {
				lifeCounter -= 1;
				b8.w = 0;
				b8.h = 0;

		}
		if (collisions(b9,p1)) {
				lifeCounter -= 1;
				b9.w = 0;
				b9.h = 0;

		}
		if (collisions(b10,p1)) {
				lifeCounter -= 1;
				b10.w = 0;
				b10.h = 0;

		}
		if (collisions(b11,p1)) {
				lifeCounter -= 1;
				b11.w = 0;
				b11.h = 0;

		}
		if (collisions(b12,p1)) {
				lifeCounter -= 1;
				b12.w = 0;
				b12.h = 0;

		}
		if (collisions(b13,p1)) {
				lifeCounter -= 1;
				b13.w = 0;
				b13.h = 0;

		}
		if (collisions(b14,p1)) {
				lifeCounter -= 1;
				b14.w = 0;
				b14.h = 0;

		}
		if (collisions(b15,p1)) {
				lifeCounter -= 1;
				b15.w = 0;
				b15.h = 0;

		}
		if (collisions(b16,p1)) {
				lifeCounter -= 1;
				b16.w = 0;
				b16.h = 0;

		}
		if (collisions(b17,p1)) {
				lifeCounter -= 1;
				b17.w = 0;
				b17.h = 0;

		}
		if (collisions(b18,p1)) {
				lifeCounter -= 1;
				b18.w = 0;
				b18.h = 0;

		}
		if (collisions(b19,p1)) {
				lifeCounter -= 1;
				b19.w = 0;
				b19.h = 0;

		}
		if (collisions(b20,p1)) {
				lifeCounter -= 1;
				b20.w = 0;
				b20.h = 0;

		}

	    render();
    }

		function souris(e){
					if (e.x != undefined && e.y != undefined){
						mouseX = e.x - 15;
						mouseY = e.y - 15;
					} else {
					// Firefox patch
					mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - 15;
					mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - 15;
					}

					p1.x = mouseX;
					p1.y = mouseY;

				}

		function render() {
			context.drawImage(background, 0, 0);
			context.drawImage(joueur, mouseX, mouseY);
			context.drawImage(lifeBar, lB.x, lB.y);
			context.drawImage(bloc1, b1.x, b1.y);
			context.drawImage(bloc2, b2.x, b2.y);
			context.drawImage(bloc3, b3.x, b3.y);
			context.drawImage(bloc4, b4.x, b4.y);
			context.drawImage(bloc5, b5.x, b5.y);
			context.drawImage(bloc6, b6.x, b6.y);
			context.drawImage(bloc7, b7.x, b7.y);
			context.drawImage(bloc8, b8.x, b8.y);
			context.drawImage(bloc9, b9.x, b9.y);
			context.drawImage(bloc10, b10.x, b10.y);
			context.drawImage(bloc11, b11.x, b11.y);
			context.drawImage(bloc12, b12.x, b12.y);
			context.drawImage(bloc13, b13.x, b13.y);
			context.drawImage(bloc14, b14.x, b14.y);
			context.drawImage(bloc15, b15.x, b15.y);
			context.drawImage(bloc16, b16.x, b16.y);
			context.drawImage(bloc17, b17.x, b17.y);
			context.drawImage(bloc18, b18.x, b18.y);
			context.drawImage(bloc19, b19.x, b19.y);
			context.drawImage(bloc20, b20.x, b20.y);
		}

		function collisions(A,B) {
			if (A.y+A.h < B.y || A.y > B.y+B.h || A.x > B.x+B.w || A.x+A.w < B.x)
				return false;
				return true;

		}

}
