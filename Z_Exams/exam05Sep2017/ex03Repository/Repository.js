class Repository {
    constructor(properties) {
        this.properties = properties;
        this.data = new Map();
        this._id = 0;
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        if (this.isValidEntity(entity)) {
            this.data.set(this._id, entity);
            return this._id++;
        }
    }

    isValidEntity(entity) {
        for (const key of Object.keys(entity)) {
            if (!this.properties.hasOwnProperty(key)) {
                throw new Error(`Property ${key} is missing from the entity!`)
            }

            if (this.properties[key] !== typeof entity[key]) {
                throw new TypeError(`Property ${key} is of incorrect type!`)
            }
        }
        return true;
    }

    get(id) {
        if (this.isIdExists(id)) {
            return this.data.get(id);
        }
    }

    isIdExists(id) {
        if (this.data.has(id)) {
            return true;
        }
        throw new Error(`Entity with id: ${id} does not exist!`)
    }

    update(id, entity) {
        if (this.isIdExists(id) && this.isValidEntity(entity)) {
            this.data.set(id, entity);
            return true;
        }
        return false;
    }

    del(id) {
        if (this.isIdExists(id)) {
            return this.data.delete(id);
        }
        return false;
    }
}


// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
console.log(repository.add(entity)); // Returns 0
console.log(repository.add(entity)); // Returns 1
console.log(repository.count);
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
repository.add(anotherEntity); // should throw a TypeError
repository.del(-1);

