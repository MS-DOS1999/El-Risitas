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

function initlBB(){
	lBB.x = 490;
	lBB.y = 10;
}

// Initialisation des blocs liées au boss

function initBss(){
	bss.x = 572;
	bss.y = 28;
}

function initLHand(){
	LHand.x = -150;
	LHand.y = -150;
}

function initRHand(){
	RHand.x = -150;
	RHand.y = -150;
}

function initMsl(){
	msl.x = -20;
	msl.y = -20;
}

function initHB(){
	HB.x = 246;
	HB.y = 5;
}

function initExp(){
	Exp.x = 210;
	Exp.y = 15;
}

// Initialisation des sprites écrans

function initTitleS(){
	titleS.x = 0;
	titleS.y = 0;
}

function initStart(){
	st.x = W/2 - st.w/2;
	st.y = H/2 + 30;
}

function initGameOver(){
	GmOv.x = 0;
	GmOv.y = 0;
}

function initEndMessage(){
	EndMess.x = 0;
	EndMess.y = 0;
}

function initCredits(){
	Crdts.x = 0;
	Crdts.y = 256;
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
	spriteDimension(bss, boss);
	initBss();
	spriteDimension(lBB, lifeBarBoss);
	initlBB();
	spriteDimension(LHand, leftHand);
	initLHand();
	spriteDimension(RHand, rightHand);
	initRHand();
	spriteDimension(msl, missile);
	initMsl();
	spriteDimension(HB, heartboss);
	initHB();
	spriteDimension(titleS, titlescreen);
	initTitleS();
	spriteDimension(st, start);
	initStart();
	spriteDimension(GmOv, gameover);
	initGameOver();
	spriteDimension(EndMess, endingmessage);
	initEndMessage();
	spriteDimension(Crdts, credits);
	initCredits();
	for(let i = 1; i < 21; i++){
		let fnName1 = "spriteDimension(b" + i + ",bloc" + i + ");";
		let fnName2 = "initb" + i + "();";
		eval(fnName1);
		eval(fnName2);
	}	
}

function initRestart(){
	spriteDimension(p1, joueur);
	initp1();
	spriteDimension(bss, boss);
	initBss();
	spriteDimension(LHand, leftHand);
	initLHand();
	spriteDimension(RHand, rightHand);
	initRHand();
	spriteDimension(lBB, lifeBarBoss);
	initlBB();
	spriteDimension(msl, missile);
	initMsl();
	spriteDimension(HB, heartboss);
	initHB();
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
	canvas.addEventListener("mousedown", getPosition, false);
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

// Trajectoires des blocs ennemies durant le combat contre le boss

function travelLaserH() {
	b3.x += (10 + attackDifficult);
}

function travelLaserV() {
	b4.y -= (5 + attackDifficult);
}

function travelBossSkullL() {
	b1.x += (2 + attackDifficult);
	b1.y += (1 + attackDifficult + 10 * Math.sin(curve));
}

function travelBossSkullR() {
	b2.x -= (2 + attackDifficult);
	b2.y += (1 + attackDifficult + 10 * Math.sin(curve));
}

function travelBossArrow(bloc) {
	bloc.y += (2 + attackDifficult);
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

//  __.       ,  \             .               ,        
// (__   . __-+- _ ._ _  _    _| _    _  _  __-+-* _ ._ 
// .__)\_|_)  | (/,[ | )(/,  (_](/,  (_](/,_)  | |(_)[ )
// ----._|---------------------------._|----------------                
//   .     . *           .    /       .   .  ,  /       
//  _| _   | '*._ .  ,. .|._  _ ._. _.|_ *|*-+- _       
// (_](/,  |  |[ ) \/ (_||[ )(/,[  (_][_)||| | (/,
// -----------------------------------------------

function invulnerability(){
	snd = new Audio("sound/life-1.wav");
	snd.play();
	invulnerable = 1;
	animInvulnerable = true;
	setTimeout(function(){invulnerable = 0; if(!EndLevel){joueur.src = "img/heart.png";} if(EndLevel){joueur.src = "img/heartTransform14.png";} if(lifeCounter === 0){lifeBar.src = "img/jauge_vide.png";}}, 2000);
}

function invulSystem(){	
	if(invulnerable ===1){
		if(!EndLevel){
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
		if(EndLevel){
			if(lifeCounter > 0){
				GoInvul++;
				if(GoInvul === 5){
					joueur.src = "img/heartvide.png";
				}
				if(GoInvul === 10){
					joueur.src = "img/heartTransform14.png";
					GoInvul = 0;
				}
			}

			if(lifeCounter === 0){
				joueur.src = "img/heartvide.png";
			}
		}
	}
}

//  __.       ,  \             .               ,        
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

// Encapsulage des différentes résultantes des collisions

function collisionEffect(bloc) {
	if (collisions(bloc,p1) && invulnerable === 0 && lifeCounter > 0) {
			lifeCounter --;
			bloc.w = 0;
			bloc.h = 0;
		invulnerability();
	}
}

function bossCollisionEffect(bloc){
	if(collisions(bloc, p1) && invulnerable === 0){
		lifeCounter --;
		invulnerability();
	}
}

function bossDamage(){
	if(collisions(msl, HB)){
		bosslifeCounter--;
		HB.y -= 3;
		setTimeout(function(){HB.y += 3}, 200);
			snd = new Audio("sound/heartbosstouched.wav");
			snd.play();
		if(bosslifeCounter > 0) lifeBarBoss.src = "img/lifeboss" + (20 - bosslifeCounter) + ".png";
		if(bosslifeCounter === 0){
			HB.src = "";
			startBattle = -20;
		} 
		msl.y = -11;
	}
}

function packOfCollisionEffect(){
	for(let i = 1; i < 21; i++){
		let fnName = "collisionEffect(b" + i + ");";
		eval(fnName);
	}
}

function packOfBossCollisionEffect(){
	bossDamage();
	bossCollisionEffect(bss);
	bossCollisionEffect(HB);
	bossCollisionEffect(LHand);
	bossCollisionEffect(RHand);
}

function collisionManager(){
	packOfCollisionEffect();
	packOfBossCollisionEffect();
}

// .__        ,            .               ,  \         
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
	if(!EndLevel){
		sndLevel.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
		}, false);
	}
}

