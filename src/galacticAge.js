export class PersonProfile {
  constructor(planet, bday){
    this.planet = planet;
    this.bday = bday;
  }
  get age() {
    return this.planetAge();
  };

  get lifeExpectancy() {
    return this.lifeExpectancyChecker();
  };

  get ageInMillie() {
    const millisecondsInYear = 31536000000;

    let todayDate = new Date();
    let todayInMillie = todayDate.getTime();

    let birthdayDateObject = new Date(this.bday);
    let millesecondsSinceJSstart = birthdayDateObject.getTime();

    bday = Math.abs(todayInMillie - millesecondsSinceJSstart);
    let yearsAge = Math.round(bday/millisecondsInYear);
    bday = yearsAge*millisecondsInYear;
    return this.bday;
  };

  get millieToYears() {
    const millisecondsInYear = 31536000000;

    let ageInMilleseconds = this.ageInMillie();
    let yearsAge = Math.round(ageInMilleseconds/millisecondsInYear);
    return this.yearsAge;
  };

  get planetAge() {
    switch(this.planet) {
      case "Earth":
      let earthAge = this.millieToYears();
      return this.earthAge;
      case "Mercury":
      let mercuryAge = Math.round((this.millieToYears()/.24));
      return this.mercuryAge;
      case "Venus":
      let venusAge = Math.round((this.millieToYears()/.62));
      return this.venusAge;
      case "Mars":
      let marsAge = Math.round((this.millieToYears()/1.88));
      return this.marsAge;
      case "Jupiter":
      let jupiterAge = Math.round((this.millieToYears()/11.86));
      return this.jupiterAge;
    }
  };

  get lifeExpectancyChecker() {
    const lifeExpectancy = 78;
    let ageVsExpectancy = (lifeExpectancy-this.millieToYears());
    if (ageVsExpectancy < 0) {
      let remainingYears = Math.abs(ageVsExpectancy);
      return this.remainingYears;
    }else if (ageVsExpectancy > 0) {
      return this.ageVsExpectancy;
    }else {
      let exactAgeExpectancy = "You have reached the average age!!";
      return this.exactAgeExpectancy;
    }
  };
};

module.exports = PersonProfile;
