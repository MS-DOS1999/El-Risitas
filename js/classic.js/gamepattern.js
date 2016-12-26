//========================================================================================//
//   _____   ___  ___  ___ ___________  ___ _____ _____ ___________ _   _     ___ _____   //
//  |  __ \ / _ \ |  \/  ||  ___| ___ \/ _ \_   _|_   _|  ___| ___ \ \ | |   |_  /  ___|  //
//  | |  \// /_\ \| .  . || |__ | |_/ / /_\ \| |   | | | |__ | |_/ /  \| |     | \ `--.   //
//  | | __ |  _  || |\/| ||  __||  __/|  _  || |   | | |  __||    /| . ` |     | |`--. \  //
//  | |_\ \| | | || |  | || |___| |   | | | || |   | | | |___| |\ \| |\  |_/\__/ /\__/ /  //
//   \____/\_| |_/\_|  |_/\____/\_|   \_| |_/\_/   \_/ \____/\_| \_\_| \_(_)____/\____/   //
//																						  //
//========================================================================================//


// .___          ,            .            ,  ,          
// [__  _ ._  _.-+-* _ ._    _| _   ._  _.-+--+- _ ._.._ 
// |   (_)[ )(_. | |(_)[ )  (_](/,  [_)(_] |  | (/,[  [ )
// ---------------------------------|--------------------

// Ensemble de fonction définissant les différents pattern utilisés
// au cours du jeu d'esquive

// Phase 1
// -------

function patternP1() {

	if(!b1EndAnim && !b2EndAnim){

		if(levelmusic === 1){
			sndLevel.play();
			levelmusic = 0;
		}
		travelSkullTL();
		travelSkullTR();
		if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256)){
			initb1();
			initb2();
			b1EndAnim = true;
			b2EndAnim = true;
			b3EndAnim = false;
		}
	}

	if(!b3EndAnim){
		travelLaserLeft(b3);
		if(b3.x > 530){
			initb3();
			b3EndAnim = true;
			b12EndAnim = false;
		}
	}

	if(!b12EndAnim){
		travelLaserTop(b12);
		if(b12.y > 270){
			initb12();
			b12EndAnim = true;
			b11EndAnim = false;
		}
	}

	if(!b11EndAnim){
		travelLaserTop(b11);
		if(b11.y > 270){
			initb11();
			b11EndAnim = true;
			b4EndAnim = false;
		}
	}

	if(!b4EndAnim){
		travelLaserBottom(b4);
		if(b4.y < -30){
			initb4();
			b4EndAnim = true;
			b20EndAnim = false;
		}
	}

	if(!b20EndAnim){
		travelCurlSkullBR();
		if(b20.y < 0 || b20.x < 0){
			initb20();
			b20EndAnim = true;
			b15EndAnim = false;
			b18EndAnim = false;
		}
	}

	if(!b15EndAnim && !b18EndAnim){
		travelArrowTop(b15);
		travelArrowTop(b18);
		if(b15.y > 270 || b18.y > 270){
			initb15();
			initb18();
			b15EndAnim = true;
			b18EndAnim = true;
			b17EndAnim = false;
			b16EndAnim = false;
		}
	}

	if(!b16EndAnim && !b17EndAnim){
		travelArrowTop(b16);
		travelArrowTop(b17);
		if(b16.y > 270 || b17.y > 270){
			initb16();
			initb17();
			b16EndAnim = true;
			b17EndAnim = true;
			b5EndAnim = false;
			b6EndAnim = false;
			b7EndAnim = false;
		}
	}

	if(!b5EndAnim && !b6EndAnim && !b7EndAnim){
		travelArrowBottom(b5);
		travelArrowBottom(b6);
		travelArrowBottom(b7);
		if(b5.y < 0 || b6.y < 0 || b7.y < 0){
			initb5();
			initb6();
			initb7();
			b5EndAnim = true;
			b6EndAnim = true;
			b7EndAnim = true;
			b10EndAnim = false;
		}
	}

	if(!b10EndAnim){
		travelLaserLeft(b10);
		if(b10.x > 512){
			initb10();
			b10EndAnim = true;
			b9EndAnim = false;
		}
	}

	if(!b9EndAnim){
		travelLaserLeft(b9);
		if(b9.x > 512){
			initb9();
			b9EndAnim = true;
			b19EndAnim = false;
		}
	}

	if(!b19EndAnim){
		travelCurlSkullLeft();
		if(b19.x > 512){
			initb19();
			b19EndAnim = true;
			b8EndAnim = false;
			b13EndAnim = false;
			b14EndAnim = false;
		}
	}

	if(!b8EndAnim && !b13EndAnim && !b14EndAnim){
		travelSkullBottomLeft();
		travelArrowLeft(b13);
		travelArrowLeft(b14);
		if(( b8.x > 512 || b8.y < 0 ) || b13.x > 512 || b14.x > 512){
			initb8();
			initb13();
			initb14();
			b8EndAnim = true;
			b13EndAnim = true;
			b14EndAnim = true;
			if(counterP === 1) {
				b6EndAnim = false;
				b13EndAnim = false;
				b14EndAnim = false;
				Phase1 = false;
				Phase2 = true;
				counterP = 0;
			}
			else{
				b1EndAnim = false;
				b2EndAnim = false;
				counterP++;
			}
		}
	}
}