//---------------------------------------------------------//
//            .__        ,       ._.._.._.                 //   
//            [__) _.._.-+-* _    |  |  |                  //  
//            |   (_][   | |(/,  _|__|__|_                 //  
//                                                		   //
//    .___          ,               .     .__          	   //
//    [__  _ ._  _.-+-* _ ._  __   _|. .  [__) _  __ __    //
//    |   (_)[ )(_. | |(_)[ )_)   (_](_|  [__)(_)_) _) 	   //
//                                                  	   //
//---------------------------------------------------------//

// .__.             ,            .       . / .      , 
// [__]._ *._ _  _.-+-* _ ._    _|. .   _| _ |_ . .-+-
// |  |[ )|[ | )(_] | |(_)[ )  (_](_|  (_](/,[_)(_| | 
// ---------------------------------------------------                                                 
//   .        .                                       
//  _| _   ._ |_  _. __ _                             
// (_](/,  [_)[ )(_]_) (/,                            
// --------|--------------  

function bossLauncher(){
	if(bss.x > 226){
		if(TimerBoss === 20){
			boss.src = "img/boss_normal.png";
		}
		if(TimerBoss === 40){
			boss.src = "img/boss_normal1.png";
			TimerBoss=0;
		}
		bss.x -= 2;
		if(bss.x === 226){
			let snd = new Audio("sound/sf_diable_10.mp3"); // buffers automatically when created
			snd.play();
			setTimeout(function () {if(!boucleMusicBoss){musicBoss.play(); boucleMusicboss = true;}}, 4000);
		}
	}
	if(bss.x === 226){
		jaugeBoss();
		annexTimerBoss();
	}
	if(bss.x === 225 && startBattle === 0){
		eventHeartBoss = true;
		startBattle = 1;
	}
}                                        

function AnimHeart(){
	TimerHeart++;
	if(TimerHeart%20 === 0){
		joueur.src = "img/heartTransform" + loopCount + ".png";
		loopCount++;
		if(TimerHeart === 20){
			invulnerable = 2;
		}
		if(TimerHeart === 280){
			EndAnimHeart = true;
			invulnerable = 0;
			loopCount = 1;
		}
	}
}

function jaugeBoss(){
	if(TimerJaugeBoss < 231){
		TimerJaugeBoss++;
		if(TimerJaugeBoss%10 === 0){
			lifeBarBoss.src = "img/jaugeboss" + jaugeCount + ".png";
			jaugeCount--;
			if(TimerJaugeBoss === 230){
				lifeBarBoss.src="img/jaugeboss_remplie.png";
			}
	 	}
	}
}

