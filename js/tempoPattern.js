
if (leftHandPattern){

  if(!b3EndP1 && !b4EndP1){
    b3.x += 10;
    b4.y -= 5;
    if(b3.x > 530 && b4.y < -30){
      b3.x = -bloc3.width;
      b4.y = 256;
      b3EndP1 = true;
      b4EndP1 = true;
      b1EndP1 = false;
      b2EndP1 = false;
    }
  }

  if(!b1EndP1 && !b2EndP1){
    b1.x += 2;
    b1.y += 1 + 10 * Math.sin(curve);
    b2.x -= 2;
    b2.y += 1 + 10 * Math.sin(curve);
    if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256)){
      b1.y = 0;
      b1.x = -bloc1.width;
      b2.x = 512;
      b2.y = 0;
      b1EndP1 = true;
      b2EndP1 = true;
      b15EndP1 = false;
      b16EndP1 = false;
      b17EndP1 = false;
      b18EndP1 = false;
    }
  }

  if(!b15EndP1 && !b18EndP1 && !b16EndP1 && !b17EndP1){
    b15.y += 2;
    b16.y += 2;
    b17.y += 2;
    b18.y += 2;
    if((b15.y > 270 || b18.y > 270) && (b16.y > 270 || b17.y > 270)){
      b15.y = -bloc15.height;
      b16.y = -bloc16.height;
      b17.y = -bloc17.height;
      b18.y = -bloc18.height;
      b15EndP1 = true;
      b16EndP1 = true;
      b17EndP1 = true;
      b18EndP1 = true;
      leftHandPattern = false;
    }
  }
}

if (rightHandPattern){


  if(!b15EndP1 && !b18EndP1 && !b16EndP1 && !b17EndP1){
    b15.y += 2;
    b16.y += 2;
    b17.y += 2;
    b18.y += 2;
    if((b15.y > 270 || b18.y > 270) && (b16.y > 270 || b17.y > 270)){
      b15.y = -bloc15.height;
      b16.y = -bloc16.height;
      b17.y = -bloc17.height;
      b18.y = -bloc18.height;
      b15EndP1 = true;
      b16EndP1 = true;
      b17EndP1 = true;
      b18EndP1 = true;
      b1EndP1 = false;
      b2EndP1 = false;
    }
  }
  if(!b1EndP1 && !b2EndP1){
    b1.x += 2;
    b1.y += 1 + 10 * Math.sin(curve);
    b2.x -= 2;
    b2.y += 1 + 10 * Math.sin(curve);
    if((b1.x > 512 || b1.y > 256) && (b2.x < -bloc2.width || b2.y > 256)){
      b1.y = 0;
      b1.x = -bloc1.width;
      b2.x = 512;
      b2.y = 0;
      b1EndP1 = true;
      b2EndP1 = true;
      b3EndP1 = false;
      b4EndP1 = false;
    }
  }


  if(!b3EndP1 && !b4EndP1){
    b3.x += 10;
    b4.y -= 5;
    if(b3.x > 530 && b4.y < -30){
      b3.x = -bloc3.width;
      b4.y = 256;
      b3EndP1 = true;
      b4EndP1 = true;
      rightHandPattern = false;
    }
  }
}
