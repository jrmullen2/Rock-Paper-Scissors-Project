function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 100);
    let randomChoice = "";
    switch(randomChoice)
    {
        case randomNumber >= 0 && randomNumber < 34:
            randomChoice = "rock";
            break;
        
        case randomNumber >= 34 && randomNumber < 67:
            randomChoice = "paper";
            break;
        
        case randomNumber >= 67 && randonmNumber < 101:
            randomChoice = "scissors";
            break;
        
        default: 
            randomChoice = "";
            break; 
    }
    return randomChoice;   
}
function playRound(playerSelection, computerSelection)
{
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection, computerSelection)
    {
        case playerSelection === "rock" && computerSelection === "paper":
            result = "You Lose! Paper beats Rock";
            break;

        case playerSelection === "paper" && computerSelection === "scissors":
            result = "You Lose! Scissors beats Paper";
            break;

        case playerSelection === "scissors" && computerSelection === "rock":
                result = "You Lose! Rock beats Scissors";
                break;

        case playerSelection === "paper" && computerSelection === "rock":
            result = "You Win! Paper beats Rock";
            break;

        case playerSelection === "scissors" && computerSelection === "paper":
            result = "You Win! Scissors beats Paper";
            break;

        case playerSelection === "rock" && computerSelection === "scissors":
            result = "You Win! Rock beats Scissors";
            break;

        default:
            result = "";
            break;
    }
    return result;  
}
function game()
{
    userResponse = prompt("Please input your choice of rock, paper, or scissors.");
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        console.log(playRound(userResponse, getComputerChoice()));
        if(playRound(userResponse, getComputerChoice()).slice(4, 6) === "Win")
        {
            playerScore += 1;
        }
        if(playRound(userResponse, getComputerChoice()).slice(4, 7) === "Lose")
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
