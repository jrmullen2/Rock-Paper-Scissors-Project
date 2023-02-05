function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 100);

    let randomChoice = "No Choice";

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
    let result = false;
    playerSelection = playerSelection.toLowerCase();
   if(playerSelection === "rock" && computerSelection === "paper")
   {
        result = false;
        console.log("You Lose! Paper beats Rock");
   }
            
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        result = false;
        console.log("You Lose! Scissors beats Paper");
    }

    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        result = false;
        console.log("You Lose! Rock beats Scissors");
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        result = true;
        console.log("You Win! Paper beats Rock");
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        result = true;
        console.log("You Win! Scissors beats Paper");
    }
           

    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        result = true;
        console.log("You Win! Rock beats Scissors");
    }
        
    return result;  
}
function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        userResponse = prompt("Please input your choice of rock, paper, or scissors.");

        if(playRound(userResponse, getComputerChoice()) === true)
        {
            playerScore += 1;
        }
        else
        {
            computerScore += 1;
        }
    }
    if(playerScore > computerScore)
    {
        console.log(`You are the winner!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
    if(playerScore < computerScore)
    {
        console.log(`You are the loser!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
}
game();
