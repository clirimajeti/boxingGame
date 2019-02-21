new Vue({
    el:'#vue-app',
    data:{
        health: 100,
        ended: false,
        dmg: 0,
        count: 0,
        time: 0,
        interval: null,
        start: false
    },
    methods:{
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