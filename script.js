// global variable
let humanScore = 0;
let computerScore = 0;

// getting computer choice randomly
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    let choice;

    if(num === 1) 
        choice = "rock";
    else if (num === 2)
        choice = "paper";
    else
        choice = "scissor";
    return choice; 
}

// inputting choice from user
function getHumanChoice() {
    let choice = prompt("Input your choice! (rock, paper, or scissor)")
    choice = choice.toLowerCase()
    return choice;
}

// round algorithm
function playRound(humanSelection, computerSelection) {
    console.log(`Computer chooses ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log(`Draw! Both of you chooses ${humanSelection}.`);
        humanScore++;
        computerScore++;
    }
    else if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            console.log(`You lose! paper beats rock.`);
            computerScore++;
        } 
        else {
            console.log(`You win! rock beats scissor.`);
            computerScore++;
        }
    }
    else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(`You win! paper beats rock.`);
            computerScore++;
        } 
        else {
            console.log(`You lose! scissor beats paper.`);
            computerScore++;
        }
    }
    else if (humanSelection === "scissor") {
        if (computerSelection === "paper") {
            console.log(`You win! scissor beats paper.`);
            computerScore++;
        } 
        else {
            console.log(`You lose! rock beats scissor.`);
            computerScore++;
        }
    }

}

// game algorithm
function playGame() {
    console.log("Welcome to Rock-Paper-Scissor Game!");
    console.log("We're going to play total of 5 rounds.");

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection);
    }

    console.log("The Final Score is:");
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${humanScore}`);

    humanScore = 0;
    computerScore = 0;
}

// play the game
playGame()

