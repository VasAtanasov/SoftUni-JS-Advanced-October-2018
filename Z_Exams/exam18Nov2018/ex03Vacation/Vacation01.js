class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        let kid = `${name}-${budget}`;

        if (this.isKid(name, grade) !== null) {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }

        this.kids[grade].push(kid);

        return this.kids[grade];
    }

    isKid(name, grade) {
        let index = null;
        this.kids[grade].forEach((kid, idx) => {
            if (kid.includes(name)) {
                index = idx;
            }
        });

        return index;
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade) || this.isKid(name, grade) === null) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
        this.kids[grade] = this.kids[grade].filter((kid) => !kid.includes(name));

        return this.kids[grade];
    }

    get numberOfChildren() {
        return Object.values(this.kids).reduce((acc, cur) => acc + cur.length, 0);
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }

        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        Object.keys(this.kids).sort().forEach((grade) => {
            let gradeOutput = `Grade: ${grade}\n`;
            let currentKidNumber = 1;
            gradeOutput += this.kids[grade]
                .map((kid) => `${currentKidNumber++}. ${kid}`)
                .join('\n');
            output += gradeOutput + '\n';
        });

        return output;
    }
}