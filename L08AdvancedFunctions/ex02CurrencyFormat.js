function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(currencyFormatter) {
    function formatter(value) {
       return currencyFormatter(",", "$",true,value);
    }
    return formatter;
}

function geLevaFormatter(currencyFormatter) {
    function formatter(value) {
        return currencyFormatter(",", "BGN",false,value);
    }
    return formatter;
}

let dollarFormatter = getDollarFormatter(currencyFormatter);
let levaFormatter = geLevaFormatter(currencyFormatter);

console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));

console.log(levaFormatter(1231));