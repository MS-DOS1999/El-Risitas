// Début code Jamil pour le mouvement de la souris
cursor("NONE"); // remove mouse cursor

// décla des variables:

var heart = new Image();
var background = new Image();
var x = 0;
var y = 0;

//linker les images aux var
heart.src = "img/heart.png";
background.src = "img/background.png";


window.onload = function() {
	//recupérer zone dessin canvas dans le html
	var canvas = document.getElementById("canvas");
	//donner le context, ici 2d
	var context = canvas.getContext("2d");


  var W = 512;
	var H = 256;




  let draw = function() {
    x = lerp(mouseX, x, 0);  // means Linear Interpolation between two points
    y = lerp(mouseY, y, 0);
    background(0, 0, 0); // black color background
    image(heart, x - 50, y - 50, 100, 100);
};


    init();

    function init() {
			canvas.width = W;
			canvas.height = H;
    }
}
