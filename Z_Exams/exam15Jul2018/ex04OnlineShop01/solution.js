function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1">
        <label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1">
        <label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display"></ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    class Inventory {
        constructor() {
            this.capacity = {max: 150, current: 0};
            this.orders = [];
            this.totalPrice = 0;
        }

        get currentCapacity() {
            return this.capacity.current;
        }

        get isFull() {
            return this.currentCapacity >= this.capacity.max;
        }

        addProduct(product) {
            this.orders.push(product);
            this.capacity.current += product.quantity;
            this.totalPrice += product.price;
        }
    }


    class Controller {
        constructor(inventory) {
            this.inventory = inventory;
            this.container = $('ul.display');
            this.fieldCapacity = $('#capacity');
            this.fieldPrice = $('#sum');
            this.productInput = $('input.custom-select');
            this.submit = $('button#submit');
            this.priceInput = $('input#price');
            this.quantityInput = $('input#quantity');
            this.attachEvents();
        }

        attachEvents() {
            this.productInput.on('input', () => {
                if (this.productInput.val()) {
                    this.submit.attr('disabled', false)
                } else {
                    this.submit.attr('disabled', true);
                }
            });

            this.submit.on('click', () => {
                let productName = this.productInput.val();
                let price = Number(this.priceInput.val());
                let quantity = Number(this.quantityInput.val());
                let product = {productName, price, quantity};
                this.inventory.addProduct(product);
                this.productInput.val('');
                this.priceInput.val('1');
                this.quantityInput.val('1');
                this.submit.attr('disabled', true);
                this.renderProductItem(product);
                this.renderInventoryCondition();
            });
        }

        renderProductItem(product) {
            let {productName, price, quantity} = product;
            let li = $('<li>');
            li.text(`Product: ${productName} Price: ${price} Quantity: ${quantity}`);
            this.container.append(li);
        }

        renderInventoryCondition() {
            if (this.inventory.isFull) {
                this.fieldCapacity.removeAttr('class');
                this.fieldCapacity.addClass('fullCapacity');
                this.fieldCapacity.val('full');
                this.productInput.attr('disabled', true);
                this.priceInput.attr('disabled', true);
                this.quantityInput.attr('disabled', true);
                this.submit.attr('disabled', true);
            } else {
                this.fieldCapacity.val(this.inventory.currentCapacity);
            }
            this.fieldPrice.val(this.inventory.totalPrice);
        }
    }

    let inventory = new Inventory();
    let controller = new Controller(inventory);
}
