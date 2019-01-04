class Vacationer {
    constructor(fullNameArr, creditCardArr) {
        this.fullName = fullNameArr;
        this.idNumber = this.generateIDNumber();
        this.creditCard = creditCardArr;
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    get creditCard() {
        return this._creditCard;
    }

    set fullName(fullNameArr) {
        if (fullNameArr.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }

        if (!fullNameArr.every(name => /^[A-Z][a-z]+$/g.test(name))) {
            throw new Error('Invalid full name');
        }

        this._fullName = {
            firstName: fullNameArr[0],
            middleName: fullNameArr[1],
            lastName: fullNameArr[2],
        };
    }

    set creditCard(creditCardArr) {
        this.addCreditCardInfo(creditCardArr);
    }

    addCreditCardInfo(input) {
        let cardNumber;
        let expirationDate;
        let securityNumber;

        if (!input) {
            cardNumber = 1111;
            expirationDate = '';
            securityNumber = 111;
        } else if (input.length !== 3) {
            throw new Error('Missing credit card information');
        } else if (typeof  input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error('Invalid credit card details');
        } else {
            cardNumber = input[0];
            expirationDate = input[1];
            securityNumber = input[2];
        }

        this._creditCard = {cardNumber, expirationDate, securityNumber};
    }

    generateIDNumber() {
        let num = ["a", "e", "o", "i", "u"].includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1)) ? 8 : 7;
        let code = this.fullName.firstName.charCodeAt(0);
        return 231 * code + 139 * this.fullName.middleName.length + "" + num;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n` +
            `ID Number: ${this.idNumber}\n` +
            `Wishlist:\n` +
            `${this.wishList.length === 0 ? 'empty' : this.wishList.join(", ")}\n` +
            `Credit Card:\n` +
            `Card Number: ${this.creditCard.cardNumber}\n` +
            `Expiration Date: ${this.creditCard.expirationDate}\n` +
            `Security Number: ${this.creditCard.securityNumber}`
    }

}


let v = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);
let v1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);

v1.addDestinationToWishList('Spain');
v1.addDestinationToWishList('Germany');

// console.log(v.getVacationerInfo());
// console.log();
// console.log(v1.getVacationerInfo());

console.log(JSON.stringify(v.getVacationerInfo()));

// 'Name: Tania Ivanova Zhivkova\nID number: 203778\nWishlist:\nempty\nCredit Card:\nCard Number: 123456789\nExpiration Date: 10/01/2018\nSecurity Number: 777'
// 'Name: Tania Ivanova Zhivkova\nID Number: 203778\nWishlist:\nempty\nCredit Card:\nCard Number: 123456789\nExpiration Date: 10/01/2018\nSecurity Number: 777'