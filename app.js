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
const res = document.querySelector('#roundResults');
const btn = document.querySelectorAll('button');
const comp= document.querySelector('#computerScore');
const ply= document.querySelector('#playerScore');
const reset = document.querySelector('#reset');


reset.addEventListener('click',()=>{
    window.location.reload();
});



btn.forEach(button =>{
     button.addEventListener('click',getValue)

});

let compScore=0;
let playerScore=0;
let playerChoice;

    function computerPlay(){
            let opt= ['Rock','Paper','Scissors'];
            return opt[Math.floor(Math.random()*3)];      
        }
        console.log(computerPlay()); //check 1 

        function playerRound(playerSelection,computerSelection){
            if (playerSelection===computerSelection){
                comp.textContent= ++compScore;
                ply.textContent=  ++playerScore;
            }else if (((playerSelection=="Rock") && (computerSelection=="Scissors"))||
                      ((playerSelection=="Paper") && (computerSelection=="Rock")) ||
                      ((playerSelection=="Scissors") && (computerSelection=="Paper"))){
                        ply.textContent= ++playerScore;
            }else {comp.textContent= ++compScore};
            console.log(compScore,playerScore);
            
            if((compScore==5)||(playerScore==5)){
                verdict();
            }
        }
        
    

// console.log(compScore,playerScore);         //check 2
function verdict(){
    if (compScore<playerScore){
   res.textContent = "You win!";
    } else if(playerScore<compScore){
     res.textContent= "You Lose!";
    }else res.textContent= "It's a tie";
    console.log('hello');

    btn.forEach(button=>{
        button.removeEventListener('click',getValue);
    })
    
}

function getValue(e){
    let playerSelection = e.target.id;
    playerChoice= e.target.textContent;
    playerRound(playerSelection,computerPlay());
}




