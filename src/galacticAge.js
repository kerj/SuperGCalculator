export function ageInMillie(bday) {
  console.log(bday);
    let birthdayDateObject = new Date(bday);
    console.log(birthdayDateObject);
    let ageInMilleseconds = birthdayDateObject.getTime();
    return ageInMilleseconds;
}
