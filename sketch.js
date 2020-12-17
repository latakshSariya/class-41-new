var database;
var GameState = 0;
var PlayerCount;
var Form1;
var players;
var PlayersInfo;
var game;
var distance=0;

var car1 , car2 , car3 , car4;
var car;
var track , car1_img , car2_img , car3_img , car4_img , ground;

function preload(){
    track = loadImage("images/track.jpg");
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
  }

function setup(){
    //created all the objects
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new gameObject();
    game.getState();
    game.start();
  
}

function draw(){
    if(PlayerCount === 4){
        game.update(1);
    }
    if(GameState === 1){
        clear();
        game.play();
    }
    if(GameState === 2){
        game.update(2);
        game.end();

    }
}