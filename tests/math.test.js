const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);    
});

test('subtração 2 - 3 igual a -1', () => {
    expect(math.subtract(2, 3)).toBe(-1);
});

test('multiplicação 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('divisão 9 / 3 igual a 3', () => {
    expect(math.divide(9, 3)).toBe(3);
});

test('soma 6 + 3 igual', () => {
    expect(math.add(6, 3)).not.toBe(10);
});

