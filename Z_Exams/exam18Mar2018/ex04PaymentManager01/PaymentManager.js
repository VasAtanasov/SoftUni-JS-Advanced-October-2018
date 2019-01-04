class PaymentManager {
    constructor(title) {
        this.table = title;
    }

    get table() {
        return this._table;
    }

    set table(title) {
        this._table =
            `<table>
                <caption>${title} Payment Manager</caption>
                <thead>
                    <tr>
                        <th class="name">Name</th>
                        <th class="category">Category</th>
                        <th class="price">Price</th>
                        <th>Actions</th>
                    </tr>
               </thead>
                <tbody class="payments"></tbody>
                <tfoot class="input-data">
                    <tr>
                        <td><input name="name" type="text"></td>
                        <td><input name="category" type="text"></td>
                        <td><input name="price" type="number"></td>
                        <td><button>Add</button></td>
                    </tr>
                </tfoot>
            </table>`;
    }

    render(target) {
        $(`#${target}`).append(this.table);
        this.attachEvents(target);
    }

    attachEvents(target) {
        $(document).on('click', `#${target} tfoot.input-data button`, () => {
            let inputs = $(`#${target} tfoot input`);
            let name = inputs.eq(0).val();
            let category = inputs.eq(1).val();
            let price = inputs.eq(2).val();

            if (name.trim() && category.trim() && price.trim()) {
                let tr = $('<tr>');
                tr.append($('<td>').text(name))
                    .append($('<td>').text(category))
                    .append($('<td>').text(Number(price)));
                let btn = $('<button>')
                    .text('Delete')
                    .on('click', function () {
                        $(this).remove();
                    }.bind(tr));
                tr.append($('<td>').append(btn));
                $(`#${target} tbody.payments`).append(tr);
                inputs.val('');
            }
        });
    }
}