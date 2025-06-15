const arrGame=['rock', 'paper', 'scissors'];
const countOfRounds=5;

let humanScore=0;
let computerScore=0;

playGame();
showWinner(humanScore,computerScore);



function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log('This round is a draw!');
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'
    ||humanChoice == "paper" && computerChoice == "rock"
    ||humanChoice == "scissors" && computerChoice == "paper"){
        console.log('You win this round!');
        humanScore+=1;
    }else{
        console.log('You lose this round!');
        computerScore+=1;
    }
}

function getComputerChoice(){
    return arrGame[Math.floor(Math.random()*(arrGame.length))];
}

function getHumanChoice(){
    return prompt("Choose: rock, scissors or paper","rock").toLowerCase();
}

function playGame(){
    for(let i=0;i<countOfRounds;i++){
        console.log(`Round ${i+1}`);
        const computerSelection=getComputerChoice();
        console.log(`Computer selection: ${computerSelection}`);
        const humanSelection =getHumanChoice();
        console.log(`Human selection ${humanSelection}`);
        playRound(humanSelection,computerSelection);
    }
}

function showWinner(humanScore,computerScore){
    if(humanScore>computerScore){
        console.log("You win this game! Сongratulations");
    }else if(humanScore==computerScore){
        console.log(" A draw in this game. Good result!");
    }else{
        console.log("You lose this game. That's okay, try again!");
    }
}






