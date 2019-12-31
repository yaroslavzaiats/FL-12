function getMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      let num = arguments[i];
      if (num < min) {
        min = num;
      }
    }
      return min;
  }
  getMin(1, 2, 3, 4, 5);