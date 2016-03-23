


//Animations
// Starting the initial animation

window.addEventListener("load", normalAnimation);

var queue = [];

var normalAnimation = function() {
    var pic1 = document.getElementById('pic1');
    var feedBack = document.getElementById("feedBack");
    
    setInterval(function (){
        if(queue.length <1) {
            this.queue = ['images/01.png', 'images/02.png', 'images/01.png', 'images/02.png', 'images/03.png', 'images/01.png', 'images/02.png', 'images/01.png', 'images/04.png'];
        }
        pic1.src=queue.shift();
        }, 1000);
    
};

requestAnimationFrame(normalAnimation);

//Functions
// Resetting the answer
function reset () {
    document.getElementById("answer").value = " ";
}

// Making the question

document.getElementById("button1").addEventListener("click", question);

    var plusMinus = document.getElementById("plusMinus");
    var counter = 0;

function question(){
    var startButton = document.getElementById("button1");
    var number1 = document.getElementById("num1");
    var number2 = document.getElementById("num2");
    var decider = Math.random();
    var answer = document.getElementById("answer");
    counter ++;
    
     if(decider<0.5){
      plusMinus.textContent = "+"  
    }
    else{plusMinus.textContent = "-"};
    
    startButton.textContent = "Round" + " " + counter;
    console.log(startButton.textContent);
    number1.textContent = Math.floor(Math.random()*11);
    number2.textContent = Math.floor(Math.random()*11);
    equals.textContent = "=";
    
    //Text styling start
    startButton.style.font = "40px Mouse Memoirs";
    startButton.style.textAlign = "center";
    startButton.style.top = "259px";
    number1.style.font = "40px Mouse Memoirs";
    number1.style.textAlign = "center";
    plusMinus.style.font = "40px Mouse Memoirs";
    plusMinus.style.textAlign = "center";
    equals.style.font = "40px Mouse Memoirs";
    equals.style.textAlign = "center";
    number2.style.font = "43px Mouse Memoirs";
    number2.style.textAlign = "center";
    //Text styling finish
    
    //Ensures that in a minus question, the first number is always bigger than a second number to ensure the answer is not a negative number
    if(plusMinus.textContent == "-" && parseInt(number2.textContent) > parseInt(number1.textContent)) {
        console.log('swapped');
        var a = number2.textContent;
        number2.textContent = number1.textContent;
        number1.textContent = a;
    };
    
    if(startButton.textContent == "Round" + " " + 11){
        startButton.textContent = "Start Again";
        counter = 0;
        number1.textContent = " ";
        plusMinus.textContent = " ";
        number2.textContent = " ";
    }
    risingSun();
    reset();

};

var risingSun = function(){
    var currentRound = document.getElementById("button1").textContent;
    var theSun = document.getElementById("theSun");
    switch(currentRound){
        case "Round 2":
            theSun.style.animation = "roundTwo 5s 1 forwards";
            break;
        case "Round 5":
            theSun.style.animation = "roundFive 5s 1 forwards";
            break;
        case "Round 8":
            theSun.style.animation = "roundEight 5s 1 forwards";
            break;
        case "Round 10":
            theSun.style.animation = "roundTen 5s 1 forwards";
            break;
        case "Start Again":
            theSun.style.animation = "reset 5s 1 forwards";
            break;
    }
};

// Answering the question

document.getElementById("button2").addEventListener("click", answer);

var totalScore = 0;