// Phase 2
// -------

function patternP2(){

	if(!b6EndAnim && !b13EndAnim && !b14EndAnim){
		travelArrowBottom(b6);
		travelArrowLeft(b13);
		travelArrowLeft(b14);
		if(b13.x > 512 || b14.x > 512){
			initb6();
			initb13();
			initb14();
			b6EndAnim = true;
			b13EndAnim = true;
			b14EndAnim = true;
			b4EndAnim = false;
			b5EndAnim = false;
			b7EndAnim = false;
		}
	}

	if(!b4EndAnim && !b5EndAnim && !b7EndAnim){
		travelLaserBottom(b4);
		travelArrowBottom(b5);
		travelArrowBottom(b7);
		if(b5.y < 0 || b7.y < 0){
			initb4();
			initb5();
			initb7();
			b4EndAnim = true;
			b5EndAnim = true;
			b7EndAnim = true;
			b1EndAnim = false;
			b3EndAnim = false;
			b8EndAnim = false;
		}
	}

	if(!b1EndAnim && !b3EndAnim && !b8EndAnim){
		travelSkullTL();
		travelSkullBottomLeft();
		travelLaserLeft(b3);
		if((b1.x > 512 || b1.y > 256) && b3.x > 530 && ( b8.x > 512 || b8.y < 0 )){
			initb1();
			initb3();
			initb8();
			b8.y = 256;
			b1EndAnim = true;
			b3EndAnim = true;
			b8EndAnim = true;
			b11EndAnim = false;
			b12EndAnim = false;
			b20EndAnim = false;
		}
	}

	if(!b11EndAnim && !b12EndAnim && !b20EndAnim){
		travelLaserTop(b11);
		travelLaserTop(b12);
		travelCurlSkullBR();
		if(b11.y > 270 && b12.y > 270 && ( b20.y < 0 || b20.x < 0 )){
			initb11();
			initb12();
			initb20();
			b11EndAnim = true;
			b12EndAnim = true;
			b20EndAnim = true;
			b15EndAnim = false;
			b16EndAnim = false;
			b17EndAnim = false;
			b18EndAnim = false;
			b19EndAnim = false;
		}
	}

	if(!b15EndAnim && !b16EndAnim && !b17EndAnim && !b18EndAnim && !b19EndAnim){
		travelArrowTop(b15);
		travelArrowTop(b16);
		travelArrowTop(b17);
		travelArrowTop(b18);
		travelCurlSkullLeft();
		if(b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
			initb15();
			initb16();
			initb17();
			initb18();
			initb19();
			b15EndAnim = true;
			b16EndAnim = true;
			b17EndAnim = true;
			b18EndAnim = true;
			b19EndAnim = true;
			if(counterP === 1){
				b1EndAnim = false;
				b2EndAnim = false;
				b3EndAnim = false;
				b4EndAnim = false;
				b8EndAnim = false;
				b20EndAnim = false;
				Phase2 = false;
				Phase3 = true;
				counterP = 0;
			}
			else{
				b6EndAnim = false;
				b13EndAnim = false;
				b14EndAnim = false;
				counterP ++;
			}
		}
	}
}

// Phase 3
// -------

function patternP3(){

	if(!b1EndAnim && !b2EndAnim && !b3EndAnim && !b4EndAnim && !b8EndAnim && !b20EndAnim){
		travelSkullTL();
		travelSkullTR();
		travelLaserLeft(b3);
		travelLaserBottom(b4);
		travelSkullBottomLeft();
		travelCurlSkullBR();
		if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && b3.x > 530 && b4.y < -30 && ( b8.x > 512 || b8.y < 0 ) && (b20.y < 0 && b20.x < 0)){
			initb1();
			initb2();
			initb3();
			initb4();
			initb8();
			initb20();
			b1EndAnim = true;
			b2EndAnim = true;
			b3EndAnim = true;
			b4EndAnim = true;
			b8EndAnim = true;
			b20EndAnim = true;
			b9EndAnim = false;
			b10EndAnim = false;
			b11EndAnim = false;
			b12EndAnim = false;
		}
	}

	if(!b9EndAnim && !b10EndAnim && !b11EndAnim && !b12EndAnim){
		travelLaserLeft(b9);
		travelLaserLeft(b10);
		travelLaserTop(b11);
		travelLaserTop(b12);
		if(b9.x > 512 && b10.x > 512 && b11.y > 270 && b12.y > 270){
			initb9();
			initb10();
			initb11();
			initb12();
			b9EndAnim = true;
			b10EndAnim = true;
			b11EndAnim = true;
			b12EndAnim = true;
			b5EndAnim = false;
			b6EndAnim = false;
			b7EndAnim = false;
			b15EndAnim = false;
			b16EndAnim = false;
			b17EndAnim = false;
			b18EndAnim = false;
			b19EndAnim = false;
		}
	}

	if(!b5EndAnim && !b6EndAnim && !b7EndAnim && !b15EndAnim && !b16EndAnim && !b17EndAnim && !b18EndAnim && !b19EndAnim){
		travelArrowBottom(b5);
		travelArrowBottom(b6);
		travelArrowBottom(b7);
		travelArrowTop(b15);
		travelArrowTop(b16);
		travelArrowTop(b17);
		travelArrowTop(b18);
		travelCurlSkullLeft();
		if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270 && b19.x > 512){
			initb5();
			initb6();
			initb7();
			initb15();
			initb16();
			initb17();
			initb18();
			initb19();
			b5EndAnim = true;
			b6EndAnim = true;
			b7EndAnim = true;
			b15EndAnim = true;
			b16EndAnim = true;
			b17EndAnim = true;
			b18EndAnim = true;
			b19EndAnim = true;
			if(counterP === 2){
				b5EndAnim = false;
				b6EndAnim = false;
				b7EndAnim = false;
				b9EndAnim = false;
				b10EndAnim = false;
				b13EndAnim = false;
				b15EndAnim = false;
				b16EndAnim = false;
				b17EndAnim = false;
				b18EndAnim = false;
				Phase3 = false;
				Phase4 = true;
				counterP = 0;
			}
			else{
				b1EndAnim = false;
				b2EndAnim = false;
				b3EndAnim = false;
				b4EndAnim = false;
				b8EndAnim = false;
				b20EndAnim = false;
				counterP ++;
			}
		}
	}
}

