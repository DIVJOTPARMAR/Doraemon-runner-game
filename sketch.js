var doraemon,doraemon_running,ground,groundImg
var stone ,stoneImg, doracake , dumpling,doracakeImg,dumplingImg,invisibleGround
var PLAY=1
var END=0;
var gameState = PLAY
 var stone
 var score=0
 var restartImg,gameOverImg,gameOver,restart,stillDoraemon
 var dumplingG,doracakeG,stoneG,checkpoint



function preload(){
    doraemon_running = loadAnimation("doraemon 1.png","doraemon.png 2.png","doraemon.png 3.png","doraemon.png 4.png","doraemon.png5.png","doraemon.png 6.png")
    groundImg=loadImage("pngwing.com.png")
    stoneImg=loadImage("pathar.png")
    gameOverImg=loadImage("gameOver.png")
    restartImg=loadImage("restart.png")
    stoneImg=loadImage("pathar.png")
    doracakeImg=loadImage("doracake.png")
    dumplingImg=loadImage("dumplings.png")
    stillDoraemon=loadAnimation("doraemon.png 6.png")
    checkpoint=loadSound("dingsound-586.wav")
    bgm=loadSound("Fluffing-a-Duck.mp3")
   
    

}

function setup() {

    createCanvas(800,800)
    doraemon= createSprite(50,500,20,50)
    doraemon.addAnimation("running",doraemon_running)
    doraemon.addAnimation("collided",stillDoraemon)
    doraemon.scale = 0.5
   
    

    ground = createSprite(800,400,800,30 );
    ground.addImage("ground",groundImg);
    ground.velocityX = -8
    ground .scale = 0.5

    restart=createSprite(400,240)
    restart.addImage(restartImg)

    gameOver=createSprite(400,200)
    gameOver.addImage(gameOverImg)

    gameOver.scale=0.5
    restart.scale=0.5

    gameOver.visible= false
    restart.visible= false

    invisibleGround = createSprite(400,560,800,30)
    invisibleGround.visible= false

    

    score= 0

    stone=createSprite(600,600,20,20)
    stone.addImage(stoneImg)
    stone.scale=0.1


    doracakeG=new Group()
    dumplingG=new Group()
    stoneG=new Group()
   

}

function draw() {
    background(200)
    text("score"+ score,600,50)

   

    

       
        
        if(gameState === PLAY){
            if(ground.x<0){
                ground.x = ground.width/4
    
    
    
            }
           // doraemon.debug=true
            doraemon.setCollider("circle",0,0,80)
            
           
            
    
            ground.depth = doraemon.depth
            doraemon.depth=doraemon.depth+1
    
            if(keyDown("space")) {
                doraemon.velocityY=-20
            
            
              }
              if (doraemon.y<250){
                doraemon.velocityY=+13
    
    
              }
              if (doraemon.isTouching(dumplingG)){
                dumplingG.destroyEach();
                score=score+10}

                if (doraemon.isTouching(doracakeG)){
                    doracakeG.destroyEach();
                    score=score+30
                }
                if (stoneG.isTouching(doraemon)){
                    gameState = END

                }
                
                
                    

                
               

                


            
    

             
             

              
              
              doraemon.collide(invisibleGround);


    
              
              
    
    
    
             
    
            
            spawnDoracake()
            spawnStone()
            spawnDumpling()

        

        }
        else if (gameState === END) {
            gameOver.visible = true;
            
            
            //set velcity of each game object to 0
            ground.velocityX = 0;
            doraemon.velocityY = 0;
            dumplingG.setVelocityXEach(0);
            doracakeG.setVelocityXEach(0);
            stoneG.setVelocityXEach(0)
            doraemon.changeAnimation("collided",stillDoraemon)
            
        }
        




        function spawnDumpling () {
            if(frameCount % 60 === 0){
                dumpling = createSprite(600,520,10,40);
                 dumpling.velocityX = -8
                 dumpling.addImage(dumplingImg)
                 dumpling.scale=0.1
                 dumpling.lifetime=-10
                 dumplingG.add(dumpling)
                 
                
                 
            }
        }
        function spawnDoracake () {
            if(frameCount% 420===0){
                doracake=createSprite(600,540,10,40)
                doracake.scale=0.1
                doracake . velocityX=-8
                doracake.addImage(doracakeImg)
                dumpling.lifetime=-10
                doracakeG.add(doracake)
                

                }

            
                
                    }
        
            function spawnStone () {
                if(frameCount% 360===0){
        
                   
                    stone.scale=0.1
                    stone.addImage(stoneImg)
            
                    stone . velocityX=-8
                    stone.lifetime=-10 
                    stoneG.add (stone)
                   
                 }
                    
                    
                }

                stone=createSprite(600,520,1,1) 
            
                   

                    stone.depth=
                    
            

        
                
                    
            
                 
    

    


       



                 
    drawSprites()
            } 
        


    










       
        
        
    




        