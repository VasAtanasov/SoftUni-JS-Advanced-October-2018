class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {}
    }

    registerChild(name, grade, budget) {
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        if (this.isKid(name, grade)) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`

        }

        this.kids[grade].push({name, budget});

        return this.getGradeString(grade);
    }

    getGradeString(grade) {
        return this.kids[grade].map((kid) => `${kid.name}-${kid.budget}`);
    }

    isKid(name, grade) {
        return this.kids[grade].some((kid) => kid.name === name);
    }

    removeChild(name, grade) {
        if (!this.isKid(name, grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
        this.kids[grade] = this.kids[grade].filter((kid) => kid.name !== name);
        return this.getGradeString(grade);
    }

    get numberOfChildren() {
        let allKids = 0;
        Object.values(this.kids).reduce((ind, el) => {
            allKids += el.length;
        }, allKids);

        return allKids;
    }


    toString() {
        let grades = Object.keys(this.kids);

        if (grades.length === 0 || this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let text = this.numberOfChildren === 1 ? "child" : "children";

        let output = `${this.organizer} will take ${this.numberOfChildren} ${text} on trip to ${this.destination}\n`;

        grades
            .map(Number)
            .filter((grade) => this.kids[grade].length !== 0)
            .sort((a, b) => a - b)
            .forEach((grade) => {
                let gradeOutput = `Grade: ${grade}\n`;
                let currentKidNumber = 1;

                this.getGradeString(grade)
                    .forEach((kid) => {
                        gradeOutput += `${currentKidNumber++}. ${kid}\n`
                    });
                output += gradeOutput;
            });

        return output;
    }

}


let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.removeChild('Lilly', 6));

console.log(vacation.toString());


