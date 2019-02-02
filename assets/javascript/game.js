//score player is attempting to get
let winningScore=0;
//counters for how many wins and losses the player has gotten
let numWins=0;
let numLosses=0;
//the score the player currently has
let currentScore=0;
//variables of each candy
let valBlueCandy;
let valGreenSucker;
let valHeartSucker;
let valPurpleCandy;
//array to hold those values
let valAllCandy=[];
let targetLength=4;


window.onload = function() {
    startGame();
    // randomizeCandyVals(valAllCandy);
    $("#blue-candy").on("click", addBlueScore);
    $("#green-sucker").on("click", addGreenScore);
    $("#heart-sucker").on("click", addHeartScore);
    $("#purple-candy").on("click", addPurpleScore);
    $("#reset-stats").on("click", resetStats)
}

function randomizeCandyVals(){
    valAllCandy[0]=(Math.floor(Math.random() * 12) + 1);
    
    while(valAllCandy.length<targetLength){
        
        for (let i=valAllCandy.length;i<targetLength;i++){
            let newVal=(Math.floor(Math.random() * 12) + 1);
            if(newVal!==valAllCandy[i-1])
                valAllCandy.push(newVal);
        }
    }
    console.log(valAllCandy);
    valBlueCandy=valAllCandy[0];
    valGreenSucker=valAllCandy[1];
    valHeartSucker=valAllCandy[2];
    valPurpleCandy=valAllCandy[3];
}

function startGame(){
    randomizeCandyVals();
    winningScore= Math.floor(Math.random() * 101) + 20;
    console.log(winningScore);
    $("#goal-score").text(winningScore);
    currentScore=0;
    $("#current-score").text(currentScore);
    $("#losses").text(numLosses);
    $("#wins").text(numWins);
}

function resetStats(){
    numWins=0;
    
    numLosses=0;
    
    startGame();
}

function checkScores(){
    if(winningScore==currentScore){
        numWins++;
        console.log(numWins);
        $("#wins").text(numWins);
        alert("You Won!");
        startGame();
        
    }
    if(currentScore>winningScore){
        numLosses++;
        console.log(numLosses);
        $("#losses").text(numLosses);
        alert("You Lost!")
        startGame();
    }
}

function addBlueScore(){
    console.log("clicked blue: ", valBlueCandy);
    currentScore+=valBlueCandy;
    $("#current-score").text(currentScore);
    checkScores();
}

function addGreenScore(){
    console.log("clicked green ", valGreenSucker);
    currentScore+=valGreenSucker;
    $("#current-score").text(currentScore);
    checkScores();
}

function addHeartScore(){   
    console.log("clicked heart ", valHeartSucker);
    currentScore+=valHeartSucker;
    $("#current-score").text(currentScore);
    checkScores();
}

function addPurpleScore(){
    console.log("clicked purple ", valPurpleCandy);
    currentScore+=valPurpleCandy;
    $("#current-score").text(currentScore);
    checkScores();
}
