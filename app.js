let userScore = 0;
let compScore = 0;


const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const msgCont = document.querySelector(".msg-cont");
const userScor = document.querySelector("#user-score");
const compScor = document.querySelector("#comp-score");


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(choice, userChoice);
    playgame(userChoice);
  });
});

const playgame = (userChoice) => {
  console.log("User Choice is ", userChoice);
  const compChoice = genCompChoice();
  console.log("Bot Choice is ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Rock" ? true : false;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};


const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScor.innerHTML = userScore;
        console.log("You Win")
        msg.innerHTML = `<b>You Win!</b> Your ${userChoice} beats Bot's ${compChoice}`
        msgCont.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScor.innerHTML = compScore
        console.log("You Loss!")
        msg.innerHTML = `<b>You Lost!</b> Bot's ${compChoice} beats Your ${userChoice}`
        msgCont.style.backgroundColor = "Red";
    }
}

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerHTML = "<b>Game Draw!</b> Play Again...";
  msgCont.style.backgroundColor = "#0D56F5";
};

const genCompChoice = () => {
  const arr = ["Rock", "Paper", "Scisors"];
  const randInd = Math.floor(Math.random() * 3);
  return arr[randInd];
};