function annexTimerBoss(){
	TimerBoss1++;
	if(TimerBoss1 === 10){
		boss.src = "img/boss_normal.png";
	}
	if(TimerBoss1 === 20){
		boss.src = "img/boss_normal1.png";
		TimerBoss1=0;
	}
	setTimeout(function(){if(bss.x === 226){bss.x--; TimerBoss1 = 0;}}, 3000);
}

function stopSoundLevel(){
	sndLevel.pause();
	sndLevel.currentTime = 0;
}

function launchAnimHeart(){
	if(!EndAnimHeart){
		AnimHeart();
	}
}

// .___          ,                .   .     .       
// [__  _ ._  _.-+-* _ ._  __   _ | _ |_  _.| _     
// |   (_)[ )(_. | |(_)[ )_)   (_]|(_)[_)(_]|(/,    
// ----------------------------._|--------------                  
//   .               ,            .     .           
//  _| _    _  _  __-+-* _ ._    _|. .  |_  _  __ __
// (_](/,  (_](/,_)  | |(_)[ )  (_](_|  [_)(_)_) _) 
// --------._|--------------------------------------                                      

function bossLeveling(){
	if(bosslifeCounter > 10 && bosslifeCounter <= 15){
		attackDifficult = 0.5;
	}
	if(bosslifeCounter > 5 && bosslifeCounter <= 10){
		attackDifficult = 1;
	}
	if(bosslifeCounter > 0 && bosslifeCounter <= 5){
		attackDifficult = 1.5;
	}
}

function bossAttackPattern(){	
	if(bss.x === 225 && startBattle === 1){
		attackChoice();
		if (attackRandom >= 0 &&attackRandom <= 49){
			LHandAnim();
			LHandAttackPattern();
		}
		if (attackRandom >= 50 && attackRandom <= 100){
			RHandAnim();
			RHandAttackPattern();
		}
	}
}

function movingBossHeart(){
	if(eventHeartBoss){
		heartboss.src = "img/heartboss.png";
		spriteDimension(HB, heartboss);
		if(HB.x < 465 && invertHeartBoss === 0){
			HB.x += 2;
			if(HB.x === 466){
				invertHeartBoss = 1;
			}
		}
		if(HB.x > 30 && invertHeartBoss === 1){
			HB.x -= 2;
			if(HB.x === 30){
				invertHeartBoss = 0;
			}
		}
	}
}

function initRestartSwitcher(){
	eventHeartBoss = false, animInvulnerable = false, EndAnimHeart = false,
	testlaser1 = false, testLHand = false, arrowtest = false,
	testRHand = false, patternLeftHandGo = false, patternRightHandGo = false,
	bossAttackGo = false, startAnimExplo = true;

	Phase1 = true, Phase2 = false, Phase3 = false, Phase4 = false;

	b1EndAnim = false, b2EndAnim = false, b3EndAnim = true, b4EndAnim = true, 
	b5EndAnim = true,b6EndAnim = true, b7EndAnim = true, b8EndAnim = true, 
	b9EndAnim = true, b10EndAnim = true, b11EndAnim = true, b12EndAnim = true, 
	b13EndAnim = true, b14EndAnim = true, b15EndAnim = true, b16EndAnim = true, 
	b17EndAnim = true, b18EndAnim = true, b19EndAnim = true, b20EndAnim = true;
}

function initRestartCounter(){
	startBattle = 0, invertHeartBoss = 0, TimerJaugeBoss = 0,
	invulnerable = 0, TimerHeart = 0, TimerBoss = 0,
	TimerBoss1 = 0, GoInvul = 0, fire = 0,
	invertedLHand = 0, invertedRHand = 0, attackRandom = 0,
	attackDifficult = 0, animExplo = 0, Click_x = 0, Click_y = 0,
	curve = 0, counterP = 0;

	counterMegaLoop = 1, loopCount = 1;

	lifeCounter = 3, bosslifeCounter = 20;

	jaugeCount = 22;
}

function initRestartVar(){
	initRestartSwitcher();
	initRestartCounter();
}

