import { ageInMillie } from '../src/galacticAge.js';
import { millieToYears } from '../src/galacticAge.js';
import { planetAge } from '../src/galacticAge.js';
import { lifeExpectancyChecker } from '../src/galacticAge.js';

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

test('return age in mars years', () => {
  let testVar = planetAge("Earth", '1992-5-1');
  expect(testVar).toBe(27);
})

test('return age in mars years', () => {
  let testVar = planetAge("Mercury", '1992-5-1');
  expect(testVar).toBe(113);
})

test('return age in mars years', () => {
  let testVar = planetAge("Venus", '1992-5-1');
  expect(testVar).toBe(44);
})

test('return age in mars years', () => {
  let testVar = planetAge("Jupiter", '1992-5-1');
  expect(testVar).toBe(2);
})

test('return remaining years compared to average life expectancy', () => {
  let testVar = lifeExpectancyChecker('1992-5-1');
  expect(testVar).toBe(51);
})

test('return #of years past life expectancy', () => {
  let testVar = lifeExpectancyChecker('1919-5-1');
  expect(testVar).toBe(22);
})

test('return #of years past life expectancy', () => {
  let testVar = lifeExpectancyChecker('1941-5-1');
  expect(testVar).toBe("You have reached the average age!!");
})

test('check all switches', () => {
  const allCases = ['Earth', 'Mercury', 'Venus', 'Mars', 'Jupiter']
  const allAges = [27, 113, 44, 14, 2]
  for (let i = 0; i < allCases; i++) {
    let testVar = planetAge(allCases[i], '1941-5-1');
    expect(testVar).toBe(allAges[i]);
  }
})

// test('adds 5 + 5 to equal 10', () => {
  //     expect(add(5, 5)).toBe(10);
  // });
