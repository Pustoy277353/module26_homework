import {sum, definePrime} from './index.js';
~
describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('definePrime function', () => {
  test('checks if 2 is prime', () => {
    expect(definePrime(2)).toBe('Число 2 - простое число');
  });

  test('checks if 4 is composite', () => {
    expect(definePrime(4)).toBe('Число 4 - составное число');
  });

  test('checks if 11 is prime', () => {
    expect(definePrime(11)).toBe('Число 11 - простое число');
  });

  test('checks if 1001 is out of range', () => {
    expect(definePrime(1001)).toBe('Данные неверны');
  });

  test('checks if -5 is out of range', () => {
    expect(definePrime(-5)).toBe('Данные неверны');
  });
});