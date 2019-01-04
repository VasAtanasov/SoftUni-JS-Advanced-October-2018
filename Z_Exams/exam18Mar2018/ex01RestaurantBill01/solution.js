function addProduct() {
    let tbody = $('tbody#product-list');
    let productInput = $('input[type="text"]');
    let priceInput = $('input[type="number"]');
    let total = $('table#bill tfoot td');
    let product = productInput.val();
    let price = priceInput.val();

    if (product.trim() && price.trim()) {
        let tr = $('<tr>');
        tr
            .append($('<td>').text(product))
            .append($('<td>').text(price))
            .appendTo(tbody);

        productInput.val('');
        priceInput.val('');
        total.eq(1).text(Number(total.eq(1).text()) + Number(price));
    }
}