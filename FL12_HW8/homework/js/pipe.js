function addOne(x) {
    return x + 1;
}

function pipe() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        number = arguments[i](number);
    }
    return number;
}
pipe(1, addOne);
pipe(3, addOne, addOne, addOne);