function isBigger(firstNum, secondNum) {
    return firstNum > secondNum;
}

isBigger(1, 2);

function isSmaller(firstNum, secondNum){
    return !isBigger(firstNum, secondNum);
}

isSmaller(1, 2);