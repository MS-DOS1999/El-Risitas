// Début code Jamil pour le mouvement de la souris

// declare image variable

var heart = new Image();
var background = new Image();

//link images to var
heart.src = "img/heart.png";
background.src = "img/background.png";


window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");


  var W = 512;
	var H = 256;
	var mouseX;
	var mouseY;
	var p1 = {};

    init();

    function init() {

			canvas.width = W;
			canvas.height = H;

			p1.w = heart.width;
			p1.h = heart.height;
			p1.x = (W - p1.w) / 2;
			p1.y = (H - p1.h) / 2;

			mouseY = p1.y;
			mouseX = p1.x;
      setInterval(main, 15);
			canvas.addEventListener("mousemove", souris, false);

    }

    function main() {

	    render();
    }

		function souris(e){
					if (e.x != undefined && e.y != undefined){
						mouseX = e.x;
						mouseY = e.y;
					} else {
					// Firefox patch
					mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
					mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
				}

		function render() {
			context.drawImage(background, 0, 0);
			context.drawImage(heart, mouseX, mouseY);
			context.drawImage();
			context.drawImage();
		}

}
