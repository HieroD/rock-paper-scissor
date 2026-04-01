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

// round algorithm
function playRound(humanSelection, computerSelection) {
    const leaderboard = document.getElementById("leaderboard");

    const paraText = document.getElementById("textMatch");

    if (humanSelection === computerSelection) {
        paraText.textContent = `Draw! Both of you chooses ${humanSelection}.`;
        humanScore++;
        computerScore++;
    }
    else if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            paraText.textContent = `You lose! paper beats rock.`;
            computerScore++;
        } 
        else {
            paraText.textContent = `You win! rock beats scissor.`;
            humanScore++;
        }
    }
    else if (humanSelection === "paper") {
        if (computerSelection === "rock") {
            paraText.textContent = `You win! paper beats rock.`;
            humanScore++;
        } 
        else {
            paraText.textContent = `You lose! scissor beats paper.`;
            computerScore++;
        }
    }
    else if (humanSelection === "scissor") {
        if (computerSelection === "paper") {
            paraText.textContent = `You win! scissor beats paper.`;
            humanScore++;
        } 
        else {
            paraText.textContent = `You lose! rock beats scissor.`;
            computerScore++;
        }
    }

    document.getElementById("human").textContent = `Human : ${humanScore}`;
    document.getElementById("computer").textContent = `Computer : ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        endTheGame();
    }
}

// game algorithm
function playGame() {
    const choiceContainer = document.getElementById("choice");
    choiceContainer.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return

        const humanSelection = e.target.id;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)
    })

}

function endTheGame() {
    const result = document.createElement("p");
    document.body.appendChild(result);

    if(humanScore > computerScore) {
        result.textContent = "Player Wins!";
    } 
    else if (computerScore > humanScore) {
        result.textContent = "Computer Wins!";
    }
    else {
        result.textContent = "Draw!";
    }

    humanScore = 0;
    computerScore = 0;
}

// play the game
playGame();

