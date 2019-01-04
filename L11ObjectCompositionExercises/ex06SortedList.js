function sortedList(array) {
    return (function () {
        let numbers = array || [];
        let size = 0;

        function add(element) {
            numbers.push(element);
            sort();
            this.size++;
        }

        function remove(index) {
            if (isValidIndex(index) && !isEmpty()) {
                numbers.splice(index, 1);
                this.size--;
            }
        }

        function get(index) {
            if (isValidIndex(index)) {
                return numbers[index];
            }
        }

        function isValidIndex(index) {
            return index >= 0 && index < numbers.length;
        }

        function isEmpty() {
            return numbers.length === 0;
        }

        function sort() {
            return numbers.sort((a, b) => a - b)
        }

        return {add, remove, get, size}
    })();
}

let collection = sortedList();

collection.add(1);
collection.add(2);
collection.add(3);
collection.remove(2);
console.log(collection.size);