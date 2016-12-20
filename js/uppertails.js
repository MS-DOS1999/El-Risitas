// FREE VAR
let curve = 0;

//VAR TIMER EVENT
let Phase1 = true, Phase2 = false, Phase3 = false, Phase4 = false;
let counterP1 = 1, counterP2 = 1, counterP3 = 1, counterP4 = 1;
let counterMegaLoop = 1;

let b1EndP1 = false, b2EndP1 = false, b3EndP1 = true, b4EndP1 = true, b5EndP1 = true,
b6EndP1 = true, b7EndP1 = true, b8EndP1 = true, b9EndP1 = true, b10EndP1 = true,
b11EndP1 = true, b12EndP1 = true, b13EndP1 = true, b14EndP1 = true, b15EndP1 = true,
b16EndP1 = true, b17EndP1 = true, b18EndP1 = true, b19EndP1 = true, b20EndP1 = true;

let b1EndP2 = true, b2EndP2 = true, b3EndP2 = true, b4EndP2 = true, b5EndP2 = true,
b6EndP2 = true, b7EndP2 = true, b8EndP2 = true, b9EndP2 = true, b10EndP2 = true,
b11EndP2 = true, b12EndP2 = true, b13EndP2 = true, b14EndP2 = true, b15EndP2 = true,
b16EndP2 = true, b17EndP2 = true, b18EndP2 = true, b19EndP2 = true, b20EndP2 = true;

let b1EndP3 = true, b2EndP3 = true, b3EndP3 = true, b4EndP3 = true, b5EndP3 = true,
b6EndP3 = true, b7EndP3 = true, b8EndP3 = true, b9EndP3 = true, b10EndP3 = true,
b11EndP3 = true, b12EndP3 = true, b13EndP3 = true, b14EndP3 = true, b15EndP3 = true,
b16EndP3 = true, b17EndP3 = true, b18EndP3 = true, b19EndP3 = true, b20EndP3 = true;

let b1EndP4 = true, b2EndP4 = true, b3EndP4 = true, b4EndP4 = true, b5EndP4 = true,
b6EndP4 = true, b7EndP4 = true, b8EndP4 = true, b9EndP4 = true, b10EndP4 = true,
b11EndP4 = true, b12EndP4 = true, b13EndP4 = true, b14EndP4 = true, b15EndP4 = true,
b16EndP4 = true, b17EndP4 = true, b18EndP4 = true, b19EndP4 = true, b20EndP4 = true;


let invulnerable = 0;
let animInvulnerable = 0;
let GoInvul = 0;
let EndLevel = 0;


// Déclaration des variables
let joueur = new Image(), background = new Image(),
bloc1 = new Image(), bloc2 = new Image(), bloc3 = new Image(),
bloc4 = new Image(), bloc5 = new Image(), bloc6 = new Image(),
bloc7 = new Image(), bloc8 = new Image(), bloc9 = new Image(),
bloc10 = new Image(), bloc11 = new Image(), bloc12 = new Image(),
bloc13 = new Image(), bloc14 = new Image(), bloc15 = new Image(),
bloc16 = new Image(), bloc17 = new Image(), bloc18 = new Image(),
bloc19 = new Image(), bloc20 = new Image(),
lifeBar = new Image();

let lifeCounter = 3;

