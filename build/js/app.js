

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAe-W3P9MrEMX4GGoQ8tOFnOVCAL4n6GuU",
    authDomain: "boxgame-d631d.firebaseapp.com",
    databaseURL: "https://boxgame-d631d.firebaseio.com",
    projectId: "boxgame-d631d",
    storageBucket: "boxgame-d631d.appspot.com",
    messagingSenderId: "63667225593"
  };
  firebase.initializeApp(config);
  var db = firebase.firestore();
new Vue({
    el:'#vue-app',
    data:{
        health: 100,
        ended: false,
        dmg: 0,
        count: 0,
        timeOfPunches: 0,
        interval: null,
        start: false,
        score:null,
        score_name:"",
        id: "",
        highscore:[]        
    },
    mixins: [Vue2Filters.mixin],
    methods:{
        submitScore: function(){
          //Id generator
            this.id = Math.random().toString(36).substr(2, 9);
          if ((this.timeOfPunches / 10) > 3) {
            //Pushing data into Firestore
            db.collection("highscore").add({
              "_id":this.id,
              "name":this.score_name,
              "time":this.timeOfPunches / 10,
              "punches":this.count
          });
          }
          

          //Reseting all values to default
            this.restart();
            
        },
        punch: function(){
            if(this.start == false){
                this.toggleTimer();
                this.start = true;
            }
            this.dmg = Math.floor(Math.random() * 6);
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
            this.timeOfPunches = 0;
            this.start = false;
            this.score_name = "";
        },
        toggleTimer: function() {  
              this.interval = setInterval(this.incrementTime, 100);
          },
        incrementTime: function() {
            this.timeOfPunches = parseInt(this.timeOfPunches) + 1;
          },
        getData: function(){
            let vm = this;
            db.collection("highscore").onSnapshot((querySnapshot)=>{
               vm.highscore = [];
                querySnapshot.forEach((doc)=>{
                  vm.highscore.push(doc.data());
                });
              })
              
        }
    },
    created: function(){
        this.getData()
    }
});