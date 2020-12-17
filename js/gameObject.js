class gameObject{
    constructor()
    {
        //constructor//
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            GameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
           'gameState': state
        })
    }
 async start(){
    if(GameState === 0){
        players = new Player();
        var playerRef = await database.ref('playerCount').once("value");
        if(playerRef.exists()){
            PlayerCount = playerRef.val();
            players.getCount();
        }
        Form1  = new form();
        Form1.display();

        
    }
    // all the cars of the players
    car1 = createSprite(100,100);
    car1.addImage("car1" , car1_img);
    car2 = createSprite(300,100);
    car2.addImage("car2" , car2_img);
    car3 = createSprite(500,100);
    car3.addImage("car3" , car3_img);
    car4 = createSprite(700,100);
    car4.addImage("car4" , car4_img);
    car = [car1,car2,car3,car4];

}

 play(){
    //to hide the form
    Form1.hide();   
    Player.getPlayerInfo();
    //to set a condition that all players have joined
    if(PlayersInfo !== undefined){
      background("grey");
      image(track, 0,-displayHeight*2,displayWidth, displayHeight*8);
      //index of all the cars of the car array
      var index = 0;
      var x = 170;
      var y = 0;
      console.log(car1.y);

      //setting a for loop for display for the cars
      for(var plr in PlayersInfo){
        index = index + 1;
        x = x + 240;
        y = displayHeight - PlayersInfo[plr].distance+4350;
        
        car[index-1].x = x;
        car[index-1].y = y;
 

        //making our car as red
        if ( index === players.index){
          textSize(20);
          fill("red");
          text("YOU" , car[index-1].x-20 , car[index-1].y-100)
          //setting camera y to every car
          car[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2        
          camera.position.y = car[index-1].y;
        }
  
      }

    }
    //increasing the distance of the players
    if(keyIsDown(UP_ARROW) && players.index !== null){
      players.distance +=50
      players.update();
    }
    if(keyIsDown(DOWN_ARROW) && players.index !== null){
      players.distance -=50
      players.update();
    }
    drawSprites()
    
    if(players.distance < -1650){
      GameState = 2;
      players.rank++;
      Player.updateRank(players.rank);
      console.log("it is checked")
    }
    players.rank();



  }

  end(){
    console.log("THE END !!!");
    console.log(players.rank);
  }

}

  