let sndLevel = new Audio("sound/Whirlwind.mp3");
let levelmusic = 1;


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
	const CANVAS = document.getElementById("canvas");
	//donner le CONTEXT, ici 2d
	const CONTEXT = CANVAS.getContext("2d");

	// Déclaration des variables objets

	let b1 = {}, b2 = {}, b3 = {}, b4 = {}, b5 = {}, b6 = {}, b7 = {}, b8 = {}, b9 = {}, b10 = {},
	b11 = {}, b12 = {}, b13 = {}, b14 = {}, b15 = {}, b16 = {}, b17 = {}, b18 = {}, b19 = {}, b20 = {},
	lB = {};

  const W = 512;
	const H = 256;
	let mouseX;
	let mouseY;
	let p1 = {};

    init();

    function initb1() {
    	b1.y = -20;
		b1.x = -20 - bloc1.width;
    }

	function initb2() {
		b2.y = -20;
		b2.x = 532;
	}

	function initb3() {
		b3.y = 256 / 3;
		b3.x = -20 - bloc3.width;
	}

	function initb4() {
		b4.y = 276;
		b4.x = 512 / 3;
	}

	function initb5() {
		b5.y = 276;
		b5.x = 104;
	}

	function initb6() {
		b6.y = 276;
		b6.x = 276;
	}

	function initb7() {
		b7.y = 276;
		b7.x = 408;
	}

	function initb8() {
		b8.y = 276;
		b8.x = -20 - bloc8.width;
	}

	function initb9() {
		b9.y = -20;
		b9.x = -20 - bloc9.width;
	}

	function initb10() {
		b10.y = (256 / 3) * 2;
		b10.x = -20 - bloc10.width;
	}

	function initb11() {
		b11.y = -20 - bloc11.height;
		b11.x = (512 / 3) * 2;
	}

	function initb12() {
		b12.y = -20 - bloc12.height;
		b12.x = 0;
	}

	function initb13() {
		b13.y = 256 / 3;
		b13.x = -20 - bloc13.width;
	}

	function initb14() {
		b14.y = (256 / 3) * 2;
		b14.x = -20 - bloc14.width;
	}

	function initb15() {
		b15.y = -20 - bloc15.height;
		b15.x = 51;
	}

	function initb16() {
		b16.y = -20 - bloc16.height;
		b16.x = 461;
	}

	function initb17() {
		b17.y = -20 - bloc17.height;
		b17.x = 205;
	}

	function initb18() {
		b18.y = -20 - bloc18.height;
		b18.x = 411;
	}

	function initb19() {
		b19.y = 200;
		b19.x = -20 - bloc19.width;
	}

	function initb20() {
		b20.y = 276;
		b20.x = 532;
	}

    function init() {

			CANVAS.width = W;
			CANVAS.height = H;


			p1.h = joueur.height;
			p1.w = joueur.width;
			p1.x = (W - p1.w) / 2;
			p1.y = (H - p1.h) / 2;

			b1.h = bloc1.height;
			b1.w = bloc1.width;
			b1.y = -20;
			b1.x = -20 - bloc1.width;

			b2.h = bloc2.height;
			b2.w = bloc2.width;
			b2.y = -20;
			b2.x = 532;

			b3.h = bloc3.height;
			b3.w = bloc3.width;
			b3.y = 256 / 3;
			b3.x = -20 - bloc3.width;

			b4.h = bloc4.height;
			b4.w = bloc4.width;
			b4.y = 276;
			b4.x = 512 / 3;

			b5.h = bloc5.height;
			b5.w = bloc5.width;
			b5.y = 276;
			b5.x = 104;

			b6.h = bloc6.height;
			b6.w = bloc6.width;
			b6.y = 276;
			b6.x = 276;

			b7.h = bloc7.height;
			b7.w = bloc7.width;
			b7.y = 276;
			b7.x = 408;

			b8.h = bloc8.height;
			b8.w = bloc8.width;
			b8.y = 276;
			b8.x = -20 - bloc8.width;

			b9.h = bloc9.height;
			b9.w = bloc9.width;
			b9.y = -20;
			b9.x = -20 - bloc9.width;

			b10.h = bloc10.height;
			b10.w = bloc10.width;
			b10.y = (256 / 3) * 2;
			b10.x = -20 - bloc10.width;

			b11.h = bloc11.height;
			b11.w = bloc11.width;
			b11.y = -20 - bloc11.height;
			b11.x = (512 / 3) * 2;

			b12.h = bloc12.height;
			b12.w = bloc12.width;
			b12.y = -20 - bloc12.height;
			b12.x = 0;

			b13.h = bloc13.height;
			b13.w = bloc13.width;
			b13.y = 256 / 3;
			b13.x = -20 - bloc13.width;

			b14.h = bloc14.height;
			b14.w = bloc14.width;
			b14.y = (256 / 3) * 2;
			b14.x = -20 - bloc14.width;

			b15.h = bloc15.height;
			b15.w = bloc15.width;
			b15.y = -20 - bloc15.height;
			b15.x = 51;

			b16.h = bloc16.height;
			b16.w = bloc16.width;
			b16.y = -20 - bloc16.height;
			b16.x = 461;

			b17.h = bloc17.height;
			b17.w = bloc17.width;
			b17.y = -20 - bloc17.height;
			b17.x = 205;

			b18.h = bloc18.height;
			b18.w = bloc18.width;
			b18.y = -20 - bloc18.height;
			b18.x = 411;

			b19.h = bloc19.height;
			b19.w = bloc19.width;
			b19.y = 200;
			b19.x = -20 - bloc19.width;

			b20.h = bloc20.height;
			b20.w = bloc20.width;
			b20.y = 276;
			b20.x = 532;

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
		if(lifeCounter === 0){
			lifeBar.src = "img/jauge_vide.png";
		}
		if(lifeCounter <= 0){
			joueur.src = "img/heartvide.png";
		}

		if(invulnerable ===1){

			if(EndLevel === 0){
				if(lifeCounter > 0){
					GoInvul++;
					if(GoInvul === 20){
						joueur.src = "img/heartvide.png";
					}
					if(GoInvul === 40){
						joueur.src = "img/heart.png";
						GoInvul = 0;
					}

				}

				if(lifeCounter === 0){
					joueur.src = "img/heartvide.png";
				}


			}
			if(EndLevel === 1){
				if(lifeCounter > 0){
					GoInvul++;
					if(GoInvul === 20){
						joueur.src = "img/heartvide.png";
					}
					if(GoInvul === 40){
						joueur.src = "img/heartTransform14(Final).png";
						GoInvul = 0;
					}
				}

				if(lifeCounter === 0){
					joueur.src = "img/heartvide.png";
				}
			}
		}

			if(Phase1) {

				if(!b1EndP1 && !b2EndP1){

					if(levelmusic === 1){
						sndLevel.play();
						levelmusic = 0;
					}

					b1.x += 2 * counterP1 * counterMegaLoop;
					b1.y += 1 * counterP1 * counterMegaLoop;
					b2.x -= 2 * counterP1 * counterMegaLoop;
					b2.y += 1 * counterP1 * counterMegaLoop;
					if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256)){
						initb1();
						initb2();
						b1EndP1 = true;
						b2EndP1 = true;
						b3EndP1 = false;
					}
				}

				if(!b3EndP1){
					b3.x += 10 * counterP1 * counterMegaLoop;
					if(b3.x > 530){
						initb3();
						b3EndP1 = true;
						b12EndP1 = false;
					}
				}

				if(!b12EndP1){
					b12.y += 5 * counterP1 * counterMegaLoop;
					if(b12.y > 270){
						initb12();
						b12EndP1 = true;
						b11EndP1 = false;
					}
				}

				if(!b11EndP1){
					b11.y += 5* counterP1 * counterMegaLoop;
					if(b11.y > 270){
						initb11();
						b11EndP1 = true;
						b4EndP1 = false;
					}
				}

				if(!b4EndP1){
					b4.y -= 5 * counterP1 * counterMegaLoop;
					if(b4.y < -30){
						initb4();
						b4EndP1 = true;
						b20EndP1 = false;
					}
				}

				if(!b20EndP1){
					curve += 0.5;
					if(curve > 180) curve = 0;
					b20.x -= 2 * counterP1 * counterMegaLoop;
					b20.y -= counterP1 * counterMegaLoop + (10 * Math.sin(curve));
					if(b20.y < 0 || b20.x < 0){
						initb20();
						b20EndP1 = true;
						b15EndP1 = false;
						b18EndP1 = false;
					}
				}

				if(!b15EndP1 && !b18EndP1){
					b15.y += 2 * counterP1 * counterMegaLoop;
					b18.y += 2 * counterP1 * counterMegaLoop;
					if(b15.y > 270 || b18.y > 270){
						initb15();
						initb18();
						b15EndP1 = true;
						b18EndP1 = true;
						b17EndP1 = false;
						b16EndP1 = false;
					}
				}

				if(!b16EndP1 && !b17EndP1){
					b16.y += 2 * counterP1 * counterMegaLoop;
					b17.y += 2 * counterP1 * counterMegaLoop;
					if(b16.y > 270 || b17.y > 270){
						initb16();
						initb17();
						b16EndP1 = true;
						b17EndP1 = true;
						b5EndP1 = false;
						b6EndP1 = false;
						b7EndP1 = false;
					}
				}

				if(!b5EndP1 && !b6EndP1 && !b7EndP1){
					b5.y -= 2 * counterP1 * counterMegaLoop;
					b6.y -= 2 * counterP1 * counterMegaLoop;
					b7.y -= 2 * counterP1 * counterMegaLoop;
					if(b5.y < 0 || b6.y < 0 || b7.y < 0){
						initb5();
						initb6();
						initb7();
						b5EndP1 = true;
						b6EndP1 = true;
						b7EndP1 = true;
						b10EndP1 = false;
					}
				}

				if(!b10EndP1){
					b10.x += 10 * counterP1 * counterMegaLoop;
					if(b10.x > 512){
						initb10();
						b10EndP1 = true;
						b9EndP1 = false;
					}
				}

				if(!b9EndP1){
					b9.x += 10 * counterP1 * counterMegaLoop;
					if(b9.x > 512){
						initb9();
						b9EndP1 = true;
						b19EndP1 = false;
					}
				}

				if(!b19EndP1){
					curve += 0.5;
					if(curve > 180) curve = 0;
					b19.x += 2 * counterP1 * counterMegaLoop;
					b19.y += 10 * Math.sin(curve) * counterP1 * counterMegaLoop;
					if(b19.x > 512){
						initb19();
						b19EndP1 = true;
						b8EndP1 = false;
						b13EndP1 = false;
						b14EndP1 = false;
					}
				}

				if(!b8EndP1 && !b13EndP1 && !b14EndP1){
					b8.x += 2 * counterP1 * counterMegaLoop;
					b8.y -= 1 * counterP1 * counterMegaLoop;
					b13.x += 2 * counterP1 * counterMegaLoop;
					b14.x += 2 * counterP1 * counterMegaLoop;
					if(( b8.x > 512 || b8.y < 0 ) || b13.x > 512 || b14.x > 512){
						initb8();
						initb13();
						initb14();
						b8EndP1 = true;
						b13EndP1 = true;
						b14EndP1 = true;
						if(counterP1 === 2) {
						b6EndP2 = false;
						b13EndP2 = false;
						b14EndP2 = false;
						Phase1 = false;
						Phase2 = true;
						}
						if(counterP1 === 1) {
							b1EndP1 = false;
							b2EndP1 = false;
							counterP1++;
						}
					}
				}
			}

			if(Phase2) {

				if(!b6EndP2 && !b13EndP2 && !b14EndP2){
					b6.y -= 2 * counterP2 * counterMegaLoop;
					b13.x += 2 * counterP2 * counterMegaLoop;
					b14.x += 2 * counterP2 * counterMegaLoop;
					if(b13.x > 512 || b14.x > 512){
						initb6();
						initb13();
						initb14();
						b6EndP2 = true;
						b13EndP2 = true;
						b14EndP2 = true;
						b4EndP2 = false;
						b5EndP2 = false;
						b7EndP2 = false;
					}
				}

				if(!b4EndP2 && !b5EndP2 && !b7EndP2){
					b4.y -= 5 * counterP2 * counterMegaLoop;
					b5.y -= 2 * counterP2 * counterMegaLoop;
					b7.y -= 2 * counterP2 * counterMegaLoop;
					if(b5.y < 0 || b7.y < 0){
						initb4();
						initb5();
						initb7();
						b4EndP2 = true;
						b5EndP2 = true;
						b7EndP2 = true;
						b1EndP2 = false;
						b3EndP2 = false;
						b8EndP2 = false;
					}
				}

				if(!b1EndP2 && !b3EndP2 && !b8EndP2){
					b1.x += 2 * counterP2 * counterMegaLoop;
					b1.y += 1 * counterP2 * counterMegaLoop;
					b3.x += 10 * counterP2 * counterMegaLoop;
					b8.x += 2 * counterP2 * counterMegaLoop;
					b8.y -= 1 * counterP2 * counterMegaLoop;
					if((b1.x > 512 || b1.y > 256) && b3.x > 530 && ( b8.x > 512 || b8.y < 0 )){
						initb1();
						initb3();
						initb8();
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
					b11.y += 5 * counterP2 * counterMegaLoop;
					b12.y += 5 * counterP2 * counterMegaLoop;
					b20.x -= 2 * counterP2 * counterMegaLoop;
					b20.y -= counterP2 * counterMegaLoop + (10 * Math.sin(curve));
					if(b11.y > 270 && b12.y > 270 && ( b20.y < 0 || b20.x < 0 )){
						initb11();
						initb12();
						initb20();
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
					b15.y += 2 * counterP2 * counterMegaLoop;
					b16.y += 2 * counterP2 * counterMegaLoop;
					b17.y += 2 * counterP2 * counterMegaLoop;
					b18.y += 2 * counterP2 * counterMegaLoop;
					b19.x += 2 * counterP2 * counterMegaLoop;
					b19.y += 10 * Math.sin(curve) * counterP2 * counterMegaLoop;
					if(b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
						initb15();
						initb16();
						initb17();
						initb18();
						initb19();
						b15EndP2 = true;
						b16EndP2 = true;
						b17EndP2 = true;
						b18EndP2 = true;
						b19EndP2 = true;
						if(counterP2 === 2){
							b1EndP3 = false;
							b2EndP3 = false;
							b3EndP3 = false;
							b4EndP3 = false;
							b8EndP3 = false;
							b20EndP3 = false;
							Phase2 = false;
							Phase3 = true;
						}
						if(counterP2 === 1){
							b6EndP2 = false;
							b13EndP2 = false;
							b14EndP2 = false;
							counterP2 ++;
						}
					}
				}
			}

			if (Phase3) {

				if(!b1EndP3 && !b2EndP3 && !b3EndP3 && !b4EndP3 && !b8EndP3 && !b20EndP3){
					curve += 0.5;
					if(curve > 180) curve = 0;
					b1.x += 2 * counterP3 * counterMegaLoop;
					b1.y += 1 * counterP3 * counterMegaLoop;
					b2.x -= 2 * counterP3 * counterMegaLoop;
					b2.y += 1 * counterP3 * counterMegaLoop;
					b3.x += 10 * counterP3 * counterMegaLoop;
					b4.y -= 5 * counterP3 * counterMegaLoop;
					b8.x += 2 * counterP3 * counterMegaLoop;
					b8.y -= 1 * counterP3 * counterMegaLoop;
					b20.x -= 2 * counterP3 * counterMegaLoop;
					b20.y -= counterP2 * counterMegaLoop + (10 * Math.sin(curve));
					if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && b3.x > 530 && b4.y < -30 && ( b8.x > 512 || b8.y < 0 ) && (b20.y < 0 || b20.x < 0)){
						initb1();
						initb2();
						initb3();
						initb4();
						initb8();
						initb20();
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
					b9.x += 10 * counterP3 * counterMegaLoop;
					b10.x += 10 * counterP3 * counterMegaLoop;
					b11.y += 5 * counterP3 * counterMegaLoop;
					b12.y += 5 * counterP3 * counterMegaLoop;
					if(b9.x > 512 && b10.x > 512 && b11.y > 270 && b12.y > 270){
						initb9();
						initb10();
						initb11();
						initb12();
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
					b5.y -= 2 * counterP3 * counterMegaLoop;
					b6.y -= 2 * counterP3 * counterMegaLoop;
					b7.y -= 2 * counterP3 * counterMegaLoop;
					b15.y += 2 * counterP3 * counterMegaLoop;
					b16.y += 2 * counterP3 * counterMegaLoop;
					b17.y += 2 * counterP3 * counterMegaLoop;
					b18.y += 2 * counterP3 * counterMegaLoop;
					b19.x += 2 * counterP3 * counterMegaLoop;
					b19.y += 10 * Math.sin(curve);
					if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
						initb5();
						initb6();
						initb7();
						initb15();
						initb16();
						initb17();
						initb18();
						initb19();
						b5EndP3 = true;
						b6EndP3 = true;
						b7EndP3 = true;
						b15EndP3 = true;
						b16EndP3 = true;
						b17EndP3 = true;
						b18EndP3 = true;
						b19EndP3 = true;
						if(counterP3 === 3){
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
							Phase3 = false;
							Phase4 = true;
						}
						if(counterP3 < 3){
							b1EndP3 = false;
							b2EndP3 = false;
							b3EndP3 = false;
							b4EndP3 = false;
							b8EndP3 = false;
							b20EndP3 = false;
							counterP3 ++;
						}
					}
				}
			}

			if(Phase4){

				if(!b5EndP4 && !b6EndP4 && !b7EndP4 && !b9EndP4 && !b10EndP4 && !b13EndP4 && !b14EndP4 && !b15EndP4 && !b16EndP4 && !b17EndP4 && !b18EndP4){
					b5.y -= 2 * counterMegaLoop;
					b6.y -= 2 * counterMegaLoop;
					b7.y -= 2 * counterMegaLoop;
					b9.x += 10 * counterMegaLoop;
					b10.x += 10 * counterMegaLoop;
					b13.x += 2 * counterMegaLoop;
					b14.x += 2 * counterMegaLoop;
					b15.y += 2 * counterMegaLoop;
					b16.y += 2 * counterMegaLoop;
					b17.y += 2 * counterMegaLoop;
					b18.y += 2 * counterMegaLoop;
					if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b9.x > 512 && b10.x > 512 && b13.x > 512 && b14.x > 512 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270){
						initb5();
						initb6();
						initb7();
						initb9();
						initb10();
						initb13();
						initb14();
						initb15();
						initb16();
						initb17();
						initb18();
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
					b1.x += 2 * counterMegaLoop;
					b1.y += 1 * counterMegaLoop;
					b2.x -= 2 * counterMegaLoop;
					b2.y += 1 * counterMegaLoop;
					b8.x += 2 * counterMegaLoop;
					b8.y -= 1 * counterMegaLoop;
					b11.y += 5 * counterMegaLoop;
					b12.y += 5 * counterMegaLoop;
					b20.x -= 2 * counterMegaLoop;
					b20.y -= counterMegaLoop * (10 * Math.sin(curve));
					if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && ( b8.x > 512 || b8.y < 0 ) && b11.y > 270 && b12.y > 270 && (b20.y < 0 || b20.x < 0)){
						initb1();
						initb2();
						initb8();
						initb11();
						initb12();
						initb20();
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
					b3.x += 10 * counterMegaLoop;
					b4.y -= 5 * counterMegaLoop;
					b19.x += 2 * counterMegaLoop;
					b19.y += 10 * Math.sin(curve) * counterMegaLoop;
					if(b3.x > 530 && b4.y < -30 && b19.x > 512){
						initb3();
						initb4();
						initb19();
						if(counterMegaLoop === 2){
							b3EndP4 = true;
							b4EndP4 = true;
							b19EndP4 = true;
							Phase4 = false;
						}
						if(counterMegaLoop === 1){
							b3EndP4 = true;
							b4EndP4 = true;
							b19EndP4 = true;
							Phase4 = false;
							counterP1 = 1;
							counterP2 = 1;
							counterP3 = 1;
							b1EndP1 = false;
							b2EndP1 = false;
							Phase1 = true;
							counterMegaLoop ++;
						}
					}
				}
			}

		if (collisions(b1,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b1.w = 0;
				b1.h = 0;
			invulnerability();

		}
		if (collisions(b2,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b2.w = 0;
				b2.h = 0;
				invulnerability();
		}
		if (collisions(b3,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b3.w = 0;
				b3.h = 0;
				invulnerability();
		}
		if (collisions(b4,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b4.w = 0;
				b4.h = 0;
				invulnerability();
		}
		if (collisions(b5,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b5.w = 0;
				b5.h = 0;
				invulnerability();
		}
		if (collisions(b6,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b6.w = 0;
				b6.h = 0;
				invulnerability();
		}
		if (collisions(b7,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b7.w = 0;
				b7.h = 0;
				invulnerability();
		}
		if (collisions(b8,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b8.w = 0;
				b8.h = 0;
				invulnerability();
		}
		if (collisions(b9,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b9.w = 0;
				b9.h = 0;

		}
		if (collisions(b10,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b10.w = 0;
				b10.h = 0;
				invulnerability();
		}
		if (collisions(b11,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b11.w = 0;
				b11.h = 0;
				invulnerability();
		}
		if (collisions(b12,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b12.w = 0;
				b12.h = 0;
				invulnerability();
		}
		if (collisions(b13,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b13.w = 0;
				b13.h = 0;
				invulnerability();
		}
		if (collisions(b14,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b14.w = 0;
				b14.h = 0;
				invulnerability();
		}
		if (collisions(b15,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b15.w = 0;
				b15.h = 0;
				invulnerability();
		}
		if (collisions(b16,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b16.w = 0;
				b16.h = 0;
				invulnerability();
		}
		if (collisions(b17,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b17.w = 0;
				b17.h = 0;
				invulnerability();
		}
		if (collisions(b18,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b18.w = 0;
				b18.h = 0;
				invulnerability();
		}
		if (collisions(b19,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b19.w = 0;
				b19.h = 0;
				invulnerability();
		}
		if (collisions(b20,p1) && invulnerable === 0 && lifeCounter > 0) {
				lifeCounter -= 1;
				b20.w = 0;
				b20.h = 0;
				invulnerability();
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
			CONTEXT.drawImage(background, 0, 0);
			CONTEXT.drawImage(joueur, mouseX, mouseY);
			CONTEXT.drawImage(lifeBar, lB.x, lB.y);
			CONTEXT.drawImage(bloc1, b1.x, b1.y);
			CONTEXT.drawImage(bloc2, b2.x, b2.y);
			CONTEXT.drawImage(bloc3, b3.x, b3.y);
			CONTEXT.drawImage(bloc4, b4.x, b4.y);
			CONTEXT.drawImage(bloc5, b5.x, b5.y);
			CONTEXT.drawImage(bloc6, b6.x, b6.y);
			CONTEXT.drawImage(bloc7, b7.x, b7.y);
			CONTEXT.drawImage(bloc8, b8.x, b8.y);
			CONTEXT.drawImage(bloc9, b9.x, b9.y);
			CONTEXT.drawImage(bloc10, b10.x, b10.y);
			CONTEXT.drawImage(bloc11, b11.x, b11.y);
			CONTEXT.drawImage(bloc12, b12.x, b12.y);
			CONTEXT.drawImage(bloc13, b13.x, b13.y);
			CONTEXT.drawImage(bloc14, b14.x, b14.y);
			CONTEXT.drawImage(bloc15, b15.x, b15.y);
			CONTEXT.drawImage(bloc16, b16.x, b16.y);
			CONTEXT.drawImage(bloc17, b17.x, b17.y);
			CONTEXT.drawImage(bloc18, b18.x, b18.y);
			CONTEXT.drawImage(bloc19, b19.x, b19.y);
			CONTEXT.drawImage(bloc20, b20.x, b20.y);
		}

		function collisions(A,B) {
			if (A.y+A.h < B.y || A.y > B.y+B.h || A.x > B.x+B.w || A.x+A.w < B.x)
				return false;
				return true;

		}
				function invulnerability(){
			var snd = new Audio("sound/life-1.wav");
					snd.play();
			invulnerable = 1;
			animInvulnerable = 1;

			setTimeout(function(){invulnerable = 0; if(EndLevel === 0){joueur.src = "img/heart.png";} if(EndLevel === 1){joueur.src = "img/heartTransform14(Final).png";} if(lifeCounter === 0){lifeBar.src = "img/jauge_vide.png";}}, 2500);

		}

}