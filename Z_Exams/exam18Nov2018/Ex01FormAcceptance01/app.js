function acceptance() {
    let shippingCompany = $('input[name="shippingCompany"]');
    let productName = $('input[name="productName"]');
    let productQuantity = $('input[name="productQuantity"]');
    let productScrape = $('input[name="productScrape"]');

    let warehouse = $('#warehouse');

    if (!shippingCompany.val().trim()
        || !productName.val().trim()
        || isNaN(productQuantity.val())
        || isNaN(productScrape.val())) {
        return;
    }

    if (+productQuantity.val() <= +productScrape.val()) {
        return;
    }

    let div = $('<div>');
    let p = $('<p>')
        .append(`[${shippingCompany.val()}] ${productName.val()} - ${+productQuantity.val() - +productScrape.val()} pieces`);
    let button = $('<button>');
    button.text('Out of stock');
    button.on('click', function () {
        $(this).remove();
    }.bind(div));

    div.append(p)
        .append(button)
        .appendTo(warehouse);

    shippingCompany.val('');
    productName.val('');
    productQuantity.val('');
    productScrape.val('');
}