class PaymentProcessor {
    constructor(options) {
        this.options = options;
        this.payments = {};
    }

    set options(opt) {
        this._options = {
            types: ["service", "product", "other"],
            precision: 2
        };
        if (opt) {
            this.setOptions(opt)
        }
    }

    setOptions(options) {
        Object.keys(options)
            .forEach(property => this._options[property] = options[property]);
    }

    get options() {
        return this._options;
    }

    registerPayment(id, name, type, value) {
        if (!id ||
            !name ||
            typeof value !== "number" ||
            !this.options.types.includes(type) ||
            this.payments.hasOwnProperty(id)) {
            throw new Error('Invalid parameters!');
        }
        value = value.toFixed(this.options.precision);
        this.payments[id] = {name, type, value};
    }

    deletePayment(id) {
        if (!this.payments.hasOwnProperty(id)) {
            throw new Error('ID not found');
        }
        delete this.payments[id];
    }

    get(id) {
        if (!this.payments.hasOwnProperty(id)) {
            throw new Error('ID not found');
        }
        let payment = this.payments[id];
        return `Details about payment ID: ${id}\n` +
            `- Name: ${payment.name}\n` +
            `- Type: ${payment.type}\n` +
            `- Value: ${payment.value}`;
    }

    get balance() {
        return Object.values(this.payments)
            .map(p => Number(p.value))
            .reduce((a, b) => a + b);
    }

    get paymentCount() {
        return Object.keys(this.payments).length;
    }

    toString() {
        return 'Summary:\n' +
            `- Payments: ${this.paymentCount}\n` +
            `- Balance: ${this.balance.toFixed(this.options.precision)}`
    }
}


const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);

console.log(generalPayments.get('E028'));
console.log();
console.log(generalPayments);
// generalPayments.deletePayment('E028');
// console.log(generalPayments);
