



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


//link images to var
joueur.src = "img/heart.png";
background.src = "img/background.png";
lifeBar.src = "img/jauge_remplie.png";
bloc3.src = "img/rayonH.png";
bloc10.src = "img/rayonH.png";
bloc14.src = "img/rayonH.png";
bloc4.src ="img/rayon.png";
bloc11.src = "img/rayon.png";
bloc12.src = "img/rayon.png";
bloc19.src = "img/skull.png";
bloc20.src = "img/skull.png";
bloc1.src = "img/arrow.png";
bloc2.src = "img/arrow.png";
bloc5.src = "img/arrow.png";
bloc6.src = "img/arrow.png";
bloc7.src = "img/arrow.png";
bloc8.src = "img/arrow.png";
bloc9.src = "img/arrow.png";
bloc13.src = "img/arrow.png";
bloc15.src = "img/arrow.png";
bloc16.src = "img/arrow.png";
bloc17.src = "img/arrow.png";
bloc18.src = "img/arrow.png";

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
			b1.x = 0;
			b1.vX = 0;
			b1.vY = 0;

			b2.h = bloc2.height;
			b2.w = bloc2.width;
			b2.y = 0;
			b2.x = 512;
			b2.vX = 0;
			b2.vY = 0;

			b3.h = bloc3.height;
			b3.w = bloc3.width;
			b3.y = 256 / 3;
			b3.x = 0;
			b3.vX = 0;
			b3.vY = 0;

			b4.h = bloc4.height;
			b4.w = bloc4.width;
			b4.y = 256;
			b4.x = 512 / 3;
			b4.vX = 0;
			b4.vY = 0;

			b5.h = bloc5.height;
			b5.w = bloc5.width;
			b5.y = 256;
			b5.x = 104;
			b5.vX = 0;
			b5.vY = 0;

			b6.h = bloc6.height;
			b6.w = bloc6.width;
			b6.y = 256;
			b6.x = 256;
			b6.vX = 0;
			b6.vY = 0;

			b7.h = bloc7.height;
			b7.w = bloc7.width;
			b7.y = 256;
			b7.x = 408;
			b7.vX = 0;
			b7.vY = 0;

			b8.h = bloc8.height;
			b8.w = bloc8.width;
			b8.y = 256;
			b8.x = -(bloc8.width);
			b8.vX = 0;
			b8.vY = 0;

			b9.h = bloc9.height;
			b9.w = bloc9.width;
			b9.y = 256 / 3;
			b9.x = -(bloc9.width);
			b9.vX = 0;
			b9.vY = 0;

			b10.h = bloc10.height;
			b10.w = bloc10.width;
			b10.y = (256 / 3) * 2;
			b10.x = (bloc10.width);
			b10.vX = 0;
			b10.vY = 0;

			b11.h = bloc11.height;
			b11.w = bloc11.width;
			b11.y = -(bloc11.height);
			b11.x = (512 / 3) * 2;
			b11.vX = 0;
			b11.vY = 0;

			b12.h = bloc12.height;
			b12.w = bloc12.width;
			b12.y = -(bloc12.height);
			b12.x = 0;
			b12.vX = 0;
			b12.vY = 0;

			b13.h = bloc13.height;
			b13.w = bloc13.width;
			b13.y = 0;
			b13.x = -(bloc13.width);
			b13.vX = 0;
			b13.vY = 0;

			b14.h = bloc14.height;
			b14.w = bloc14.width;
			b14.y = (256 / 3) * 2;
			b14.x = -(bloc14.width);
			b14.vX = 0;
			b14.vY = 0;

			b15.h = bloc15.height;
			b15.w = bloc15.width;
			b15.y = -(bloc15.height);
			b15.x = 51;
			b15.vX = 0;
			b15.vY = 0;

			b16.h = bloc16.height;
			b16.w = bloc16.width;
			b16.y = -(bloc16.height);
			b16.x = 461;
			b16.vX = 0;
			b16.vY = 0;

			b17.h = bloc17.height;
			b17.w = bloc17.width;
			b17.y = -(bloc17.height);
			b17.x = 205;
			b17.vX = 0;
			b17.vY = 0;

			b18.h = bloc18.height;
			b18.w = bloc18.width;
			b18.y = -(bloc17.height);
			b18.x = 411;
			b18.vX = 0;
			b18.vY = 0;

			b19.h = bloc19.height;
			b19.w = bloc19.width;
			b19.y = 200;
			b19.x = -(bloc19.width);
			b19.vX = 0;
			b19.vY = b19.vY + Math.sin(b19.vY);

			b20.h = bloc20.height;
			b20.w = bloc20.width;
			b20.y = 256;
			b20.x = 512;
			b20.vX = b20.vX + Math.cos(b20.vX);
			b20.vY = b20.vY + Math.sin(b20.vY);
			// Je déterminerai les positions et les placements
			// initiaux de chaque bloc au moment où je trouverai
			// leur image ou quand je ferais leurs dessins en pixelArt

			lB.h = lifeBar.height;
			lB.w = lifeBar.width;
			lB.y = 10;
			lB.x = 10;

			mouseY = p1.y;
			mouseX = p1.x;
      setInterval(main, 5);
			canvas.addEventListener("mousemove", souris, false);
			document.body.style.cursor = 'none';

    }
    function main() {

		if(lifeCounter === 2){
			lifeBar.src = "img/jauge_demi1.png";
		}
		if(lifeCounter === 1){
			lifeBar.src = "img/jauge_demi2.png";
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
				}

		function render() {
			context.drawImage(background, 0, 0);
			context.drawImage(joueur, mouseX, mouseY);
			context.drawImage(lifeBar, lB.x, lB.y);

		}

		function collisions(A,B) {
			if (A.y+A.h < B.y || A.y > B.y+B.h || A.x > B.x+B.w || A.x+A.w < B.x)
				return false;
				return true;

		}

}
