import { ageInMillie } from '../src/galacticAge.js';
import { millieToYears } from '../src/galacticAge.js';
import { planetAge } from '../src/galacticAge.js';

test('returns the number of millieseconds from since a date object', () => {
    let testVar = ageInMillie('1992-5-1');
    expect(testVar).toBe(851472000000);
});


test('return number of years from millieseconds', () => {
  let testVar = millieToYears('1992-5-1');
  expect(testVar).toBe(27);
})

test('return age in mars years', () => {
  let testVar = planetAge("Mars", '1992-5-1');
  expect(testVar).toBe(14);
})
// test('adds 5 + 5 to equal 10', () => {
//     expect(add(5, 5)).toBe(10);
// });
