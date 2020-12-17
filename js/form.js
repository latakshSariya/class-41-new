class form{
    constructor()
    {
        //creating the form
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h1');
        this.reset = createButton("reset")
    }
    //hide function to hide it the the play state
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

    display(){
        //displaying all the elements
        var title = createElement('h2');
        title.html("Need For Speed");
        title.position(width/2+200,50);
        this.input.position(width/2+200,200);
        this.button.position(width/2+250,300);    
        this.reset.position(width/2+300 , 100)
        //making the reset function to set the player and gamestate to 0
        this.reset.mousePressed(()=>{
            game.update(0);
            players.updateCount(0);
        })
       

        
        //making the button function to start the game
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            players.name = this.input.value(); 
            PlayerCount++;
            players.index = PlayerCount;
            players.update();
            players.updateCount(PlayerCount);
            this.greeting.html("Welcome " + players.name);
            this.greeting.position(400,250); 
        })    
    }    
}

    

