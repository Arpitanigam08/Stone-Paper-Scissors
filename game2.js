let userCount = 0;
let compCount = 0;
const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#message");
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

//computer choose their choice
const compTurn = () => {
    const options = ["rock", "scissors", "paper"];
    const randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
};

const drawgame = () => {
    msg.innerText = "Game is draw now ! play again..";
    msg.style.backgroundColor = "rgba(224, 217, 29, 0.95)";
    msg.style.color = "black";
};

const playgame = (userChoice) => {
    const compChoice = compTurn();          // generete computer choice
    if (userChoice === compChoice) {
        drawgame();      // draw the game
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// for winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userCount++;
        userScore.innerText = userCount;
        msg.innerText = ` You win ! your ${userChoice} beats  ${compChoice} `;
        msg.style.backgroundColor = "green";
    }
    else {
        compCount++;
        compScore.innerText = compCount;
        msg.innerText = ` You lost! ${compChoice} beats yours ${userChoice} `;
        msg.style.backgroundColor = "red";

    }
};

choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playgame(userChoice);
    });
});
