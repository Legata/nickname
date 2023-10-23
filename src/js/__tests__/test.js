import Validator from '../app';

test('имя начинается на цифру', () => {
  const result = new Validator('36ktulhu').validateUsername();
  expect(result).toBe(false);
});

test('имя заканчивается на цифру', () => {
  const result = new Validator('Alex7').validateUsername();
  expect(result).toBe(false);
});

test('в имени подряд 4 и более цифр', () => {
  const result = new Validator('Igor2222na').validateUsername();
  expect(result).toBe(false);
});

test('имя начинается на символ -', () => {
  const result = new Validator('-oba3na').validateUsername();
  expect(result).toBe(false);
});

test('имя заканчивается на символ -', () => {
  const result = new Validator('Kra4en-').validateUsername();
  expect(result).toBe(false);
});

test('имя начинается на символ _', () => {
  const result = new Validator('_P1ace').validateUsername();
  expect(result).toBe(false);
});

test('имя заканчивается на символ _', () => {
  const result = new Validator('Ataman_').validateUsername();
  expect(result).toBe(false);
});

test('правильное имя 1', () => {
  const result = new Validator('Alex777Nagibator').validateUsername();
  expect(result).toBe(true);
});

test('правильное имя 2', () => {
  const result = new Validator('Mom_s-friend_s-son').validateUsername();
  expect(result).toBe(true);
});

test('правильное имя 3', () => {
  const result = new Validator('Legata').validateUsername();
  expect(result).toBe(true);
});