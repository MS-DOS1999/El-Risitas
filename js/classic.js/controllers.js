//=========================================================================================//
//    _____ _____ _   _ ___________ _____ _      _      ___________  _____    ___ _____    //
//   /  __ \  _  | \ | |_   _| ___ \  _  | |    | |    |  ___| ___ \/  ___|  |_  /  ___|   //
//   | /  \/ | | |  \| | | | | |_/ / | | | |    | |    | |__ | |_/ /\ `--.     | \ `--.    //
//   | |   | | | | . ` | | | |    /| | | | |    | |    |  __||    /  `--. \    | |`--. \   //
//   | \__/\ \_/ / |\  | | | | |\ \\ \_/ / |____| |____| |___| |\ \ /\__/ //\__/ /\__/ /   //
//    \____/\___/\_| \_/ \_/ \_| \_|\___/\_____/\_____/\____/\_| \_|\____(_)____/\____/    //
//																						   //
//=========================================================================================//
   
//-------------------------------------//                                                                                
//       .__        ,       ._.        //
//       [__) _.._.-+-* _    |         //
//       |   (_][   | |(/,  _|_        //
//                                     //
//   ._.     ,     .        ,          //
//    | ._ *-+-* _.|* __ _.-+-* _ ._   //
//   _|_[ )| | |(_]||_) (_] | |(_)[ )  //
//                                     //
//-------------------------------------//

// ._.     ,     .        ,            .        .  .                                
//  | ._ *-+-* _.|* __ _.-+-* _ ._    _| _  __  |_ | _  _. __   
// _|_[ )| | |(_]||_) (_] | |(_)[ )  (_](/,_)   [_)|(_)(_._)   
// ----------------------------------------------------------


function initb1() {
	b1.y = -20;
	b1.x = -20 - bloc1.width;
}

function initb2() {
	b2.y = -20;
	b2.x = 532;
}

function initb3() {
	b3.y = 256 / 3;
	b3.x = -20 - bloc3.width;
}

function initb4() {
	b4.y = 276;
	b4.x = 512 / 3;
}

function initb5() {
	b5.y = 276;
	b5.x = 104;
}

function initb6() {
	b6.y = 276;
	b6.x = 276;
}

function initb7() {
	b7.y = 276;
	b7.x = 408;
}

function initb8() {
	b8.y = 276;
	b8.x = -20 - bloc8.width;
}

function initb9() {
	b9.y = 0;
	b9.x = -20 - bloc9.width;
}

function initb10() {
	b10.y = (256 / 3) * 2;
	b10.x = -20 - bloc10.width;
}

function initb11() {
	b11.y = -20 - bloc11.height;
	b11.x = (512 / 3) * 2;
}

function initb12() {
	b12.y = -20 - bloc12.height;
	b12.x = 0;
}

function initb13() {
	b13.y = 256 / 3;
	b13.x = -20 - bloc13.width;
}

function initb14() {
	b14.y = (256 / 3) * 2;
	b14.x = -20 - bloc14.width;
}

function initb15() {
	b15.y = -20 - bloc15.height;
	b15.x = 51;
}

function initb16() {
	b16.y = -20 - bloc16.height;
	b16.x = 461;
}

function initb17() {
	b17.y = -20 - bloc17.height;
	b17.x = 205;
}

function initb18() {
	b18.y = -20 - bloc18.height;
	b18.x = 411;
}

function initb19() {
	b19.y = 200;
	b19.x = -20 - bloc19.width;
}

function initb20() {
	b20.y = 276;
	b20.x = 532;
}

function initp1(){
	p1.x = (W - p1.w) / 2;
	p1.y = (H - p1.h) / 2;
}

function initlB(){
	lB.y = 10;
	lB.x = 10;
}

// .__                                         ,     .        .  .         
// |  \*._ _  _ ._  __* _ ._ ._  _ ._ _  _ ._ -+-   _| _  __  |_ | _  _. __
// |__/|[ | )(/,[ )_) |(_)[ )[ )(/,[ | )(/,[ ) |   (_](/,_)   [_)|(_)(_._) 
// ------------------------------------------------------------------------                                                                       

function spriteDimension(bloc, sprite) {
	bloc.h = sprite.height;
	bloc.w = sprite.width;
}

// .__        ,            .                           .   .      
// [ __ _  __-+-* _ ._    _| _  __   __*._ . . __ _ * _| _.| _  __
// [_./(/,_)  | |(_)[ )  (_](/,_)   _) |[ )(_|_) (_)|(_](_]|(/,_) 
// ---------------------------------------------------------------
                                                               

function curl() {
	curve += 0.5;
	if(curve > 180) curve = 0;
}

