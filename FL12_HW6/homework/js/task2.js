let a = parseFloat(prompt('Enter a length of "a" side'));
let b = parseFloat(prompt('Enter a length of "b" side'));
let c = parseFloat(prompt('Enter a length of "c" side'));

if(a === '' || isNaN(a) || b === '' || isNaN(b) || c === '' || isNaN(c)){
    alert('input values should be ONLY numbers ');
} else if ( a <= 0 || b <= 0 || c <= 0){
    alert('A triangle must have 3 sides with a positive definite length ')
} else if(a + b > c && a + c > b && b + c > a){
     if(a === b && b === c){
        console.log('Equilateral triangle');
    } else if(a===b || b===c || a===c){
        console.log('Isosceles triangle');
    } else{
        console.log('Scalene triangle');
    }
} else{
    console.log('Triangle doesn’t exist');
    alert('Triangle doesn’t exist');
}
