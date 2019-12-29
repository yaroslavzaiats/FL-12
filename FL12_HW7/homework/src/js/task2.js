let prescribedNum;
let max = 4;
let increasingRange = 4;
let maxAgain = 4;
let min = 0;
let pocketNum;
let firstAttemptPrize = 100;
let secondAttemptPrize = 50;
let thirdAttemptPrize = 25;
let firstAttempt = 1;
let secondAttempt = 2;
let thirdAttempt = 3;
let maxGames = 100;
let i;
let j;
let win = 0;
let playAgain;
let continuingGame;
let continuing = true;
let currentPrize;
let attemptCount = 4;
let attempts = 3;
let play = confirm('Do you want to play a game?');
if(play === false){
    alert('You did not become a billionaire, but can.');
}else{
    for(i = 1; i <= maxGames; i++){
        max += increasingRange;
        console.log(max);
        prescribedNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(prescribedNum);
        for(j = 1; j <= attempts; j++){
            if(j === firstAttempt){
                currentPrize = firstAttemptPrize*i;
            } else if(j === secondAttempt){
                currentPrize = secondAttemptPrize*i;
            }else if(j === thirdAttempt){
                currentPrize = thirdAttemptPrize*i;
            }
            pocketNum = Math.floor(prompt('Choose a roulette pocket number from 0 to ' + max + '\nAttempts left: ' 
            + (attemptCount-j) + '\nTotal prize: ' + win + '$\nPossible prize of current attempt: '
             + currentPrize + '$'));
            if(pocketNum === prescribedNum){
                win += currentPrize;
                continuingGame = confirm('Congratulation, you won!   Your prize is: '+ currentPrize +
                '$. Do you want to continue?');
                if(continuingGame === true){
                    continuing = false;
                    break;
                } else {
                    continuing = true;
                    break;
                }
            } else {
                alert('Try again');
            }
        }
        if(continuing === true){
            alert('Thank you for your participation. Your prize is: ' + win + '$');
            playAgain = confirm('Do you whant to try again?');
            if(playAgain === false){
                break;
            } else if(playAgain === true){
                i = 0;
                max = maxAgain;
                win = 0;
            }
        }
    }
    
    
}