new Vue({
    el:'#vue-app',
    data:{
        health: 100,
        ended: false,
        dmg: 0,
        count: 0
    },
    methods:{
        punch: function(){
            this.dmg = Math.floor(Math.random() * 11);
            this.health -= this.dmg;
            this.count++;
            if(this.health <= 0){
                this.ended = true;
            }
        },
        restart: function(){
            this.dmg = 0;
            this.health = 100;
            this.count = 0;
            this.ended = false;
        }
    },
    computed:{

    }
});