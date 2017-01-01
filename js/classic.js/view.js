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
	CONTEXT.drawImage(titlescreen, titleS.x, titleS.y);
	CONTEXT.drawImage(start, st.x, st.y);
	CONTEXT.drawImage(joueur, mouseX, mouseY);
	if(startEvent && lifeCounter > 0 && !launchEndingMessage){
		CONTEXT.drawImage(lifeBar, lB.x, lB.y);
		CONTEXT.drawImage(heartboss, HB.x, HB.y);
		CONTEXT.drawImage(lifeBarBoss, lBB.x, lBB.y);
		CONTEXT.drawImage(boss, bss.x, bss.y);
		CONTEXT.drawImage(missile, msl.x, msl.y);
		CONTEXT.drawImage(leftHand, LHand.x, LHand.y);
		CONTEXT.drawImage(rightHand, RHand.x, RHand.y);
		CONTEXT.drawImage(explosion, Exp.x, Exp.y);
		for(let i = 1; i < 21; i++){
			let fnName = "CONTEXT.drawImage(bloc" + i + ", b" + i + ".x, b" + i + ".y);";
			eval(fnName);
		}
	}
	if(lifeCounter <= 0){
		CONTEXT.drawImage(gameover, GmOv.x, GmOv.y);
	}
	if(launchEndingMessage){
		CONTEXT.drawImage(endingmessage, EndMess.x, EndMess.y);
	}
	if(launchCredits){
		CONTEXT.drawImage(credits, Crdts.x, Crdts.y);
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

// .___          ,            . *       /        ,        
// [__  _ ._  _.-+-* _ ._    _| ' _ \./ _  _.. .-+-* _ ._ 
// |   (_)[ )(_. | |(_)[ )  (_]  (/,/'\(/,(_.(_| | |(_)[ )
// -------------------------------------------------------

// Exécute toutes les fonctions permettant au jeu de s'animer

function main() {
	gameLauncher();
	Game();
	collisionManager();
    render();
}