// Phase 4
// -------

function patternP4(){

	if(!b5EndAnim && !b6EndAnim && !b7EndAnim && !b9EndAnim && !b10EndAnim && !b13EndAnim && !b15EndAnim && !b16EndAnim && !b17EndAnim && !b18EndAnim){
		travelArrowBottom(b5);
		travelArrowBottom(b6);
		travelArrowBottom(b7);
		travelLaserLeft(b9);
		travelLaserLeft(b10);
		travelArrowLeft(b13);
		travelArrowTop(b15);
		travelArrowTop(b16);
		travelArrowTop(b17);
		travelArrowTop(b18);
		if(b5.y < 0 && b6.y < 0 && b7.y < 0 && b9.x > 512 && b10.x > 512 && b13.x > 512 && b15.y > 270 && b16.y > 270 && b17.y > 270 && b18.y > 270){
			initb5();
			initb6();
			initb7();
			initb9();
			initb10();
			initb13();
			initb15();
			initb16();
			initb17();
			initb18();
			b5EndAnim = true;
			b6EndAnim = true;
			b7EndAnim = true;
			b9EndAnim = true;
			b10EndAnim = true;
			b13EndAnim = true;
			b15EndAnim = true;
			b16EndAnim = true;
			b17EndAnim = true;
			b18EndAnim = true;
			b1EndAnim = false;
			b2EndAnim = false;
			b8EndAnim = false;
			b11EndAnim = false;
			b12EndAnim = false;
			b20EndAnim = false;
		}
	}

	if(!b1EndAnim && !b2EndAnim && !b8EndAnim && !b11EndAnim && !b12EndAnim && !b20EndAnim){
		travelSkullTL();
		travelSkullTR();
		travelSkullBottomLeft();
		travelLaserTop(b11);
		travelLaserTop(b12);
		travelCurlSkullBR();
		if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256) && ( b8.x > 512 || b8.y < 0 ) && b11.y > 270 && b12.y > 270 && (b20.y < 0 || b20.x < 0)){
			initb1();
			initb2();
			initb8();
			initb11();
			initb12();
			initb20();
			b1EndAnim = true;
			b2EndAnim = true;
			b8EndAnim = true;
			b11EndAnim = true;
			b12EndAnim = true;
			b20EndAnim = true;
			b3EndAnim = false;
			b4EndAnim = false;
			b19EndAnim = false;
		}
	}

	if(!b3EndAnim && !b4EndAnim && !b19EndAnim){
		travelLaserLeft(b3);
		travelLaserBottom(b4);
		travelCurlSkullLeft();
		if(b3.x > 530 && b4.y < -30 && b19.x > 512){
			initb3();
			initb4();
			initb19();
			if(counterMegaLoop === 1){
				b3EndAnim = true;
				b4EndAnim = true;
				b19EndAnim = true;
				Phase4 = false;
			}
			else{
				b3EndAnim = true;
				b4EndAnim = true;
				b19EndAnim = true;
				Phase4 = false;
				b1EndAnim = false;
				b2EndAnim = false;
				Phase1 = true;
				counterMegaLoop ++;
			}
		}
	}
}

// Fonction rassemblant les patterns précédemment créés pour les inclures et
// leur permettrent de s'effectuer en chaîne

function gamePattern(){

	if(Phase1) {
		patternP1();
	}
	if(Phase2) {
		patternP2();
	}
	if (Phase3) {
		patternP3();
	}
	if (Phase4) {
		patternP4();
	}

}