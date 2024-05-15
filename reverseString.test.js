const reverseString = require('./reverseString');

test('return inputString as reversed', () => {
    expect(reverseString("map")).toBe("pam");
})

test('return inputString as reversed', () => {
    expect(reverseString("brisbane")).toBe("enabsirb");
})