// ._.     ,     .        ,            .      __                 
//  | ._ *-+-* _.|* __ _.-+-* _ ._    _|. .  /  ` _.._ .  , _. __
// _|_[ )| | |(_]||_) (_] | |(_)[ )  (_](_|  \__.(_][ ) \/ (_]_) 
// --------------------------------------------------------------
                                                              

function initCanvas(){
	CANVAS.width = W;
	CANVAS.height = H;
}

// ._.     ,     .        ,            .                   ,       
//  | ._ *-+-* _.|* __ _.-+-* _ ._    _| _  __   __._ ._.*-+- _  __
// _|_[ )| | |(_]||_) (_] | |(_)[ )  (_](/,_)   _) [_)[  | | (/,_) 
// ------------------------------------------------|---------------               

function initPackOfSprite(){
	spriteDimension(p1, joueur);
	initp1();
	spriteDimension(lB, lifeBar);
	initlB();
	for(let i = 1; i < 21; i++){
		let fnName1 = "spriteDimension(b" + i + ",bloc" + i + ");";
		let fnName2 = "initb" + i + "();";
		eval(fnName1);
		eval(fnName2);
	}	
}

// ._.     ,     .        ,            .                                     ,          
//  | ._ *-+-* _.|* __ _.-+-* _ ._    _|*.  , _ ._. __  ._  _.._. _.._ _  _ -+-._. _  __
// _|_[ )| | |(_]||_) (_] | |(_)[ )  (_]| \/ (/,[  _)   [_)(_][  (_][ | )(/, | [  (/,_) 
// -----------------------------------------------------|-------------------------------                               

function initVariousParameters(){
	mouseY = p1.y;
	mouseX = p1.x;
	canvas.addEventListener("mousemove", souris, false);
	document.body.style.cursor = 'none';
}

//---------------------------------------------------------------------------------//
//                             .__        ,       ._.._.                           //                         
//                             [__) _.._.-+-* _    |  |                            //                         
//                             |   (_][   | |(/,  _|__|_                           //                         
//																				   //
//   .___          ,               .                .__                  .         //
//   [__  _ ._  _.-+-* _ ._  __   _| _     * _ . .  [__)._.*._  _.*._  _.| _  __   //
//   |   (_)[ )(_. | |(_)[ )_)   (_](/,    |(/,(_|  |   [  |[ )(_.|[_)(_]|(/,_)    //
//                                       ._|                       |               //
//---------------------------------------------------------------------------------//

//  __    .      .    .         ,                 ,              
// /  ` _.| _.. .|   _| _  __  -+-._. _.  * _  _.-+- _ *._. _  __
// \__.(_]|(_.(_||  (_](/,_)    | [  (_]  |(/,(_. | (_)|[  (/,_) 
// -------------------------------------._|----------------------                      

function travelArrowLeft(bloc) {
	bloc.x += 2 + counterP + counterMegaLoop;
}

function travelArrowTop(bloc) {
	bloc.y += 2 + counterP + counterMegaLoop;
}

function travelArrowBottom(bloc) {
	bloc.y -= 2 + counterP + counterMegaLoop;
}

function travelLaserLeft(bloc) {
	bloc.x += 10 + counterP + counterMegaLoop;
}

function travelLaserTop(bloc) {
	bloc.y += 5 + counterP + counterMegaLoop;
}

function travelLaserBottom(bloc) {
	bloc.y -= 5 + counterP + counterMegaLoop;
}

function travelSkullTL() {
	b1.x += 2 + counterP + counterMegaLoop;
	b1.y += 1 + ( (counterP + counterMegaLoop) / 2);
}

function travelSkullTR() {
	b2.x -= 2 + counterP + counterMegaLoop;
	b2.y += 1 + ( (counterP + counterMegaLoop) / 2);
}

function travelSkullBottomLeft() {
	b8.x += 2 + counterP + counterMegaLoop;
	b8.y -= 1 + ( (counterP + counterMegaLoop) / 2);
}

function travelCurlSkullLeft() {
	b19.x += 2 + counterP + counterMegaLoop;
	b19.y += (10 + ( (counterP + counterMegaLoop) / 2)) * Math.sin(curve);
}

function travelCurlSkullBR() {
	b20.x -= 2 + counterP + counterMegaLoop;
	b20.y -= 1 + ((10 + ( (counterP + counterMegaLoop) / 2)) * Math.sin(curve));
}

