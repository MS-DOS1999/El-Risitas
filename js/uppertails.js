// Début code Jamil pour le mouvement de la souris

// declare image variable
var player = new Image();
var background = new Image();


//link images to var
player.src = "img/heart.png";
background.src = "img/background.png";


window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");


  var W = 512;
	var H = 256;







    init();

    function init() {

			canvas.width = W;
			canvas.height = H;

			setInterval(main, 15);

			//
			p1.w = player.width;
			p1.h = player.height;
			/*p1.x = (W - p1.h) / 2;
			p1.y = (H - p1.h) / 2;*/
    }

    function main() {

	    render();
    }
		function render() {
			context.drawImage(background, 0, 0);
			context.drawImage(player, 256, 128);
			context.drawImage();
			context.drawImage();
		}

}
