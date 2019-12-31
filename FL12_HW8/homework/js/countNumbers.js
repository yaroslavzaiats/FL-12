let num;
function makeNumber(str = ''){
    num = str.replace(/\D+/g,"");
    if(isNaN(num)){
        return num.toString();
    } else {
        return num;
    }
}

function countNumbers(str = ''){
    let numStr = makeNumber(str);
    let countNumObj = {};
    numStr.split('').forEach(function (numeric) {
        if(countNumObj[numeric] !== undefined){
            ++countNumObj[numeric];
        } else {
            countNumObj[numeric] = 1;
        }
    })
    return countNumObj;
}
countNumbers('ewdw2ef w1wqdq2131dq');