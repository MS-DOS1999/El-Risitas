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
    }
}
