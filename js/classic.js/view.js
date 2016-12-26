//=============================================//
//    _   _ _____ _____ _    _    ___ _____    //
//   | | | |_   _|  ___| |  | |  |_  /  ___|   //
//   | | | | | | | |__ | |  | |    | \ `--.    //
//   | | | | | | |  __|| |/\| |    | |`--. \   //
//   \ \_/ /_| |_| |___\  /\  //\__/ /\__/ /   //
//    \___/ \___/\____/ \/  \(_)____/\____/    //
//											   //
//=============================================//

// .___          ,            .                    ,   .                        
// [__  _ ._  _.-+-* _ ._    _| _  __ __*._  _.._ -+-  | _    _. _.._ .  , _. __
// |   (_)[ )(_. | |(_)[ )  (_](/,_) _) |[ )(_][ ) |   |(/,  (_.(_][ ) \/ (_]_) 
// -----------------------------------------------------------------------------

//Permet de redessiner le canvas à chaque exécution de la boucle main
                                                                            

function render() {
	CONTEXT.drawImage(background, 0, 0);
	CONTEXT.drawImage(joueur, mouseX, mouseY);
	CONTEXT.drawImage(lifeBar, lB.x, lB.y);
	for(let i = 1; i < 21; i++){
		let fnName = "CONTEXT.drawImage(bloc" + i + ", b" + i + ".x, b" + i + ".y);";
		eval(fnName);
	}
}

// .___          ,            . *      ,     .        ,        
// [__  _ ._  _.-+-* _ ._    _| '*._ *-+-* _.|* __ _.-+-* _ ._ 
// |   (_)[ )(_. | |(_)[ )  (_]  |[ )| | |(_]||_) (_] | |(_)[ )
// ------------------------------------------------------------

// Initialise le canvas, ses dimensions; et place les éléments qui s'animeront au cours du jeu

function init() {
	initCanvas();
	initPackOfSprite();
	initVariousParameters();
	setInterval(main, 10);
}

// .___          ,            . *                ,        
// [__  _ ._  _.-+-* _ ._    _| ' _ \./ _  _.. .-+-* _ ._ 
// |   (_)[ )(_. | |(_)[ )  (_]  (/,/'\(/,(_.(_| | |(_)[ )
// -------------------------------------------------------

// Lance toutes les fonctions permettant au jeu d'exister

function main() {
	soundEffect();
	curl();
	lifeCounterEffect();
	invulSystem();
	gamePattern();
	packOfCollisionEffect();
    render();
}