function solve(name, age, weight, height) {
    let Person = function () {
    };

    Person.prototype.setName = function (name) {
        this.name = name;
        return this;
    };

    Person.prototype.setPersonalInfo = function (...elements) {
        this.personalInfo = {};
        this.personalInfo['age'] = elements[0];
        this.personalInfo['weight'] = elements[1];
        this.personalInfo['height'] = elements[2];
        return this;
    };

    Person.prototype.setBMI = function () {
        weight = this.personalInfo['weight'];
        height = this.personalInfo['height'];
        this.BMI = Math.round(weight / Math.pow(height / 100, 2));
        return this;
    };

    Person.prototype.setStatus = function () {
        if (this.BMI < 18.5) {
            this.status = 'underweight';
        } else if (this.BMI < 25) {
            this.status = 'normal';
        } else if (this.BMI < 30) {
            this.status = 'overweight';
        } else {
            this.status = 'obese';
            this.recommendation = 'admission required';
        }
        return this;
    };


    let person = new Person();

    person.setName(name)
        .setPersonalInfo(age, weight, height)
        .setBMI()
        .setStatus();

    return person;
}

console.log(solve('Peter', 29, 75, 182));
console.log();
console.log(solve('Honey Boo Boo', 9, 57, 137));