function answer(){
    var num1 = parseInt(document.getElementById("num1").textContent, 10);
    var num2 = parseInt(document.getElementById("num2").textContent, 10);
    var answer = parseInt(document.getElementById("answer").value, 10);
    var feedBack = document.getElementById("feedBack");
    var scoreReport = document.getElementById("score");
    
    feedBack.style.font = "40px Mouse Memoirs";
    feedBack.style.textAlign = "center";
    scoreReport.style.font = "40px Mouse Memoirs";
    scoreReport.style.textAlign = "center";
    if (plusMinus.textContent == "+"){
        if(answer == num1 + num2) {
            feedBack.textContent = "Well Done!";
                if(feedBack.textContent== "Well Done!"){
                    setTimeout(function () {feedBack.textContent = " ";
                    }, 1000);}
                    totalScore = totalScore + 10; 
                    queue = ['images/catchfish01.png', 'images/catchfish02.png', 'images/catchfish04.png', 'images/catchfish05.png', 'images/catchfish06.png', 'images/catchfish07.png'];

        } else {
            feedBack.textContent = "Try again!";
            if(feedBack.textContent == "Try Again!"){
                setTimeout(function () {feedBack.textContent = " "
                }, 2000);}
              queue = ['images/catchfish01.png', 'images/catchfish02.png', 'images/catchfish02.png', 'images/catchfish03.png', 'images/escapefish03.png', 'images/escapefish04.png', 'images/escapefish05.png', 'images/escapefish06.png', 'images/escapefish07.png', 'images/escapefish08.png'];      
        }
    }
    else {
        if(answer == num1 - num2){
            feedBack.textContent = "Well Done!";
            if(feedBack.textContent== "Well Done!"){
                setTimeout(function () {feedBack.textContent = " ";
                }, 2000);}
                totalScore = totalScore +10;
                queue = ['images/catchfish01.png', 'images/catchfish02.png', 'images/catchfish04.png', 'images/catchfish05.png', 'images/catchfish06.png', 'images/catchfish07.png'];

        } else {feedBack.textContent = "Try Again!";
            if(feedBack.textContent == "Try Again!"){
                setTimeout(function () {feedBack.textContent = " "
                }, 2000);}
            queue = ['images/catchfish01.png', 'images/catchfish02.png', 'images/catchfish02.png', 'images/catchfish03.png', 'images/escapefish03.png', 'images/escapefish04.png', 'images/escapefish05.png', 'images/escapefish06.png', 'images/escapefish07.png', 'images/escapefish08.png'];
        }
    }
    scoreReport.textContent = "Score:" + totalScore;
};

window.addEventListener("load", animations);

function animations () {
    
    var wave1 = document.getElementById("wave1");
    var wave2 = document.getElementById("wave2");

    var passingCloud1 = document.getElementById("passingCloud1");
    var passingCloud2 = document.getElementById("passingCloud2");
    var passingCloud3 = document.getElementById("passingCloud3");
    var passingCloud4 = document.getElementById("passingCloud4");
    var passingCloud5 = document.getElementById("passingCloud5");
  
    var bird1 = document.getElementById("seagull1");
    var bird2 = document.getElementById("seagull2");
    var bird3 = document.getElementById("seagull3");

    var superHero = document.getElementById("superHero");
    
    var fish1  = document.getElementById("fish1");
    var fish2  = document.getElementById("fish2");
    var fish3  = document.getElementById("fish3");
    var fish4  = document.getElementById("fish4");
    var fish5  = document.getElementById("fish5");
    var fish6  = document.getElementById("fish6");
    var fish7  = document.getElementById("fish7");
    var fish8 = document.getElementById("fish8");
    var fish9  = document.getElementById("fish9");
    var fish10 = document.getElementById("fish10");
    
    wave1.style.animation = "wavesback 5s infinite"; 
    wave2.style.animation = "wavesfront 7s infinite";
    passingCloud1.style.animation = "passingBy 95s infinite linear";
    passingCloud2.style.animation = "passingBy 95s 5s infinite linear";
    passingCloud3.style.animation = "passingBy 95s 10s infinite linear";
    passingCloud4.style.animation = "passingBy 95s 20s infinite linear";
    passingCloud5.style.animation = "passingBy 95s 25s infinite linear";
    passingCloud1.style.top = Math.random()*200 + 50 + 'px';
    passingCloud2.style.top = Math.random()*200 + 50 + 'px';
    passingCloud3.style.top = Math.random()*200 + 50 + 'px';
    passingCloud4.style.top = Math.random()*200 + 50 + 'px';
    passingCloud3.style.top = Math.random()*200 + 50 + 'px';
            
    bird1.style.animation = "passingBy 55s 10s infinite linear";
    bird2.style.animation = "passingBy 75s 30s infinite linear";
    bird3.style.animation = "passingBy 35s 37s infinite linear";
    bird1.style.top = Math.random()*100 + 250 + 'px';
    bird2.style.top = Math.random()*100 + 300 + 'px';
    bird3.style.top = Math.random()*100 + 320 + 'px';
    
    fish1.style.animation = "passingBy 70s infinite ease";
    fish2.style.animation = "passingBy 70s 20s infinite ease";
    fish3.style.animation = "passingBy 70s 21s infinite ease";
    fish4.style.animation = "passingBy 70s 22s infinite ease";
    fish5.style.animation = "passingBy 50s 40s infinite ease";
    fish6.style.animation = "passingBy 70s infinite ease reverse";
    fish7.style.animation = "passingBy 70s 20s infinite  ease reverse";
    fish8.style.animation = "passingBy 70s 20s infinite ease reverse";
    fish9.style.animation = "passingBy 70s 22s infinite  ease backward";
    fish10.style.animation = "passingBy 50s 40s infinite  ease reverse";
    
    reset();
}