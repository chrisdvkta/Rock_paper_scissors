//RPS game , console play first. Then move to DOM 
//introduce two variables storing string values ie playerSelection and computerSelection
//run prompt to get input for "playerSelection" which shuold be case-insensitive.
//for computerSelection, call function ComputerPlay that randomly returns an option
//create function playRound with two parameters playerSelection and computerSelection 
//inside playRound, create a conditional checking the precedence of each option over the others. 
//console.log playRound.
//return string result (i.e Win, lose or draw) from conditional specifying to the user specifying the precedence process.  
//introduce integer variables "compCount" and "playerCount" with intValue 0. increment by one every time one of the two wins a game. 
//create function "game" that calls "playRound" function for 5 rounds with "compCount" and playerCount being incremented as per the precendence.
//create conditional comparing compCount and playerCount and return game result accordingly. [Console Play complete]
//[Integrating DOM] 


let playerSelection;
let computerSelection;
let compCount = 0 ; let playerCount =0;
game();

function computerPlay () {
    let optSelect = Math.floor(Math.random()*3);
    console.log(optSelect);
    let result;

    if (optSelect ==1){
        result = "rock";
    }else if (optSelect==2){
        result = "paper"
    }else {result = "scissors"}
    console.log(result);
    return result;    
}

function playRound(playerSelection,computerSelection){
        if (playerSelection===computerSelection){
            console.log ("It's a draw!");
        }else if ((playerSelection === "rock" && computerSelection === "scissors" )||( playerSelection === "scissors" && computerSelection === "paper") ||(playerSelection === "paper" && computerSelection === "rock")){
            console.log("W!");
            playerCount +=1;
        }else {
            console.log("L");
            compCount += 1;
        }
}

function final_verdict(){
    let verdict;

    if (compCount>playerCount){
        verdict ="You lost the game!";
    }else if (playerCount>compCount){
        verdict= "You win the game!";
    }else {
        verdict= "DRAW";
    }
    return verdict;  
}

function game () {
    for (let i=0 ;i<=5;i++){
        playerSelection = prompt ("Enter an option").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log(playerCount,compCount);
    }
    console.log(final_verdict());
}



