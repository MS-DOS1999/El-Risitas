// Déclaration des variables
var joueur,
bloc1, bloc2, bloc3, bloc4, bloc5,
bloc6, bloc7, bloc8, bloc9, bloc10,
bloc11, bloc12, bloc13, bloc14, bloc15,
bloc16, bloc17, bloc18, bloc19, bloc20,
lifeBar = new Image();

window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");

	// Déclaration des variables objets
	var p1 = {};
	b1, b2, b3, b4, b5, b6, b7, b8, b9, b10,
	b11, b12, b13, b14, b15, b16, b17,	b18, b19, b20,
	lB = {};
	var mouseX, mouseY;

  var W = 512;
	var H = 256;

    init();

    function init() {
			canvas.width = W;
			canvas.height = H;

			p1.h = joueur.height;
			p1.w = joueur.width;
			p1.x = W - ( 10 + longueur totale du sprite coeur);
			p1.y = H / 2 - (moitié de la hauteur du sprite coeur);

			b1.h = bloc1.height;
			b1.w = bloc1.width;
			b1.y = 0;
			b1.x = 0;
			b1.vX = 5;
			b1.vY = 2;

			b2.h = bloc2.height;
			b2.w = bloc2.width;
			b2.y = 0;
			b2.x = 0;
			b2.vX = 5;
			b2.vY = 2;

			b3.h = bloc3.height;
			b3.w = bloc3.width;
			b3.y = 0;
			b3.x = 0;
			b3.vX = 5;
			b3.vY = 2;

			b4.h = bloc4.height;
			b4.w = bloc4.width;
			b4.y = 0;
			b4.x = 0;
			b4.vX = 5;
			b4.vY = 2;

			b5.h = bloc5.height;
			b5.w = bloc5.width;
			b5.y = 0;
			b5.x = 0;
			b5.vX = 5;
			b5.vY = 2;

			b6.h = bloc6.height;
			b6.w = bloc6.width;
			b6.y = 0;
			b6.x = 0;
			b6.vX = 5;
			b6.vY = 2;

			b7.h = bloc7.height;
			b7.w = bloc7.width;
			b7.y = 0;
			b7.x = 0;
			b7.vX = 5;
			b7.vY = 2;

			b8.h = bloc8.height;
			b8.w = bloc8.width;
			b8.y = 0;
			b8.x = 0;
			b8.vX = 5;
			b8.vY = 2;

			b9.h = bloc9.height;
			b9.w = bloc9.width;
			b9.y = 0;
			b9.x = 0;
			b9.vX = 5;
			b9.vY = 2;

			b10.h = bloc10.height;
			b10.w = bloc10.width;
			b10.y = 0;
			b10.x = 0;
			b10.vX = 5;
			b10.vY = 2;

			b11.h = bloc11.height;
			b11.w = bloc11.width;
			b11.y = 0;
			b11.x = 0;
			b11.vX = 5;
			b11.vY = 2;

			b12.h = bloc12.height;
			b12.w = bloc12.width;
			b12.y = 0;
			b12.x = 0;
			b12.vX = 5;
			b12.vY = 2;

			b13.h = bloc13.height;
			b13.w = bloc13.width;
			b13.y = 0;
			b13.x = 0;
			b13.vX = 5;
			b13.vY = 2;

			b14.h = bloc14.height;
			b14.w = bloc14.width;
			b14.y = 0;
			b14.x = 0;
			b14.vX = 5;
			b14.vY = 2;

			b15.h = bloc15.height;
			b15.w = bloc15.width;
			b15.y = 0;
			b15.x = 0;
			b15.vX = 5;
			b15.vY = 2;

			b16.h = bloc16.height;
			b16.w = bloc16.width;
			b16.y = 0;
			b16.x = 0;
			b16.vX = 5;
			b16.vY = 2;

			b17.h = bloc17.height;
			b17.w = bloc17.width;
			b17.y = 0;
			b17.x = 0;
			b17.vX = 5;
			b17.vY = 2;

			b18.h = bloc18.height;
			b18.w = bloc18.width;
			b18.y = 0;
			b18.x = 0;
			b18.vX = 5;
			b18.vY = 2;

			b19.h = bloc19.height;
			b19.w = bloc19.width;
			b19.y = 0;
			b19.x = 0;
			b19.vX = 5;
			b19.vY = 2;

			b20.h = bloc20.height;
			b20.w = bloc20.width;
			b20.y = 0;
			b20.x = 0;
			b20.vX = 5;
			b20.vY = 2;
			// Je déterminerai les positions et les placements
			// initiaux de chaque bloc au moment où je trouverai
			// leur image ou quand je ferais leurs dessins en pixelArt

			lB.h = lifeBar.height;
			lB.w = lifeBar.width;
			lB.y = 10;
			lB.x = 10;

			mouseX = p1.x;
			mouseY = p1.y;

			canvas.addEventListener("mousemove", moveMouse, false);
			setInterval(main, 5);
    }

    function main() {
	    render();
    }

		function render() {
			context.drawImage();
			context.drawImage();
			context.drawImage();
			context.drawImage();
		}
		
		function collisions(A,B) {
			if (A.y+A.h < B.y || A.y > B.y+B.h || A.x > B.x+B.w || A.x+A.w < B.x)
				return false;
				return true;
			
		}

}
