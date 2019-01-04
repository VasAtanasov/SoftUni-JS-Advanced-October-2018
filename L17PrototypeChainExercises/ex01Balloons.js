function balloons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbonColor() {
            return this._ribbon.color;
        }

        get ribbonLength() {
            return this._ribbon.length
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon}
}

let classes = balloons();
let Balloon = classes.Balloon;
let PartyBalloon = classes.PartyBalloon;
let BirthdayBalloon = classes.BirthdayBalloon;

