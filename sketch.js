var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
music=loadSound("music.mp3");
}



function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "lightyellow";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(785,580,300,30);
    block3.shapeColor = "lightGreen";

    block4 = createSprite(520,580,200,30);
    block4.shapeColor = "lightBlue";


    ball = createSprite(random(10,750),300, 20,20);
    ball.shapeColor = "orange";
    ball.velocityX=3;
    ball.velocityY=3;
    

}

function draw() {
    background(rgb(169,169,169));

    if(ball.x<0){
    music.stop()
     music.stop()
       ball.velocityX=3
     }else if (ball.x>800){
     music.stop()
     ball.velocityX=-3
     }

     else if(ball.isTouching(block4)){
     music.play()
     ball.shapeColor="lightBlue"
     ball.bounceOff(block4);

     }

     else if(ball.isTouching(block3)){
     music.stop()
     ball.shapeColor="lightGreen"
     ball.bounceOff(block3);
     }

     else if(ball.isTouching(block2)){
     music.stop()
     ball.shapeColor="pink"
     ball.bounceOff(block2);
     }

     else if(ball.isTouching(block1)){
     music.stop()
     ball.shapeColor="lightyellow"
     ball.bounceOff(block1);
    }






    
    
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

       
    }

   

    drawSprites();
}

