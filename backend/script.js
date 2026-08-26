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
for(let i=0; i<5; i++){
    console.log(getComputerChoice());
}
let i=0;
while(i<10){
    const playerChoice=prompt('Enter your choice from :\n rock, paper, sicssors');
    console.log(playerChoice);
    const computerChoice=getComputerChoice();
    if(playerChoice=='rock'){
        if(computerChoice=='scissor'){
            console.log('You win');
        }else if(computerChoice=='paper'){
            console.log('You lose try again');
        }else{
            console.log('it\'s a tie try again');
        }
    }else if(playerChoice=='paper'){
        if(computerChoice=='rock'){
            console.log('You win');
        }else if(computerChoice=='scissor'){
            console.log('You lose try again');
        }else{
            console.log('it\'s a tie try again');
        }
    }else{
        if(computerChoice=='paper'){
            console.log('You win');
        }else if(computerChoice=='rock'){
            console.log('You lose try again');
        }else{
            console.log('it\'s a tie try again');
        }
    }
    i++;
}