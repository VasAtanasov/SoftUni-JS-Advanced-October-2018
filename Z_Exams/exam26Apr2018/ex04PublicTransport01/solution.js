class PublicTransportTable {
    constructor(name) {
        this.tableName = name;
        this.tBody = $('tbody.vehicles-info');
        this.addEventListeners();
    }

    get tableName() {
        return this._name;
    }

    set tableName(value) {
        $('table caption').text(`${value}'s Public Transport`);
        this._name = value;
    }

    addEventListeners() {
        let searchBt = $('button.search-btn');
        let clearBtn = $('button.clear-btn');
        let inputType = $('input[name="type"]');
        let inputName = $('input[name="name"]');

        clearBtn.on('click', function () {
            $('tbody.vehicles-info > tr').css('display', '');
            inputType.val('');
            inputName.val('');
        });

        searchBt.on('click', function () {
            let searchType = inputType.val();
            let searchName = inputName.val();

            if (!searchType.trim() && !searchName.trim()) {
                return;
            }

            $('tbody.vehicles-info > tr')
                .not('tr.more-info')
                .css('display', 'none')
                .toArray()
                .forEach((el) => {
                    let row = $(el);
                    let td = row.find('td');
                    let typeTd = td.eq(0).text();
                    let nameTd = td.eq(1).text();

                    if (!typeTd.includes(searchType) || !nameTd.includes(searchName)) {
                        row.find('button:contains("Less Info")').click();
                    } else {
                        row.css('display', '')
                    }
                });
        });
    }

    addVehicle(obj) {
        let {type, name, route, price, driver} = obj;
        let row = $('<tr>')
            .append($('<td>').text(`${type}`))
            .append($('<td>').text(`${name}`));

        let moreInfo = $('<tr>').addClass('more-info')
            .append($('<td>').attr('colspan', 3)
                .append($('<table>')
                    .append($('<tr>').append($('<td>').text(`Route: ${route}`)))
                    .append($('<tr>').append($('<td>').text(`Price: ${price}`)))
                    .append($('<tr>').append($('<td>').text(`Driver: ${driver}`)))
                )
            );

        let button = $('<button>')
            .text('More Info')
            .on('click', function () {
                let that = $(this);
                let btn = that.find('button');
                if (btn.text() === 'More Info') {
                    btn.text('Less Info');
                    moreInfo.insertAfter(that);
                } else {
                    btn.text('More Info');
                    that.next().remove()
                }
            }.bind(row));

        row.append($('<td>').append(button));
        this.tBody.append(row);
    }
}