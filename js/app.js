new Vue({
    el:'#vue-app',
    data:{
        health: 100,
        ended: false,
        dmg: 0,
        count: 0,
        time: 0,
        interval: null,
        start: false,
        score:null,
        score_name:"",
        highscore:[]
    },
    mixins: [Vue2Filters.mixin],
    methods:{
        pushHighscore: function(a,b,c){
           return {"name":a,"time":b/10,"punches":c}
        },
        submitScore: function(){
            this.score = this.pushHighscore(this.score_name,this.time,this.count);
            this.highscore.push(this.score);  
            this.restart();
            this.score_name = "";
        },
        punch: function(){
            if(this.start == false){
                this.toggleTimer();
                this.start = true;
            }
            this.dmg = Math.floor(Math.random() * 11);
            this.health -= this.dmg;
            this.count++;
            if(this.health <= 0){
                this.ended = true;
                this.start = true;
                clearInterval(this.interval);
            }
        },
        restart: function(){
            this.dmg = 0;
            this.health = 100;
            this.count = 0;
            this.ended = false;
            this.time = 0;
            this.start = false;
        },
        toggleTimer: function() {  
              this.interval = setInterval(this.incrementTime, 100);
          },
        incrementTime: function() {
            this.time = parseInt(this.time) + 1;
          },
    }
});