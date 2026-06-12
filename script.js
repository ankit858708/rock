let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


let genComputerChoice=()=>{
    let option=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
    //rock,paper,scissors
}


let drawGame=()=>{
    // console.log("game was draw");
    msg.innerHTML="Game was Draw. Play again."
    msg.style.backgroundColor="#081b31";
}


let showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        // console.log("you win!");
        msg.innerHTML=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        // console.log("you lose!");
        msg.innerHTML=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}



let playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer choice-> modular
    let compChoice=genComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin=compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin=compChoice === "scissors" ? false:true;
        }
        else{
            //rock,paper
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})