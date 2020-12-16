// 4,5,3,13,12,9
var boy2,boy2Image;
var boy, boyImage;
var background,bgg;
var bubble1,bubble1Image;
var bubble2,bubble2Image;
var bubble3,bubble3Image;
var bubble4,bubble4Image;
var bubble5,bubble5Image;
var bubble6,bubble6Image;
var bubble7,bubble7Image;
var bubble8,bubble8Image;
var bubble9,bubble9Image;
var bubble10,bubble10Image;
var bubble11,bubble11Image;
var bubble12,bubble12Image;
var bubble13,bubble13Image;
var bubble14,bubble14Image;
var al1,al1Image;
var al2,al2Image;
var al3,al3Image;
var al4,al4Image;
var redbg,redbgImage;



function preload(){
//It Is Use to loadImages For Characters.
background1=loadImage("bg.jpg");
boy2Image=loadImage("Scienstist.png");
boyImage=loadImage("boy.png");
bubble1Image=loadImage("bubble.png");
bubble2Image=loadImage("bubble2.png");
bubble3Image=loadImage("bubble3.png");
bubble4Image=loadImage("bubble4.png");
bubble5Image=loadImage("bubble5.png");
bubble6Image=loadImage("bubble6.png");
bubble7Image=loadImage("bubble7.png");
bubble8Image=loadImage("bubble8.png");
bubble9Image=loadImage("box1.png");
bubble10Image=loadImage("box2.png");
bubble11Image=loadImage("box3.png");
bubble12Image=loadImage("box4.png");
bubble13Image=loadImage("box5.png")
al1Image=loadImage("mons1.png");
al2Image=loadImage("mons2.png");
al3Image=loadImage("mons.png");
al4Image=loadImage("mons3.png");
redbgImage=loadImage("redbg.jpg")

}

function setup() {
  createCanvas(900,900);

  //Creates the Background
  bgg=createSprite(450,450,900,900);
  bgg.addImage("back",background1)
  bgg.scale=5.8

  //Creates the boy player.
  boy=createSprite(150, 500, 50, 50);
  //boy.scale=0.5
  boy.addImage("boy1",boyImage)
 
  //Creates the engineer
  boy2=createSprite(650,500,20,20)
  boy2.addImage("science",boy2Image)

  //Creates the Speech Bubble.
 bubble1=createSprite(500,400,4,0)
bubble1.addImage("bubble",bubble1Image)
bubble1.scale=1.2;

bubble2=createSprite(300,400,4,0)
bubble2.addImage("bubble2",bubble2Image)
bubble2.scale=1.2
bubble2.visible=false;

bubble3=createSprite(500,400,040,40);
bubble3.addImage("bubble3",bubble3Image)
bubble3.visible=false;
bubble3.scale=1.2;

bubble4=createSprite(300,400,40,40)
bubble4.addImage("bubble4",bubble4Image)
bubble4.visible=false
bubble4.scale=1.2;

bubble5=createSprite(500,400,6,6)
bubble5.addImage("bubble5",bubble5Image)
bubble5.visible=false;
bubble5.scale=1.2;


bubble6=createSprite(300,400,6,6)
bubble6.addImage("bubble6",bubble6Image)
bubble6.visible=false;
bubble6.scale=1.2;

bubble7=createSprite(500,400,6,6)
bubble7.addImage("bubble7",bubble7Image)
bubble7.visible=false;
bubble7.scale=1.2;

bubble8=createSprite(500,400,6,6)
bubble8.addImage("bubble8",bubble8Image)
bubble8.visible=false;
bubble8.scale=1.2;

bubble9=createSprite(400,100,6,6)
bubble9.addImage("bubble9",bubble9Image)
bubble9.visible=false;
bubble9.scale=1.2;


bubble10=createSprite(600,700,6,6)
bubble10.addImage("bubble10",bubble10Image)
bubble10.visible=false;
bubble10.scale=0.8;


bubble11=createSprite(200,700,6,6)
bubble11.addImage("bubble11",bubble11Image)
bubble11.visible=false;
bubble11.scale=0.8;


bubble12=createSprite(600,200,6,6)
bubble12.addImage("bubble12",bubble12Image)
bubble12.visible=false;
bubble12.scale=0.8;


bubble13=createSprite(200,200,6,6)
bubble13.addImage("bubble13",bubble13Image)
bubble13.visible=false;
bubble13.scale=0.8;
}

function draw() {
  boy.velocityX=0;
  boy.velocityY=0;
  //Use to Destroy The Speech Bubble
if(frameCount===60){
  bubble1.destroy();
}
boy.depth=boy.depth+1;
boy2.depth=boy2.depth+1;



if(frameCount===65){
  bubble2.visible=true
}

if(frameCount===130){
  bubble2.destroy();
}

if(frameCount==135){
  bubble3.visible=true;
}

if(frameCount===190){
  bubble3.destroy();
}

if (frameCount===200){
  bubble4.visible=true;
}

if(frameCount===260){
  bubble4.destroy();
}

if(frameCount===265){
  bubble5.visible=true;
  }

  if(frameCount===320){
    bubble5.destroy();
  }

  if(frameCount===325){
bubble6.visible=true;
  }

  if(frameCount===390){
    bubble6.destroy();
  }

  if(frameCount===395){
    bubble7.visible=true;
}

if(frameCount===480){
  bubble7.destroy();
}

if(frameCount===490){
bubble8.visible=true;
}

if(frameCount===520){
  bubble8.destroy();
}

if(frameCount===530){
  boy2.velocityX=4
}

if(frameCount===535){
  bubble9.visible=true
}

if(frameCount===540){
  bubble10.visible=true
}

if(frameCount===541){
  bubble11.visible=true
}

if(frameCount===542){
  bubble12.visible=true
}

if(frameCount===543){
  bubble13.visible=true
}

if(boy.x>900){
  bubble13.destroy() 
}

if(boy.x>900){
  bubble12.destroy() 
}

if(boy.x>900){
  bubble11.destroy() 
}

if(boy.x>900){
  bubble10.destroy() 
}

if(boy.x>900){
  bubble9.destroy() 
}

if(boy.x>900){
  bgg.destroy();
}

if(boy.x>900){
redbg=createSprite(450,450,900,900)
redbg.addImage("redbg",redbgImage);
redbg.scale=4.0

}
if(boy.x>900)
{
  boy.x=150
  boy.y=500

  boy2.velocityX=0;
  boy2.x=650;
  boy2.y=500

}



background(0);  
  if (keyDown("w")) {
    boy.velocityY=-10;
    boy.velocityX=0;
  }
 if (keyDown("s")) {
  boy.velocityY=10;
  boy.velocityX=0;
 }
 
 if (keyDown("a")) {
   boy.velocityX=-10;
  boy.velocityY=0;
 }
 if (keyDown("d")){
   boy.velocityX=10;
   boy.velocityY=0;
 }
  drawSprites();
}


