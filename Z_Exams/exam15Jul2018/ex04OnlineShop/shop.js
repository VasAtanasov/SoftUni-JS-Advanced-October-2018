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
                <br>
                <br>
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

    let product = $('input.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let submit = $('#submit');
    let capacity = $('#capacity');

    let manager = (function inventory() {
        let inventory = [];
        let initialCapacity = 150;
        capacity.val(initialCapacity);

        function addProduct(name, price, quantity) {
            inventory.push({name, price, quantity});

            $('.display').append($('<li>').text(`Product: ${name} Price: ${price} Quantity: ${quantity}`));
            $('#sum').val(getTotalPrice());

            capacity.val(getTotalQuantity());
            if (initialCapacity - getTotalQuantity() <= 0) {
                capacity.addClass('fullCapacity');
                capacity.val('full');

                $('input.custom-select, #price, #quantity, #submit').attr('disabled', true);
            }
        }

        function getTotalQuantity() {
            return inventory.map(p => p.quantity).reduce((a, b) => a + b);
        }

        function getTotalPrice() {
            return inventory.map(p => p.price).reduce((a, b) => a + b);
        }

        return {addProduct}
    }(form));

    product.on('input', function () {
        if ($(this).val()) {
            submit.attr('disabled', false);
        } else {
            submit.attr('disabled', true);
        }
    });

    submit.on('click', function () {
        manager.addProduct(product.val(), Number(price.val()), Number(quantity.val()));
        product.val('');
        price.val(1);
        quantity.val(1);
    })
}

