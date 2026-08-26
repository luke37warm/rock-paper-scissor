console.log('working...');
console.log('This is a 10 round game win 6 or more rounds to win the game\nenter exit to stop the game')
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
let computerScore=0;
let playerScore=0;
let i=1;
while(i<=10){
    console.log(`round ${i}`);
    const playerChoice=prompt('Enter your choice from :\n rock, paper, sicssors');
    console.log(playerChoice);
    if(playerChoice=='exit'){
        break;
    }
    const computerChoice=getComputerChoice();
    if(playerChoice=='rock'){
        if(computerChoice=='scissor'){
            console.log('You won this round');
            playerScore++;
        }else if(computerChoice=='paper'){
            console.log('You lost this round');
            computerScore++;
        }else{
            console.log('it\'s a tie');
        }
    }else if(playerChoice=='paper'){
        if(computerChoice=='rock'){
            console.log('You won this round');
            playerScore++;
        }else if(computerChoice=='scissor'){
            console.log('You lost this round');
            computerScore++;
        }else{
            console.log('it\'s a tie');
        }
    }else if(playerChoice=='scissor'){
        if(computerChoice=='paper'){
            console.log('You won this round');
            playerScore++;
        }else if(computerChoice=='rock'){
            console.log('You lost this round');
            computerScore++;
        }else{
            console.log('it\'s a tie');
        }
    }else{
        console.log('wrong input type one of the following \n rock, paper, scissor');
        console.log('computer is awarded as winner of this round');
        computerScore++;
    }
    i++;
}
console.log(`Your score : ${playerScore}\nComputer score : ${computerScore}`);
if(playerScore>computerScore){
    console.log('You Win');
}else if(playerScore<computerScore){
    console.log('You lose');
}else{
    console.log('it\'s a tie try again');
}