const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('add 7 + 3 to equal 10', () => {
    expect(sum(7,3)).toBe(10);
})