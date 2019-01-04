function acceptance() {
    let shippingCompanyField = $('input[name="shippingCompany"]');
    let productNameField = $('input[name="productName"]');
    let productQuantityField = $('input[name="productQuantity"]');
    let productScrapeField = $('input[name="productScrape"]');

    let container = $('div#warehouse');

    let shippingCompanyVal = shippingCompanyField.val().trim();
    let productNameVal = productNameField.val().trim();
    let productQuantityVal = Number(productQuantityField.val().trim());
    let productScrapeVal = Number(productScrapeField.val().trim());

    if (!shippingCompanyVal || !productNameVal || !productQuantityVal || !productScrapeVal) {
        return;
    }

    if (productQuantityVal - productScrapeVal <= 0) {
        return;
    }

    if (productQuantityVal <  productScrapeVal) {
        return;
    }


    let text = `[${shippingCompanyVal}] ${productNameVal} - ${productQuantityVal - productScrapeVal} pieces`;

    let div = $('<div>');
    let button = $('<button>').attr('type', 'button').text('Out of stock');

    div
        .append($('<p>').text(text))
        .append(button);

    button.on('click', function () {
        $(this).remove();
    }.bind(div));

    container.append(div);

    $("#fields input").val('');
}