console.log('working...');
function getComputerChoice(){
    let number=Math.random();
    number=number*100;
    if(number<33){
        return 'rock';
    }else if(number<66){
        return 'paper';
    }else{
        return 'scissor';
    }
}

let playerChoice;
function choseRock(){
    playerChoice='rock';
    document.getElementById("playerMove").textContent="You choose rock";
    play();
}
function chosePaper(){
    playerChoice='paper';
    document.getElementById("playerMove").textContent="You choose paper";
    play();
}
function choseScissor(){
    playerChoice='scissor';
    document.getElementById("playerMove").textContent="You choose scissor";
    play();
}
const rockButton=document.getElementById("rock");
const paperButton=document.getElementById("paper");
const scissorButton=document.getElementById("scissor");
rockButton.addEventListener("click",choseRock);
paperButton.addEventListener("click",chosePaper);
scissorButton.addEventListener("click",choseScissor);

function play(){
    const computerChoice=getComputerChoice();
    if(playerChoice=='rock'){
        if(computerChoice=='scissor'){
            document.getElementById("result").textContent="you win";
        }   else if(computerChoice=='paper'){
            document.getElementById("result").textContent="you lose";
        }else{
            document.getElementById("result").textContent="it's a tie";
        }
    }else if(playerChoice=='paper'){
        if(computerChoice=='rock'){
            document.getElementById("result").textContent="you win";
        }else if(computerChoice=='scissor'){
            document.getElementById("result").textContent="you lose";
        }else{
            document.getElementById("result").textContent="it's a tie";
        }
    }else if(playerChoice=='scissor'){
        if(computerChoice=='paper'){
            document.getElementById("result").textContent="you win";
        }else if(computerChoice=='rock'){
            document.getElementById("result").textContent="you lose";
        }else{
            document.getElementById("result").textContent="it's a tie";
        }
    }
}
