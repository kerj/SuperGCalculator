export function ageInMillie(bday) {
  let todayDate = new Date();
  let todayInMillie = todayDate.getTime();

  let birthdayDateObject = new Date(bday);
  let millesecondsSinceJSstart = birthdayDateObject.getTime();

  bday = Math.abs(todayInMillie - millesecondsSinceJSstart);
  let yearsAge = Math.round(bday/31536000000);
  bday = yearsAge*31536000000;
  return bday;
};

export function millieToYears(bday) {
  let ageInMilleseconds = ageInMillie(bday);
  let yearsAge = Math.round(ageInMilleseconds/31536000000);
  return yearsAge;
}

export function planetAge(planet, bday) {
  switch(planet) {
    case "Earth":
      let earthAge = millieToYears(bday);
      return earthAge;
    break;
    case "Mercury":
      let mercuryAge = Math.round((millieToYears(bday)/.24));
      return mercuryAge;
    break;
    case "Venus":
      let venusAge = Math.round((millieToYears(bday)/.62));
      return venusAge;
    break;
    case "Mars":
      let marsAge = Math.round((millieToYears(bday)/1.88));
      return marsAge;
    break;
    case "Jupiter":
      let jupiterAge = Math.round((millieToYears(bday)/11.86));
      return jupiterAge;
  }
}
