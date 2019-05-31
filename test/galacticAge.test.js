import { PersonProfile } from '../src/galacticAge.js';

// test('returns the number of millieseconds from since a date object', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.ageInMillie();
//   expect(testVar).toBe(851472000000);
// });
//
//
// test('return number of years from millieseconds', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.millieToYears();
//   expect(testVar).toBe(27);
// })
//
// test('return age in mars years', () => {
//   let newPerson = new PersonProfile("Mars", "1992-5-1");
//   let testVar = newPerson.planetAge();
//   expect(testVar).toBe(14);
// })
//
// test('return age in earth years', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.planetAge();
//   expect(testVar).toBe(27);
// })
//
// test('return age in mercury years', () => {
//   let newPerson = new PersonProfile("Mercury", "1992-5-1");
//   let testVar = newPerson.planetAge();
//   expect(testVar).toBe(113);
// })
//
// test('return age in venus years', () => {
//   let newPerson = new PersonProfile("Venus", "1992-5-1");
//   let testVar = newPerson.planetAge();
//   expect(testVar).toBe(44);
// })
//
// test('return age in jupiter years', () => {
//   let newPerson = new PersonProfile("Jupiter", "1992-5-1");
//   let testVar = newPerson.planetAge();
//   expect(testVar).toBe(2);
// })

// test('return remaining years compared to average life expectancy', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.lifeExpectancyChecker();
//   expect(testVar).toBe(51);
// })
//
// test('return #of years past life expectancy', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.lifeExpectancyChecker();
//   expect(testVar).toBe(22);
// })
//
// test('return #of years past life expectancy', () => {
//   let newPerson = new PersonProfile("Earth", "1992-5-1");
//   let testVar = newPerson.lifeExpectancyChecker();
//   expect(testVar).toBe("You have reached the average age!!");
// })

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
