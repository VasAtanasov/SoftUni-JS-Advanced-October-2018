function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


// let list = createList();
// list.add(1);
// list.add("two");
// list.add(3);
// console.log(`list = [${list}]`);
// list.shiftLeft();
// console.log("shifted left <--");
// console.log(`list = [${list}]`);
// list.add(["four"]);
// console.log(`list = [${list}]`);
// list.shiftRight();
// console.log("shifted right -->");
// console.log(`list = [${list}]`);
// console.log(`Swaping [0] and [3]: ${list.swap(0, 3)}`);
// console.log(`list = [${list}]`);
// console.log(`Swaping [1] and [1]: ${list.swap(1, 1)}`);
// console.log(`list = [${list}]`);

//list = [1, two, 3]
// shifted left <--
// list = [two, 3, 1]
// list = [two, 3, 1, four]
// shifted right -->
// list = [four, two, 3, 1]
// Swaping [0] and [3]: true
// list = [1, two, 3, four]
// Swaping [1] and [1]: false
// list = [1, two, 3, four]

module.exports = {createList};