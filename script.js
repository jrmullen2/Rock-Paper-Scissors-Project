const round = document.querySelector(".round");
const final = document.querySelector(".final");
const buttons = document.querySelectorAll("button");

let playerScore = 0;

let computerScore = 0;

function getComputerChoice()
{
    //Generate a random number
    let randomNumber = Math.floor(Math.random() * 100);

    let randomChoice = "No Choice";
    //Make a choice based on random number
    if(randomNumber >= 0 && randomNumber < 34)
    {
        randomChoice = "rock";
    }
            
    else if(randomNumber >= 34 && randomNumber < 67)
    {
        randomChoice = "paper";
    }
        
    else if(randomNumber >= 67 && randomNumber < 101)
    {
        randomChoice = "scissors";
    }
        
    return(randomChoice);   
}
function playRound(playerSelection, computerSelection)
{
    //Variables that indicate if its a loss or victory
    let result;

    //Determine if user wins or loses or has a tie
   if(playerSelection === "rock" && computerSelection === "paper")
   {
        result = false;
        round.textContent = "You Lose! Paper beats Rock";
   }
            
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        result = false;
        round.textContent = "You Lose! Scissors beats Paper";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        result = false;
        round.textContent = "You Lose! Rock beats Scissors";
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        result = true;
        round.textContent = "You Win! Paper beats Rock";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        result = true;
        round.textContent = "You Win! Scissors beats Paper";
    }
           
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        result = true;
        round.textContent = "You Win! Rock beats Scissors";
    }
    else if(playerSelection === computerSelection)
    {
        result = true;
        round.textContent("Its a tie!");
    }
    if(result === true)
    {
        playerScore += 1;
        final.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore}`;
    }
    else if(result === false)
    {
        computerScore += 1;
        final.textContent = `Your Score: ${playerScore}\nComputer Score: ${computerScore}`;
    }
        return result;
}  
 //compares scores and determines winner
 function determineWinner()
 {
    if(playerScore === 5)
    {
        final.textContent = `You are the winner!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    
    if(computerScore === 5)
    {
        final.textContent = `You are the loser!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playRound(button.classList.value, getComputerChoice())
    determineWinner()
    });
});