function initRestartSprite(){
	joueur.src = "img/heart.png";
	background.src = "img/background.png";
	lifeBar.src = "img/jauge_remplie.png";
	bloc1.src = "img/skull.png";
	bloc2.src = "img/skull.png";
	bloc3.src = "img/rayonH.png";
	bloc4.src ="img/rayon.png";
	bloc5.src = "img/arrowup.png";
	bloc6.src = "img/arrowup.png";
	bloc7.src = "img/arrowup.png";
	bloc8.src = "img/skull.png";
	bloc9.src = "img/rayonH.png";
	bloc10.src = "img/rayonH.png";
	bloc11.src = "img/rayon.png";
	bloc12.src = "img/rayon.png";
	bloc13.src = "img/arrowright.png";
	bloc14.src = "img/arrowright.png";
	bloc15.src = "img/arrowdown.png";
	bloc16.src = "img/arrowdown.png";
	bloc17.src = "img/arrowdown.png";
	bloc18.src = "img/arrowdown.png";
	bloc19.src = "img/skull.png";
	bloc20.src = "img/skull.png";
	leftHand.src = "";
	rightHand.src = "";
	gameover.src = "img/gameoverScreen.png";
	heartboss.src = "";
}

function getPosition(event){
	Click_x = event.x;
	Click_y = event.y;
	Click_x -= canvas.offsetLeft;
	Click_y -= canvas.offsetTop;

	if(collisions(st, p1) && !startEvent){
		clickStart = true;
	}
	if(lifeCounter <= 0){
		initRestart();
		initRestartVar();			
		initRestartSprite();
	}
	if(fire === 0){
		fire = 1;
	}
}

function shootManager(){
	if(getPosition && fire === 1){
		missile.src = "img/missile.png";
		spriteDimension(msl, missile);
		msl.x = Click_x;
		msl.y = Click_y;
		fire = 2;
	}
	if(fire === 2){
		msl.y -=3;
	}
	if( msl.y< -10 ){
		fire = 0;
	}
}

// .__.             ,            .     .   
// [__]._ *._ _  _.-+-* _ ._    _| _   | _.
// |  |[ )|[ | )(_] | |(_)[ )  (_](/,  |(_]
// ----------------------------------------                                      
//             ,     .     .               
// ._ _  _ ._.-+-   _|. .  |_  _  __ __    
// [ | )(_)[   |   (_](_|  [_)(_)_) _)   
// ------------------------------------  
                                        

function AnimExplo(){
	if(!sndExplostart){
		sndExplo.play();
		sndExplostart = true;
	}
	animExplo++;
	if(animExplo%5 === 0 && animExplo < 56){
		explosion.src = "img/explo" + loopCount + ".png";
		loopCount++;
		if(animExplo === 25){
			boss.src = "";
		}
		if(animExplo === 55){
			explosion.src = "";
			startAnimExplo = false;
		}
	}
}

function bossDeath() {
	if(startBattle === -20){
		eventHeartBoss = false;
		heartboss.src = "";
		spriteDimension(Exp, explosion);
		initExp();
	    if(startAnimExplo){
	    	AnimExplo();
	    }	
	}
}

function victoryEnding(){
	if(!startAnimExplo){
		musicBoss.pause();
		musicBoss.currentTime = 0;
		musicEnding.play();
		p1.w = 0;
		p1.h = 0;
		p1.x = 10000;
		p1.y = 10000;
		launchEndingMessage = true;
		if(launchEndingMessage && EndMess.y != -744){
			EndMess.y -= 0.4;
		}
		if(launchEndingMessage && EndMess.y <= -742){
			launchCredits = true;
		}
		if(launchCredits && Crdts.y > -2244){
			Crdts.y -= 0.4;
		}
	}
}

// Encapsulage final de toutes les fonctions inhérentes au boss

function bossBattle(){
	stopSoundLevel();
	launchAnimHeart();
	shootManager();
	bossLauncher();
	bossLeveling();
	bossDeath();
	bossAttackPattern();
	movingBossHeart();
	victoryEnding();
}

//------------------------------------//
//     .__        ,       ._..  .	  //
//     [__) _.._.-+-* _    | \  /	  //
//     |   (_][   | |(/,  _|_ \/ 	  //
//                            		  //
//    ._.     ,     .             	  //
//     | ._ *-+-* _.|* __ _ . .._.	  //
//    _|_[ )| | |(_]||_) (/,(_|[  	  //
//									  //
//------------------------------------//
                            

function gameLauncher() {
	if(clickStart){
		startEvent = true;
		clickStart = false;
		titlescreen.src = "";
		start.src = "";
	}
}

function Game(){
	if(startEvent){
		soundEffect();
		curl();
		lifeCounterEffect();
		invulSystem();
		gamePattern();
	}
}