// .__        ,            .                ,                          , 
// [ __ _  __-+-* _ ._    _|. .  ._  _  __*-+-* _ ._ ._  _ ._ _  _ ._ -+-
// [_./(/,_)  | |(_)[ )  (_](_|  [_)(_)_) | | |(_)[ )[ )(/,[ | )(/,[ ) | 
// ------------------------------|--------------------------------------                                       
//   .     .                                                             
//  _| _   | _.   __ _ . .._.* __                                        
// (_](/,  |(_]  _) (_)(_|[  |_)  
// ------------------------------                                       
                                                                      

function souris(e){
	if (e.x != undefined && e.y != undefined){
		mouseX = e.x - 15;
		mouseY = e.y - 15;
	} else {
	// Firefox patch
	mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - 15;
	mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - 15;
	}
	p1.x = mouseX;
	p1.y = mouseY;
}

//  __.       ,                .               ,        
// (__   . __-+- _ ._ _  _    _| _    _  _  __-+-* _ ._ 
// .__)\_|_)  | (/,[ | )(/,  (_](/,  (_](/,_)  | |(_)[ )
// ----._|---------------------------._|----------------                
//   .              ..                                  
//  _| _  __   _. _ ||* __* _ ._  __                    
// (_](/,_)   (_.(_)|||_) |(_)[ )_) 
// ---------------------------------                 

                                                     

function collisions(A,B) {
	if (A.y+A.h < B.y || A.y > B.y+B.h || A.x > B.x+B.w || A.x+A.w < B.x)
		return false;
		return true;
}

//  __.       ,                .               ,        
// (__   . __-+- _ ._ _  _    _| _    _  _  __-+-* _ ._ 
// .__)\_|_)  | (/,[ | )(/,  (_](/,  (_](/,_)  | |(_)[ )
// ----._|---------------------------._|----------------                
//   .     . *           .            .   .  ,          
//  _| _   | '*._ .  ,. .|._  _ ._. _.|_ *|*-+- _       
// (_](/,  |  |[ ) \/ (_||[ )(/,[  (_][_)||| | (/,
// -----------------------------------------------

function invulnerability(){
	var snd = new Audio("sound/life-1.wav");
		snd.play();
	invulnerable = 1;
	animInvulnerable = 1;
	setTimeout(function(){invulnerable = 0; if(EndLevel === 0){joueur.src = "img/heart.png";} if(EndLevel === 1){joueur.src = "img/heartTransform14(Final).png";} if(lifeCounter === 0){lifeBar.src = "img/jauge_vide.png";}}, 2500);
}

function invulSystem(){	
	if(invulnerable ===1){
		if(EndLevel === 0){
			if(lifeCounter > 0){
				GoInvul++;
				if(GoInvul === 5){
					joueur.src = "img/heartvide.png";
				}
				if(GoInvul === 10){
					joueur.src = "img/heart.png";
					GoInvul = 0;
				}
			}
			if(lifeCounter === 0){
				joueur.src = "img/heartvide.png";
			}
		}
		if(EndLevel === 1){
			if(lifeCounter > 0){
				GoInvul++;
				if(GoInvul === 5){
					joueur.src = "img/heartvide.png";
				}
				if(GoInvul === 10){
					joueur.src = "img/heartTransform14(Final).png";
					GoInvul = 0;
				}
			}

			if(lifeCounter === 0){
				joueur.src = "img/heartvide.png";
			}
		}
	}
}

// Encapsulage des différentes résultantes des collisions

function collisionEffect(bloc) {
	if (collisions(bloc,p1) && invulnerable === 0 && lifeCounter > 0) {
			lifeCounter -= 1;
			bloc.w = 0;
			bloc.h = 0;
		invulnerability();
	}
}

function packOfCollisionEffect(){
	for(let i = 1; i < 21; i++){
		let fnName = "collisionEffect(b" + i + ");";
		eval(fnName);
	}
}

// .__        ,            .               ,            
// [ __ _  __-+-* _ ._    _|. .   __  . __-+- _ ._ _  _ 
// [_./(/,_)  | |(_)[ )  (_](_|  _) \_|_)  | (/,[ | )(/,
// ---------------------------------._|-----------------                 
//   .                ,        .                        
//  _| _   ._  _ *._ -+- __   _| _   .  ,* _            
// (_](/,  [_)(_)|[ ) | _)   (_](/,   \/ |(/,           
// --------|---------------------------------                                            

function lifeCounterEffect(){

	if(lifeCounter === 2){
		lifeBar.src = "img/jauge_demi1.png";
	}
	if(lifeCounter === 1){
		lifeBar.src = "img/jauge_demi2.png";
	}
	if(lifeCounter === 0){
		lifeBar.src = "img/jauge_vide.png";
	}
	if(lifeCounter <= 0){
		joueur.src = "img/heartvide.png";
	}

}

function soundEffect() {
	sndLevel.addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
	}, false);
}