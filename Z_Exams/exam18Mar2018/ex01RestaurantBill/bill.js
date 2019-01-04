function addProduct() {
    let container = $('#product-list');
    let tdTotal = $('table#bill > tfoot > tr > td').eq(1);
    let input = $('input');
    let product = input.eq(0);
    let price = input.eq(1);

    if (price.val() && product.val()) {
        let tr =
            `<tr>
                <td>${product.val()}</td>
                <td>${price.val()}</td>
            </tr>`;

        container.append(tr);
        let total = Number(tdTotal.text()) + Number(price.val());
        tdTotal.text(total);
        product.val('');
        price.val('');
    }
}