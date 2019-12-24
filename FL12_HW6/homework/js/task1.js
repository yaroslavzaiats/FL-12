let a = prompt('Enter a value of a');
let b = prompt('Enter a value of b');
let c = prompt('Enter a value of c');
if (a === '' || isNaN(a) || b === '' || isNaN(b) || c === '' || isNaN(c)) {
    console.log('Invalid input data')
} else {
    let d = b*b - 4*a*c;
    if (d < 0) {
        console.log(`no solution`);
    } else if (d === 0) {
        let x = Math.round(-b/2*a);
        console.log(`x = ${x}`);
    } else {
        let x1 = Math.round((-b + Math.sqrt(d))/(2*a));
        let x2 = Math.round((-b - Math.sqrt(d))/(2*a));
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}