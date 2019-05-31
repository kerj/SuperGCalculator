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
