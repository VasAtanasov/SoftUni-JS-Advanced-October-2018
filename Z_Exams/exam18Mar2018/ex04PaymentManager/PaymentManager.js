class PaymentManager {
    constructor(title) {
        this.title = title;
        this.table =
            `<table>
                <caption>${this.title} Payment Manager</caption>
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

    set table(form) {
        this._table = form;
    }

    get table() {
        return this._table;
    }

    render(target) {
        target = '#' + target;
        $(target).append(this.table);
        let container = $(target).find('tbody[class="payments"]');
        let addBtn = $(target).find('.input-data').find('button');

        addBtn.on('click', function () {
            let tr = $(this).parent().parent();
            let name = tr.find('input[name="name"]');
            let category = tr.find('input[name="category"]');
            let price = tr.find('input[name="price"]');

            console.log(price);

            let tableRow = `<tr>
                               <td>${name.val()}</td>
                               <td>${category.val()}</td>
                               <td>${price.val()}</td>
                               <td><button>Delete</button></td>
                           </tr>`;
            container.append(tableRow)
        })
    }
}
