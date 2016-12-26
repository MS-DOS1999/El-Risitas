//==================================================//
//  ___  ______________ _____ _         ___ _____   //
//  |  \/  |  _  |  _  \  ___| |       |_  /  ___|  //
//  | .  . | | | | | | | |__ | |         | \ `--.   //
//  | |\/| | | | | | | |  __|| |         | |`--. \  //
//  | |  | \ \_/ / |/ /| |___| |_____/\__/ /\__/ /  //
//  \_|  |_/\___/|___/ \____/\_____(_)____/\____/   //
//													//
//==================================================//


// .  .          .  .          .                        
// \  / _.._.* _.|_ | _  __   _| _    _. _.._ .  , _. __
//  \/ (_][  |(_][_)|(/,_)   (_](/,  (_.(_][ ) \/ (_]_)                                                     
// -----------------------------------------------------
                                                                                               
CANVAS = document.getElementById("canvas");
CONTEXT = CANVAS.getContext("2d");

// .  .          .  .             ,                 ,          
// \  / _.._.* _.|_ | _  __  *._ -+- _ ._.._.. .._ -+- _ . .._.
//  \/ (_][  |(_][_)|(/,_)   |[ ) | (/,[  [  (_|[_) | (/,(_|[  
// ---------------------------------------------|--------------              


Phase1 = true, Phase2 = false, Phase3 = false, Phase4 = false;
counterP = 0;
counterMegaLoop = 0;

b1EndAnim = false, b2EndAnim = false, b3EndAnim = true, b4EndAnim = true, b5EndAnim = true,
b6EndAnim = true, b7EndAnim = true, b8EndAnim = true, b9EndAnim = true, b10EndAnim = true,
b11EndAnim = true, b12EndAnim = true, b13EndAnim = true, b14EndAnim = true, b15EndAnim = true,
b16EndAnim = true, b17EndAnim = true, b18EndAnim = true, b19EndAnim = true, b20EndAnim = true;

invulnerable = 0;
animInvulnerable = 0;
GoInvul = 0;
EndLevel = 0;

// .  .          .  .           .         ,     .      ,                           
// \  / _.._.* _.|_ | _  __   _ |_   * _ -+-   _| _   -+-  .._  _   *._ _  _. _  _ 
//  \/ (_][  |(_][_)|(/,_)   (_)[_)  |(/, |   (_](/,   | \_|[_)(/,  |[ | )(_](_](/,
// --------------------------------._|-------------------._||----------------._|---

// Permet de créer des objets auquel on pourra associer des images pour leur donner
// une dimension   

joueur = new Image(), background = new Image(),
bloc1 = new Image(), bloc2 = new Image(), bloc3 = new Image(),
bloc4 = new Image(), bloc5 = new Image(), bloc6 = new Image(),
bloc7 = new Image(), bloc8 = new Image(), bloc9 = new Image(),
bloc10 = new Image(), bloc11 = new Image(), bloc12 = new Image(),
bloc13 = new Image(), bloc14 = new Image(), bloc15 = new Image(),
bloc16 = new Image(), bloc17 = new Image(), bloc18 = new Image(),
bloc19 = new Image(), bloc20 = new Image(),
lifeBar = new Image();

// Association des images avec leur objets //

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

// .  .          .  .           .         ,         .                   
// \  / _.._.* _.|_ | _  __   _ |_   * _ -+- __   _.| _. __ __* _.. . _  __
//  \/ (_][  |(_][_)|(/,_)   (_)[_)  |(/, | _)   (_.|(_]_) _) |(_](_|(/,_)
// --------------------------------._|--------------------------|----------

b1 = {}, b2 = {}, b3 = {}, b4 = {}, b5 = {}, b6 = {}, b7 = {}, b8 = {}, b9 = {}, b10 = {},
b11 = {}, b12 = {}, b13 = {}, b14 = {}, b15 = {}, b16 = {}, b17 = {}, b18 = {}, b19 = {}, b20 = {},
lB = {}, p1 = {};

// .  .          .  .          .                    
// \  / _.._.* _.|_ | _  __   _|*.  , _ ._. __ _  __
//  \/ (_][  |(_][_)|(/,_)   (_]| \/ (/,[  _) (/,_) 
// -------------------------------------------------                                                

// Compteur de point de vie //

lifeCounter = 3;

// Variable de Son //

sndLevel = new Audio("sound/Whirlwind.mp3");
levelmusic = 1;

// Variables définissant la taille du canvas + variable de positionnement de la souris //

W = 512;
H = 256;
let mouseX;
let mouseY;
curve = 0;