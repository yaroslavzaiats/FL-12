function makeNumber(str= ''){
    let num = str.replace(/\D+/g,"");
    if(isNaN(num)){
        return num.toString();
    } else {
        return num;
    }
}

makeNumber('ewdw2ef w1');