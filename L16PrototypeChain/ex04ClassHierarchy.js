function figures() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Cannot instantiate an abstract class.");
            }
        }

        get area() {
            return undefined;
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width,height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.height * this.width;
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }


    return {Figure, Circle, Rectangle}
}

let classes = figures();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;

let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3, 4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
