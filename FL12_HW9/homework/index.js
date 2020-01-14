function convert(){
    let arr = [];
    for(let i = 0; i < arguments.length; i++){
        let arg = arguments[i];
        if(typeof arg === 'string'){
            arr[i] = parseInt(arg);
        } else {
            arr[i] = String(arg);
        }
    }
    return arr;
}

convert('1', 2, 3, '4');

function executeforEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el * 2)
} );

function mapArray (arr, func){
    let newArr = [];
    executeforEach(arr, function(el){
      newArr.push(func(Number(el)))
    });
    return newArr;
}

mapArray([2, '5', 8], function(el) { 
    return el + 3
});

function filterArray(arr, func){
    let filteredArr = [];
    executeforEach(arr, function(el){
        if(func(el)){
            filteredArr.push(el);
        }
    });
    return filteredArr;
}

filterArray([2, 5, 8], function(el) { 
    return el % 2 === 0 
});

function flipOver(str){
    let flipStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        flipStr += str[i];
    }
    return flipStr;
}

flipOver('hey world');

function makeListFromRange(arr){
    let min = arr[0];
    let max = arr[1];
    let range = max-min;
    let list = [];
    for(let i = 0; i <= range; i++){
        list[i] = min + i;
    }
    return list;
}

makeListFromRange([2, 7])

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
function getArrayOfKeys (arr, name){
    let namesArr = [];
    executeforEach(arr, function(el){
      namesArr.push(el[name]);
    });
    return namesArr;
}

getArrayOfKeys(actors, 'name');

function substitute(arr){
    let minNum = 30;
    return mapArray(arr, function(el){
      if(el < minNum) {
        return '*';
      }else{
    return el;
  }
    });
}
substitute([58, 14, 48, 2, 31, 29]);

const date = new Date();
function getPastDay(date, ago){
    let day = date.getUTCDate();
    let dayAgo = day - ago;
    return dayAgo;
}

getPastDay(date, 1);

function formatDate(){
    let date = arguments[0];
    let year = date.getUTCFullYear();
    let month = date.getMonth() + 1;
    let day = date.getUTCDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let fDate;
    if(hours > 9 && minutes < 10){
        fDate = `${year}/${month}/${day} ${hours}:0${minutes}`;
    } else if(hours < 10 && minutes > 9){
        fDate = `${year}/${month}/${day} 0${hours}:${minutes}`;
    } else if(hours < 10 && minutes < 10){
        fDate = `${year}/${month}/${day} 0${hours}:0${minutes}`;
    } else {
        fDate = `${year}/${month}/${day} ${hours}:${minutes}`;
    }
    return fDate;
}

formatDate(new Date('6/15/2018 09:15:00'));