const calculatorFunc = {
    add(num1, num2) {
        return num1 + num2;
    },
    
    minus(num1, num2) {
        return num1 - num2;
    },

    multiply(num1, num2) {
        return num1 * num2;
    },

    divide(num1, num2) {
        return num1 / num2;
    }

};

console.log(calculatorFunc.add(1,2));

module.exports = calculatorFunc;
