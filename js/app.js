let typeApp = new Vue({
    el: "#typeApp",
    data: {
        currentView: "intro",
        level: [],
        typedNumber: null,
        numbers: [
            "4321012345678901", "3756 0081 6558 9677", "89716541", "4356 1297"
        ],
        filterNumbers: [
            "4321012345678901", "3756008165589677", "89716541", "43561297"
        ],
        startTime: null,
        endTime: null,
        timeSec: null,
        times: [],
        incorrect: 0,
        rangeValue: null
    },
    methods: {
        startGame: function(){
            this.incorrect = 0;
            this.level = 0;
            this.typedNumber = null;
            this.times = [];
            this.currentView = "typeNumbers";
        },
        startInputTime: function(){
            if(this.typedNumber === null){
                this.startTime = new Date();
            }
        },
        endInputTime: function(){
            this.endTime = new Date();
        },
        submitNumber: function(){
            this.level += 1;
            let timeDiff = this.endTime - this.startTime;
            timeDiff /= 1000;

            this.timeSec = timeDiff;
            this.times.push(this.timeSec);

            if(this.typedNumber !== this.filterNumbers[this.level-1]){
                this.incorrect += 1; 
            }

            if(this.level > 3){
                this.currentView = "resultView";
                this.rangeValue = this.incorrect;
            }
            this.typedNumber = null;  
        }
    }
});

