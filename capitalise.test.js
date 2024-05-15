const capitalise = require('./capitalise');

test('return lower case word as Word', () => {
    expect(capitalise("word")).toBe("Word");
})

test('return lower case bum as Bum', () => {
    expect(capitalise("bum")).toBe("Bum");
})