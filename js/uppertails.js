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

}
