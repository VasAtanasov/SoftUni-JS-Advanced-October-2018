class PublicTransportTable {
    constructor(town) {
        this.changeHeaderName(town);
        this.searchFunction();
    }

    changeHeaderName(name) {
        $('caption').text(`${name}'s Public Transport`)
    }

    addVehicle(obj) {
        let tableBody = $('.vehicles-info');
        $('<tr>')
            .append($('<td>').text(obj.type))
            .append($('<td>').text(obj.name))
            .append($('<td>')
                .append($('<button>')
                    .on('click', function () {
                        let button = this;
                        let trParent = $(button.parentNode.parentNode);
                        if (button.textContent.includes('More')) {
                            button.textContent = 'Less Info';
                            let moreInfo = $('<tr>')
                                .addClass('more-info')
                                .append(
                                    $('<td>')
                                        .attr('colspan', 3)
                                        .append(
                                            $('<table>')
                                                .append($('<tr>').append($('<td>').text(`Route: ${obj.route}`)))
                                                .append($('<tr>').append($('<td>').text(`Price: ${obj.price}`)))
                                                .append($('<tr>').append($('<td>').text(`Driver: ${obj.driver}`)))
                                        )
                                );
                            moreInfo.insertAfter(trParent)
                        } else {
                            button.textContent = 'More Info';
                            $(trParent).closest('tr').next().remove();
                        }
                    })
                    .text('More Info')))
            .appendTo(tableBody);
    }

    searchFunction() {
        let type = $('input[name=type]');
        let name = $('input[name=name]');

        $('.search-btn').on('click', function () {
            if (type.val() === '' && name.val() === '') {
                return;
            }

            $('.vehicles-info > tr')
                // .children()
                .css('display', 'none')
                .filter((i, value) => {
                    let row = $(value);
                    if (row.children().length === 3) {
                        let typeCol = row.children()[0];
                        let nameCol = row.children()[1];
                        let button = row.children()[2].childNodes[0];
                        if (typeCol.textContent.includes(type.val()) && nameCol.textContent.includes(name.val())) {
                            row.css('display', '');
                            if (button.textContent === 'Less Info') {
                                $(button).click().click();
                            }
                        } else if (button.textContent === 'Less Info') {
                            $(button).click();
                        }

                    }
                });
        });

        $('.clear-btn').on('click', function () {
            $('.vehicles-info').children().css('display', '');
            type.val('');
            name.val('');
        })
    }
}
