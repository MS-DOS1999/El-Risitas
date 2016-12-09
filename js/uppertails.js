// Déclaration des variables
var joueur,
var bloc1, var bloc2, var bloc3, var bloc4, var bloc5,
var bloc6, var bloc7, var bloc8, var bloc9, var bloc10,
var bloc11, var bloc12, var bloc13, var bloc14, var bloc15,
var bloc16, var bloc17, var bloc18, var bloc19, var bloc20,
var lifeBar = new Image();

window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");

	// Déclaration des variables objets
	var joueur = {};
	var bloc1, var bloc2, var bloc3, var bloc4, var bloc5,
	var bloc6, var bloc7, var bloc8, var bloc9, var bloc10,
	var bloc11, var bloc12, var bloc13, var bloc14, var bloc15,
	var bloc16, var bloc17,	var bloc18, var bloc19, var bloc20,
	var lifeBar = {};

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
}

function render() {
	context.drawImage();
	context.drawImage();
	context.drawImage();
	context.drawImage();
}
