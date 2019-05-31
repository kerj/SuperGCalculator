export class PersonProfile {

  constructor(planet, bday){
    this.planet = planet;
    this.bday = bday;
  }
  get age() {
    return planetAge(planet, bday);
  }

  get lifeExpectancy() {
    return lifeExpectancyChecker(bday);
  }

  ageInMillie(bday) {
    const millisecondsInYear = 31536000000;

    let todayDate = new Date();
    let todayInMillie = todayDate.getTime();

    let birthdayDateObject = new Date(bday);
    let millesecondsSinceJSstart = birthdayDateObject.getTime();

    bday = Math.abs(todayInMillie - millesecondsSinceJSstart);
    let yearsAge = Math.round(bday/millisecondsInYear);
    bday = yearsAge*millisecondsInYear;
    return bday;
  };

  millieToYears(bday) {
    const millisecondsInYear = 31536000000;

    let ageInMilleseconds = this.ageInMillie(bday);
    let yearsAge = Math.round(ageInMilleseconds/millisecondsInYear);
    return yearsAge;
  }

  planetAge(planet, bday) {
    switch(this.planet) {
      case "Earth":
      let earthAge = this.millieToYears(bday);
      return earthAge;
      case "Mercury":
      let mercuryAge = Math.round((this.millieToYears(bday)/.24));
      return mercuryAge;
      case "Venus":
      let venusAge = Math.round((this.millieToYears(bday)/.62));
      return venusAge;
      case "Mars":
      let marsAge = Math.round((this.millieToYears(bday)/1.88));
      return marsAge;
      case "Jupiter":
      let jupiterAge = Math.round((this.millieToYears(bday)/11.86));
      return jupiterAge;
    }
  }

  lifeExpectancyChecker(bday) {
    const lifeExpectancy = 78;
    let ageVsExpectancy = (lifeExpectancy-this.millieToYears(bday));
    if (ageVsExpectancy < 0) {
      let remainingYears = Math.abs(ageVsExpectancy);
      return remainingYears;
    }else if (ageVsExpectancy > 0) {
      return ageVsExpectancy;
    }else {
      let exactAgeExpectancy = "You have reached the average age!!";
      return exactAgeExpectancy;
    }
  }
}
