class PaymentProcessor {
    constructor(options) {
        this.setOptions(options);
        this.payments = {};
    }

    setOptions(options) {
        this._options = {
            types: ["service", "product", "other"],
            precision: 2
        };

        if (options) {
            Object.keys(options).forEach(key => this._options[key] = options[key]);
        }
    }

    registerPayment(id, name, type, value) {
        if (!id || typeof id !== "string" || !id.trim()) {
            throw new Error("Invalid id.")
        }
        if (!name || typeof name !== "string" || !name.trim()) {
            throw new Error("Invalid name.")
        }
        if (typeof value !== "number") {
            throw new Error("Invalid value.")
        }
        if (!this._options.types.includes(type)) {
            throw new Error("Invalid type.")
        }
        if (this.payments.hasOwnProperty(id)) {
            throw new Error("Id already exists.")
        }
        value = value.toFixed(this._options.precision);
        this.payments[id] = {id, name, type, value};
    }

    deletePayment(id) {
        if (!this.payments.hasOwnProperty(id)) {
            throw new Error("Invalid id.")
        }
        delete this.payments[id];
    }

    get(id) {
        if (!this.payments.hasOwnProperty(id)) {
            throw new Error("Invalid id.")
        }
        let {paymentId, name, type, value} = this.payments[id];
        return `Details about payment ID: ${id}\n` +
            `- Name: ${name}\n` +
            `- Type: ${type}\n` +
            `- Value: ${value}\n`
    }

    toString() {
        let size = Object.keys(this.payments).length;
        let value = Object.values(this.payments).map(p => Number(p.value)).reduce((a,b) => a + b);
        return `Summary:\n` +
            `- Payments: ${size}\n` +
            `- Balance: ${value}`;

    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

