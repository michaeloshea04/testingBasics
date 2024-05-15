const calculatorFunc = require('./calculatorFunc');

test('return 2 numbers added together', () => {
    expect(calculatorFunc.add(1,2)).toBe(3);
})