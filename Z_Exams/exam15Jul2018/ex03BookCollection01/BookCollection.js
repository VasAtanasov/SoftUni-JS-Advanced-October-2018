class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    set room(value) {
        if (!["livingRoom", "bedRoom", "closet"].includes(value)) {
            throw new Error(`Cannot have book shelf in ${value}`)
        }
        this._room = value;
    }

    get room() {
        return this._room;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCondition === 0) {
            this.shelf.shift();
        }
        let book = {bookName, bookAuthor, genre};
        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let header = `Results for search "${genre}":`;
        if (this.shelf.length > 0) {
            header += '\n';
            header += this.shelf
                .filter(b => b.genre === genre)
                .map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`)
                .join('\n');
        }
        return header;
    }

    toString() {
        if (this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        }
        return `"${this.shelfGenre}" shelf in ${this.room} contains:` +
            '\n' +
            this.shelf
                .map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
                .join('\n');
    }
}


let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

console.log();

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));


