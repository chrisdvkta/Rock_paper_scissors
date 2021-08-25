// each 3 btns event listener to game 
//comp play - returns any one.
// function playround with player Selection and comp value
    // scorecard 
// verdict function
    //once scores reach 5; reset function
// reset btn event listener; if so clear scores and go to game
//
//
//
const res = document.querySelector('roundResults');
const scorecard= document.querySelectorAll('.scores');
const btn = document.querySelectorAll('btns');
const comp= document.querySelector('#compScore');
const player= document.querySelector('#playerScore');
const reset = document.querySelector('#reset');



reset.addEventListener('click',()=>{
    window.location.reload();
})


let compScore=0;
let playerScore=0;




function game(){
    
        
        function computerPlay(){
            let opt= ['Rock','Paper','Scissors'];
            return opt[Math.floor(Math.random()*3)];
            
        }
        console.log(computerPlay()); //check 1 

        function playerRound(playerSelection,computerSelection){
            if (playerSelection===computerSelection){
                ++compScore;
                ++playerScore;
            }else if (((playerSelection=="Rock") && (computerSelection=="Scissors"))||
                      ((playerSelection=="Paper") && (computerSelection=="Rock")) ||
                      ((playerSelection=="Scissors") && (computerSelection=="Paper"))){
                         ++playerScore;
            }else ++compScore;
           
        }
    const playerSelection = 'rock';
    const computerSelection= computerPlay();
   
    playerRound(playerSelection,computerSelection);  



    
        
}

while ((compScore!==5)&&(playerScore!==5)){
    game();
}

console.log(compScore,playerScore);         //check 2
console.log(verdict());


function verdict(){
    if (compScore<playerScore){
        res.textContent = "You win!"
    } else if(playerScore<compScore){
        res.textContent= "You Lose!";
    }else res.textContent= "It's a tie";
}


