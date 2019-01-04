function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return super.toString().slice(0,-1) + `, subject: ${this.subject})`;
        }
    }

    return {Person, Teacher}
}

let classes = personAndTeacher();
let Person = classes.Person;
let Teacher = classes.Teacher;

let p = new Person("Maria", "maria@gmail.com");
let pesho = new Person('Pesho', 'pesho@pesho.com');
console.log(p.toString());
console.log(pesho.toString());
console.log(pesho.name);
console.log(pesho.email);
// Person: Maria (maria@gmail.com)

let t = new Teacher("Ivan", "iv@yahoo.com", "PHP");
console.log(t.toString());
// Teacher: Ivan (iv@yahoo.com), teaches PHP
