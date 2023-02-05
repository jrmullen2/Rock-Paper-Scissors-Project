function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 100);
    let randomChoice = "";
    switch(randomChoice)
    {
        case randomNumber >= 0 && randomNumber < 34:
            randomChoice = "Rock";
            break;
        
        case randomNumber >= 34 && randomNumber < 67:
            randomChoice = "Paper";
            break;
        
        case randomNumber >= 67 && randonmNumber < 101:
            randomChoice = "Scissors";
            break;
        
        default: 
            randomChoice = "";
            break; 
    }
    return randomChoice;   
}
