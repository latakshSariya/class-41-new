class Player{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;


    }
    //static function to set a permanant listener to the players
    static getPlayerInfo(){
        var getplayerInfos = database.ref('Players');
        getplayerInfos.on("value" , (data)=>{
            PlayersInfo = data.val();
        });

    }
    static updateRank(rank){
        database.ref('/').update({
            rank:rank
        })
    }
    //to get the player count
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value" , function(data){
            PlayerCount = data.val();
        });
    }
    //to update the player count
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }
    rank(){
        database.ref('rank').on("value" , (data)=>{
            this.rank = data.val();
        })
    }
    //to add the name and the distance traveled by the players
    update() {
        var playerSpace = "Players/player" + this.index;
            database.ref(playerSpace).set({
                name:this.name,
                distance:this.distance
        })
    }
}