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

    let roundWinner;

    //Ensures input is not case-sensitive
    playerSelection = playerSelection.toLowerCase();

    //Determine if user wins or loses or has a tie
   if(playerSelection === "rock" && computerSelection === "paper")
   {
        result = false;
        roundWinner = "You Lose! Paper beats Rock";
   }
            
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        result = false;
        roundWinner = "You Lose! Scissors beats Paper";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        result = false;
        roundWinner = "You Lose! Rock beats Scissors";
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        result = true;
        roundWinner = "You Win! Paper beats Rock";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        result = true;
        roundWinner = "You Win! Scissors beats Paper";
    }
           
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        result = true;
        roundWinner = "You Win! Rock beats Scissors";
    }
    else
    {
        return result;
    }
        console.log(roundWinner); 
        return result; 
    
}
function game()
{   
    //Variables to keep track of score
    let playerScore = 0;

    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        userResponse = prompt("Please input your choice of rock, paper, or scissors.");

        let roundResult = playRound(userResponse, getComputerChoice());

        //Account for a tie occuring
        if(roundResult === undefined)
        {
            i--;
            console.log("This round doesn't count. It's a tie!");
        }
        else if(roundResult === true)
        {
            playerScore += 1;
        }
        else
        {
            computerScore += 1;
        }
    }
    //compares scores and determines winner
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
