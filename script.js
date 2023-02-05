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