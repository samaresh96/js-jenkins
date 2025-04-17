// example.test.js
const { add } = require('./js-auto'); // Import the add function

describe('add function', () => {
  // Basic functionality tests
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('adds positive and negative numbers', () => {
    expect(add(-5, 8)).toBe(3);
  });

  // Edge cases
  test('handles decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
  test('handles  numbers', () => {
    expect(add(10, 2.5)).toBe(12.5);
  });
  test('handles  numbers', () => {
    expect(add(0, 2.5)).toBe(2.5);
  });

  test('handles large numbers', () => {
    expect(add(999999, 1)).toBe(1000000);
  });

  test('returns NaN when one argument is not a number', () => {
    expect(add('2', 3)).toBe(NaN);
  });

  test('returns NaN when both arguments are not numbers', () => {
    expect(add('a', 'b')).toBe(NaN);
  });

  
});
