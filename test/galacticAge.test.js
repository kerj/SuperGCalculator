import { ageInMillie } from '../src/galacticAge.js';

test('returns the number of millieseconds from since a date object', () => {
    let testVar = ageInMillie(1992,4,1);
    expect(testVar).toBe(7);
});

// test('adds 5 + 5 to equal 10', () => {
//     expect(add(5, 5)).toBe(10);
// });
